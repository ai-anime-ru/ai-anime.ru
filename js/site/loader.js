document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.loader-container').classList.add('hide-loader');
    }, 500);
});

function showLoader() {
    document.querySelector('.loader-container').classList.remove('hide-loader')
    document.querySelector('.loader-container').classList.add('show-loader');
}

// Скрыть лоадер
function hideLoader() {
    document.querySelector('.loader-container').classList.remove('show-loader');
}