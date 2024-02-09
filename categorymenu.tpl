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
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=status">Статус</a>
        
                <ul class="filter-downcategory" style="display: none;">
            <li><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=ended">Завершён</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=ongoing">Онгоинг</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=anons">Анонс</a>
        
                
                
    </div></li><li>
        </li></ul>
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=type">Тип</a>
        
                <ul class="filter-downcategory" style="display: none;">
            <li><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=serial">Сериал</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=falm">Фильм</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=ova">OVA</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=ona">ONA</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=amv">AMV</a>
        
                
                
    </div></li><li>
        </li></ul>
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=years">Года</a>
        
                <ul class="filter-downcategory">
            <li><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2025">2025</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2024">2024</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2023">2023</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2022">2022</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2021">2021</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2020">2020</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2019">2019</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2018">2018</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2017">2017</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2016">2016</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2015">2015</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2014">2014</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2013">2013</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2012">2012</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2011">2011</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2010">2010</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2009">2009</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2008">2008</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2007">2007</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2006">2006</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2005">2005</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2004">2004</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2003">2003</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2002">2002</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2001">2001</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=2000">2000</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=1999">1999</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=1998">1998</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=1997">1997</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=1996">1996</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=1995">1995</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=1994">1994</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=1993">1993</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=1992">1992</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=1991">1991</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=1990">1990</a>
        
                
                
    </div></li><li>
        </li></ul>
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=genres">Жанры</a>
        
                <ul class="filter-downcategory" style="display: none;">
            <li><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=bezumie">безумие</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=boevye-iskusstva">боевые искусства</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=vampiry">вампиры</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=voennoe">военное</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=garem">гарем</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=gurman">гурман</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=demony">демоны</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=detektiv">детектив</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=detskoe">детское</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=dzesej">дзёсей</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=drama">драма</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=igry">игры</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=istoricheskij">исторический</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=komedija">комедия</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=kosmos">космос</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=magija">магия</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=mashiny">машины</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=meha">меха</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=muzyka">музыка</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=parodija">пародия</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=povsednevnost">повседневность</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=policija">полиция</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=prikljuchenija">приключения</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=psihologicheskoe">психологическое</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=rabota">работа</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=romantika">романтика</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=samurai">самураи</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=sverhestestvennoe">сверхъестественное</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=sport">спорт</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=super-sila">супер сила</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=sjejnjen">сэйнэн</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=sedze">сёдзё</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=sedze-aj">сёдзё-ай</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=senen">сёнен</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=senen-aj">сёнен-ай</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=triller">триллер</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=uzhasy">ужасы</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=fantastika">фантастика</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=fjentezi">фэнтези</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=shkola">школа</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=jekshen">экшен</a>
        
                
                
    </div><div class="filter-menu">
        <a class="button-filter" href="https://ai-anime.ru/index.php?do=cat&amp;category=jetti">этти</a>
        
                
                
    </div></li><li>
        </li></ul>
                
    </div>
</div>