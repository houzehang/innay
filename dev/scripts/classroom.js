require("../less/classroom.less")
const Conf = require("../const")
const { ipcRenderer } = $require('electron');
const AgoraRtcEngine = require('../agora/AgoraSdk')
class VideoCell {
	constructor(name, teacher) {
		this.$name 		= name
		this.$idle		= true
		this.$teacher	= teacher
		this.$id 		= -1
	}

	get id() {
		return this.$id
	}

	get isTeacher() {
		return this.$teacher
	}

	get idle() {
		return this.$idle
	}

	get size() {
		return this.$size
	}

	init() {
		let scene 		= cc.director.getScene()
		let wrapper 	= scene.getChildByName("root").getChildByName(this.$name)
		let videoFrame 	= wrapper.getComponent(cc.Sprite)
		this.$el 		= videoFrame
		this.$size 		= wrapper.getContentSize()
		this.$default 	= videoFrame.spriteFrame
	}

	bind(id, handle) {
		this.$texture 			= new cc.Texture2D
		this.$el.spriteFrame 	= new cc.SpriteFrame(this.$texture)
		this.$texture.initWithElement(handle())
		this.$texture.handleLoadedTexture()
		this.$handle 	= handle
		this.$idle 		= false
		this.$id 		= id
	}

	unbind() {
		this.$idle 				= true
		this.$teacher 			= null
		this.$handle 			= null
		this.$id 				= null
		this.$el.spriteFrame 	= this.$default
	}

	update() {
		if (this.$idle){
			return
		}
		try {
			let canvas = this.$handle()
			if (!canvas) {
				return
			}
			this.$texture.update({
				image: canvas
			})
		} catch(e) {
		}
	}
}

class VideoCellManager {
	constructor() {
		const cells = [
			'teacher', 'child_1','child_2','child_3',
			'child_4','child_5','child_6','child_7'
		]
		this.$cells = cells.map((name,index)=>new VideoCell(name,index==0))
	}

	start() {
		this.$cells.forEach(cell=>cell.init())
		let scene = cc.director.getScene()
		this.$tick = ()=>{
			this.$cells.forEach(cell=>cell.update())
		}
		cc.director.getScheduler().schedule(this.$tick, scene, 0.066)
	}

	stop() {
		let scene = cc.director.getScene()
		cc.director.getScheduler().unschedule(this.$tick, scene)
	}

	getNewIfnotExist(id, teacher) {
		let found, idle
		for (let i=0,len=this.$cells.length;i<len;i++) {
			let cell = this.$cells[i]
			if (cell.id == id) {
				found = cell
			}
			if (cell.idle && !!cell.isTeacher == !!teacher && !idle) {
				console.log("idle",cell,i)
				idle = cell
			}
		}
		return found || idle
	}

	getCellById(id) {
		for (let i=0,len=this.$cells.length;i<len;i++) {
			let cell = this.$cells[i]
			if (cell.id == id) {
				return cell
			}
		}
	}
}

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
	client.setLocalVideoMirrorMode(1);
	client.enableVideo();
	client.enableLocalVideo(true);
	client.setVideoProfile(45);

	let videoCellMng = new VideoCellManager
	client.on('joinedchannel', () => {
		let cell = videoCellMng.getNewIfnotExist(0, true)
		if (cell) {
			client.setupLocalVideo(cell.size)
			cell.bind(0, function() {
				let render = client.getRender(0)
				if (render) {
					return render.canvas
				}
			})
		}
	});

	client.on('error', (err)=>{
		console.log("Got error msg:", err.reason);
		if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
			client.renewToken(data.channel_token, ()=>{
				console.log("Renew channel key successfully");
			}, function(err){
				console.log("Renew channel key failed: ", err);
			});
		}
	});

	client.on('addstream', (id)=>{
		console.log("add stream", id);
		let isMaster = data.teacher_id == id
		if (isMaster) {
			client.setRemoteVideoStreamType(id, 0);
		} else {
			client.setRemoteVideoStreamType(id, 1);
		}
		let cell = videoCellMng.getNewIfnotExist(id)
		client.subscribe(id, cell.size)
		cell.bind(id, function(){
			let render = client.getRender(id)
			if (render) {
				return client.getRender(id).canvas
			}
		})
	});

	client.on('removestream', (id)=>{
		let cell = videoCellMng.getCellById(id)
		console.log("remove stream", id, cell);
		if (cell) {
			cell.unbind()
		}
	});

	client.on('userjoined', (id)=>{
		console.log("userjoined",id)
	});

	function after_scene_loaded() {
		videoCellMng.start()
		client.joinChannel(
			data.channel_token, 
			data.channel_id, '', 
			data.user_id
		);
	}
	if (window.SCENE_LOADED) {
		after_scene_loaded()
	} else {
		window.ON_SCENE_LOADED = after_scene_loaded
	}
})
