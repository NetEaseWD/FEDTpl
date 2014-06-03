FEDTpl
======
前端架构模板

./webapp:       前端项目架构文件
WEB-INF		      把模板文件放于此是不用额外的配置文件夹的访问权限，
                如果把template文件放在webapp目录下，
                上线后就要对template文件夹进行访问权限的设置了
deploy		      打包文件的配置，如果用了这在套结构可以直接用里面的bat文件打包输入，
                r文件夹为最后的打包后的线上前端文件
psd			        psd为精灵图的的psd文件
publisher       打包工具文件夹
res			        静态资源文件夹,图片,flash等
src			        前端源文件夹

./webapp/WEB-INF:
template	      模板文件
tpl			        打包后的模板文件
./webapp/WEB-INF/template:

./webapp/deploy:
release.bat	    打包执行文件
release.conf	  打包配置文件
release.sh	

./webapp/src:
css			        css文件
html		    
javascript	    脚本文件
mcss		        mcss文件
nej			        nej库文件
pages		        静态文件

./webapp/src/html:
module		

./webapp/src/html/module:

./webapp/src/javascript:
cache		        脚本文件缓存
config		      脚本文件配置
extend		      外部脚本引入
module		
page		        各页面脚本
readme.txt	    脚本文件夹说明，命名空间说明
widget		      凡是有两个地方以上用到的控件都放到widget里

./webapp/src/javascript/widget:
item		        nej列表项文件夹
layer		        卡片和窗体对象文件夹

./webapp/src/javascript/widget/item:
item.js		      nej列表项都从这个脚本继承

./webapp/src/javascript/widget/layer:
card.js		      卡片都从这个对象继承
window.js	      窗体都从这个对象继承

./webapp/src/pages 静态页面文件夹

