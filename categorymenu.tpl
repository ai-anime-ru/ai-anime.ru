<div class="filter">
    [item]
    <div class="filter-menu">
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
    </div>
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
    $('.filter-menu a').hover(
        function() { // при наведении на <a>
            $(this).siblings('.filter-downcategory').show(); // показать <ul>
        },
        function() { // при уходе с <a>
            var ul = $(this).siblings('.filter-downcategory');
            if (!ul.is(':hover')) { // если мышка не на <ul>
                ul.hide(); // скрыть <ul>
            }
        }
    );

    $('.filter-downcategory').mouseleave(function() { // при уходе с <ul>
        $(this).hide(); // скрыть <ul>
    });
});
</script>