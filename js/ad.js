function runAdblockScript() {
    console.log('Executing adblock script...');

    // Загружаем фильтры адблока
    fetch('./adblock.txt')
        .then(response => response.text())
        .then(adBlockFilters => {
            console.log('Filters loaded successfully.');

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

            console.log('Adblock script execution complete.');
        })
        .catch(error => console.error('Failed to load ad block filters:', error));
}

// Запускаем скрипт сразу при загрузке страницы
runAdblockScript();

// Запускаем скрипт каждые 5 секунд
const intervalId = setInterval(runAdblockScript, 30 * 1000);
