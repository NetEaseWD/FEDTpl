<#include "wrap/common.ftl">
<#escape x as x?html>
<@compress single_line=!cfg_develop>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<@title/>
<!-- @STYLE -->
<#include "wrap/css.ftl">
</head>
<body id="index-netease-com">
<#include "wrap/top.ftl">
<div class="g-bd f-cb">
    <div class="g-sd">
       <div>侧边栏</div>
    </div>
    <div class="g-mn1">
      <div class="g-mn1c">
      	内容区
      </div>
    </div>
</div>
<!-- @DEFINE -->
<script src="${jslib}define.js?pro=${jspro}"></script>
<script src="${jspro}pages/index.js"></script>
</body>
</html>
</@compress>
</#escape>