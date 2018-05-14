let AgoraRTC 	= require("./AgoraRTCSDK-2.2.0")
const context 	= require("./context")
const Const 	= require("../const")
const Q 		= require("q")
class Room {
	constructor() {
		this.__init()
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
			let id = stream.getId()
			let dom = $(`students_${id}`)
			if (dom.length === 0) {
				$('#students').append(`<div id="students_${id}" class="cell"></div>`)
			}
			stream.play('students_' + stream.getId());
		});
	
		this.$client.on('stream-removed', (evt)=>{
			var stream = evt.stream;
			stream.stop();
			$('#students_' + stream.getId()).remove();
			console.log("Remote stream is removed " + stream.getId());
		});
	
		this.$client.on('peer-leave', (evt)=>{
			var stream = evt.stream;
			if (stream) {
				stream.stop();
				$('#students_' + stream.getId()).remove();
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
			stream.play('master-video');

			this.$client.publish(stream, function (err) {
				alert("无法连接您的视频流，请确定您的网络是否良好。")
			});

			this.$client.on('stream-published', function (evt) {
			});
        }, function (err) {
			alert("无法访问您的摄像头或麦克风")
        });
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
}

module.exports = new Room