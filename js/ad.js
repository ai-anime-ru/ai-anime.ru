// Загружаем фильтры адблока
fetch('./adblock.txt')
    .then(response => response.text())
    .then(adBlockFilters => {
        // Разделяем строки и удаляем пустые элементы
        const filtersArray = adBlockFilters.split('\n').filter(filter => filter.trim() !== '');

        // Проходим по каждому фильтру и удаляем соответствующие элементы
        filtersArray.forEach(filter => {
            const elements = document.querySelectorAll(filter);
            elements.forEach(element => {
                element.remove();
            });
        });
    })
    .catch(error => console.error('Failed to load ad block filters:', error));