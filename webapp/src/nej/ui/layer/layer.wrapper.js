﻿/*
 * ------------------------------------------
 * 弹出层封装基类实现文件
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * ------------------------------------------
 */
var f = function(){
    var _  = NEJ.P,
        _f = NEJ.F,
        _u = _('nej.u'),
        _e = _('nej.e'),
        _p = _('nej.ui'),
        _proLayerWrapper;
    if (!!_p._$$LayerWrapper) return;
    /**
     * 弹出层封装基类对象，主要实现层里面内容部分的业务逻辑<br />
     * 脚本举例
     * [code]
     *   // 第一步：继承此基类生成新类
     *   var _seed_css = _e._$pushCSSText('.#<uispace>{position:absolute;background:#fff;}');
     *   _p._$$MyLayer = NEJ.C();
     *   _proMyLayer = _p._$$MyLayer._$extend(_p._$$Layer);
     *   
     *   _proMyLayer.__initXGui = function(){
     *      this.__seed_css = _seed_css;
     *   };
     *   
     *   _proMyLayer.__initNode = function(){
     *       this.__supInitNode();
     *       // this.__ncnt作为放置卡片内容的容器
     *       this.__ncnt = this.__body;
     *   };
     *   // 第二步:实例化一个弹出层
     *   // 一般在layerwrapper控件中使用
     *   // 因为lopt的有默认配置在layerwrapper中
     *   _proMyCardWrapper.__getLayerInstance = function(){
     *       return _p._$$MyLayer._$allocate(this.__lopt);
     *   };
     *   
     *   // 下面是对layerwrapper的描述
     *   
     *   // 首先：继承layerwrapper基类生成的一个新类
     *   _p._$$MyCardWrapper = NEJ.C();
     *   _proMyCardWrapper = _p._$$MyCardWrapper._$extend(_p._$$LayerWrapper);
     *   
     *   // 这里返回内容层的实例
     *   _proMyCardWrapper.__getLayerInstance = function(){
     *       return _p._$$MyLayer._$allocate(this.__lopt);
     *   };
     *   
     *   // 这里配置lopt参数，生成内容层用
     *   _proMyCardWrapper.__doInitLayerOptions = function(){
     *   _p._$$MyCardWrapper._$supro
     *           .__doInitLayerOptions.apply(this,arguments);
     *       this.__lopt.top = null;
     *       this.__lopt.left = null;
     *   };
     *   
     *   // 最后项目中实例化wrapper的实例
     *    var _ly = _p._$$MyLayerCard._$allocate({
     *       parent:document.body,
     *       // 隐藏浮层时，是否销毁
     *       destroyable:false,
     *       oncontentready:function(_html){
     *         // 设置浮层内容的回调
     *       }
     *   });
     * [/code]
     * @class   {nej.ui._$$LayerWrapper} 弹出层封装基类对象
     * @extends {nej.ui._$$Abstract}
     * @param   {Object} 可选配置参数，已处理参数列表如下
     * 
     */
    _p._$$LayerWrapper = NEJ.C();
      _proLayerWrapper = _p._$$LayerWrapper._$extend(_p._$$Abstract);
    /**
     * 控件重置
     * @protected
     * @method {__reset}
     * @param  {Object} 可选配置参数
     * @return {Void}
     */
    _proLayerWrapper.__reset = function(_options){
        this.__doInitLayerOptions();
        this.__supReset(this
            .__doFilterOptions(_options));
        this.__lopt.onbeforerecycle = 
            this._$recycle._$bind(this);
        this.__layer = this.__getLayerInstance();
    };
    /**
     * 控件销毁
     * @protected
     * @method {__destroy}
     * @return {Void}
     */
    _proLayerWrapper.__destroy = function(){
        this._$dispatchEvent('onbeforerecycle');
        this.__supDestroy();
        delete this.__lopt;
        _e._$removeByEC(this.__body);
        var _layer = this.__layer;
        if (!!_layer){
            delete this.__layer;
            _layer._$recycle();
        }
    };
    /**
     * 构建弹层控件实例，子类实现具体业务逻辑
     * @protected
     * @method {__getLayerInstance}
     * @return {nej.ui._$$Layer} 弹层控件实例
     */
    _proLayerWrapper.__getLayerInstance = _f;
    /**
     * 将配置参数拆分为两部分，一部分用于弹层控件，一部分用于本控件
     * @protected
     * @method {__doFilterOptions}
     * @param  {Object} 可选配置参数
     * @return {Object} 过滤后的配置参数
     * @return {Void}
     */
    _proLayerWrapper.__doFilterOptions = function(_options){
        var _result = {};
        _u._$forIn(_options,
            function(_item,_key){
                this.__lopt.hasOwnProperty(_key)
                ? this.__lopt[_key] = _item
                : _result[_key] = _item;
            },this);
        return _result;
    };
    /**
     * 初始化弹层控件可选配置参数
     * @protected
     * @method {__doInitLayerOptions}
     * @return {Void}
     */
    _proLayerWrapper.__doInitLayerOptions = function(){
        this.__lopt = {
            clazz:''
           ,parent:null
           ,content:this.__body
           ,destroyable:!1
           ,oncontentready:null
           ,nohack:!1
        };
    };
    /**
     * 显示弹层<br />
     * 脚本举例
     * [code]
     *   // 显示浮层
     *   _ly._$show();
     * [/code]
     * @method {_$show}
     * @return {nej.ui._$$LayerWrapper}
     */
    _proLayerWrapper._$show = function(){
        if (!!this.__layer) 
            this.__layer._$show();
        this._$dispatchEvent('onaftershow');
        return this;
    };
    /**
     * 隐藏弹层<br />
     * 脚本举例
     * [code]
     *   // 隐藏弹层
     *   _ly._$hide();
     * [/code]
     * @method {_$hide}
     * @return {nej.ui._$$LayerWrapper}
     */
    _proLayerWrapper._$hide = function(){
        if (!!this.__layer) 
            this.__layer._$hide();
        return this;
    };
};
NEJ.define('{lib}ui/layer/layer.wrapper.js',
      ['{lib}ui/layer/layer.js'],f);