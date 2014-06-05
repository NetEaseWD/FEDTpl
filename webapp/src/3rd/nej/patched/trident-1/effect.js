/**
 * ------------------------------------------
 * IE10+实现动画效果,因为IE10的bug改成用JS控制
 * @version  1.0
 * @author   cheng-lin(cheng-lin@corp.netease.com)
 * ------------------------------------------
 */
var f = function(){
  var _  = NEJ.P,
      _f = NEJ.F,
      _e = _('nej.e'),
      _v = _('nej.v'),
      _u = _('nej.u'),
      _h = _('nej.h'),
      _p = _('nej.p'),
      _x = _('nej.x'),
      _ut= _('nej.ut');
    if (_p._$NOT_PATCH.trident1) return;
    var _animMap = {
      'linear'     : _ut._$$AnimLinear,
      'ease-in'    : _ut._$$AnimEaseIn,
      'ease-out'   : _ut._$$AnimEaseOut,
      'ease-in-out': _ut._$$AnimEaseInOut
    };

    /**
     * 执行动画
     * @param  {Node}   动画节点
     * @param  {Array}  动画目标样式:[{width:500px;},{height:500px;}]
     * @param  {String} 动画变换信息
     * @param  {Event}  动画停止的回调
     * @return {nej.h}
     */
    _h.__onStart = (function(){
      // 属性是all的情况，重新构建anim
      var _doRbAnim = function(_rules,_anim){
        var _str = '';
        _u._$forIn(_rules,function(_value,_name){
          _str += _anim.replace('all',_name);
        });
        return _str;
      };
      // 适配特殊属性
      var _doAdap  = function(_value,_prop){
        if(_prop === 'filter'){
          _value = _u._$fixed(_value,0);
          _value = 'alpha(opacity=' + _value + ')';
        }
        if(_prop === 'z-index')
          _value = _u._$fixed(_value,0);
        return _value;
      };
      // 适配构造器
      var _doFindCur = function(_value){
        return _animMap[_value.split(' ')[2]];
      };
      // 解析参数
      var _doParse = function(_node,_value,_rules,_stop,_index){
        var _value= _value.split(' '),
            _prop = _value[0],
            _from = parseFloat(_e._$getStyle(_node,_prop))||0,
            _to   = parseFloat(_rules[_prop])||0,
            _cutr = _animMap[_value[2]],
            _delay = _value[3].slice(0,-1) * 1000||0,
            _durtReal = _value[1].slice(0,-1) * 1000||0,
            _durt = _value[1].slice(0,-1) * 1000 + _value[3].slice(0,-1) * 1000;
        if(_durt >= _node.sumTime){
          _node.sumTime = _durt;
          _node.isLastOne = _index;
        }
        // IE6-8
        var _isLowerIE = (nej.p._$KERNEL.engine === 'trident' && (nej.p._$KERNEL.release - 5) < 0);
        if(_prop === 'opacity' && _isLowerIE){
          _prop = 'filter';
          var _filter = _e._$getStyle(_node,_prop);
          _from = parseFloat(_filter.split('=')[1])||0;
          _to   = _to * 100;
        }
        var _options = {
            delay:_delay,
            from:{
                offset:_from
            },
            to:{
                offset:_to
            },
            duration:_durtReal,
            onupdate:function(_offset){
              if(_node.isStop) return;
              var _value = _offset.offset;
              if(!_h.__doCheckProp(_prop)){
                _value = _doAdap(_value,_prop);
                    _e._$setStyle(_node,_prop,_value);
                }else{
                    _e._$setStyle(_node,_prop,_value + 'px');
                }
            },
            onstop:function(_prop,_args){
                var _effect = _node.effects[_index];
                if(!_effect) return;
                    _effect = _cutr._$recycle(_effect);
                    _node.effects[_index] = _effect;
                if(_node.isLastOne === _index){
                  _stop.apply(this,_args);
                }
                  
            }._$bind(this,_index)
          };
        return _options;
      };
      return _h.__onStart._$aop(function(_event){
        _event.stopped = !0;
        var _list = _event.args;
        var _node = _list[0],
            _rules= _list[1],
            _anim = _list[2],
            _stop = _list[3];
        _node.isStop = false;
        _node.sumTime = 0,_node.isLastOne = 0;
        var _effects   = [];
        if(_anim.indexOf('all') > -1)
          _anim = _doRbAnim(_rules,_anim);
        var _animArray = _anim.slice(0,-1);
            _animArray = _animArray.split(',');
        _node.effects  = [];
        _u._$forEach(_animArray,function(_value,_index){
            var _options = _doParse(_node,_value,_rules,_stop,_index);
            _effects.push({o:_options,c:_doFindCur(_value)});
        });
        _u._$forEach(_effects,function(_item,_index){
          var _effect = _item.c._$allocate(_item.o);
          _node.effects[_index] = _effect;
          _effect._$play();
        });
        return this;
      });
    })(); 

    /**
     * 取消动画
     * @param  {Node}   动画节点
     * @return {nej.h}
     */
    _h.__onStop = 
    _h.__onStop._$aop(function(_event){
      _event.stopped = !0;
      var _list = _event.args;
      var _node = _list[0];
      _u._$forEach(_node.effects,function(_o){
        _node.isStop = true;
        if(_o)  _o._$stop(_list[1],_list[3]||false);
      });
      return this;
    });

    /**
     * 暂停动画
     * @param  {Node}   动画节点
     * @param  {String} 暂停时的节点样式
     * @return {nej.h} 
     
    _h.__onPaused = function(_node,_state){
        return this;
    };

    /**
     * 暂停后重新开始动画
     * @param  {Node}   动画节点
     * @return {nej.h} 
     
    _h.__onRestart = function(_node,_rules,_anim){
        return this;
    };*/


};
NEJ.define('{lib}patched/trident-1/effect.js',
      ['{lib}patched/effect.js'
      ,'{lib}util/animation/linear.js'
      ,'{lib}util/animation/easein.js'
      ,'{lib}util/animation/easeout.js'
      ,'{lib}util/animation/easeinout.js'],f);