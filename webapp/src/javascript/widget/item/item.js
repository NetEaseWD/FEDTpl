/*
 * --------------------------------------------
 * 项目列表项基类实现文件
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * --------------------------------------------
 */
define(['{lib}ui/item/list.js'],
function(){
    // variable
    var _   = NEJ.P,
        _i  = _('nej.ui'),
        _pi = _('nz.i'),
        _pro,_sup;
    /**
     * 项目模块基类对象
     * 
     * @class   {nm.i._$$Item}
     * @extends {nej.ui._$$ListItem}
     * 
     * 
     * 
     */
    _pi._$$Item = NEJ.C();
    _pro = _pi._$$Item._$extend(_i._$$ListItem);
    /**
     * 控件节点初始化
     * @return {Void}
     */
    _pro.__initNode = function(){
        this.__supInitNode();
        // this.__body
        // TODO other thing
    };
    
});