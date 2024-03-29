<footer id="footer" class="footerBlack">
    <div class="footer-content-container">
        <!-- <div class="line"></div> -->
        <nav class="footerColumns">
            <div class="column">
                <h3>Разделы сайта</h3>
                <ul class="column-item">
                    <li class="column-list-item">
                        <a href="/" class="column-item">Главная</a>
                    </li>
                    <li class="column-list-item">
                        <a href="?do=static&page=news">Новости</a>
                    </li>
                    <li class="column-list-item">
                        <a href="?do=schedule">Расписание</a>
                    </li>
                    <li class="column-list-item">
                        <a href="?do=rooms">Совместный просмотр</a>
                    </li>
                </ul>
            </div>

            <div class="column">
                <h3>Полезное</h3>
                <ul class="column-item">
                    <li class="column-list-item">
                        <a href="?do=feedback">Обратная связь</a>
                    </li>
                    <li class="column-list-item">
                        <a href="?do=rules">Правила</a>
                    </li>
                    <li class="column-list-item">
                        <a href="/index.php?do=static&page=privacy-policy">Политика конфиденцальности</a>
                    </li>
                </ul>
            </div>

            <div class="column">
                <h3>Ссылки</h3>
                <ul class="column-item">
                    <li class="column-list-item">
                        <a href="https://github.com/ai-anime-ru/ai-anime.ru" target="_blank" class="column-item">GitHub</a>
                    </li>
                    <li class="column-list-item">
                        <a href="https://discord.gg/BXGzzWx7HN" target="_blank">Discrod Сервер</a>
                    </li>
                </ul>
            </div>
            <ul>
                <li class="logo-footer" style="right: 0; list-style: none; position: absolute;">
                    <a href="/">
                        <img style="width: 135px; height: 135px;" src="{THEME}/images/logo.png" alt="Логотип сайта">
                    </a>
                </li>
            </ul>
        </nav>
        <div class="copyright-footer"></div>
        <p class="copyright-footer-text">Ⓒ 2024 Copyright: <a href="/" class="copyright-link">AI ANIME</a>. Все права защищены
        </p>
    </div>
</footer>

<script>
    window.addEventListener('scroll', function() {
        var footer = document.getElementById('footer');
        var footerHeight = footer.offsetHeight;
        var windowHeight = window.innerHeight;
        var scrollY = window.scrollY || window.pageYOffset;
        var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);

        if ((scrollY + windowHeight) >= documentHeight - footerHeight) {
            footer.style.position = 'absolute';
            footer.style.bottom = 'auto';
            footer.style.top = '100%';
        } else {
            footer.style.position = 'absolute';
            footer.style.height = 'auto';
            footer.style.width = '100%';
            footer.style.background-color = 'var(--main)';
            footer.style.margin-top = '20px';
        }
    });
</script>