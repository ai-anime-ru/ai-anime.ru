<div id="mySidebar" class="sidebar-mobile-menu" style="width: 0px;">
  <div class="background-top"></div>
  <span href="javascript:void(0)" class="closebtn" onclick="toggleNav()"><ion-icon
      name="close-outline"></ion-icon></span>

  <div class="menu-wrapper">
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

          <div class="filter-box">
            <a href="javascript:void(0)" class="filter-button" onclick="toggleFilters()">
              <div class="icon"><ion-icon name="filter-outline"></ion-icon></div>
              <div class="text">Фильтры</div>
            </a>
          </div>
          <div class="filter-content-box">
            <form action="#">
              <div class="filter-group">
                <label for="category">Категория:</label>
                <select name="category" id="category">
                  <option value="">Все</option>
                  <option value="1">Фильмы</option>
                  <option value="2">Сериалы</option>
                  <option value="3">Мультфильмы</option>
                </select>
              </div>
              <div class="filter-group">
                <label for="year">Год:</label>
                <input type="text" name="year" id="year" placeholder="Введите год">
              </div>
              <div class="filter-group">
                <label for="rating">Рейтинг:</label>
                <input type="range" name="rating" id="rating" min="0" max="10">
              </div>
              <button type="submit">Применить</button>
            </form>
          </div>
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
  const filterButton = document.querySelector('.filter-button');
  const filterContentBox = document.querySelector('.filter-content-box');
  const sidebar = document.getElementById('mySidebar');
  const menuWrapper = document.querySelector('.menu-wrapper');

  function toggleFilters() {
    if (filterContentBox.classList.contains('active')) {
      // Свернуть фильтры
      filterContentBox.classList.remove('active');
      menuWrapper.style.top = '0px';
    } else {
      // Развернуть фильтры
      filterContentBox.classList.add('active');
      menuWrapper.style.top = `${filterContentBox.offsetHeight}px`;
    }
  }
</script>