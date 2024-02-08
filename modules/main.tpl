<main class="main fx-col clearfix">
    <div class="top-block-main"></div>
    <!--{include file="/modules/slider-main.tpl"}-->
    <div class="top-menu-block">
        {catmenu}
    </div>
    <div class="contaner-flex">
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
        
        <section class="main-container">
            [not-aviable=main]{content}[/not-aviable]
        </section>
        {info}
        {include file="/modules/side-block-main.tpl"}
    </div>
    <div class="bg_overlay"></div>
</main>