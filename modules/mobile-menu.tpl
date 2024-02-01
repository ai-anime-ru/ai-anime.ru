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
        <a class="filter-button" onclick="toggleFilters()">
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
function toggleFilters() {
    var filterContentBox = document.querySelector('.filter-content-box');
    var filters = document.querySelector('.filter-box');

    if (filterContentBox) {
        if (filterContentBox.style.height === '0px' || filterContentBox.style.height === '') {
            // Show filters
            filterContentBox.style.height = 'auto';
            if (filters) {
                filters.style.transform = 'translateY(-100%)';
            }
        } else {
            // Hide filters
            filterContentBox.style.height = '0px';
            if (filters) {
                filters.style.transform = 'translateY(0)';
            }
        }
    }
}
</script>