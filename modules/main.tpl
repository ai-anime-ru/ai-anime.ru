<main class="main fx-col clearfix">
    {info}
    <div class="top-block-main"></div>
    <div class="top-menu-block">
        {catmenu}
    </div>
    [available=main]
    <div class="contaner-flex">
        <section class="main-container">
            <h1>
                <ion-icon name="sparkles-outline" class="main-container-title-svg">
                    </ion-icon>Недавно добавленное аниме<ion-icon name="sparkles-outline" class="main-container-title-svg">
                </ion-icon>
            </h1>
            <div class="items_news" id="items_news">
                {custom template="shortstory" navigation='yes' from='0' sortbyuser='yes'}
            </div>
            {navigation}
        </section>
        {include file="/modules/side-block-main.tpl"}
    </div>
    [/available]
    <div class="bg_overlay"></div>
</main>