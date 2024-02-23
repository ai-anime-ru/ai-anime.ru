document.addEventListener('DOMContentLoaded', function() {
    var sortMain = document.querySelector('.sort-main');
    var sortList = sortMain.querySelector('.sort');
    var currentSort = sortMain.querySelector('.current-sort-text');

    currentSort.addEventListener('click', function(event) {
        event.stopPropagation();
        sortList.classList.toggle('open');
    });

    document.addEventListener('click', function() {
        sortList.classList.remove('open');
    });
});