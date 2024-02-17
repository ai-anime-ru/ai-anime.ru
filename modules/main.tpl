<main class="main fx-col clearfix">

    <div class="top-block-main">
        <div class="slider-content">
            <img src="https://ai-anime.ru/uploads/head-img.webp" alt="Описание изображения">
        </div>
    </div>

    <div class="top-menu-block">
        {catmenu}
    </div>
    [available=main]
    <div class="season-main">
        <div class="title-text-main-cont-1">
            <p class="title-text-main">Рекомендуем посмотреть</p>
            <div class="icon"><ion-icon name="chevron-forward-outline"></ion-icon></div>
        </div>
        <div class="season">
            {custom category="1-100" template="/modules/season" order="rand" from="0" limit="10" cache="no"}
        </div>
    </div>
    [/available]
    <div class="contaner-flex">      
        <section class="main-container">
            [available=search|favorites|allnews]
            <div class="sort-main">
                <p>Текущая сортировка:
                <p>
                    [sort]{sort}[/sort]
            </div>
            [/available]

            [not-aviable=main]{content}[/not-aviable]

            {info}

            [available=main]
            <div class="title-text-main-cont-2">
                <p class="title-text-main">Последние обновления</p>
                <div class="icon"><ion-icon name="chevron-forward-outline"></ion-icon></div>
            </div>
            <div class="sort-main">
                <p>Текущая сортировка:
                <p>
                    [sort]{sort}[/sort]
            </div>
            <div class="items_news" id="items_news">
                [smartphone] {custom template="shortstory" limit="12" navigation='yes' from='0' sortbyuser='yes'}
                [/smartphone]
                [desktop] {custom template="shortstory" navigation='yes' from='0' sortbyuser='yes'} [/desktop]
            </div>
            {navigation}
            [/available]
        </section>
        {include file="/modules/side-block-main.tpl"}
    </div>
    <div class="bg_overlay"></div>
</main>