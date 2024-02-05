<div class="side-block-main">
    [group=1]
    <div class="aisort-main-block">
        <div class="slider">
            <div class="bar"></div>
            <div class="circle left"></div>
            <div class="circle right"></div>
        </div>
        <select multiple>
            <option>Выберите жанр</option>
            <!-- Здесь будут жанры -->
        </select>
        <select multiple>
            <option>Выберите тип</option>
            <!-- Здесь будут типы -->
        </select>
        <select multiple>
            <option>Выберите статус</option>
            <!-- Здесь будут статусы -->
        </select>
        <button>Искать</button>
    </div>
    [/group]
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
