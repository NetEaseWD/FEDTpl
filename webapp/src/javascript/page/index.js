/**
 * xx平台首页
 * author xxxx(xxxx@corp.netease.com)
 */

define(['{pro}widget/module.js'],
    function() {
        var _ = NEJ.P,
            _ut = _('nej.ut'),
            _v = _('nej.v'),
            _e = _('nej.e'),
            _j = _('nej.j'),
            _pm = _('xxx.m'),
            _pro;
 

        _pn._$$IndexModule = NEJ.C();
        _pro = _pn._$$IndexModule._$extend(_pn._$$Module);
        
        _pro.__init = function(_options) {
            this.__supInit(_options);
			this.__getNodes();
			this.__addEvent();
        };
        
        _pro.__getNodes = function(){
            
        };
        
        _pro.__addEvent = function(){
           
        };

        _pn._$$IndexModule._$allocate();
    });