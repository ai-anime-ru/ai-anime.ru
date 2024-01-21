<main class="main fx-col clearfix">
    [aviable=main]
    {info}
    [/aviable]
    [aviable=main]
    <div class="top-block-main">[banner_test]{banner_test}[/banner_test]</div>
    <div class="contaner-flex">
        <section class="main-container">
            <h1>Последние аниме</h1>
            <div class="line">{calendar}</div>
            <div class="items_news" id="items_news">
                {custom template="shortstory" navigation='yes' from='0' }
            </div>
            {navigation}
        </section>
        {include file="/modules/side-block-main.tpl"}
    </div>
    [/aviable]
    <div class="bg_overlay"></div>
</main>