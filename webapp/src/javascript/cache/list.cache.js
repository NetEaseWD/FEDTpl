/**
 * 地区基础选择控件
 * author yuqijun(yuqijun@corp.netease.com)
 */
define(['{lib}util/cache/cache.list.js'],
function(){
	var _ = NEJ.P,
	   _ut = _('nej.ut'),
	   _u = _('nej.u'),
	   _v = _('nej.v'),
	   _j = _('nej.j'),
	   _e = _('nej.e'),
	   _pm = _('xx.m'),
	   _pd = _('xx.d'),
	   _proList,
	   _supList;
	 		 
  _pd._$$DeviceList = NEJ.C();
    _proList = _pd._$$DeviceList._$extend(_ut._$$ListCache);
    _supList = _proDeviceList._$supro;
    
    // 注册事件
    _proDeviceList.__init = function(_options){
    	this.__supInit(_options);
    };
    _proDeviceList.__reset = function(_options){
    	this.__supReset(_options);
      this._$batEvent({
               doloadlist:this.__doLoadList._$bind(this)
          });
      };
    // 实现取列表的方法
    // 根据offset+limit取列表
    // data表示取列表可能需要的额外数据信息
    // 数据返回的回调是onload
    _proDeviceList.__doLoadList = function(_options){
        var _key    = _options.key;
        var _data   = _options.data;
        var _offset = _options.offset;
        var _limit  = _options.limit;
        var _rkey   = _options.rkey;
        var _onload = _options.onload;
        //this.__onload(_options,_onload,{retCode:200});
       // return;
//        _j._$request(APP_CONF.domain+'/decoration/productManage/ajaxQuery.do',{
//               type:'json',
//               method:'POST',
//               data:_u._$object2query(_data),
//               timeout:10000,
//               onload:this.__onload._$bind(this,_options,_onload),
//               onerror:function(_error){}
//           }
//       );
        
     };
     _proDeviceList.__onload = function(_options,_onload,_result){
     	if(_result.code==200){
     		_onload({total:_result.values.count,list:_result.values.result})
     	}
     };
});