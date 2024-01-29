[aviable=lastcomments]<div class="last-comm-link">{news_title}</div>[/aviable]
<div class="comm-item clearfix">
	<div class="comm-left">
		<img src="{foto}" alt="{login}" />
		<div class="up-status">
			[online]<p class="online">В сети</p>[/online]
			[offline]<p class="offline">Не в сети</p>[/offline]
		</div>
	</div>
	<div class="comm-right">
		<div class="comm-one clearfix">
			<span class="comm-author" title="Просмотреть профиль">{author}</span>
			<!--<div class="user-group">
				<p>{group}</p>
			</div>-->
		</div>
		<div class="comm-two clearfix full-text">
			{comment}
		</div>
		[signature]<div class="signature clearfix">{signature}</div>[/signature]
		<ul class="comm-three icon-l clearfix">
			<li>[reply]Ответить[/reply]</li>
		</ul>
	</div>
	[group=1]
	<ul class="delete-adm">
		<li><b>ТОЛЬКО АДМИНУ:</b> {ip}</li>
		<li>[com-edit]Редактировать[/com-edit]</li>
		<li>[com-del]Удалить[/com-del]</li>
		<li><b class="checkbox-choice">Выборать:</b> {mass-action}</li>
	</ul>
	[/group]
</div>