[root]<ul>[/root]
	<li>
		<div class="icon-menu">
			<ion-icon class="down" name="grid-outline"></ion-icon>
			<ion-icon class="up" name="chevron-up-outline"></ion-icon>
		</div>
	</li>
	[item]
	<li>[active]<b>[/active]<a href="{url}">{name} <span
					style="float: right;"></span></a>[active]</b>[/active]
		[sub-prefix]<ul>[/sub-prefix]{sub-item}[sub-suffix]</ul>[/sub-suffix]
	</li>
	[/item]
	<li>
		<a href="/index.php?do=rooms">Совместный просмотр</a>
	</li>
	[root]
</ul>[/root]

<div class="top-menu-content">
</div>

<script>
  $(document).ready(function() {
    $('.icon-menu').on('click', function() {
      $('.top-menu-block').toggleClass('expanded');
	  $('.top-menu-content').toggleClass('visible-content');
	  $('.down').toggleClass('hide-ico');
	  $('.up').toggleClass('visible-ico');
    });
  });
</script>