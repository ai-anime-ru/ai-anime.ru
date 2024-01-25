<div class="side-block-main">
    <div class="random-anime">
        <div class="random-anime-title">
            <h3>Случайное аниме</h3>
        </div>
        <div>
            {include file="/modules/random-anime.tpl"}
        </div>
    </div>
    <div class="calendar box-body-s">
        <div class="calendar__item">
            <h3>Сегодня:</h3>
            <div class="calendar__item-weekday">
                {today-ongoings}
            </div>
        </div>
    </div>
    <div class="discord-widget">
        <iframe src="https://discord.com/widget?id=1186951554444558368&theme=dark" width="340" height="500"
            allowtransparency="true" frameborder="0" padding-top="10px"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </div>
</div>