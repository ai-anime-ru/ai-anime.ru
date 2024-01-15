<main class="main fx-col clearfix">
    [aviable=main]
    {info}
    [/aviable]
    [aviable=main]
    <div class="top-block-main">{custom order="lastviewed"}</div>
    <div class="contaner-flex">
        <section class="main-container">
            <h1>Последние аниме</h1>
            <div class="line"></div>
            <div class="items_news" id="items_news">
                {custom template="shortstory" navigation='yes' from='0' }
            </div>
            {navigation}
        </section>
        <div class="side-block-main">
            <div class="calendar box-body-s">
                <div class="calendar__item">
                   <div class="calendar__item-weekday">
                      <h3>Сегодня</h3>
                   </div>
                   {today-ongoings}
                </div>
            </div>
        </div>
    </div>
    [/aviable]
    <div class="bg_overlay"></div>
</main>