<div class="filter" onmouseover="showMenu(event)" onmouseout="hideMenu(event)">
    [item]
    <div class="filter-menu" onmouseover="showMenu(this)" onmouseout="hideMenu(this)">
        <a href="{url}">{name}</a>
        [sub-prefix]
        <ul class="filter-downcategory" onmouseover="cancelHide()" onmouseout="hideMenu(this)">
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
    let timeout;
    let currentMenu;

    function showMenu(element) {
        clearTimeout(timeout);

        if (currentMenu && !element.contains(currentMenu)) {
            currentMenu.classList.remove('menu-open');
        }

        const menu = element.querySelector('.filter-downcategory');
        if (menu) {
            menu.classList.add('menu-open');
            currentMenu = menu;
        }
    }

    function hideMenu(element) {
        timeout = setTimeout(() => {
            const menu = element.tagName === 'UL' ? element : element.querySelector('.filter-downcategory');
            if (menu) {
                menu.classList.remove('menu-open');
            }
        }, 0);
    }

    function cancelHide() {
        clearTimeout(timeout);
    }
</script>