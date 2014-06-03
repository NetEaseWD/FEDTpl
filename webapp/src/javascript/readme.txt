|- xxx	平台的缩写，公共方法、对象、类必须放到这个名字空间下
	|- m		module的缩写，各模块(页面)的名字空间（扩展nej.e）
	|- u		util的缩写，云计算系统的公共功能性方法、对象、类的名字空间
	|- ui		user interface的缩写，云计算系统的公共UI方法、对象、类的名字空间
	|- w		widget的缩写，云计算系统中的弹窗相关方法、对象、类的名字空间
  |- d    data的缩写，数据的名字空间
  |- l    layer的缩写，窗体，卡片，弹层的名字空间
模块都依赖'{pro}widget/module.js' 这个文件
继承于 _pn._$$Module
可参照index.js的写法

