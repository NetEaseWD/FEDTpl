/*
 * --------------------------------------------
 * 项目卡片基类实现文件
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * --------------------------------------------
 */
define(['{lib}ui/layer/card.wrapper.js'],
function(){
    // variable
    var _   = NEJ.P,
        _i  = _('nej.ui'),
        _pl = _('yx.l'),
        _pro,_sup;
    /**
     * 项目卡片基类
     * 
     * @class   {nm.l._$$LCard}
     * @extends {yx.l._$$CardWrapper}
     * 
     * 
     */
    _pl._$$LCard = NEJ.C();
    _pro = _pl._$$LCard._$extend(_i._$$CardWrapper);
    /**
     * 控件重置
     * @param {Object} _options
     */
    _pro.__reset = function(_options){
        if(!_options.parent){
            _options.parent = document.body;
        }
        this.__supReset(_options);
    };
});