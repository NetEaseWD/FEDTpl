<#macro side department id>
<div class="m-sidebox">
  <div class="m-side" id="nem-side">
    <ul class="m-sidetab f-cb j-flag">
      <li class="tabcrt">我的产品</li>
      <li class="f-sep10-l">全部产品</li>
    </ul>
    <form><div class="m-search"><span class="f-ib u-searchicn">&nbsp;</span><input type="" placeholder="按监控名称查找" ></div></form>
    <div class="f-cb j-flag">
      <div><div class="m-monitortype">我参与的监控<span class="f-ib u-typebtn u-open f-fr">&nbsp;</span></div>
        <ul class="m-departitm">
          <li class="m-departitm m-dashbd <#if id=='0'>j-crt</#if>"><a href="/index">Dashboard</a></li>
          <li class="<#if department.id==id>j-crt</#if>"><span class="f-ib u-state">&nbsp;</span><a href="/department?departmentId=${myProducts.id}">${myProducts.name}</a></li>
          <li>
            <#if myProducts.myMonitors??>
              <@sideItems itemList=myProducts.myMonitors id=id/>
            </#if>
          </li>
        </ul>
      </div>
      <div><div class="m-monitortype">我关注的监控<span class="f-ib u-typebtn u-close f-fr">&nbsp;</span></div>
        <ul class="f-dn m-departitm">
          <li class="<#if department.id==id>j-crt</#if>"><span class="f-ib u-state">&nbsp;</span><a href="/department?departmentId=${myProducts.id}">${myProducts.name}</a></li>
          <li>
            <#if myProducts.followedMonitors??>
              <@sideItems itemList=myProducts.followedMonitors id=id/>
            </#if>
          </li>
        </ul>
      </div>
    </div>
    <div class="f-dn j-flag">
      <ul class="m-departitm">
        <li class=""><span class="f-ib u-state">&nbsp;</span>${allProducts.name}</li>
        <li>
          <#if allProducts.products??>
            <@sideItems itemList=allProducts.products id="-1"/>
          </#if>
        </li>
      </ul>
    </div>
  </div>
</div>
</#macro>
<#macro sideItems itemList id>
  <#list itemList as product>
    <ul class="m-proditm <#if product.id==id||isOpen(product.monitorGroupList,id)><#else>m-close</#if>" >
      <li class="<#if product.id==id>j-crt</#if>"><span class="f-ib u-state">&nbsp;</span><a href="/product?productId=${product.id}">${product.name}</a></li>
      <li>
        <ul class="m-monitoritm <#if isOpen(product.monitorGroupList,id)><#else>m-close</#if>">
          <#list product.monitorGroupList as monitorGroup>
            <li  class=" <#if monitorGroup.id==id>j-crt</#if>"><a href="/monitor/status?monitorId=${monitorGroup.id}">${monitorGroup.name}</a></li>
          </#list>
        </ul>
      </li>      
    </ul>
  </#list>
</#macro>
<#function isOpen itemList id>
  <#list itemList as item>
    <#if item.id==id>
      <#return true>
    </#if>
  </#list>
  <#return false>  
</#function>