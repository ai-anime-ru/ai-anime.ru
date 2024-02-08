<main class="main fx-col clearfix">
    <div class="top-block-main"></div>
    <!--{include file="/modules/slider-main.tpl"}-->
    <div class="top-menu-block">
        {catmenu}
    </div>
    <div class="contaner-flex">
        <section class="main-container">
            [not-aviable=main]{content}[/not-aviable]
            <!--
            <h1>
                <ion-icon name="sparkles-outline" class="main-container-title-svg">
                    </ion-icon>Недавно добавленное аниме<ion-icon name="sparkles-outline" class="main-container-title-svg">
                </ion-icon>
            
            </h1>
            -->
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
        {info}
        {include file="/modules/side-block-main.tpl"}
    </div>
    <div class="bg_overlay"></div>
</main>