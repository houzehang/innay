const Const 	= require("../const")
const Q 		= require("q")
const Eventer   = require('./eventer')
const Storage 	= require('./Storage')

class Room extends Eventer {
	constructor(inst) {
		super()
		this.inst = inst
		this.$streams_list 	= []
		this.$streams_hash 	= {}
	}

	init() {
		this.$client = new AgoraRtcEngine()
		this.$client.initialize(Const.AGORA_APPID);
		this.$client.setChannelProfile(1);
		this.$client.setClientRole(1);
		this.$client.setAudioProfile(0, 1);
		this.$client.setParameters('{"che.audio.live_for_comm":true}');
		this.$client.setParameters('{"che.audio.enable.agc":false}');
		this.$client.setParameters('{"che.video.moreFecSchemeEnable":true}');
		this.$client.setParameters('{"che.video.lowBitRateStreamParameter":{"width":192,"height":192,"frameRate":15,"bitRate":100}}');
		this.$client.setVideoQualityParameters(true)
		this.$client.enableDualStreamMode(true);
		if (!this.inst.isSubMaster(this.inst.props.account.id)) {
			this.$client.enableVideo();
			this.$client.enableLocalVideo(true);
			let isMaster = this.inst.props.room.teacher_id == 
						   this.inst.props.account.id
			if (isMaster) {
				this.$client.setVideoProfile(45);
			} else {
				this.$client.setVideoProfile(2);
			}
		} else {
			this.$client.muteLocalAudioStream(true)
			this.$client.enableLocalVideo(false);
		}
		this.__resume_devices()
		this.__init()
		console.log("Agora Version",this.$client.getVersion())
	}

	__is_device_in(devices, id) {
		if (!id) return false
		let found
		for(let i=0,len=devices.length;i<len;i++) {
			let item = devices[i]
			if (item.deviceid == id) {
				found = true
				break
			}
		}
		return found
	}

	__resume_devices() {
		let videoDevice 	= Storage.get("VIDEO_DEVICE"),
			audioDevice 	= Storage.get("AUDIO_DEVICE"),
			playbackDevice  = Storage.get("PLAYBACK_DEVICE")
		
		let video_devices 	= this.$client.getVideoDevices()
		let audio_devices 	= this.$client.getAudioRecordingDevices()
		let playback_devices= this.$client.getAudioPlaybackDevices()
		if (!this.__is_device_in(video_devices,videoDevice)) {
			videoDevice = null
		}
		if (!this.__is_device_in(audio_devices,audioDevice)) {
			audioDevice = null
		}
		if (!this.__is_device_in(playback_devices,playbackDevice)) {
			playbackDevice = null
		}
		console.log("videoDevice, audioDevice, playbackDevice",videoDevice, audioDevice, playbackDevice)
		if (videoDevice) {
			this.$client.setVideoDevice(videoDevice);
		}
		if (audioDevice) {
			this.$client.setAudioRecordingDevice(audioDevice);
		}
		if (playbackDevice) {
			this.$client.setAudioPlaybackDevice(playbackDevice);
		}
	}

	get rtc() {
		return this.$client
	}

	__init() {
		return Q.Promise((resolve, reject)=>{
			if (this.$inited) {
				resolve()
			} else {
				let video_devices = this.$client.getVideoDevices()
				this.inst.setVideoDevices(video_devices)
				let audio_devices = this.$client.getAudioRecordingDevices()
				this.inst.setAudioDevices(audio_devices)
				let speaker_devices = this.$client.getAudioPlaybackDevices()
				this.inst.setSpeakerDevices(speaker_devices)
				this.$inited = true
				resolve()
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
			let result = this.$client.muteRemoteAudioStream(id, muted)
			console.log("set remote audio",id,muted,result)
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
		if (id == this.inst.props.account.id) {
			this.$client.setupLocalVideo(dom)
		} else {
			this.$client.subscribe(id, dom)
			let setStreamResult
			if (largeMode) {
				setStreamResult = this.$client.setRemoteVideoStreamType(id, 0)
			} else {
				setStreamResult = this.$client.setRemoteVideoStreamType(id, 1)
			}
			console.log("setStreamResult",setStreamResult)
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
			console.log("keep silent", status)
		}
	}

	unsubscribe(id) {
		this.$client.rtcengine.unsubscribe(id)
	}

	__stream(id) {
		return { 
			getId: ()=>id, 
			play: (dom)=>{
				dom = $(`#${dom}`)[0]
				if (dom) {
					$(dom).empty()
					if (id == this.inst.props.account.id) {
						this.$client.setupLocalVideo(dom)
					} else {
						this.$client.subscribe(id, dom)
					}
				}
			},
			stop: ()=>{
				this.unsubscribe(id)
				$(`#student_${id}`).empty()
			}
		}
	}

	__start_stream() {
		this.$client.on('error', (err)=>{
			console.log("Got error msg:", err.reason);
			if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
				this.$client.renewToken(this.inst.props.channel_token, ()=>{
					console.log("Renew channel key successfully");
				}, function(err){
					console.log("Renew channel key failed: ", err);
				});
			}
		});
	
		this.$client.on('addstream', (id)=>{
			console.log("add stream", id);
			let isMaster = this.inst.props.room.teacher_id == id
			if (isMaster) {
				this.$client.setRemoteVideoStreamType(id, 0);
			} else {
				this.$client.setRemoteVideoStreamType(id, 1);
			}
			this.trigger("NEW_STREAM", this.__stream(id))
		});
	
		this.$client.on('removestream', (id)=>{
			console.log("remove stream", id);
			this.trigger("REMOVE_STREAM", this.__stream(id))
		});

		this.$client.on('userjoined', (id)=>{
			// var stream = this.$client.streams.get(id);
			console.log("userjoined",id)
			this.trigger("ADD_ROOM", id)
		});
		this.trigger("NEW_STREAM", this.__stream(this.inst.props.account.id))
		this.__stream_audio(this.inst.props.account.id)
	}

	start() {
		this.__init().then(()=>{
			this.$client.joinChannel(this.inst.props.room.channel_token, this.inst.props.room.channel_id, '', this.inst.props.account.id);
			this.$client.on('joinedchannel', () => {
				this.__start_stream()
			});
		},()=>{}).done()
	}

	leave() {
		try {
			this.$client.videoSourceLeave();
			this.$client.videoSourceRelease();
			this.$client.leaveChannel();
			this.$client.on('leavechannel', (...args) => {
				this.$client.removeAllListeners();
				this.trigger("LEAVE_ROOM", this.$client)
			});
		} catch (err) {
			this.trigger("LEAVE_ROOM", this.$client)
			console.log("client leave failed ", err);
		}
	}
}

module.exports = Room