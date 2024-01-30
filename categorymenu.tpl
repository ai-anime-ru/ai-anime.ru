<div class="filter">
    [item]
    <div class="filter-menu">
        <a class="button-filter" href="{url}">{name}</a>
        [sub-prefix]
        <ul class="filter-downcategory">
            <li>
                [/sub-prefix]
                {sub-item}
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

<!--Запрещаем переход по ссылке при нажатии на кнопку открытия категории-->

<script>
    document.addEventListener("DOMContentLoaded", function () {
        var filterLinks = document.querySelectorAll(".button-filter");

        filterLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
            });
        });
    });
    $(document).ready(function () {
        $('.filter-menu a').hover(
            function () { // при наведении на <a>
                $(this).siblings('.filter-downcategory').show(); // показать <ul>
            },
            function () { // при уходе с <a>
                var ul = $(this).siblings('.filter-downcategory');
                if (!ul.is(':hover')) { // если мышка не на <ul>
                    ul.hide(); // скрыть <ul>
                }
            }
        );
        $('.filter-downcategory').mouseleave(function () { // при уходе с <ul>
            $(this).hide(); // скрыть <ul>
        });
    });
</script>