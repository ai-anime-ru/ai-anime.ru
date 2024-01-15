<div class="sidebar-main">
    <ul>
        <li class="logo" style="--bg:#333;">
            <a href="/">
                <div class="icon">
                    <div class="site-logo">
                        <img src="{THEME}/images/logo.png">
                    </div>
                </div>
                <div class="text">ai anime</div>
            </a>
        </li>
        <div class="main-menu-list">
            <li style="--bg:#4d658c;">
                <a href="/">
                    <div class="icon"><ion-icon name="home-outline"></ion-icon></div>
                    <div class="text">Главная</div>
                </a>
            </li>
            <li style="--bg:#4d658c;">
                <a href="index.php?do=static&page=news">
                    <div class="icon"><ion-icon name="newspaper-outline"></ion-icon></div>
                    <div class="text">Новости</div>
                </a>
            </li>
            <li style="--bg:#4d658c;">
                <a href="#">
                    <div class="icon"><ion-icon name="filter-outline"></ion-icon></div>
                    <div class="text">Фильтры</div>
                </a>
            </li>
            <li style="--bg:#4d658c;" id="schedule">
                <a href="/index.php?do=schedule">
                    <div class="icon"><ion-icon name="calendar-outline"></ion-icon></div>
                    <div class="text">Расписание</div>
                </a>
            </li>
            <li style="--bg:#4d658c;" id="schedule">
                <a href="/rooms/">
                    <div class="icon"><ion-icon name="people-outline"></ion-icon></div>
                    <div class="text">Совместный просмотр</div>
                </a>
            </li>
            <div class="bottom-menu">
                <li class="hideorno">
                    <a onclick="ShowProfile('{profile-login}', 'https://ai-anime.ru/user/{profile-login}', '1'); return false;"
                        href="/user/{profile-login}">
                        <Div class="icon">
                            <div class="imgBx">
                                <img src="{foto}">
                            </div>
                        </div>
                        <div class="text">{profile-login}</div>
                    </a>
                </li>
                <li style="--bg:#4d658c;" class="hideorno">
                    <a href="#">
                        <div class="icon"><ion-icon name="chatbubbles-outline"></ion-icon></div>
                        <div class="text">Сообщения</div>
                    </a>
                </li>
                <li style="--bg:#4d658c;" class="hideorno">
                    <a href="/favorites">
                        <div class="icon"><ion-icon name="bookmarks-outline"></ion-icon></div>
                        <div class="text">Закладки</div>
                    </a>
                </li>
                <li style="--bg:#4d658c;" class="hideorno">
                    <a href="#">
                        <div class="icon"><ion-icon name="stats-chart-outline"></ion-icon></div>
                        <div class="text">Статистика</div>
                    </a>
                </li>
                <li>
                    <a href="index.php?action=logout">
                        <div class="icon"><ion-icon name="log-out-outline"></ion-icon></div>
                        <div class="text" id="logoutButton">Вход</div>
                    </a>
                </li>
            </div>
        </div>
    </ul>
</div>
<!-- () Анимашки для боковой панели () -->
<script type="text/javascript">
    let mainmenulist = document.querySelectorAll('.main-menu-list li')
    function activeLink() {
        mainmenulist.forEach((item) =>
            item.classList.remove('active'));
        this.classList.add('active')
    }
    mainmenulist.forEach((item) =>
        item.addEventListener('click', activeLink))
    document.addEventListener('DOMContentLoaded', function () {
        var block = document.querySelector('.sidebar-main');
        block.addEventListener('mouseover', function () { block.classList.add('active'); });
        block.addEventListener('mouseout', function () { block.classList.remove('active'); });
    });
</script>
<!-- () Смена кнопок Вход/Выход и скрытие элементов () -->
<script type="text/javascript">
document.addEventListener("DOMContentLoaded", function () {

  const logoutButton = document.querySelector("#logoutButton");
  const hideornoElements = document.querySelectorAll(".hideorno");

  const isLoggedIn = document.querySelector(".bottom-menu .text").textContent !== "";

  logoutButton.textContent = isLoggedIn ? "Выход" : "Вход";

  hideornoElements.forEach((element) => {
    element.style.display = isLoggedIn ? "block" : "none";
  });

  logoutButton.addEventListener("click", function () {
    // Здесь вы можете добавить логику выхода, если это необходимо
  });
});
</script>

<!--Скрипт активной кнопки/вкладки-->
<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Получаем все элементы меню
    var menuItems = document.querySelectorAll('.main-menu-list li');

    // Обрабатываем каждый пункт меню
    menuItems.forEach(function (menuItem) {
      // Добавляем слушатель события для каждой ссылки в меню
      menuItem.addEventListener('click', function () {
        // Убираем класс 'active' у всех пунктов меню
        menuItems.forEach(function (item) {
          item.classList.remove('active');
        });

        // Добавляем класс 'active' к текущему пункту меню
        menuItem.classList.add('active');
      });
    });

    // Проверяем текущий URL и добавляем класс 'active' соответствующему пункту меню
    var currentPath = window.location.pathname + window.location.search;

    menuItems.forEach(function (menuItem) {
      var link = menuItem.querySelector('a');
      var href = link.getAttribute('href');

      if (currentPath === href) {
        menuItem.classList.add('active');
      }
    });
  });
</script>
