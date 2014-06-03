/*
 * --------------------------------------------
 * 项目模块基类实现文件
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * --------------------------------------------
 */
define(['{lib}util/list/module.pager.js'
       ,'{lib}util/list/module.waterfall.js'
       ,'{lib}util/dispatcher/module.base.js'],
function(){
    // variable
    var _   = NEJ.P,
        _e  = _('nej.e'),
        _t  = _('nej.ut'),
        _p  = _('yx.m'),
        _proModule, _supModule;
    /**
     * 项目模块基类对象
     * @class   {yx.m._$$Module}
     * @extends {nej.ut._$$AbstractModule}
     */
    _p._$$Module = NEJ.C();
    _proModule = _p._$$Module._$extend(_t._$$AbstractModule);
    _supModule = _p._$$Module._$supro;
    /**
     * 解析模块所在容器节点
     * @param  {Object} 配置信息
     * @return {Node}   模块所在容器节点
     */
    _proModule.__doParseParent = function(_options){
        var _parent = _supModule.__doParseParent.apply(this,arguments);
        if (!_parent){
            _parent = document.mbody;
        }
        return _parent;
    };
});