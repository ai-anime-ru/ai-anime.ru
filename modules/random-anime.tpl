<div id="random-anime-container">
    {custom category="1-100" template="shortstory" order="rand" from="0" limit="1" cache="no"}
</div>
<button id="update-anime-button">Обновить новость</button>
<script>
    const updateButton = document.getElementById('update-anime-button');
    updateButton.addEventListener('click', function() {
    location.reload();
    });
</script>