<main class="main fx-col clearfix">
    <div class="top-block-main">
        <div class="slider-content">
            <img src="https://ai-anime.ru/uploads/head-img.webp" alt="Описание изображения">
        </div>
        <div class="slider-content">
            
        </div>
    </div>

    <div class="top-menu-block">
        {catmenu}
    </div>
    <div class="contaner-flex">
        <section class="main-container">
            [available=search|favorites|allnews]
            <div class="sort-main">
                [sort]{sort}[/sort]
            </div>
            [/available]

            [not-aviable=main]{content}[/not-aviable]

            {info}
            
            [available=main]
            <div class="sort-main">
                [sort]{sort}[/sort]
            </div>
            <div class="items_news" id="items_news">
               [smartphone] {custom template="shortstory" limit="5" navigation='yes' from='0' sortbyuser='yes'} [/smartphone]
               [desktop] {custom template="shortstory" navigation='yes' from='0' sortbyuser='yes'} [/desktop]
            </div>
            {navigation}
            [/available]
        </section>
        {include file="/modules/side-block-main.tpl"}
    </div>
    <div class="bg_overlay"></div>
</main>