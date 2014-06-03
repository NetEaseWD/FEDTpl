<div style="display:none" id="wgt-tpl">
<#noparse>
<textarea name="jst" id="selected-item-list">
  <ul class="m-selecttarget">
    {list items as item}
      <li class="f-cb j-flag">${item}<span class="f-fr u-del j-del" data-id=${item}>X</span></li>
    {/list}
  </ul>
</textarea>
<textarea name="jst" id="nem-sidemenu">
  <ul>
    <li>${department.name}</li>
    <li>
      <ul>
      {list department.products as product}
        <li><a href="/product?productId=${product.id}">${product.name}</a></li>
        <li>
          <ul>
            {list product.monitorGroupList as monitorGroup}
              <li><a href="/monitor?monitorId=${monitorGroup.id}">${monitorGroup.name}</a></li>
            {/list}
          </ul>
        </li>      
      {/list}
      </ul>
    </li>
  <ul>
</textarea>
<textarea name="ntp" id="wgt-member-act">
  <div>
    <div class="j-flag f-fl"></div>
  </div>
</textarea>
<textarea name="jst" id="wgt-member-list">
  <div class="f-cb m-lmember">
    {list members as item}
      <div class="f-fl m-memact"><input type="text" value="${item.name}" data-corp = ${item.corp}/><span class="del j-del">X</span></div>
    {/list}
    <div class="addtagbtn j-addtagbtn f-sep10-l f-fl j-flag" id="addtagbtn">+</div>
  </div>
</textarea>
<textarea name="ntp" id="wgt-confirm-win">
  <div>
      <div class="m-lcnt">
        <div class="m-ltbl">
          <div class="m-delbox f-cb">
            <span class="u-warning f-fl">&nbsp;</span>
            <div class="m-deltip f-fs2">监控组删除后，将对服务器取消监控。<br/>您确定要删除?</div>
          </div>
        </div>
      </div>
      <div class="m-lbtns">
        <input type="button" value="确定" class="j-flag ok">
        <input type="button" value="取消" class="j-flag">
      </div>
    </div>
</textarea>
<textarea name="ntp" id="wgt-user-suggest-card">
  <div class="m-lcard"></div>
</textarea>
<textarea name="jst" id="wgt-user-suggest-list">
  <ul class="m-sgtbox">
    {list users as item}
    <li data-index=${item_index}>${item.name} - ${item.corp}(${item.shortName})</li>
    {/list}
  </ul>
</textarea>
</#noparse>
<div>