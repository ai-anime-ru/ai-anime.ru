<button id="update-news-button">Обновить новость</button>
<div id="random-news-container">
    {custom category="1-100" template="modules/random-anime order="rand" from="0" limit="1" cache="no"}
</div>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var updateNewsButton = document.getElementById('update-news-button');
        var randomNewsContainer = document.getElementById('random-news-container');

        updateNewsButton.addEventListener('click', function() {
            // Используйте AJAX для загрузки новости без перезагрузки страницы
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/engine/ajax/random-anime.php', true);

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // Обновляем контейнер с новостью
                    randomNewsContainer.innerHTML = xhr.responseText;
                }
            };

            xhr.send();
        });
    });
</script>