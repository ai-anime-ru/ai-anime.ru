var isLoggedIn = false;

// Функция для закрытия приветственного сообщения
function closeWelcomeMessage() {
    document.getElementById('welcome-message').classList.remove('show');

    // Сохраняем информацию о том, что сообщение было закрыто
    localStorage.setItem('welcomeMessageClosed', 'true');
}

// Функция для проверки, нужно ли показывать приветственное сообщение
setTimeout(function checkWelcomeMessage() {
    var welcomeMessageClosed = localStorage.getItem('welcomeMessageClosed');
    // Показываем приветственное сообщение, если не было закрыто ранее и пользователь не авторизован
    if (!welcomeMessageClosed && !isLoggedIn) {
        document.getElementById('welcome-message').classList.add('show');
    }
}, 5000);

// Вызываем функцию проверки при загрузке страницы
var checkWelcomeMessage;
window.onload = checkWelcomeMessage;