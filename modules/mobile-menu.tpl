<div class="mobile-menu">
    <div class="mobile-menu-item">
        <a href="/" title="Главная">
            <div class="icon">
                <ion-icon name="home-outline"></ion-icon>
            </div>
            <div class="filed-icon">
                <ion-icon name="home"></ion-icon>
            </div>
        </a>
    </div>
    <div class="mobile-menu-item">
        <a href="/index.php?do=cat&category=news" title="Новости">
            <div class="icon">
                <ion-icon name="newspaper-outline"></ion-icon>
            </div>
            <div class="filed-icon">
                <ion-icon name="newspaper"></ion-icon>
            </div>
        </a>
    </div>
    <div class="mobile-menu-item user-login">
        <a href="#">
            <div class="icon">
                <ion-icon name="chevron-up-outline"></ion-icon>
            </div>
            <div class="filed-icon">
                <ion-icon name="close-outline"></ion-icon>
            </div>
        </a>
    </div>
    <div class="mobile-menu-item">
        <a href="/index.php?do=schedule" title="Расписание выхода аниме">
            <div class="icon">
                <ion-icon name="calendar-number-outline"></ion-icon>
            </div>
            <div class="filed-icon">
                <ion-icon name="calendar-number"></ion-icon>
            </div>
        </a>
    </div>
    <div class="mobile-menu-item user-login">
        <a href="index.php?subaction=userinfo&user={profile-login}" title="Профиль пользователя">
            <div class="mobile-menu-user icon">
                <img src="{foto}" alt="Аватар пользователя">
            </div>
            <div class="mobile-menu-user filed-icon user-icon-active">
                <img src="{foto}" alt="Аватар пользователя">
            </div>
        </a>
    </div>
    <div class="mobile-menu-item user-notlogin" style="display: none;">
        <a onclick="openPopUp()" href="#" title="Открыть профиль пользователя">
            <div class="mobile-menu-user icon">
                <img src="{foto}" alt="Аватар пользователя">
            </div>
        </a>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        var currentUrl = window.location.href;

        function setActiveIcon(url) {
            var menuItems = document.querySelectorAll('.mobile-menu-item');
            menuItems.forEach(function(item) {
                var href = item.querySelector('a').getAttribute('href');
                var icon = item.querySelector('.icon');
                var filedIcon = item.querySelector('.filed-icon');
                if (filedIcon !== null) {
                    if ((url == window.location.origin + href && href == '/') || (href != '/' && url.includes(href))) {
                        icon.style.display = 'none';
                        filedIcon.style.display = 'block';
                    } else {
                        icon.style.display = 'block';
                        filedIcon.style.display = 'none';
                    }
                }
            });
        }

        setActiveIcon(currentUrl); // Вызов функции при загрузке страницы

        var menuLinks = document.querySelectorAll('.mobile-menu-item a');
        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                var href = this.getAttribute('href');
                setActiveIcon(window.location.origin + href);
            });
        });
    });
</script>