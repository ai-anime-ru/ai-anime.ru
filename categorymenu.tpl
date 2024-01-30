<div class="filter">
    [item]
    <div class="filter-menu">
        <a class="button-filter" href="{url}">{name}</a>
        [sub-prefix]
        <ul class="filter-downcategory">
            <li>
                [/sub-prefix]
                <div class="">{sub-item}</div>
                [sub-suffix]
            <li>
        </ul>
        [/sub-suffix]
    </div>
    [/item]
    <ul>
        <!--Доп кнопки-->
        <li>
            <a href="/index.php?do=schedule">Расписание</a>
        </li>
        <li>
            <a href="/index.php?do=rooms">Совместный просмотр</a>
        </li>
        <!--Доп кнопки-->
    </ul>
</div>
[sort]{sort}[/sort]
<!--Запрещаем переход по ссылке при нажатии на кнопку открытия категории-->

<script>
    document.addEventListener("DOMContentLoaded", function () {
        var filterLinks = document.querySelectorAll(".button-filter");

        filterLinks.forEach(function (link) {
            link.addEventListener("mouseenter", function () {
                $(this).siblings('.filter-downcategory').show();
            });

            link.addEventListener("mouseleave", function () {
                var ul = $(this).siblings('.filter-downcategory');
                if (!ul.is(':hover')) {
                    ul.hide();
                }
            });

            link.addEventListener("click", function (event) {
                event.preventDefault();
                $(this).siblings('.filter-downcategory').toggle();
            });
        });
        $('.filter-downcategory').mouseleave(function () {
            $(this).hide();
        });ё
    });
</script>