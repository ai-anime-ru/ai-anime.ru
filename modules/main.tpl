<main class="main fx-col clearfix">
    <div class="top-block-main"></div>
    <div class="top-menu-block">
        {catmenu}
    </div>
    
    <div class="contaner-flex">
        [available=main]
        <section class="main-container">
            <div class="sort-main">
                <span class="">Сортировать: </span>
                [sort]{sort}[/sort]
            </div>
            <!--
            <h1>
                <ion-icon name="sparkles-outline" class="main-container-title-svg">
                    </ion-icon>Недавно добавленное аниме<ion-icon name="sparkles-outline" class="main-container-title-svg">
                </ion-icon>
            
            </h1>
            -->
            <div class="items_news" id="items_news">
                {custom template="shortstory" navigation='yes' from='0' sortbyuser='yes'}
            </div>
            {navigation}
        </section>
        [/available]
        {include file="/modules/side-block-main.tpl"}
    </div>
    
    <div class="bg_overlay"></div>
    {info}
</main>