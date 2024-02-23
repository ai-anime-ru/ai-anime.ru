document.addEventListener('DOMContentLoaded', function() {
    // Получаем все элементы с классом 'user-login' и 'user-notlogin'
    var userLoginElements = document.querySelectorAll('.user-login');
    var userNotLoginElements = document.querySelectorAll('.user-notlogin');

    // Получаем значение переменной {profile-login}
    var profileLoginValue = '{profile-login}';

    // Обходим все элементы с классом 'user-login' и обновляем их отображение в зависимости от статуса пользователя
    userLoginElements.forEach(function(userLoginDiv) {
        // Проверяем, вошел ли пользователь в аккаунт
        if (profileLoginValue.trim() !== '') {
            // Пользователь в аккаунте, отображаем содержимое user-login
            userLoginDiv.style.display = 'block';
        } else {
            // Пользователь не в аккаунте, скрываем содержимое user-login
            userLoginDiv.style.display = 'none';
        }
    });

    // Обходим все элементы с классом 'user-notlogin' и обновляем их отображение в зависимости от статуса пользователя
    userNotLoginElements.forEach(function(userNotLoginDiv) {
        // Проверяем, вошел ли пользователь в аккаунт
        if (profileLoginValue.trim() !== '') {
            // Пользователь в аккаунте, скрываем содержимое user-notlogin
            userNotLoginDiv.style.display = 'none';
        } else {
            // Пользователь не в аккаунте, отображаем содержимое user-notlogin
            userNotLoginDiv.style.display = 'block';
        }
    });
});