<div class="full-story-body">
    <div class="full-story-container">
        <div class="title-full-story-container">
            <div class="title-full-story-container-poster-text">
                <div>
                    [xfvalue_poster][xfnotgiven_poster]<img class="xfieldimage poster"
                        src="https://ai-anime.ru/uploads/none.png" alt="">[/xfnotgiven_poster]
                </div>
                <div>
                    <a class="title-full-story-container-text">
                        {title}
                    </a>
                    <div class="full-story-info-title">
                        <a class="genre-shiki">[xfvalue_kodik_genres][xfnotgiven_kodik_genres]
                            [xfgiven_shikimori_genres][xfvalue_shikimori_genres][/xfgiven_shikimori_genres]
                            [/xfnotgiven_kodik_genres]
                        </a>
                        <div class="dot"></div>
                        <a class="genre-shiki">
                            [xfvalue_shikimori_aired_on]
                            [xfnotgiven_shikimori_aired_on]
                            [xfvalue_kodik_premiere_ru]
                            [xfnotgiven_kodik_premiere_ru]
                            [xfvalue_kodik_premiere_world]
                            [xfnotgiven_kodik_premiere_world]
                            Информация отсутствует
                            [/xfnotgiven_kodik_premiere_world]
                            [/xfnotgiven_kodik_premiere_ru]
                            [/xfnotgiven_shikimori_aired_on]
                        </a>
                        <div class="dot"></div>
                        <a class="genre-shiki">
                            [xfvalue_shikimori_duration_3]
                            [xfnotgiven_shikimori_duration_3]
                            [xfvalue_kodik_duration_3]
                            [xfnotgiven_kodik_duration_3]
                            Информация отсутствует
                            [/xfnotgiven_kodik_duration_3]
                            [/xfnotgiven_shikimori_duration_3]
                        </a>
                    </div>
                    <div class="title-dop">
                        <div class="badge">
                            <a class="genre-shiki">
                                [xfvalue_kodik_status_ru]
                                [xfnotgiven_kodik_status_ru]
                                [xfvalue_shikimori_status_ru]
                                [xfnotgiven_shikimori_status_ru]
                                Информация отсутствует
                                [/xfnotgiven_shikimori_status_ru]
                                [/xfnotgiven_kodik_status_ru]
                            </a>
                        </div>
                        <div class="dot"> </div>
                        <span class="badge">
                            <a>Серий:
                                [xfvalue_shikimori_episodes_aired][xfnotgiven_shikimori_episodes_aired][xfvalue_kodik_last_episode][xfnotgiven_kodik_last_episode]?[/xfnotgiven_kodik_last_episode][/xfnotgiven_shikimori_episodes_aired]
                                из
                                [xfvalue_shikimori_episodes][xfnotgiven_shikimori_episodes][xfvalue_kodik_episodes_total][xfnotgiven_kodik_episodes_total]?[/xfnotgiven_kodik_episodes_total][/xfnotgiven_shikimori_episodes]</a>
                        </span>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="bookmarks-icon" onclick="toggleBookmark()">
                    [add-favorites]<div class="bookmark-outline-add"><ion-icon title="Добавить в закладки"
                            name="bookmark-outline"></ion-icon></div>[/add-favorites]

                    [del-favorites]<div class="bookmark-outline-remove"><ion-icon class="remove-book"
                            title="Удалить из закладок" name="checkmark-circle-outline"></ion-icon><ion-icon
                            class="remove-book" title="Удалить из закладок" name="close-circle-outline"></ion-icon>
                    </div>[/del-favorites]
                </div>
            </div>
        </div>
        <div class="box-player">
            <div class="full-player-box">
                <div class="box-player-title-name">
                    <span id="watch-online" class="is-active">Смотреть онлайн</span>
                    <span id="player-2" class="">ПЛЕЕР 2</span>
                </div>
                <script>
                    // Получаем ссылки на элементы по их ID
                    var watchonline = document.getElementById('watch-online');
                    var player2 = document.getElementById('player-2');

                    // Назначаем обработчики событий при нажатии на кнопки
                    watchonline.addEventListener('click', function () {
                        player2.classList.remove('is-active');
                        watchonline.classList.add('is-active');
                    });

                    player2.addEventListener('click', function () {
                        player2.classList.add('is-active');
                        watchonline.classList.remove('is-active');
                    });
                </script>

                <!--
            <label for="playerSelector"></label>
            <select id="playerSelector" onchange="changePlayer()">
                <option value="player-kodik1">Плеер 1</option>
                <option value="player-kodik2">Плеер 2</option>
            </select>
            -->
                <div id="cinema" class="full_player tabs_box">

                    <div class="player visible player-kodik1" id="player-kodik1" style="display:block;">
                        <h1></h1>
                        [xfnotgiven_kodik_iframe]<h1>Не удалось найти видео</h1>[/xfnotgiven_kodik_iframe]
                        [xfgiven_kodik_iframe]<iframe class="kodik-player" src="[xfvalue_kodik_iframe]" frameborder="0"
                            allowfullscreen allow="autoplay *; fullscreen *"></iframe>[/xfgiven_kodik_iframe]
                    </div>
                    <div class="player-info">
                        <ul class="in-voice-acting">
                            <li>
                                [xfgiven_kodik_translation]<span>В переводе: </span>
                                <a>[xfvalue_kodik_translation]</a>[/xfgiven_kodik_translation]
                                [xfnotgiven_kodik_translation]<span>Перевод: </span>
                                <a>отсутствует</a>[/xfnotgiven_kodik_translation]
                            </lI>
                        </ul>
                    </div>
                    [group=1]
                    [xfgiven_shikimori_related]
                    <div class="franchise-ai">
                        <div class="season-title">
                            <h1>Франшиза</h1>
                        </div>
                        <div class="season">
                            {custom idshiki="[xfvalue_shikimori_related]"template="/modules/season" limit="100"}
                        </div>
                    </div>
                    [/xfgiven_shikimori_related]
                    [/group]
                </div>
            </div>
        </div>

        [xfgiven_next_episode_date]
        <div class="pretimer">
            <div class="lt">
                <div class="countdown-title"">
                    <p>До выхода новой серии в Японии осталось:</p>
                </div>
                <div class=" countdown-text">Новая серия аниме выходит на экраны: <span
                        id="timer_out">{timer_out}</span><br> в
                    соответствии
                    c японским временем.</div>
            </div>
            <div class="rt">
                <ul class="countdown-wrp">
                    <li class="days">
                        <div class="value">0</div>
                        <div class="unit">дней</div>
                    </li>
                    <li>
                        <p class="points">:</p>
                    </li>
                    <li class="hours">
                        <div class="value">0</div>
                        <div class="unit">часов</div>
                    </li>
                    <li>
                        <p class="points">:</p>
                    </li>
                    <li class="minutes">
                        <div class="value">0</div>
                        <div class="unit">минут</div>
                    </li>
                    <li>
                        <p class="points">:</p>
                    </li>
                    <li class="seconds">
                        <div class="value">0</div>
                        <div class="unit">секунды</div>
                    </li>
                </ul>
            </div><!--[xfvalue_next_episode_date]-->
            <script type="text/javascript">
                var countdownElement = document.getElementById("timer_out");

                // Переменная с датой и временем выхода новой серии
                var releaseDateTime = "[xfvalue_next_episode_date]";
                // Устанавливаем значение timer_out
                var timerOutDate = moment(releaseDateTime, "DD.MM.YYYY HH:mm:ss");
                document.getElementById("timer_out").textContent = timerOutDate.format("DD.MM.YYYY");
                function getUnitLabel(number, singular, genitiveSingular, genitivePlural) {
                    if (number === 1 || (number > 20 && number % 10 === 1)) {
                        return singular;
                    } else if ((number >= 2 && number <= 4) || (number > 20 && number % 10 >= 2 && number % 10 <= 4)) {
                        return genitiveSingular;
                    } else {
                        return genitivePlural;
                    }
                }
                // Обновляем таймер каждую секунду
                setInterval(function () {
                    // Получаем текущую дату и время
                    var currentDateTime = moment();

                    // Получаем дату и время выхода новой серии из переменной
                    var releaseMoment = moment(releaseDateTime, "DD.MM.YYYY HH:mm:ss");

                    // Расчитываем разницу во времени
                    var diff = releaseMoment.diff(currentDateTime);

                    // Расчитываем количество недель, дней, часов, минут и секунд
                    var days = Math.floor((diff % (7 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
                    var hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
                    var minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
                    var seconds = Math.floor((diff % (60 * 1000)) / 1000);

                    // Обновляем значения на странице
                    document.querySelector(".countdown-wrp .days .unit").textContent = getUnitLabel(days, "день", "дня", "дней");
                    document.querySelector(".countdown-wrp .hours .unit").textContent = getUnitLabel(hours, "час", "часа", "часов");
                    document.querySelector(".countdown-wrp .minutes .unit").textContent = getUnitLabel(minutes, "минута", "минуты", "минут");
                    document.querySelector(".countdown-wrp .seconds .unit").textContent = getUnitLabel(seconds, "секунда", "секунды", "секунд");
                }, 1000);
            </script>

        </div>
        [/xfgiven_next_episode_date]


        <div class="description-full-box">
            <div>
                <div class="description-full-text">
                    <h1>Сюжет аниме: {title}</h1>
                </div>
                <p>
                    [xfvalue_kodik_plot]
                    [xfnotgiven_kodik_plot]
                    [xfvalue_shikimori_plot]
                    [xfnotgiven_shikimori_plot]
                    Нам не удалось найти описание для этого аниме!
                    [/xfnotgiven_shikimori_plot]
                    [/xfnotgiven_kodik_plot]
                </p>
            </div>
        </div>


        <div class="season-title">
            <h1>Комментарии</h1>
        </div>

        {include file="relatednews.tpl"}

        {addcomments}
        {comments}
        {navigation}
    </div>
</div>
<script> //Скрипт для скролла по элементам
    document.getElementById('description').addEventListener('click', function () {
        var descriptionBox = document.querySelector('.description-full-box');
        var descriptionBoxTop = descriptionBox.offsetTop;

        window.scrollTo({
            top: descriptionBoxTop,
            behavior: 'smooth'
        });
    });

    document.querySelector('.watch-online').addEventListener('click', function () {
        var playerBox = document.querySelector('.box-player');
        var playerBoxTop = playerBox.offsetTop;

        window.scrollTo({
            top: playerBoxTop,
            behavior: 'smooth'
        });
    });
</script>

<script> //Скрипт открытия и закрытия Списков
    // Функция для отображения/скрытия выпадающего меню
    function toggleDropdown() {
        var dropdown = document.getElementById("myDropdown");
        dropdown.classList.toggle("show");
    }

    // Закрывать меню, если пользователь кликает вне него
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn-watch-online')) {
            var dropdowns = document.getElementsByClassName("dropdown-content-watch-online");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    // Закрывать меню при убирании мыши с него
    var dropdown = document.getElementById("myDropdown");
    dropdown.addEventListener("mouseleave", function () {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });
</script>