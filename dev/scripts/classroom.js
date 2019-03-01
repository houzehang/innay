require("../less/classroom.less")
const Conf = require("../const")
const { ipcRenderer } = $require('electron');
const AgoraRtcEngine = require('../agora/AgoraSdk')
ipcRenderer.on('roominfo', (_, data)=>{
	console.log("roominfo",data)
	let client = new AgoraRtcEngine()
	client.initialize(Conf.AGORA_APPID);
	client.setChannelProfile(1);
	client.setClientRole(1);
	client.setAudioProfile(0, 1);
	client.setParameters('{"che.audio.live_for_comm":true}');
	client.setParameters('{"che.audio.enable.agc":false}');
	client.setParameters('{"che.video.moreFecSchemeEnable":true}');
	client.setParameters('{"che.video.lowBitRateStreamParameter":{"width":120,"height":120,"frameRate":15,"bitRate":100}}')
	client.enableDualStreamMode(true);
	client.setLocalVideoMirrorMode(2);
	client.enableVideo();
	client.enableLocalVideo(true);
	client.setVideoProfile(45);

	client.joinChannel(data.channel_token, data.channel_id, '', data.user_id);
	client.on('joinedchannel', () => {
		let dom = document.createElement("div")
		dom.style.width = dom.style.height = "200px"
		dom.style.position = "absolute"
		dom.style.rigth = dom.style.bottom = 0
		document.body.appendChild(dom)
		client.setupLocalVideo(dom)

		let timer = setInterval(()=>{
			let children = dom.getElementsByTagName("div")
			if (children.length > 0) {
				clearInterval(timer)
				let canvas = children[0].getElementsByTagName("canvas")
				console.log(canvas)
				if (canvas.length > 0) {
					function after_scene_loaded() {
						let scene = cc.director.getScene()
						let video_sprite = scene.getChildByName("root").getChildByName("sprite").getComponent(cc.Sprite)
						let texture = new cc.Texture2D
						video_sprite.spriteFrame = new cc.SpriteFrame(texture)
						texture.initWithElement(canvas[0])
						texture.handleLoadedTexture()
						setInterval(()=>{
							texture.update({
								image: canvas[0]
							})
						}, 66)
					}
					if (window.SCENE_LOADED) {
						after_scene_loaded()
					} else {
						window.ON_SCENE_LOADED = after_scene_loaded
					}
				}
			}
		},1000)
	});


	// if(!AgoraRTC.checkSystemRequirements()) {
	// 	alert("Your browser does not support WebRTC!");
	// }
	// let client = AgoraRTC.createClient({mode: 'live', codec: "h264"});
	// client.init(Conf.AGORA_APPID, function () {
	// 	console.log("AgoraRTC client initialized",data.channel_token, data.channel_id, data.user_id);
	// 	client.join(data.channel_token, data.channel_id, data.user_id, function(uid) {
	// 		console.log("User " + uid + " join channel successfully");
	// 		let localStream = AgoraRTC.createStream({streamID: uid, audio: true, video: true, screen: false});
	// 		localStream.setVideoProfile('480p_3');

	// 		// The user has granted access to the camera and mic.
	// 		localStream.on("accessAllowed", function() {
	// 			console.log("accessAllowed");
	// 		});

	// 		// The user has denied access to the camera and mic.
	// 		localStream.on("accessDenied", function() {
	// 			console.log("accessDenied");
	// 		});

	// 		localStream.init(function() {

	// 			function after_scene_loaded() {
	// 				console.log("after_scene_loaded")
	// 				let scene = cc.director.getScene()
	// 				let video_sprite = scene.getChildByName("root").getChildByName("sprite").getComponent(cc.Sprite)
	// 				let video = document.createElement("video")
	// 				video.style.width = "480px"
	// 				video.style.height = "480px"
	// 				video.style.objectFit = "cover"
	// 				video.style.position = "absolute"
	// 				video.style.left = "0"
	// 				video.style.top = "0"
	// 				video.setAttribute("autoplay", "autoplay")
	// 				video.setAttribute("muted", "muted")
	// 				video.setAttribute("playsinline", "playsinline")

	// 				let canvas = document.createElement("canvas")
	// 				canvas.width = canvas.height = 480
	// 				var ctx = canvas.getContext("2d");  

	// 				let texture 	= new cc.Texture2D
	// 				video.width 	= 480
	// 				video.height 	= 480
	// 				video.volume 	= 0
	// 				video.oncanplay = function () {
	// 					video.play()
	// 				}
	// 				video.onplay 	= function () {
	// 					video_sprite.spriteFrame = new cc.SpriteFrame(texture)
	// 					texture.initWithElement(video)
	// 					texture.handleLoadedTexture()
	// 					setInterval(()=>{
	// 						ctx.clearRect(0,0,480,480);
	// 						ctx.beginPath();
	// 						//设置弧线的颜色为蓝色
	// 						ctx.strokeStyle = ["blue","green","red","yellow","purple"][Math.floor(Math.random()*5)];
	// 						var circle = {
	// 							x : (Math.random()*480 >> 0),    //圆心的x轴坐标值
	// 							y : (Math.random()*480 >> 0),    //圆心的y轴坐标值
	// 							r : (Math.random()*240 >> 0)      //圆的半径
	// 						};
	// 						//沿着坐标点(100,100)为圆心、半径为50px的圆的顺时针方向绘制弧线
	// 						ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI / 2, false);    
	// 						//按照指定的路径绘制弧线
	// 						ctx.stroke();
	// 						texture.update({
	// 							image: canvas
	// 						})
	// 					}, 66)
	// 				}
	// 				video.onabort 	= function () {
	// 				}
	// 				video.srcObject = localStream.stream
	// 			}

	// 			if (window.SCENE_LOADED) {
	// 				after_scene_loaded()
	// 			} else {
	// 				window.ON_SCENE_LOADED = after_scene_loaded
	// 			}

	// 			// var canvas = document.getElementById('classroom');
	// 			// var gl = canvas.getContext('webgl');

	// 			// video.addEventListener('play', function() {
	// 			// 	var $this = this; //cache
	// 			// 	(function loop() {
	// 			// 		gl.clearColor(0.0, 0.0, 0.0, 1.0);
	// 			// 		// Clear the color buffer with specified clear color
	// 			// 		gl.clear(gl.COLOR_BUFFER_BIT);
	// 			// 		var texCoordLocation = gl.getAttribLocation(program, "a_texCoord");
 
	// 			// 		// provide texture coordinates for the rectangle.
	// 			// 		var texCoordBuffer = gl.createBuffer();
	// 			// 		gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
	// 			// 		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
	// 			// 			0.0,  0.0,
	// 			// 			1.0,  0.0,
	// 			// 			0.0,  1.0,
	// 			// 			0.0,  1.0,
	// 			// 			1.0,  0.0,
	// 			// 			1.0,  1.0]), gl.STATIC_DRAW);
	// 			// 		gl.enableVertexAttribArray(texCoordLocation);
	// 			// 		gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
					   
	// 			// 		// Create a texture.
	// 			// 		var texture = gl.createTexture();
	// 			// 		gl.bindTexture(gl.TEXTURE_2D, texture);
					   
	// 			// 		// Set the parameters so we can render any size image.
	// 			// 		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	// 			// 		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	// 			// 		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	// 			// 		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
					   
	// 			// 		// Upload the image into the texture.
	// 			// 		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, $this);
	// 			// 		setTimeout(loop, 1000 / 30)
	// 			// 	})();
	// 			// }, 0);

	// 			// localStream.play("classroom")

	// 			client.publish(localStream, function (err) {
	// 				console.log("Publish local stream error: " + err);
	// 			});

	// 			client.on('stream-published', function (evt) {
	// 				console.log("Publish local stream successfully");
	// 			});
	// 		}, function (err) {
	// 			console.log("getUserMedia failed", err);
	// 		});
	// 	}, function(err) {
	// 		console.log("Join channel failed", err);
	// 	});
	// }, function (err) {
	// 	console.log("AgoraRTC client init failed", err);
	// });
})
