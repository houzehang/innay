const fs 		= require("fs");
const path 		= require("path");
const UtilLib 	= require("./UtilLib.js");
const Q 		= require("q");
const bl 		= require("bl");
const request   = require("request");

console.log("UtilLib",UtilLib)

/**
 * 定义上传的文件类型常量
 */
const UploadMediaType = {
  IMAGE : 1,
  VIDEO : 2,
  AUDIO : 3,
  ATTACHMENT : 4,
}

/**
 * 微信文件上传核心类
 */
class MediaMessage {
	/**
	 * 参数说明
	 * @param {*} filepath 需要上传的本地文件路径
	 * @param {*} formdata 上传时需要发送的额外数据
	 * @param {*} toUserId 需要发送的对象
	 */
	constructor(filepath, formdata, toUserId) {
		this.fileStream = fs.createReadStream(filepath)
		const pathInfo 	= path.parse(filepath)
		this.fileName 	= pathInfo.name
		this.fileExt 	= pathInfo.ext.replace(/^\./, '')
		this.toUserId   = toUserId;
		this.formdata   = formdata;
	}

	readyStream() {
		return Q.Promise((resolve, reject)=>{
			resolve(this.fileStream);
		});
	}

	__read_upload_data() {
		return Q.Promise((resolve, reject)=>{
			resolve(this.formdata);
		});
	}

	__trim (str) {
		return str.replace(/(^\s*)|(\s*$)/g, '');
	}

	/**
	 * 核心上传函数，上传类型会根据文件路径的扩展名自动适配mediatype
	 * 此功能函数实现了图片，视频，文件的上传
	 * 通过模拟微信refer来绕过微信的权限认证
	 */
	upload() {
		return Q.Promise((resolve, reject)=>{
			let filename 	= this.fileName;
			let ext 	 	= this.fileExt;

			let contentType = UtilLib.mime(ext)
			let mediatype;
			switch (ext) {
				case 'bmp':
				case 'jpeg':
				case 'jpg':
				case 'png':
					mediatype = 'pic'
					break
				case 'mp4':
					mediatype = 'video'
					break
				default:
					mediatype = 'doc'
			}
			this.readyStream().then((readStream)=>{
				readStream.pipe(bl((err, buffer) => {
					if (!err){ 
						let md5 = UtilLib.md5(buffer)
						this.__read_upload_data().then((data)=>{
							let baseRequest 	= data.baseRequest
							let passTicket 		= data.passTicket
							let uploadMediaUrl 	= data.uploadMediaUrl
							let hostname 		= data.hostname
							let cookie 			= [];
							data.cookie.split(";").forEach((item)=>{
								let parsed = item.split("=");
								cookie.push({name: this.__trim(parsed[0]), value: this.__trim(parsed[1])});
							});
							let userId 			= data.userId;
							let first 			= cookie.find(c => c.name === 'webwx_data_ticket')
							let webwxDataTicket = first && first.value
							let size 			= buffer.length;
							let uploadMediaRequest = {
								BaseRequest: baseRequest.BaseRequest,
								FileMd5: md5,
								FromUserName: userId,
								ToUserName: this.toUserId,
								UploadType: 2,
								ClientMediaId: +new Date,
								MediaType: UploadMediaType.ATTACHMENT,
								StartPos: 0,
								DataLen: size,
								TotalLen: size,
							}
							let formData = {
								id: 'WU_FILE_1',
								name: filename,
								type: contentType,
								lastModifiedDate: Date().toString(),
								size: size,
								mediatype,
								uploadmediarequest: JSON.stringify(uploadMediaRequest),
								webwx_data_ticket: webwxDataTicket,
								pass_ticket: passTicket || '',
								filename: {
									value: buffer,
									options: {
										filename,
										contentType,
										size,
									},
								},
							}
							console.log("formdata...",formData)
							request.post({
								url: uploadMediaUrl + '?f=json',
								headers: {
									Referer: `https://${hostname}`,
									'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
								},
								formData,
							}, function (err, res, body) {
								if (!err) {
									let obj = JSON.parse(body);
									resolve(obj.MediaId);
								} else {
									console.log("upload failed..",err)
									reject(err);
								}
							})
						}).done();
					}
				}))
				
			}).done();
		});
	}
}

module.exports = MediaMessage;