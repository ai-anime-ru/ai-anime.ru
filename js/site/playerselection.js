function changePlayer() {
    var selectedPlayer = document.getElementById("playerSelector").value;

    // Скрываем все плееры
    document.getElementById("player-kodik1").style.display = "none";
    document.getElementById("player-kodik2").style.display = "none";

    // Отображаем выбранный плеер
    document.getElementById(selectedPlayer).style.display = "block";
}