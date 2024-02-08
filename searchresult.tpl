<div class="items-news-asd">
	[searchposts]
	[fullresult]
	{include file="shortstory.tpl"}
	[/fullresult]
	[shortresult]

[/shortresult]
</div>
[/searchposts]

[searchcomments]
[fullresult]
{include file="comments.tpl"}
[/fullresult]
[shortresult]
<div class="comment" id="{comment-id}">
	<div class="com_content">
		<h4 class="title" style="margin-top: 0;">{news_title}</h4>
		<div class="text">{comment limit="200"}</div>
	</div>
</div>
[/shortresult]
[/searchcomments]