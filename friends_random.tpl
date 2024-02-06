<div id="random_f-{id}">
   <table>
      <tr>
         <td><a {user_link} href="{profile}"><img height="55" width="55" src="{foto}" title="{author}" alt="{author}" /></a></td>
         <td>
            <p>[group_color]{author}[/group_color] 
			[status]
			[online]<img src="{THEME}/images/online.png" style="vertical-align: middle;" title="������������ ������" alt="������������ ������" />[/online][offline]<img src="{THEME}/images/offline.png" style="vertical-align: middle;" title="������������ offline" alt="������������ offline" />[/offline]
			[/status]
			</p>
            <p>{group_name}</p>
            <p> ���: {lastdate}</p>
         </td>
      </tr>
   </table>
   <p>
     <a href="#" onclick="doFriends('{id}', 'add', ''); return false;"><button class="bbcodes"><span>�������� � ������</span></button></a>
     <a href="/friends/{author}"><button class="bbcodes"><span>������ {total}</span></button></a>
   </p>
   <div style="border-bottom:1px solid #ccc"></div>
</div>
