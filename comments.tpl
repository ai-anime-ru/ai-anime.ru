[aviable=lastcomments]<div class="last-comm-link">{news_title}</div>[/aviable]
<div class="comm-item clearfix">
	<div class="comm-left">
		<img src="{foto}" alt="{login}"/>
		<div class="up-status">
			[online]<p class="online">В сети</p>[/online]
			[offline]<p class="offline">Не в сети</p>[/offline]
		</div>
	</div>
	<div class="comm-right">
		<div class="comm-one clearfix">
			<span class="comm-author">{author}</span>
	
		</div>
		<div class="comm-two clearfix full-text">
			{comment}
		</div>
		[signature]<div class="signature clearfix">{signature}</div>[/signature]
		[rating]
			[rating-type-3]
			<div class="rate3-comm">
				[rating-plus]<span class="fa fa-thumbs-up"></span>[/rating-plus]
				{rating}
				[rating-minus]<span class="fa fa-thumbs-down"></span></span>[/rating-minus]
			</div>
			[/rating-type-3]
		[/rating]
		<ul class="comm-three icon-l clearfix">
			<li>[reply]Ответить[/reply]</li>
		[group=1]
			<li><b>Только админу</b> {ip}</li>
			<li>[com-edit]Редактировать[/com-edit]</li>
			<li>[com-del]Удалить[/com-del]</li>
			<li>{mass-action}</li>
		[/group]
		</ul>
		<div class="comm-four">
			<div>Следующее звание:<span class="nkarma_badge">{next_name}</span></div>
			<div>{next_rank}</div>
		</div>
	</div>
</div>
