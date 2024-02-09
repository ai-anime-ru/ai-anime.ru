<div class="aisort-main-block">
    <div class="year-slider">
        <label class="title-filter" for="year-range">Выберите год:</label>
        <div id="year-range"></div>
    </div>
    <div class="filter-group status-select">
        <label class="title-filter-select" for="status-select">Выберите статус:</label>
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
        values: [1990, 2000, 2010, 2020, 2024],
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

yearRange.querySelectorAll('.noUi-handle').forEach((handle, index) => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('noUi-tooltip');
    handle.appendChild(tooltip);

    handle.setAttribute('aria-valuetext', `${yearRange.noUiSlider.get()[index]}`);

    yearRange.noUiSlider.on('update', (values, handleNumber) => {
        if (index === handleNumber) {
            tooltip.innerText = `${Math.round(values[handleNumber])}`;
        }
    });
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
            //      if (otherCheckboxes !== checkboxes) {
            //       otherCheckboxes.style.display = 'none';
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