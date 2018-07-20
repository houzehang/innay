const Const 	= require("../const")
const Q 		= require("q")
const Eventer   = require('./eventer')
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
		this.$client.setParameters('{"che.video.lowBitRateStreamParameter":{"width":192,"height":108,"frameRate":15,"bitRate":100}}');
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
			this.$client.enableLocalVideo(false);
		}
		this.__init()
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
		if (this.inst.props.room.teacher_id == id) {
			return false
		}
		if (!this.inst.props.students) {
			return true
		}
		for(let i=0,len=this.inst.props.students.length;i<len;i++) {
			let item = this.inst.props.students[i]
			if (item.id == id) {
				return !item.unmuted
			}
		}
		return true
	}

	stream_audio(id) {
		let muted  = this.__isMuted(id)
		if (id == this.inst.props.account.id) {
			this.$client.muteLocalAudioStream(muted)
		} else {
			// let isMaster = this.inst.props.room.teacher_id == 
			// this.inst.props.account.id
			// if (!isMaster) return
			// this.$client.muteRemoteAudioStream(id, muted)
			// console.log("set remote audio",id,muted)
		}
		if (muted) {
			console.log("disable audio",id)
		} else {
			console.log("enable audio",id)
		}
	}

	dance(id, dom, largeMode) {
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

	__stream(id) {
		return { 
			getId: ()=>id, 
			play: (dom)=>{
				dom = $(`#${dom}`)[0]
				if (id == this.inst.props.account.id) {
					this.$client.setupLocalVideo(dom)
				} else {
					this.$client.subscribe(id, dom)
				}
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
		});
		this.trigger("NEW_STREAM", this.__stream(this.inst.props.account.id))
		this.stream_audio(this.inst.props.account.id)
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
			console.log("client leave failed ", err);
		}
	}
}

module.exports = Room