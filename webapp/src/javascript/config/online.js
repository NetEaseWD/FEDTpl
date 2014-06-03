/**
 * 全局变量
 * author yuqijun(yuqijun@corp.netease.com)
 */
window.APP_CONF = {
    socketURL:'https://web.yixin.im:9092',
		//socketURL:'https://115.236.114.85:9092',
    imageUpload:'https://nos-hz.yixin.im/nos/webupload',
    nos:'http://nos-yx.netease.com/',
    message_coming:'/res/audio/new_msg_come.mp3',
    dicon:'/res/images/default/icon.jpg',
    picon:'/res/images/fileportrait.png',
    feedback:'https://fb.yixin.im/from_client',
    serialId:1,
    qr_refresh_interval:5,  // 二维码刷新频率，单位 分钟
    qr_refresh_count:12,    // 二维码失效刷新次数
    login_check_interval:5  // 登录检测频率，单位 秒
};
WEB_SOCKET_SWF_LOCATION ='/res/socket/WebSocketMain.swf';
