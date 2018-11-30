const Const 	= require("../const")
const Q 		= require("q")
const Eventer   = require('./eventer')
const Storage 	= require('./Storage')

class Room extends Eventer {
	constructor(inst) {
		super()
		this.inst 			= inst
		this.$streams_hash 	= {}
	}

	init() {
		console.log("require",AgoraRTC.checkSystemRequirements())
		this.$client = AgoraRTC.createClient({mode: 'interop'});
		this.__resume_devices().then(()=>{
			this.__init()
		}).done()
		console.log("Agora Version",AgoraRTC.VERSION)
	}

	__resume_devices() {
		return Q.Promise((resolve, _)=>{
			let videoDevice = Storage.get("VIDEO_DEVICE"),
			audioDevice 	= Storage.get("AUDIO_DEVICE"),
			playbackDevice  = Storage.get("PLAYBACK_DEVICE")
			AgoraRTC.getDevices((devices)=>{
				devices.forEach((device)=>{
					let id = device.deviceId;
					if (id == videoDevice) {
						this.$video_device = id
					} else if (id == audioDevice) {
						this.$audio_device = id
					} else if (id == playbackDevice) {
						this.$playback_device = id
					}
				})
				resolve()
			})
		})
	}

	get rtc() {
		return this.$streams_hash[this.inst.props.account.id]
	}

	__init() {
		return Q.Promise((resolve, reject)=>{
			if (this.$inited) {
				resolve()
			} else {
				this.$client.init(Const.AGORA_APPID, ()=>{
					resolve()
				})
			}
		})
	}

	__isMuted(id) {
		// 如果是老师，则不能静音老师
		// 如果是学生而且不是自己，则先判断此人是否处于上台状态，如果是上台状态则开启监听声音，
		// 如果不是上台状态则判断历史静音状态来处理
		if (this.inst.props.room.teacher_id == id) {
			return false
		}
		if (!this.inst.props.students) {
			return true
		}
		for(let i=0,len=this.inst.props.students.length;i<len;i++) {
			let item = this.inst.props.students[i]
			if (item.id == id) {
				if (item.dancing) {
					return false
				}
				return !item.unmuted
			}
		}
		return true
	}

	__stream_audio(id) {
		let muted  = this.__isMuted(id)
		// 如果是自己，则不处理
		if (id != this.inst.props.account.id) {
			let stream = this.$streams_hash[id]
			if (stream) {
				if (muted) {
					stream.disableAudio()
				} else {
					stream.enableAudio()
				}
			}
			console.log("set remote audio",id,muted)
		}
	}

	refreshMute() {
		// 如果是老师，则不处理
		if (!this.inst.isMaster()) {
			console.log("refresh muted",this.inst.props.students)
			this.inst.props.students.forEach((student)=>{
				this.__stream_audio(student.id)
			})
		}
	}

	cameraTo(id, dom, largeMode) {
		let stream = this.$streams_hash[id]
		if (stream) {
			stream.play(dom)
			if (id != this.inst.props.account.id) {
				let setStreamResult
				if (largeMode) {
					setStreamResult = this.$client.setRemoteVideoStreamType(stream, 0)
				} else {
					setStreamResult = this.$client.setRemoteVideoStreamType(stream, 1)
				}
				console.log("setStreamResult",setStreamResult)
			}
		}
	}

	/**
	 * 老师设置静音
	 * @param {bool} status 
	 */
	keepSilent(status) {
		// 只有老师可以静音
		if (this.inst.isMaster()) {
			this.$client.muteAllRemoteAudioStreams(status)
			for(let id in this.$streams_hash) {
				let stream = this.$streams_hash[id]
				if (stream) {
					stream.disableAudio()
				}
			}
			console.log("keep silent", status)
		}
	}

	unsubscribe(id) {
		let stream = this.$streams_hash[id]
		if (stream) {
			this.$client.unsubscribe(stream,function(err) {
				console.log("unsubscribe error",err);
			})
		}
	}

	__start_stream() {
		this.$client.on('error', function(err) {
			console.log("Got error msg:", err.reason);
			if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
				client.renewChannelKey(this.inst.props.channel_token, function(){
					console.log("Renew channel key successfully");
				}, function(err){
					console.log("Renew channel key failed: ", err);
				});
			}
		});
	
		this.$client.on('stream-added', function (evt) {
			var stream = evt.stream, id = stream.getId();
			console.log("New stream added: " + stream.getId());
			console.log("Subscribe ", stream);
			this.$client.subscribe(stream, function (err) {
				console.log("Subscribe stream failed", err);
			});
			console.log("userjoined",id)
			this.trigger("ADD_ROOM", id)
		});
	
		this.$client.on('stream-subscribed', function (evt) {
			var stream = evt.stream, id = stream.getId();
			let isMaster = this.inst.props.room.teacher_id == id
			if (isMaster) {
				this.$client.setRemoteVideoStreamType(stream, 0);
			} else {
				this.$client.setRemoteVideoStreamType(stream, 1);
			}
			this.$streams_hash[id] = stream
			this.trigger("NEW_STREAM", stream)
		});
	
		this.$client.on('stream-removed', function (evt) {
			var stream = evt.stream, id = stream.getId();
			stream.stop();
			console.log("Remote stream is removed " + stream.getId());
			this.trigger("REMOVE_STREAM", stream)
			delete this.$streams_hash[id]
		});
	
		this.$client.on('peer-leave', function (evt) {
			var stream = evt.stream;
			if (stream) {
				stream.stop();
				console.log(evt.uid + " leaved from this channel");
				this.trigger("REMOVE_STREAM", stream)
				delete this.$streams_hash[evt.uid]
			}
		});
		let local_stream, uid = this.inst.props.account.id
		if (!this.inst.isSubMaster(uid)) {
			local_stream = AgoraRTC.createStream({
				streamID	: uid, 
				audio		: true, 
				cameraId	: this.$video_device, 
				microphoneId: this.$audio_device, 
				video		: true, 
				screen		: false
			});
			let isMaster = this.inst.props.room.teacher_id == uid
			if (isMaster) {
				local_stream.setVideoProfile(Const.VIDEO_T_QUALITY);
			} else {
				local_stream.setVideoProfile(Const.VIDEO_S_QUALITY);
			}
			local_stream.on("accessAllowed", function() {
				console.log("accessAllowed");
			});
	
			local_stream.on("accessDenied", function() {
				console.log("accessDenied");
			});
	
			local_stream.init(()=>{
				this.$client.publish(local_stream, (err)=>{
					console.log("Publish local stream error: " + err);
				});
		
				this.$client.on('stream-published', (evt)=>{
					console.log("Publish local stream successfully");
					this.$streams_hash[uid] = local_stream
					this.trigger("NEW_STREAM", local_stream)
					this.__stream_audio(uid)
				});
			}, function (err) {
				console.log("getUserMedia failed", err);
			});
		}
	}

	start() {
		this.__init().then(()=>{
			this.$client.join(
				this.inst.props.room.channel_token, 
				this.inst.props.room.channel_id, 
				this.inst.props.account.id, ()=>{
				this.__start_stream()
			})
		},()=>{}).done()
	}

	leave() {
		try {
			this.$client.leave(()=>{
				this.trigger("LEAVE_ROOM", this.$client)
			}, ()=>{
				this.trigger("LEAVE_ROOM", this.$client)
				console.log("Leave channel failed");
			});
		} catch (err) {
			this.trigger("LEAVE_ROOM", this.$client)
			console.log("client leave failed ", err);
		}
	}
}

module.exports = Room