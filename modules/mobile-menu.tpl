<div id="mySidebar" class="sidebar-mobile-menu" style="width: 0px;">
  <div class="background-top"></div>
  <span href="javascript:void(0)" class="closebtn" onclick="toggleNav()"><ion-icon
      name="close-outline"></ion-icon></span>

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
      </ul>
      <div class="filter-box">
        <a class="filter-button">
          <div class="icon"><ion-icon name="filter-outline"></ion-icon></div>
          <div class="text">Фильтры</div>
        </a>
      </div>
      <div class="bottom-menu">
        <ul>
          <li class="hideorno">
            <a href="index.php?subaction=userinfo&user={profile-login}">
              <Div class="profile-photo-mobile-icon">
                <div class="imgBx-mobile-menu">
                  <img src="{foto}">
                </div>
              </div>
              <div class="text">{profile-login}</div>
            </a>
          </li>
          [admin-link]
          <li style=>
            <a href="{admin-link}">
              <div class="icon color-in-header-menu"><ion-icon name="grid-outline"></ion-icon>
              </div>
              <div class="text color-in-header-menu">Админ пан.</div>
            </a>
          </li>
          [/admin-link]
          <li class="hideorno">
            <a href="/index.php?do=pm">
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
          <li>
            <a href="index.php?action=logout">
              <div class="icon"><ion-icon name="log-out-outline"></ion-icon></div>
              <div class="text logout-button-menu" id="logoutButtonTwo">Вход</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</div>

<script>
  // JavaScript
document.querySelector('.filter-button').addEventListener('click', function() {
    var filterBox = document.querySelector('.filter-contet-box');
    var sidebar = document.querySelector('#mySidebar');
    var filterButton = document.querySelector('.filter-button');
    var topElements = Array.from(sidebar.children).filter(el => !el.classList.contains('filter-contet-box') && !el.classList.contains('sidebar-mobile-menu') && !el.classList.contains('background-top') && !el.classList.contains('closebtn'));

    if (filterBox.style.maxHeight) {
        // Если фильтры уже открыты, закрываем их
        filterBox.style.maxHeight = null;
        filterButton.style.position = 'static';
        topElements.forEach(el => el.style.display = 'block');
    } else {
        // Если фильтры закрыты, открываем их
        filterBox.style.maxHeight = filterBox.scrollHeight + 'px';
        filterButton.style.position = 'absolute';
        filterButton.style.top = '0';
        topElements.forEach(el => el.style.display = 'none');
    }
});
</script>