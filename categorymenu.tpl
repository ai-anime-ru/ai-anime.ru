<div class="filter">
    [item]
    <div class="filter-menu">
        <a href="{url}" onmouseover="showSubMenu(this)" onmouseout="hideSubMenu(this, event)">{name}</a>
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
	$(document).ready(function () {
		$('.icon-menu').on('click', function () {
			$('.top-menu-block').toggleClass('expanded');
			$('.top-menu-content').toggleClass('visible-content');
			$('.down').toggleClass('hide-ico');
			$('.up').toggleClass('visible-ico');
		});
	});
</script>
<!--Скрипт выдвижного блока-->

<script>
var filterContainer = document.querySelector('.filter');
var filterMenu = document.querySelector('.filter-menu');

function toggleDropdownFilter(show) {
    if (show) {
        filterMenu.style.display = 'block';
    } else {
        // Проверяем, если мышь не находится над .filter или его подменю
        if (!isDescendant(filterContainer, event.relatedTarget) && !isDescendant(filterMenu, event.relatedTarget)) {
            filterMenu.style.display = 'none';
        }
    }
}

function showSubMenu(link) {
    var subMenu = link.nextElementSibling;
    subMenu.style.display = 'block';
}

function hideSubMenu(link, event) {
    var subMenu = link.nextElementSibling;
    // Проверяем, если мышь ушла с основного блока или с подменю
    if (!isDescendant(filterContainer, event.relatedTarget) && !isDescendant(subMenu, event.relatedTarget)) {
        subMenu.style.display = 'none';
    }
}

// Проверка, является ли элемент потомком указанного родителя
function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
</script>