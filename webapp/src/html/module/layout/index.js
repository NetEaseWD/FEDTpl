/*
 * ------------------------------------------
 * WebIM框架实现文件
 * @version  1.0
 * @author   huxueliang(huxueliang@corp.netease.com)
 * ------------------------------------------
 */
define(['{pro}module/module.js'],
function(){
    // variable declaration
    var _  = NEJ.P,
        _e = _('nej.e'),
        _v = _('nej.v'),
        _p = _('yx.m'),
        _proModuleLayoutIndex;
    if (!!_p._$$ModuleLayoutIndex) return;
    /**
     * WebIM框架模块对象
     * @class   {yx.m._$$ModuleLayoutIndex}
     * @extends {yx.m._$$Module}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$ModuleLayoutIndex = NEJ.C();
      _proModuleLayoutIndex = _p._$$ModuleLayoutIndex._$extend(_p._$$Module);
    /**
     * 解析模块所在容器节点
     * @param  {Object} 配置信息
     * @return {Node}   模块所在容器节点
     */
    _proModuleLayoutIndex.__doParseParent = function(_options){
        return _e._$get('yixin-box');
    };  
    /**
     * 构建模块
     * @return {Void}
     */
    _proModuleLayoutIndex.__doBuild = function(){
        this.__body = _e._$html2node(
            _e._$getTextTemplate('module-layout')
        );
        // 0 - panel box
        // 1 - parent box
        var _list = _e._$getByClassName(this.__body,'j-flag');
        //切换背景
       	nej.u._$randNumber(0,2)?_e._$addClassName(_list[0],'g-mn-2'):'';
        document.mbody = _list[0];
        this.__export = {
            panel:this.__body
        };
        _v._$addEvent(document,'keydown',function(event){
            if(event.keyCode==8){
                var _element = _v._$getElement(event);
                if(!(_element.tagName.toUpperCase()=='TEXTAREA'||
                    (_element.tagName.toUpperCase()=='INPUT'&&(_element.type.toUpperCase()=='TEXT'||
                                                               _element.type.toUpperCase()=='PASSWORD'||
                                                               _element.type.toUpperCase()=='FILE'||
                                                               _element.type.toUpperCase()=='EMAIL')
                    )
                )){
                    _v._$stop(event);
                }
            }
        })
    };
    // notify dispatcher
    _e._$regist('layout',_p._$$ModuleLayoutIndex);
});
