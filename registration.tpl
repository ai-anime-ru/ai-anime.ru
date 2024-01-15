<div class="logreg-body">
    <div class="log-form">
      <span></span>
      <span></span>
      <span></span>
      <form id="signin-form">
        <h2>Вход</h2>
        <div class="login-box">
          <input type="text" placeholder="Логин">
        </div>
        <div class="login-box">
          <input type="password" placeholder="Пароль">
        </div>
        <div class="login-box group">
          <a href="?do=lostpassword">Забыли пароль?</a>
          <a href="#" id="signup">Регистрация</a>
        </div>
        <div class="login-box">
          <input onclick="submit();" type="submit" value="Войти">
        </div>
      </form>
  
      <form id="signup-form">
        <h2>Регистрация</h2>
        <div class="login-box">
          <input type="text" placeholder="Логин">
        </div>
        <div class="login-box">
          <input type="text" id="email" placeholder="Почта">
        </div>
        <div class="login-box">
          <input type="password" placeholder="Пароль">
        </div>
        <div class="login-box">
          <input type="password" placeholder="Повторите пароль">
        </div>
        <div class="login-box">
          <input onclick="validateEmail()" type="submit" value="Создать аккаунт">
        </div>
        <div class="login-box group">
          <a href="#">Уже есть аккаунт ? <b id="signin">Войти</b></a>
        </div>
      </form>
    </div>
  
    <div class="logreg-body">
    <script>
      let signup = document.querySelector('#signup');
      let signin = document.querySelector('#signin');
      let body = document.querySelector('.logreg-body');
      signup.onclick = function() { body.classList.add('signup'); };
      signin.onclick = function() { body.classList.remove('signup'); };
    </script>
    <script>
      function validateEmail() {
        // Получаем значение из поля ввода
        var emailInput = document.getElementById('email').value;
  
        // Регулярное выражение для проверки формата email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
        // Проверяем, соответствует ли введенное значение формату email
        if (emailRegex.test(emailInput)) {
          // Email введен верно
        } else {
          // Email введен неверно
          // Создаем окно ошибки
          var errorWindow = document.createElement('div');
          errorWindow.classList.add('error-window');
          errorWindow.innerHTML = 'Пожалуйста, введите корректный Email!';
  
          // Помещаем окно ошибки под полем ввода
          errorWindow.style.top = document.getElementById('email').offsetHeight + 'px';
  
          // Добавляем окно ошибки к документу
          document.body.appendChild(errorWindow);
        }
      }
    </script>
  </div>