{custom category='CATEGORY_ID' template='shortstory' navigation='yes' limit='18'}
<div class="aisort-main-block">
    <div class="year-slider">
        <label class="title-filter" for="year-range">Выберите год:</label>
        <div id="year-range"></div>
    </div>
    <div class="filter-group status-select">
        <p>Статус</p>
        <label class="title-filter-select" for="status-select">Выберите статус</label>
        <div class="checkboxes">
            <label><input type="checkbox" value="60"> Завершён</label>
            <label><input type="checkbox" value="59"> Онгоинг</label>
            <label><input type="checkbox" value="58"> Анонс</label>
        </div>
    </div>
    <div class="filter-group type-select">
        <p>Тип:</p>
        <label class="title-filter-select" for="type-select">Выберите тип</label>
        <div class="checkboxes">
            <label><input type="checkbox" value="63"> Сериал</label>
            <label><input type="checkbox" value="64"> Фильм</label>
            <label><input type="checkbox" value="55"> OVA</label>
            <label><input type="checkbox" value="56"> ONA</label>
            <label><input type="checkbox" value="57"> AMV</label>
        </div>
    </div>
    <div class="filter-group genre-select">
        <p>Жанр:</p>
        <label class="title-filter-select" for="genre-select">Выберите жанр</label>
        <div class="checkboxes">
            <label><input type="checkbox" value="66"> безумие</label>
            <label><input type="checkbox" value="67"> боевые искусства</label>
            <label><input type="checkbox" value="68"> вампиры</label>
            <label><input type="checkbox" value="69"> военное</label>
            <label><input type="checkbox" value="70"> гарем</label>
            <label><input type="checkbox" value="71"> гурман</label>
            <label><input type="checkbox" value="72"> демоны</label>
            <label><input type="checkbox" value="73"> детектив</label>
            <label><input type="checkbox" value="74"> детское</label>
            <label><input type="checkbox" value="75"> дзёсей</label>
            <label><input type="checkbox" value="76"> драма</label>
            <label><input type="checkbox" value="77"> игры</label>
            <label><input type="checkbox" value="78"> исторический</label>
            <label><input type="checkbox" value="79"> комедия</label>
            <label><input type="checkbox" value="80"> космос</label>
            <label><input type="checkbox" value="81"> магия</label>
            <label><input type="checkbox" value="82"> машины</label>
            <label><input type="checkbox" value="83"> меха</label>
            <label><input type="checkbox" value="84"> музыка</label>
            <label><input type="checkbox" value="85"> пародия</label>
            <label><input type="checkbox" value="86"> повседневность</label>
            <label><input type="checkbox" value="87"> полиция</label>
            <label><input type="checkbox" value="88"> приключения</label>
            <label><input type="checkbox" value="89"> психологическое</label>
            <label><input type="checkbox" value="90"> работа</label>
            <label><input type="checkbox" value="91"> романтика</label>
            <label><input type="checkbox" value="92"> самураи</label>
            <label><input type="checkbox" value="93"> сверхъестественное</label>
            <label><input type="checkbox" value="94"> спорт</label>
            <label><input type="checkbox" value="95"> супер сила</label>
            <label><input type="checkbox" value="96"> сэйнэн</label>
            <label><input type="checkbox" value="97"> сёдзё</label>
            <label><input type="checkbox" value="98"> сёдзё-ай</label>
            <label><input type="checkbox" value="99"> сёнен</label>
            <label><input type="checkbox" value="100"> сёнен-ай</label>
            <label><input type="checkbox" value="101"> триллер</label>
            <label><input type="checkbox" value="102"> ужасы</label>
            <label><input type="checkbox" value="103"> фантастика</label>
            <label><input type="checkbox" value="104"> фэнтези</label>
            <label><input type="checkbox" value="105"> школа</label>
            <label><input type="checkbox" value="106"> экшен</label>
            <label><input type="checkbox" value="107"> этти</label>
        </div>
    </div>

    <button class="search-button">Применить фильтры</button>
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
            filterGroups.forEach(otherGroup => {
               const otherCheckboxes = otherGroup.querySelector('.checkboxes');
                  if (otherCheckboxes !== checkboxes) {
                   otherCheckboxes.style.display = 'none';
            }
            });
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

<script>
    document.addEventListener('DOMContentLoaded', function () {
        const checkboxes = document.querySelectorAll('.checkboxes input[type="checkbox"]');
        
        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('input', function () {
                updateTitleFilter(checkbox);
            });
        });

        function updateTitleFilter(checkbox) {
            const checkedCheckboxes = checkbox.closest('.filter-group').querySelectorAll('input[type="checkbox"]:checked');
            const checkedValues = Array.from(checkedCheckboxes).map(function (checkbox) {
                return checkbox.parentNode.textContent.trim();
            });

            const titleFilterSelect = checkbox.closest('.filter-group').querySelector('.title-filter-select');
            const originalText = titleFilterSelect.dataset.defaultText;

            if (checkedValues.length > 0) {
                titleFilterSelect.textContent = 'Выбрано: ' + checkedValues.join(', ');
            } else {
                titleFilterSelect.textContent = originalText;
            }
        }
    });
</script>

