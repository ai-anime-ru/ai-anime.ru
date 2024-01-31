<div id="mySidebar" class="sidebar-mobile-menu" style="width: 0px;">
  <div class="background-top"></div>
  <a href="javascript:void(0)" class="closebtn" onclick="toggleNav()">×</a>

  <div class="mobile-menu">
    <div class="main-menu-list">
      <ul>
        <li>
          <a href="/">
            <div class="icon"><ion-icon name="home-outline"></ion-icon></div>
            <div class="text">Главная</div>
          </a>
        </li>
        <li>
          <a href="index.php?do=static&page=news">
            <div class="icon"><ion-icon name="newspaper-outline"></ion-icon></div>
            <div class="text">Новости</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="icon"><ion-icon name="filter-outline"></ion-icon></div>
            <div class="text">Фильтры</div>
          </a>
        </li>
        <li id="schedule">
          <a href="/index.php?do=schedule">
            <div class="icon"><ion-icon name="calendar-outline"></ion-icon></div>
            <div class="text">Расписание</div>
          </a>
        </li>
        <li>
          <a href="index.php?do=rooms">
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
          <li class="hideorno">
            <a href="#">
              <div class="icon"><ion-icon name="chatbubbles-outline"></ion-icon></div>
              <div class="text">Сообщения</div>
            </a>
          </li>
          <li class="hideorno">
            <a href="index.php?do=favorites">
              <div class="icon"><ion-icon name="bookmarks-outline"></ion-icon></div>
              <div class="text">Закладки</div>
            </a>
          </li>
          <li class="hideorno">
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
      </ul>
    </div>
  </div>
</div>

</div>

<script>
  function toggleNav() {
    if (document.getElementById("mySidebar").style.width === "0px") {
      document.getElementById("mySidebar").style.width = "320px";
    } else {
      document.getElementById("mySidebar").style.width = "0";
    }
  }
</script>