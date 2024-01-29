<div class="filter" onclick="toggleDropdownFilter()">
	[item]
	<a href="{url}">{name}</a>
	[sub-prefix]
	<ul class="filter-downcategory">
		<li>
			[/sub-prefix]
			{sub-item}
			[sub-suffix]
		</li>
	</ul>
	[/sub-suffix]
	[/item]
</div>

<ul>
	<!--Кнопка выдвижного блока-->
	<li>
		<div class="icon-menu">
			<ion-icon class="down" name="grid-outline"></ion-icon>
			<ion-icon class="up" name="chevron-up-outline"></ion-icon>
		</div>
	</li>
	<!--Кнопка выдвижного блока-->

	<!--Доп кнопки-->
	<li>
		<a href="/index.php?do=schedule">Расписание</a>
	</li>
	<li>
		<a href="/index.php?do=rooms">Совместный просмотр</a>
	</li>
	<!--Доп кнопки-->
</ul>

<div class="top-menu-content">
	<!--Содержание выдвижного блока-->
</div>
<!--Скрипт выдвижного блока-->
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
<!--Скрипт выдвижного блока-->