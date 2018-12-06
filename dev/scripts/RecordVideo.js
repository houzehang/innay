const Eventer = require("./eventer")

class RecordVideo extends Eventer {
	constructor(id, data) {
		super()
		this.$id		= id
		this.$waiting 	= false
		this.$playing 	= false
		this.$seek_to   = null
		this.$offset    = 0
		if (data) {
			this.$data  = data
		}
	}

	seekTo(time) {
		this.$seek_to = time - this.$offset
		if (this.$video) {
			this.$video[0].playbackRate = 2
		}
	}

	set data(data) {
		this.$data = data[this.$id]
		// 设置data之后，判断队列中是否有等待播放列表
		if (this.$waiting) {
			this.__render()
		}
	}

	get data() {
		return this.$data
	}

	get currentTime() {
		if (this.$video) {
			return this.$video[0].currentTime
		} else {
			return 0
		}
	}

	get realtime() {
		return this.currentTime + this.$offset
	}

	get playing() {
		return this.$playing
	}

	getId() {
		return this.$id
	}

	play(dom, offset) {
		if (offset) {
			this.$offset = offset
		}
		if (this.$playing) return
		if (dom) {
			this.$holder = "#"+dom
		}
		if (!this.$data) {
			this.$waiting = true
		} else {
			this.__render()
		}
	}

	pause() {
		if (this.$playing) {
			this.$playing = false
			this.$video[0].pause()
		}
	}

	__timeupdate() {
		let time = this.currentTime
		if (this.$seek_to) {
			if (time >= this.$seek_to) {
				if (this.$video) {
					this.$video[0].playbackRate = 1
				}
				this.$seek_to = null
			}
		}
		this.trigger("timeupdate")
	}

	__render() {
		if (!this.$dom) {
			// 预加载视频资源
			let video = $("<video/>")
			video.attr("src", this.$data.hf_url).attr("id",`video_${this.$id}`)
			video.on("canplay", ()=>{
				if (this.$video) return
				this.trigger("canplay")
				video.off()
				video.on("timeupdate", ()=>{
					this.__timeupdate()
				})
				this.$dom = $(`<div id="record_${this.$id}"></div>`).append(video)
				$(this.$holder).append(this.$dom)
				video[0].play()
				this.$video 	= video
				this.$playing 	= true
			})
			video.on("error", ()=>{
				console.log("on load video error",video)
				this.trigger("error")
			})
			video[0].load()
		} else {
			this.$video[0].play()
		}
		this.$waiting = false
	}
}

class RecordVideoManager extends Eventer {
	constructor() {
		super()
		this.$busy 		= false
		this.$queue 	= []
		this.$list 		= {}
		this.$data 		= {}
		this.$starttime = 0
	}

	__timeupdate(id, time) {
		// 如果是主列表，则判断列表中的视频是否需要同步
		this.trigger("timeupdate",{id,time,data:this.$data[id]})
		if (this.__is_master(id)) {
			for(let key in this.$list) {
				let video = this.$list[key]
				if (!video.playing || this.__is_master(key)) {
					continue
				}
				if (video.realtime > time) {
					video.pause()
				} else if (video.realtime < time-1) {
					video.seekTo(time)
				} else {
					video.play()
				}
			}
		}
	}

	__is_master(id) {
		return this.$master == id
	}

	set data(data) {
		this.$master = data.room.master_teacher
		data.users.forEach((user, index)=>{
			let base = 'https://muwen.mw009.com'
			let urls = [
				base,
				'http://muwen1.mw009.com',
				'http://muwen2.mw009.com',
				'http://muwen3.mw009.com',
				'http://muwen4.mw009.com',
				'http://muwen5.mw009.com',
				'http://muwen6.mw009.com'
			]
			user.hf_url = user.hf_url.replace(base, urls[index%urls.length])
			this.$data[user.id] = user
		})
		for(let key in this.$list) {
			let video = this.$list[key]
			if (!video.data && data[key]) {
				video.data = data[key]
			}
		}
	}

	play(stream, dom) {
		if (stream) {
			if (this.$starttime) {
				this.$queue.push([stream,dom,(new Date().getTime() - this.$starttime) / 1000])
			} else {
				this.$queue.push([stream,dom,0])
			}
		}
		if (this.$busy) {
			return
		}
		let param = this.$queue.shift()
		if (param) {
			this.$busy = true
			let stream = param[0]
			stream.on('canplay', ()=>{
				stream.off('canplay')
				stream.off('error')
				this.$busy = false
				this.play()
				if (this.__is_master(stream.getId())) {
					// 如果是老师则记录开始播放时刻
					this.$starttime = new Date().getTime()
				}
			})
			stream.on('error', ()=>{
				stream.off('canplay')
				stream.off('error')
				this.$queue.push(param)
				this.$busy = false
				this.play()
			})
			stream.play(param[1],param[2])
		}
	}

	create(id) {
		if (this.$list[id]) {
			return this.$list[id]
		} else {
			let video = new RecordVideo(id, this.$data[id])
			this.$list[id] = video
			video.on("timeupdate", ()=>{
				this.__timeupdate(id, video.currentTime)
			})
			return video
		}
	}
}

module.exports = RecordVideoManager