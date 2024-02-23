<main class="main fx-col clearfix">

    <div class="top-block-main">
        <div class="slider-content">
            <img src="https://ai-anime.ru/uploads/head-img.webp" alt="Описание изображения">
        </div>
    </div>
    [available=main]
    <div class="season-main">
        <div class="title-text-main-cont-1">
            <p class="title-text-main">Рекомендуем посмотреть</p>
        </div>
        <div class="season">
            [desktop]{custom category="59-60" template="/modules/season" order="rand" from="0" limit="10" cache="no"}[/desktop]
            [smartphone]{custom category="59-60" template="/modules/season" order="rand" from="0" limit="6" cache="no"}[/smartphone]
            [tablet]{custom category="59-60" template="/modules/season" order="rand" from="0" limit="8"cache="no"}[/tablet]
        </div>
    </div>
    [/available]
    <div class="contaner-flex">
        <section class="main-container">
            [available=search|favorites|allnews]
            <div class="sort-main">
                <p>Текущая сортировка:
                </p>
                [sort]{sort}[/sort]
            </div>
            [/available] [not-aviable=main]{content}[/not-aviable] {info} [available=main]
            <div class="title-text-main-cont-2">
                <p class="title-text-main">Последние обновления</p>
            </div>
            <div class="sort-main">
                <p>Текущая сортировка:
                </p>
                [sort]{sort}[/sort]
            </div>
            <div class="items_news" id="items_news">
                [desktop]
                {custom template="shortstory" category="59-60" navigation='yes' from='0'sortbyuser='yes'}
                [/desktop]
                [smartphone]
                {custom template="shortstory" category="59-60" limit="6" navigation='yes' from='0' sortbyuser='yes'}
                [/smartphone]
                [tablet]{custom category="59-60" template="/modules/season" order="rand" from="0" limit="8"cache="no"}[/tablet]
            </div>
            {navigation} [/available]
        </section>
        {include file="/modules/side-block-main.tpl"}
    </div>
    <div class="bg_overlay"></div>
</main>