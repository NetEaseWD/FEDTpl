/*
 * --------------------------------------------
 * 项目窗体基类实现文件
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * --------------------------------------------
 */
define(['{lib}ui/layer/window.wrapper.js'],
function(){
    // variable
    var _   = NEJ.P,
        _i  = _('nej.ui'),
        _pl = _('yx.l'),
        _pro,_sup;
    /**
     * 项目窗体基类
     * 
     * @class   {nm.l._$$LWindow}
     * @extends {nej.ui._$$WindowWrapper}
     * 
     * @param   {}
     */
    _pl._$$LWindow = NEJ.C();
    _pro = _pl._$$LWindow._$extend(_i._$$WindowWrapper);
    _sup = _pl._$$LWindow._$supro;
    /**
     * 控件重置
     * @param {Object} _options
     */
    _pro.__reset = function(_options){
        _options.parent = _options.parent||document.body;
        _options.clazz = _options.clazz || 'm-window';
        _options.draggable = !0;
        if(_options.mask =='none'){
            delete _options.mask
        }else{
            _options.mask = 'm-mask'; 
        }    
        this.__supReset(_options);
        this.__layer._$setTitle(_options.title,true);
    };
    /**
     * 显示窗体
     */
    _pro._$show = function(){
        _sup._$show.apply(this,arguments);
        this.__body.focus();
        return this;
    };
});