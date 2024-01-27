function runAdblockScript() {
    // Загружаем фильтры адблока
    fetch('./adblock.txt')
        .then(response => response.text())
        .then(adBlockFilters => {
            const filtersArray = adBlockFilters.split('\n').filter(filter => filter.trim() !== '');

            // Переопределяем функцию fetch для блокировки запросов
            window.originalFetch = window.fetch;
            window.fetch = function (url, options) {
                const isBlocked = filtersArray.some(filter => url.includes(filter));
                if (isBlocked) {
                    console.warn('Blocked request to:', url);
                    return Promise.reject(new Error('Blocked by adblock'));
                }
                return window.originalFetch(url, options);
            };
        })
        .catch(error => console.error('Failed to load ad block filters:', error));
}

// Запускаем скрипт сразу при загрузке страницы
runAdblockScript();

// Запускаем скрипт каждые 5 минут (или другой интервал по вашему выбору)
const intervalId = setInterval(runAdblockScript, 5 * 1000); // 5 секунд
