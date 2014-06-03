/*
 * 行为定义
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 */
define(['{patch}audio.js',
        '{lib}util/template/jst.js'],
function(){
    var _   = NEJ.P,
        _e  = _('nej.e'),
        _v  = _('nej.v'),
        _pd = _('yx.d'),
        _pl = _('yx.l'),
        _w = _('window.yxHelper'),
        _pc = _('window.APP_CONF'),
        _px = _('yx.x');
    var _actions = {
        chat:'/?/chat/',
        preview:function(_event){
        		if(_pc.embed){
        			_w.previewYixinIMG(_event.extra);
        		} else{
        			_px._$lightbox(_event.extra);
        		}
        }
    };
    /**
     * 做UMI过滤
     * @return {Void}
     */
    _px._$filterUMI = function(_options){
        // TODO
    };
    /**
     * 取行为配置
     * @reutrn {Object} 行为配置
     */
    _px._$getActionConf = function(){
        return _actions;
    };
    /**
     * 取规则配置
     * @reutrn {Object} 规则配置
     */
    _px._$getRulesConf = function(){
        return {
            rewrite:{
                '404':'/index/'
            },
            title:{
                '/index/':'xxx平台'
            },
            alias:{
                'layout':'/index/',
                'chat':'/?/chat/',
            },
            action:_px._$getActionConf()
        };
    };
    /**
     * 取模块配置
     * @reutrn {Object} 模块配置
     */
    _px._$getModulesConf = function(){
        return {
            '/':'module/widget/index.html',
            '/?/panel/':'module/panel/index.html',
            '/?/chat/':'module/chat/index.html',
            '/index/':{
                module:'module/layout/index.html',
                composite:{
                    onshow:{
                      panel:'/?/panel/'
                    }
                }
            }
        };
    };
    // add jst extend api
    _e._$registJSTExt({
        decodePortrait:_px._$decodePortrait,
            convertUrl:yx.x._$convertUrl
    });
});
