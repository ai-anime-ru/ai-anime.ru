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
    document.addEventListener('DOMContentLoaded', function () {
        const menuItems = document.querySelectorAll('.filter-downcategory');

        menuItems.forEach(item => {
            item.addEventListener('mouseover', function (event) {
                showMenu(event.target);
            });

            item.addEventListener('mouseout', function () {
                hideMenu(event.target);
            });
        });

        function showMenu(element) {
            const menu = getElementByClass(element, 'filter-downcategory');
            if (menu) {
                hideAllMenus();
                menu.classList.add('menu-open');
            }
        }

        function hideMenu(element) {
            const menu = getElementByClass(element, 'filter-downcategory');
            if (menu) {
                menu.classList.remove('menu-open');
            }
        }

        function hideAllMenus() {
            menuItems.forEach(item => {
                item.classList.remove('menu-open');
            });
        }

        function getElementByClass(element, className) {
            while (element && !element.classList.contains(className)) {
                element = element.parentNode;
            }
            return element;
        }
    });
</script>