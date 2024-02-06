<div class="aisort-main-block">


    <div class="year-slider">
        <label class="title-filter" for="year-range">Выберите год:</label>
        <div id="year-range"></div>
        <div class="noUi-tooltip" id="year-tooltip-left">1990</div>
        <div class="noUi-tooltip" id="year-tooltip-right">2024</div>
    </div>


    <div class="filter-group genre-select">
        <label class="title-filter-select" for="genre-select">Выберите жанры:</label>
        <div class="checkboxes">
            <label><input type="checkbox" value="Безумие"> Безумие</label>
            <label><input type="checkbox" value="Боевые искусства"> Боевые искусства</label>
            <label><input type="checkbox" value="Вампиры"> Вампиры</label>
            <!-- Добавьте остальные жанры в аналогичном формате -->
        </div>
    </div>

    <div class="filter-group type-select">
        <label class="title-filter-select" for="type-select">Выберите типы:</label>
        <div class="checkboxes">
            <label><input type="checkbox" value="Сериал"> Сериал</label>
            <label><input type="checkbox" value="Фильм"> Фильм</label>
            <label><input type="checkbox" value="OVA"> OVA</label>
            <label><input type="checkbox" value="ONA"> ONA</label>
            <label><input type="checkbox" value="AMV"> AMV</label>
        </div>
    </div>

    <div class="filter-group status-select">
        <label class="title-filter-select" for="status-select">Выберите статусы:</label>
        <div class="checkboxes">
            <label><input type="checkbox" value="Завершён"> Завершён</label>
            <label><input type="checkbox" value="Онгоинг"> Онгоинг</label>
            <label><input type="checkbox" value="Анонс"> Анонс</label>
        </div>
    </div>

    <button class="search-button">Искать</button>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.7.0/nouislider.min.js"></script>

<script>
    const yearRange = document.getElementById('year-range');
    const yearTooltipLeft = document.getElementById('year-tooltip-left');
    const yearTooltipRight = document.getElementById('year-tooltip-right');

    noUiSlider.create(yearRange, {
        start: [1990, 2024],
        connect: true,
        step: 1,
        range: {
            'min': 1990,
            'max': 2024
        },
        pips: {
            mode: 'values',
            values: [1990, 1995, 2000, 2005, 2010, 2015, 2020, 2024],
            density: 5,
            format: {
                to: function (value) {
                    return value;
                },
                from: function (value) {
                    return value;
                }
            }
        }
    });

    yearRange.noUiSlider.on('update', function (values, handle) {
        if (handle === 0) {
            yearTooltipLeft.innerText = 'Год ' + values[handle];
        } else {
            yearTooltipRight.innerText = 'Год ' + values[handle];
        }
    });

    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', function () {
        const rangeValues = yearRange.noUiSlider.get();
        alert('Выбранный диапазон годов: ' + rangeValues.join(' - '));
    });
</script>

<script>
    const selectedYear = document.getElementById('selected-year');
    const filterGroups = document.querySelectorAll('.filter-group');

    filterGroups.forEach(group => {
        const label = group.querySelector('label');
        const checkboxes = group.querySelector('.checkboxes');

        label.addEventListener('click', function () {
            // При клике на метку показываем или скрываем меню
            checkboxes.style.display = checkboxes.style.display === 'flex' ? 'none' : 'flex';
            
            // Закрываем предыдущее меню, если оно было открыто
            //filterGroups.forEach(otherGroup => {
             //   const otherCheckboxes = otherGroup.querySelector('.checkboxes');
               // if (otherCheckboxes !== checkboxes) {
                 //   otherCheckboxes.style.display = 'none';
                //}
            //});
        });
    });

    document.addEventListener('click', function (event) {
        // При клике вне меню закрываем все меню
        if (!event.target.closest('.filter-group')) {
            filterGroups.forEach(group => {
                const checkboxes = group.querySelector('.checkboxes');
                checkboxes.style.display = 'none';
            });
        }
    });
</script>