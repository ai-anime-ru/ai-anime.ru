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
</div>