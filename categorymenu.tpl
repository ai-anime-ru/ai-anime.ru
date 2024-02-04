<div class="filter">
    <ul>
        <li>
            <a href="/">Главная</a>
        </li>
    </ul>
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
                $(this).siblings('.filter-downcategory').toggle();
            });
        });
        $('.filter-downcategory').mouseleave(function () {
            $(this).hide();
        });
    });
</script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var buttons = document.querySelectorAll('.filter-menu .button-filter');

        buttons.forEach(function(button) {
            button.addEventListener('click', function(event) {
                // Предотвращаем переход по ссылке
                event.preventDefault();

                // Ваш дополнительный код здесь, если необходимо выполнить другие действия

                // Например, можно добавить обработчик для подменю
                var subMenu = button.nextElementSibling;
                if (subMenu && subMenu.classList.contains('filter-downcategory')) {
                    // Ваш код для работы с подменю
                }
            });
        });
    });
</script>