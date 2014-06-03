<#include "var.ftl">
<#include "side.ftl">
<#macro title text="xxx平台">
<title>${text}</title>
</#macro>

<#-- <@pager url="/circle?type=${typeId}" limit=10 offset=20 total=60 / >后台传limit offset total过来直接把数字换掉就可-->
<#macro pager url="" limit=10 offset=0 total=0>
  <#local pageCount=(total/limit)?ceiling />
  <#local currentPage=(offset/limit)?ceiling+1 />
  <#if pageCount!=1>
    <div class="m-page">
      <a href="${url}&limit=${limit}&offset=${(currentPage-2)*limit}" class="pageprv <#if currentPage==1>z-dis</#if>">上一页</a>  
      <#list 1..pageCount as i>
        <a href="${url}&limit=${limit}&offset=${(i-1)*limit}" class="<#if currentPage== i>z-crt</#if>">${i}</a>
      </#list>
      <a href="${url}&limit=${limit}&offset=${(currentPage-1)*limit}" class="pagenxt <#if currentPage==pageCount>z-dis</#if>">下一页</a>  
    </div>
  </#if>
</#macro>