<header class="header">
    <div class="in-header-content">
        <div class="header-title">
            <a class="header-link" href="/">AI ANIME</a>
        </div>
        <div class="top-menu-block">
            {catmenu}
        </div>
        <div style="display: flex; padding: 10px 0 0 0;">
            <div class="search-container" id="search-container">
                <div class="d3">
                    <form id="q_search" action="/index.php" method="get">
                        <div class="q_search">
                            <input id="story" name="story" placeholder="Поиск по сайту..." type="search">
                            <button type="submit" class="search-icon" title="Найти"><ion-icon
                                    name="search-outline"></ion-icon></button>
                        </div>
                        <input type="hidden" name="do" value="search">
                        <input type="hidden" name="subaction" value="search">
                    </form>
                </div>
            </div>
            <div class="profile" onclick="toggleDropdownHeader()">
                <a href="#" title="Аватар пользователя">
                    <div class="icon">
                        <div class="imgBx-header">
                            <img src="{foto}" alt="Аватар пользователя">
                        </div>
                    </div>
                </a>
                <div class="profile-link-header" id="myDropdownMenu">
                    <ul>
                        <li class="user-login" style="cursor: default;">
                            <div class="profile-text-header "><b>С возвращением </b>
                                <p>{profile-login}</p>
                            </div>
                        </li>
                        <div class="line user-login"></div>
                        [admin-link]
                        <li style=>
                            <a href="{admin-link}">
                                <div class="icon color-in-header-menu">
                                    <ion-icon name="grid-outline"></ion-icon>
                                </div>
                                <div class="text color-in-header-menu">Админ пан.</div>
                            </a>
                        </li>
                        [/admin-link]
                        <li class="hideorno">
                            <a href="index.php?subaction=userinfo&user={profile-login}">
                                <div class="icon color-in-header-menu">
                                    <ion-icon name="chatbubbles-outline"></ion-icon>
                                </div>
                                <div class="text color-in-header-menu">Профиль</div>
                            </a>
                        </li>
                        <li class="hideorno">
                            <a href="/index.php?do=pm">
                                <div class="icon color-in-header-menu">
                                    <ion-icon name="chatbubbles-outline"></ion-icon>
                                </div>
                                <div class="text color-in-header-menu">Сообщения</div>
                            </a>
                        </li>
                        <li class="hideorno">
                            <a href="index.php?do=favorites">
                                <div class="icon color-in-header-menu">
                                    <ion-icon name="bookmarks-outline"></ion-icon>
                                </div>
                                <div class="text color-in-header-menu">Закладки</div>
                            </a>
                        </li>
                        [admin-link]
                        <li class="hideorno">
                            <a href="/index.php?do=stats">
                                <div class="icon color-in-header-menu">
                                    <ion-icon name="stats-chart-outline"></ion-icon>
                                </div>
                                <div class="text color-in-header-menu">Тестовая страница</div>
                            </a>
                        </li>
                        [/admin-link]
                        <div class="line user-login"></div>
                        [group=5]
                        <li>
                            <a onclick="openPopUp()" href="#" title="Открыть профиль пользователя">
                                <div class="icon color-in-header-menu">
                                    <ion-icon name="log-out-outline"></ion-icon>
                                </div>
                                <div class="text color-in-header-menu">Вход</div>
                            </a>
                        </li>
                        [/group]
                        <li class="user-login">
                            <a href="/?action=logout" title="Выйти из аккаунта">
                                <div class="icon color-in-header-menu">
                                    <ion-icon name="log-out-outline"></ion-icon>
                                </div>
                                <div class="text color-in-header-menu">Выход</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>

<script>
    //Скрипт открытия и закрытия Списков
    document.addEventListener('DOMContentLoaded', function() {
        var profile = document.querySelector('.profile');
        var dropdown = document.getElementById("myDropdownMenu");

        profile.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdown.classList.toggle('show');
        });

        document.addEventListener('click', function() {
            dropdown.classList.remove('show');
        });
    });
</script>