module.exports = {
	// TEST_URL 			: "http://kecheng1.youshiyuwen.cn",
	TEST_URL 				: (()=>{
		try {
			return localStorage.getItem('debug_ip') || "http://kecheng1.youshiyuwen.cn"
		} catch (error) {}
	})(),
	// TEST_URL 			: "http://crm.mx0a.com",
	// TEST_URL 			: "http://jt.mx0a.com",
	ONLINE_URL 			: "https://www.mingxiyuwen.com",
	TENCENT_APPID 		: 1400098973,
	TENCENT_ACCOUNTTYPE : 28218,
	VIDEO_T_QUALITY 	: "480P_3",
	VIDEO_S_QUALITY 	: "120P_3",
    MAIN_WINDOW_SIZE	: { width: 1300, height: 790 },
	ROOM_ID				: 111111,
	LARGE_MODE 			: 480,
	DANCE_MODE 			: 200,
	SMALL_MODE 			: 88,
	WEB_IM_GROUP_TIP    : {
		"JOIN" 			: 1, //加入群组
		"QUIT"   		: 2, //退出群组
		"KICK"  		: 3, //被踢出群组
		"SET_ADMIN"  	: 4, //被设置为管理员
		"CANCEL_ADMIN" 	: 5, //被取消管理员
		"MODIFY_GROUP_INFO" : 6, //修改群资料
		"MODIFY_MEMBER_INFO": 7//修改群成员信息
	},
	CELL_COUNT 			: 4,
	LOGIN_E_NET			: 201,
	LOGOUT_E_KICKED		: 103,
	LOGOUT_E_NET		: 102,
	LOGOUT_SUCCESS		: 101,
	GENERAL_E_NOT_LOGIN : 1003,
	JS_READY 	: "jsready",
	INIT_ROOM	: "initroom",
	MEMBER_ADD  : "member_add",
	MEMBER_LEAVE: "member_leave",
	CLEARLINES  : "clearlines",
	NEXT_PAGE   : "nextpage",
	SYNC   		: "sync",
	VIDEO_PLAY  : "videoplay",
	VIDEO_STOP  : "videostop",
	OPEN_RACE   : "#openrace",
	CLOSE_RACE  : "#closerace",
	OPEN_MIC 	: "#openmic",
	CLOSE_MIC   : "#closemic",
	COURSE_PAUSE  : "#coursepause",
	COURSE_RESUME : "#courseresume",
	PUT_DANCE     : "#putdance",
	BACK_DANCE    : "#backdance",
	SCENE_MOVE    : "scenemove",
	START_COURSE  : "*startcourse",
	STOP_COURSE   : "*stopcourse",
	WARN          : "warn",
	WARN_RELIEVE  : "warn_relieve",
	ENABLE_MAGIC  : "enablemagic",
	DISABLE_MAGIC : "disablemagic",
	MUTE_ALL 	  : "#muteall",
	UNMUTE_ALL 	  : "#unmuteall",
	SHOW_RANKS    : "*showranks",
	HIDE_RANKS    : "*hideranks",
	OPEN_MEDDLE   : "open_meddle",
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
	COCOS		  : 1,
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
	DOMAIN_URL: 'https://mingxicn.oss-cn-beijing.aliyuncs.com/master.json',
	DOMAIN_URL_TEST: 'http://kechengassets.mx0a.com/steven.json',
	/**
	 * bundles: 	[app.json & app.zip]
	 * frame: 		[liveroom.json & liveroom.zip / homework.json & homework.zip]
	 * query: 		[http request]
	 * course: 		[like zoo.json & zoo.zip / zoo-preview.json & zoo-preview.zip]
	 * software: 	[electron pacakge ***.exe & ***.dmg]
	 */
	DOMAIN_LIST_DEFAULT: {
		bundles:[
			{url: "https://bundlesyun.mx0a.com"},
			{url: "http://bundlesossyun.mw019.com"}
		],
		frame: [
			{url: "https://bundlesyun.mx0a.com"},
			{url: "http://bundlesossyun.mw019.com"}
		],
		query:[
			{url: "https://www.mingxiyuwen.com"}
		],
		lessons:[
			{url: "https://lessonsyun.mx0a.com"},
			{url: "http://lessonsossyun.mw019.com"}
		],
		software: [
			{url: "http://file.mw019.com/software"
		}]
	},
	DOMAIN_LIST_DEFAULT_TEST: {
		bundles:[
			{url: "https://bundlesyuntest.mx0a.com"}
		],
		frame: [
			{url: "https://bundlesyuntest.mx0a.com"}
		],
		query:[
			{url: "http://kecheng1.youshiyuwen.cn"}
		],
		lessons:[
			{url: "https://lessonsyuntest.mx0a.com"}
		],
		software: [
			{url: "http://file.mw019.com/software"
		}]
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