module.exports = {
	SENTRY_DSN				: 'http://b60c18f7cca84085a184bc77582cabaf@121.36.22.201:9000/2',
    MAIN_WINDOW_SIZE	: { width: 1070, height: 590 },
	UPDATE : {
		AVAILABLE	: "update available",
		LASTEST  	: "the lastest version",
		CHECKING 	: "checking for update",
		ERROR		: "update error",
		DOWNLOADING	: "update downloading",
		DOWNLOADED	: "update downloaded",
		DOWNLOADING_UI	: "downloading ui",
		DOWNLOADED_UI	: "downloaded ui",
	},
	ILLEGAL_AUDIOS: [
		'cyberlink webcam splitter',
		'manycam virtual webcam',
		'BBlivePreview',
		'CamTwist',
		'17GuaGua Cam',
		'PixelMaster Video HDR',
		'PG splitter',
		'Built-in iSight',
		'6room'
	],
	DOMAIN_URL: 'https://mingxicn-test.oss-cn-beijing.aliyuncs.com/domain-yaduobao.json',
	/**
	 * bundles: 	[app-yaduobao.json & app-yaduobao.zip]
	 * frame: 		[liveroom.json & liveroom.zip / homework.json & homework.zip]
	 * query: 		[http request]
	 * lessons      [like zoo.json & zoo.zip / zoo-preview.json & zoo-preview.zip]
	 * software: 	[electron pacakge ***.exe & ***.dmg]
	 */
	DOMAIN_LIST_DEFAULT: {
		"frame": [
		  "https://bundlesyuntest.mx0a.com",
		  "https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"
		],
		"bundles": [
		  "https://bundlesyuntest.mx0a.com",
		  "https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"
		]
	},
	
	EBTN_STYLE_CONFIG :{
		kNormal: 	 ['ok', 'cancel'],
		kDeviceTest: ['check-again','check-jump'],
		kChangePwd:  ['changepwd','none'],
		kClassExit:  ['leave-class','end-class']
	},
	LINE_CONFIRM_TITLE:{
		lineTitle:   ['title-text']
	}
};