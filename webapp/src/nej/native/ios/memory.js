﻿/**
 * ------------------------------------------
 * 内存状况实现文件
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * ------------------------------------------
 */
var f = function(){
    nej.ut._$$CustomEvent._$allocate({
        event:'memorywarning'
    });
};
NEJ.define('{lib}native/ios/memory.js',
      ['{lib}util/event/event.js'],f);