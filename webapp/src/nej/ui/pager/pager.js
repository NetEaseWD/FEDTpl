/*
 * ------------------------------------------
 * 分页器控件封装实现文件
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * ------------------------------------------
 */
var f = function(){
    // variable declaration
    var _  = NEJ.P,
        _o = NEJ.O,
        _r = NEJ.R,
        _e = _('nej.e'),
        _u = _('nej.u'),
        _t = _('nej.ut'),
        _p = _('nej.ui'),
        _pro,_sup,
        _seed_html;
    if (!!_p._$$Pager) return;
    /**
     * 分页器控件封装<br />
     * 页面结构举例
     * [code type="html"]
     *   <div id="pagerCnt">page</div>
     *   <div id="pagerCnt2">page</div>
     * [/code]
     * 脚本举例
     * [code]
     *   var p = NEJ.P('nej.ui'),
     *       v = NEJ.P('nej.v'),
     *       t = NEJ.P('nej.ut'),
     *       e = NEJ.P('nej.e');
     *   // 默认第一页
     *   var _setIndex = 1;
     *   // 页面更改的回调方法
     *   var _onchangeHandle = function(_obj){
     *       var _index = _obj.index;
     *   };
     *   // 实例化一个pager对象，总共10页
     *   var _pager = p._$$Pager._$allocate({
     *       parent:'pagerCnt',
     *       onchange: _onchangeHandle,
     *       total: 10,
     *       index:_setIndex
     *   });
     *   // 从第2页翻到第10页
     *   for(var i = 2 ; i < 11 ; i++){
     *       _setIndex = i;
     *       _pager._$setIndex(_setIndex);
     *   }
     *   // 绑定一个翻页器,视觉上翻页器会联动，但最后触发一次翻页器的回调,避免重复触发
     *   _pager._$bind('pagerCnt2');
     * [/code]
     * @class   {nej.ui._$$Pager} 分页器控件封装
     * @uses    {nej.ut._$$Page}
     * @extends {nej.ui._$$Abstract}
     * @param   {Object}  可选配置参数，已处理参数列表如下
     * @config  {Number}  index 当前页码
     * @config  {Number}  total 总页码数
     * @config  {Boolean} noend 无尾页显示
     * 
     * [hr]
     * 
     * @event  {onchange} 页码切换事件，输入{last:3,index:1,total:12}
     * @param  {Object} 页码状态对象
     * @config {Number} last  上一次的页码
     * @config {Number} index 当前要切换的页面
     * @config {Number} total  总页面数
     * 
     */
    _p._$$Pager = NEJ.C();
    _pro = _p._$$Pager._$extend(_p._$$AbstractPager);
    _sup = _p._$$Pager._$supro;
    /**
     * 控件重置
     * @protected
     * @method {__reset}
     * @param  {Object} 可选配置参数
     * @return {Void}
     */
    _pro.__reset = function(_options){
        _options.number = 
            parseInt(_options.number)||9;
        this.__supReset(_options);
        this.__page = _t._$$Page._$allocate(this.__popt);
    };
    /**
     * 页面变化触发事件
     * @protected
     * @method {__onChange}
     * @param  {Object} 事件对象
     * @return {Void}
     */
    _pro.__onChange = function(_event){
        if (!!this.__bopt.noend){
            var _dext = _event.ext||_o,
                _list = _dext.list||_r;
            if (_dext.last){
                _e._$setStyle(
                    _list[_list.length-1],
                    'display','none'
                );
            }
        }
        _sup.__onChange.apply(this,arguments);
    };
};
NEJ.define('{lib}ui/pager/pager.js',
          ['{lib}ui/pager/pager.base.js'
          ,'{lib}util/page/page.js'],f);