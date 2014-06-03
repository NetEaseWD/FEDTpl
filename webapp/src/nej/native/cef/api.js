/**
 * ------------------------------------------
 * 桌面接口实现文件
 * @version  1.0
 * @author   yuqijun(yuqijun@corp.netease.com)
 * ------------------------------------------
 */
var f = function() {
    // variable declaration
    var _   = NEJ.P, 
        _o  = NEJ.O, 
        _e  = _('nej.e'), 
        _u  = _('nej.u'), 
        _v  = _('nej.v'),
        _n  = _('nej.n'),
        _t  = _('nej.ut'),
        _p  = _('nej.cef'),
        _nt = _('nej.cef.ut'),
        _mcache = {};
    /**
     * 配置窗体信息
     * @see    {nej.cef._$configWindowPosition}
     * @see    {nej.cef._$configWindowSizeLimit}
     * @param  {Object} 配置信息，其他参数详情见@see指定接口配置信息
     * @return {Void}
     */
    _p._$configWindow = function(_options){
        _p._$configWindowSizeLimit(_options);
        _p._$configWindowPosition(_options);
        if (!!_options.icon)
            _p._$setWindowIcon(_options.icon);
        if (!!_options.title)
            _p._$setWindowTitle(_options.title);
    };
    /**
     * 配置窗体位置，对齐方式定义如下<br/>
     * 水平对齐方式：
     * [ntb]
     *   名称            |  描述
     *   ----------------------
     *   left   |  左侧对齐
     *   center |  中间对齐
     *   right  |  右侧对齐
     * [/ntb]
     * 
     * 垂直对齐方式：
     * [ntb]
     *   名称              |  描述
     *   ---------------------
     *   top     |  顶部对齐
     *   center  |  中间对齐
     *   bottom  |  底部对齐
     * [/ntb]
     * @api    {nej.cef._$configWindowPosition}
     * @param  {Object} 配置信息
     * @config {String}  name     窗体名称
     * @config {Number}  width    窗体宽度
     * @config {Number}  height   窗体高度
     * @config {Boolean} topmost  窗体是否置顶
     * @config {String}  align    对齐方式，格式定义：水平对齐方式+空格+垂直对齐方式，如 left top
     * @config {Object}  area     区域位置，默认自动计算，格式如：{x:0,y:0,width:100,height:200}
     * @return {Void}
     */
    _p._$configWindowPosition = (function(){
        var _reg0 = /\s+/,
            _fmap = {
                left:function(_mbox,_total){
                    return 0;
                },
                center:function(_mbox,_total){
                    return Math.floor(Math.abs(_total-_mbox)/2);
                },
                right:function(_mbox,_total){
                    return Math.abs(_total);
                }
            };
        _fmap.top = _fmap.left;
        _fmap.bottom = _fmap.right;
        return function(_options){
            _options = _options||_o;
            // set window position
            var _aligns = (_options.align||'').trim().split(_reg0),
                _position = NEJ.EX({width:0,height:0,topmost:!1},_options),
                _wkarea = _options.area||(_n._$exec('os.getSystemInfo','monitor')||_o).workArea||_o;
            _position.x = _wkarea.x+(_fmap[_aligns[0]]||_fmap.center)(_position.width,_wkarea.width);
            _position.y = _wkarea.y+(_fmap[_aligns[1]]||_fmap.center)(_position.height,_wkarea.height);
            if (!_options.name){
                _n._$exec('winhelper.setWindowPosition',_position);
            }else{
                _position.name = _options.name;
                _n._$exec('winhelper.setNativeWindowRect',_position);
            }
        };
    })();
    /**
     * 配置窗体大小限制
     * @api    {nej.cef._$configWindowSizeLimit}
     * @param  {Object} 配置信息
     * @config {Number}  minWidth  窗体最小宽度
     * @config {Number}  maxWidth  窗体最大宽度
     * @config {Number}  minHeight 窗体最小高度
     * @config {Number}  maxHeight 窗体最大高度
     */
    _p._$configWindowSizeLimit = (function(){
        // parse min/max - width/height 
        var _doParseBox = function(_width,_height){
            _width = parseInt(_width);
            _height = parseInt(_height);
            var _result;
            if (!isNaN(_width)){
                _result = _result||{};
                _result.x = _width;
            }
            if (!isNaN(_height)){
                _result = _result||{};
                _result.y = _height;
            }
            return _result;
        };
        return function(_options){
            _options = _options||_o;
            _n._$exec(
                'winhelper.setWindowSizeLimit',
                _doParseBox(_options.minWidth,_options.minHeight),
                _doParseBox(_options.maxWidth,_options.maxHeight)
            );
        };
    })();
    /**
     * 显示窗体,但窗体不会放在最上层
     * @api    {nej.cef._$showWindow}
     * @return {Void}
     */
    _p._$showWindow = function(_name){
        if (!_name){
            _n._$exec('winhelper.showWindow','show');
        }else{
            var _area = (_n._$exec('os.getSystemInfo','monitor')||_o).workArea||_o;
            _n._$exec('winhelper.setNativeWindowShow',_name,!0,_area);
        }
    };
    /**
     * 隐藏窗体
     * @api    {nej.cef._$hideWindow}
     * @return {Void}
     */
    _p._$hideWindow = function(_name){
        if (!_name){
            _n._$exec('winhelper.showWindow','hide');
        }else{
            var _area = (_n._$exec('os.getSystemInfo','monitor')||_o).workArea||_o;
            _n._$exec('winhelper.setNativeWindowShow',_name,!1,_area);
        }
    };
    /**
     * 关闭窗体，销毁窗体
     * @api    {nej.cef._$closeWindow}
     * @return {Void}
     */
    _p._$closeWindow = function(){
        _n._$exec('winhelper.destroyWindow');
    };
    /**
     * 窗口前置
     * @return {Void}
     */
    _p._$topWindow = function(_name){
        _p._$showWindow(_name);
        if (!_name){
            _n._$exec('winhelper.bringWindowToTop');
        }
    };
    /**
     * 设置窗口标题
     * @param  {String} 标题
     * @return {Void}
     */
    _p._$setWindowTitle = function(_title){
        _n._$exec('winhelper.setWindowTitle',_title||'应用名称');
    };
    /**
     * 设置窗口图标
     * @param  {String} 图标路径
     * @return {Void}
     */
    _p._$setWindowIcon = function(_url){
        if (!_url) return;
        _n._$exec('winhelper.setWindowIconFromLocalFile',_url);
    };
    /**
     * 打开新窗体
     * @param  {String} 新窗口地址，参数通过查询形式输入，如?width=1000&height=200
     * @return {Void}
     */
    _p._$open = (function(){
        var _doParseInt = function(_value,_key,_map){
            var _int = parseInt(_value);
            if (!isNaN(_int)){
                _map[_key] = _int;
            }else if(_value=='true'||_value=='false'){
                _map[_key] = _value=='true';
            }
        };
        return function(_url){
            // TODO parse param
            var _param = _u._$query2object(_url.split('?')[1]||'');
            _u._$forIn(_param,_doParseInt);
            _param.visible = _param.visible==null?!0:_param.visible;
            _n._$exec('winhelper.launchWindow',_url,_param,_param);
        };
    })();
    /**
     * 退出应用
     * @return {Void}
     */
    _p._$exit = function(_action){
        _nt._$$Tray._$getInstance()._$hide();
        _n._$exec('app.exit',_action||'');
    };
    /**
     * 打开外部链接
     * @param  {String} 链接地址
     * @return {Void}
     */
    _p._$external = function(_url){
        _n._$exec('os.navigateExternal',_url);
    };
    /**
     * 取菜单项
     * @param  {Object} 菜单配置
     * @return {Object} 菜单项信息
     */
    _p._$getMenuItem = function(_options){
        var _item = NEJ.X({
            text:'菜单项',menu:!0,
            menu_id:0,enable:!0,
            separator:!1,children:null
        },_options);
        // cache menu
        var _menu = _mcache[_item.menu_id];
        if (!!_menu){
            if (!_u._$isArray(_menu))
                _menu = [_menu];
            _menu.push(_item);
        }else{
            _menu = _item;
        }
        _mcache[_item.menu_id] = _menu;
        return _item;
    };
    /**
     * 根据ID取菜单项
     * @return {Void}
     */
    _p._$getMenuItemById = function(_id){
        return _mcache[_id];
    };
    /**
     * 弹出菜单
     * @param  {Array} 菜单项列表
     * @return {Void}
     */
    _p._$popMenu = (function(){
        var _reg0 = /\)$/,
            _reg1 = /\s+/g;
        var _doCheckHotKey = function(_value,_id){
            var _item = _p._$getMenuItemById(_id);
            if (!!_item&&!_reg0.test(_item.text)){
                _item.text += '('+_value.replace(_reg1,'+')+')';
            }
        };
        var _doCompleteHotKey = function(_hotkey){
            _u._$forIn(_hotkey,_doCheckHotKey);
        };
        return function(_conf){
            _doCompleteHotKey(_conf.hotkey);
            _conf = NEJ.EX({
                content:null,
                hotkey:null
            },_conf);
            if (!_conf.menu_type) _conf.menu_type = 'normal';
            _conf.hotkey = JSON.stringify(_conf.hotkey||null);
            _conf.content = JSON.stringify(_conf.content||[]);
            _n._$exec('winhelper.popupMenu',_conf);
        };
    })();
    // init document.onmenuacton
    _('window.winhelper').onmenuclick = function(_id){
        _v._$dispatchEvent(
            document,'menuaction',{
                id:_id
            }
        );
    };
    _t._$$CustomEvent._$allocate({
        element:document,
        event:'menuaction'
    });
};
NEJ.define('{lib}native/cef/api.js', 
          ['{lib}base/util.js'
          ,'{lib}base/element.js'
          ,'{lib}native/command.js'
          ,'{lib}util/event/event.js'
          ,'{lib}native/cef/util/tray.js'],f);