
FEDTpl
======
#webapp:       
前端项目架构文件
##res
静态资源文件夹,图片,flash等
##src
源代码文件夹
###css
css源代码

1. base.css
css  reset代码
2. grid.css
页面布局代码
3. module.css
模块化的css代码
4. unit.css
元件代码，如icon，button等


###html
####module

###javascript
脚本源代码
####cache
缓存脚本

####config
配置脚本

####extend
第方库脚本

####module
模块脚本

####page
各页面脚本

1. xxxxx.js
2. xxxxx.js
3. xxxxx.js

####widget
凡是有两个地方以上用到的控件都放到widget里
#####item
nej列表项都从这个脚本继承

#####layer
######card
卡片都从这个对象继承

1. xxx.card.js
2. xxx1.card.js

#####window
窗体都从这个对象继承

1.xxx2.window.js
2.xxx2.window.js

#####module.js
所有的页面模块都由这个脚本继承而去

####readme.txt
关于脚本结构，命名空间的说明
###mcss
mcss源代码

1. _config.mcss
2. _prefix.mcss
3. base.mcss
4. grid.mcss
5. mcss.json
6. module.mcss
7. unit.mcss

###nej
nej库文件


###pages 
静态html页面文件夹

1. xxxx1.html
2. xxxx2.html

##WEB-INF         
把模板文件放于此是不用额外的配置文件夹的访问权限，如果把template文件放在webapp目录下，                上线后就要对template文件夹进行访问权限的设置了
###template
项目模板文件，开发的模板文件在此

####pages
具体页面的模板文件

1. xxx1.ftl
2. xxx2.ftl

####wrap

1. common.ftl 常用的模板控件
2. config.ftl 模板配置
3. css.ftl    css引入文件
4. header.ftl 头部模板文件
5. side.ftl   侧边栏模板控件
6. top.ftl    顶部板板
7. var.ftl    变量定义
8. widget.ftl 控件模板

#####fake

1.xxx1.fake.ftl
2.xxx2.fake.ftl

###tpl
打包后的项目模板文件，开发者不用关心这个文件夹

#deploy		      
打包文件的配置，如果用了这在套结构可以直接用里面的bat文件打包输入，r文件夹为最后的打包后的线上前端文件

1. release.bat	
打包执行文件
2. release.conf	  
打包配置文件

#psd		        
psd为精灵图的的psd文件

1. xxxx1.psd
2. xxxx2.psd

#publisher       
打包工具文件夹此文件夹不用开发者关心，是配合deploy文件夹下的脚本运行的打包工具





