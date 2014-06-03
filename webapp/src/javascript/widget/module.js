/**
 * 基础模块
 * author yuqijun(yuqijun@corp.netease.com)
 */
define(['{lib}util/event.js'
       , '{lib}util/template/tpl.js'
       ],
    function() {
        var _ = NEJ.P,
            f = NEJ.F,
            _ut = _('nej.ut'),
            _u = _('nej.u'),
            _e = _('nej.e'),
            _pn = _('nem.m'),
            _pd = _('nem.d'),
            _px = _('nem.x'),
            _pro;

        _pn._$$Module = NEJ.C();
        _pro = _pn._$$Module._$extend(_ut._$$Event);

        _pro.__init = function(_options) {
            this.__supInit(_options);
            if ( !! _options.tpl)
                _e._$parseTemplate(_options.tpl);
            _e._$parseTemplate('wgt-tpl');
            
        };
        
    });