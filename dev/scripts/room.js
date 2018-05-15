let AgoraRTC 	= require("./AgoraRTCSDK-2.2.0")
const context 	= require("./context")
const Const 	= require("../const")
const Q 		= require("q")
const Eventer   = require('./eventer')
class Room extends Eventer {
	constructor() {
		super()
		this.__init()
		this.$streams_list 	= []
		this.$streams_hash 	= {}
	}

	__add_stream(stream) {
		let id = stream.getId()
		let index = this.$streams_hash[id]
		if (index == undefined) {
			this.$streams_list.push(stream)
			this.$streams_hash[id] = this.$streams_list.length-1
		} else {
			this.$streams_list[index] = stream
		}
		this.stream_audio(id)
	}

	__remove_stream(stream) {
		let id = stream.getId()
		let index = this.$streams_hash[id]
		this.$streams_list.splice(index,1)
		this.$streams_hash = {}
		this.$streams_list.forEach((item,index)=>{
			this.$streams_hash[item.getId()] = index
		})
	}

	__get_stream(id) {
		let index = this.$streams_hash[id]
		return this.$streams_list[index]
	}

	__init() {
		return Q.Promise((resolve, reject)=>{
			if (this.$inited) {
				resolve()
			} else {
				AgoraRTC.getDevices(function (devices) {
					let audio = null, video = null
					devices.forEach((item)=>{
						if (item.label == "Built-in Microphone" && item.kind == "audioinput") {
							audio = item.deviceId
						} else if (item.label == "FaceTime HD Camera" && item.kind == "videoinput") {
							video = item.deviceId
						}
					})
					context.video_device_id = video
					context.audio_device_id = audio
				})
				var client = AgoraRTC.createClient({mode: 'interop'});
				client.init(Const.AGORA_APPID, ()=>{
					this.$inited = true
					resolve()
				}, (error)=>{
					this.$inited = false
					console.log("error",error)
					reject()
				});
				this.$client = client
			}
		})
	}

	stream_audio(id) {
		let stream = this.__get_stream(id)
		if (!stream) return
		let isMaster = context.course.teacher_id == id
		let unmuted  = !context.dmg.isMuted(id)
		if (!unmuted && !isMaster) {
			stream.disableAudio()
		} else {
			stream.enableAudio()
		}
	}

	__start_stream() {
		this.$client.on('error', (err)=>{
			console.log("Got error msg:", err.reason);
			if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
				this.$client.renewChannelKey(channelKey, ()=>{
					console.log("Renew channel key successfully");
				}, function(err){
					console.log("Renew channel key failed: ", err);
				});
			}
		});
	
		this.$client.on('stream-added', (evt)=>{
			var stream = evt.stream;
			console.log("New stream added: " + stream.getId());
			console.log("Subscribe ", stream);
			console.log(this.$client.remoteVideoStreamTypes)
			// this.$client.setRemoteVideoStreamType(stream, 1);
			this.$client.subscribe(stream, (err)=>{
				console.log("Subscribe stream failed", err);
			});
		});
	
		this.$client.on('stream-subscribed', (evt)=>{
			var stream = evt.stream;
			console.log("Subscribe remote stream successfully: " + stream.getId());
			this.trigger("NEW_STREAM", stream)
			this.__add_stream(stream)
		});
	
		this.$client.on('stream-removed', (evt)=>{
			var stream = evt.stream;
			stream.stop();
			this.trigger("REMOVE_STREAM", stream)
			this.__remove_stream(stream)
			console.log("Remote stream is removed " + stream.getId());
		});
	
		this.$client.on('peer-leave', (evt)=>{
			var stream = evt.stream;
			if (stream) {
				stream.stop();
				this.trigger("REMOVE_STREAM", stream)
				this.__remove_stream(stream)
				console.log(evt.uid + " leaved from this channel");
			}
		});
        let stream = AgoraRTC.createStream({
			streamID	: context.dmg.userinfo.id, 
			audio 		: true, 
			cameraId	: context.video_device_id, 
			microphoneId: context.audio_device_id, 
			video		: true, screen: false
		});
		stream.setVideoProfile(Const.VIDEO_QUALITY);

        stream.on("accessAllowed", function() {
        });
        stream.on("accessDenied", function() {
			alert("无法访问您的摄像头或麦克风")
        });

        stream.init(()=>{
			this.stream_audio(stream.getId())
			this.trigger("NEW_STREAM", stream)
			this.$client.publish(stream, function (err) {
				alert("无法连接您的视频流，请确定您的网络是否良好。")
			});

			this.$client.on('stream-published', function (evt) {
			});
        }, function (err) {
			alert("无法访问您的摄像头或麦克风")
		});
		this.$local_stream = stream
	}

	start() {
		this.__init().then(()=>{
			this.$client.join(context.room.channel_token, context.course.channel_id, context.dmg.userinfo.id, (uid)=>{
				this.__start_stream()
			}, (error)=>{
				console.log("join error",error)
			});
		},()=>{}).done()
	}

	leave() {
		this.$local_stream.stop()
		this.$local_stream.close()
		this.$client.unpublish(this.$local_stream, (err)=>{
			console.log("unpublish stream failed ", err)
		})
		this.$client.leave(()=>{
			this.trigger("LEAVE_ROOM", this.$client)
			console.log("client leaves channel");
		}, (err)=>{
			console.log("client leave failed ", err);
		});
		this.$streams_list.forEach((stream)=>{
			this.$client.unpublish(stream, (err)=>{
				console.log("unpublish stream failed ", err)
			})
			stream.stop()
			stream.close()
		})
	}
}

module.exports = new Room