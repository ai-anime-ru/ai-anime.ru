<!DOCTYPE html>
<html lang="ru">

<head>
	<link rel="prefetch prerender" href="/templates/ai-anime/images/miku-loader.webm">
	{headers}
	<meta name="theme-color" content="#131318">
	<meta name="HandheldFriendly" content="true">
	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="default">
	<link href="./templates/ai-anime/css/loader.css" rel="stylesheet" type="text/css">
	<link rel="shortcut icon" href="./templates/ai-anime/images/logo.png">
	<link rel="apple-touch-icon" href="./templates/ai-anime/images/logo.png">
	<link rel="apple-touch-icon" sizes="76x76" href="./templates/ai-anime/images/logo.png">
	<link rel="apple-touch-icon" sizes="120x120" href="./templates/ai-anime/images/logo.png">
	<link rel="apple-touch-icon" sizes="152x152" href="./templates/ai-anime/images/logo.png">
	<link href="./templates/ai-anime/css/main.css" rel="stylesheet" type="text/css">
	<link href="./templates/ai-anime/css/schedule.css" rel="stylesheet" type="text/css">
	<link href="./templates/ai-anime/css/fullstory.css" rel="stylesheet" type="text/css">
	<link href="./templates/ai-anime/css/plate-style.css" rel="stylesheet" type="text/css">
	<link href="./templates/ai-anime/css/sidebar.css" rel="stylesheet" type="text/css">
	<link href="./templates/ai-anime/css/fullstory.css" rel="stylesheet" type="text/css">
	<link href="./templates/ai-anime/css/ui.css" rel="stylesheet" type="text/css">
	<link href="./templates/ai-anime/css/logreg.css" rel="stylesheet" type="text/css">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.7.0/nouislider.min.css" rel="stylesheet">
	<link href="./templates/ai-anime/modules/slick/slick/slick.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="./templates/ai-anime/player/player.css">
    <script src="./templates/ai-anime/player/player.js"></script>
	<script type="module" src="./ionicons/dist/ionicons/ionicons.esm.js"></script>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-SK44Z46F4Y"></script>
	<script async src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
	<script src="./templates/ai-anime/js/moment.min.js"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() { dataLayer.push(arguments); }
		gtag('js', new Date());
		gtag('config', 'G-SK44Z46F4Y');
	</script>
<!--        
               ##
              ####
             ###### 
            ########
           ##########
          ############
         ##############
        #######  #######
       #######    #######
      #######      #######
     #######        #######
    #######          #######
   #######            #######
  #######              #######
 #######       ##       #######
#######       ####       #######    
             ######
            ########
           ##########
          ############

		ТУТ БЫЛ ELONDIE
███╗░░░███╗██████╗░████████╗██████╗░░██████
████╗░████║╚════██╗╚══██╔══╝██╔══██╗░░░██║
██╔████╔██║░█████╔╝░░░██║░░░██████╔╝░░░██║
██║╚██╔╝██║░╚═══██╗░░░██║░░░██╔══██╗░░░██║
██║░╚═╝░██║██████╔╝░░░██║░░░██║░░██║░░░██║
╚═╝░░░░░╚═╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝░██████
-->
</head>
<body>
	<div class="loader-container">
		<div class="loader">
			<div class="miku-dance"></div>
		</div>
	</div>
	<div class="welcome-message" id="welcome-message">
		<div class="welcome-message-content">
			<div class="welcome-message-text">
				<p>Перед использованием сайта, прочтите </p><a href="/privacy-policy.html"> политику
					конфиденцальности</a>
				<p>и</p><a href="/?do=rules">правила</a>
				<p>(✿◡‿◡)</p>
			</div>
			<span onclick="closeWelcomeMessage()">Готово</span>
		</div>
	</div>
	{include file="modules/user-popup-window.tpl"}
	{include file="modules/mobile-menu.tpl"}
	<div class="overlay"></div>
	<!---
	<div class="left-light"></div>
	<div class="right-light"></div>
	-->
	{AJAX}
	<div class="block-wrap">
		<div class="wrap" id="main" style="margin-left: 0px;">
			<div class="block center fx-col">
				{include file="/modules/header.tpl"}
				<section class="main__content">
					{include file="modules/main.tpl"}
				</section>
				<!-- () Выводим ошибки () -->
				{include file="/modules/footer.tpl"}
			</div>
		</div>
	</div>
	<div class="user-text-name" style="display: none;">{profile-login}</div>
	<button class="scrollToTopBtn" id="scrollToTopBtn" onclick="scrollToTop()"><ion-icon
			name="chevron-up-outline"></ion-icon></button>
	<!--LOGIN-->
	<script>
		var bodyElement = document.body;
		function openPopUp() {
			document.getElementById('overlay').classList.add('active');
			document.querySelector('.user-pop-up-window').classList.add('active');
			bodyElement.style.overflow = "hidden";

		}
		function closePopUp() {
			document.getElementById('overlay').classList.remove('active');
			document.querySelector('.user-pop-up-window').classList.remove('active');
			bodyElement.style.overflow = "visible";
		}
		document.getElementById('overlay').addEventListener('click', function (event) {
			if (event.target === this) {
				closePopUp();
			}
		});
	</script>
	<!--Скрипт мобильного меню-->
	<script>
		function toggleNav() {
			var mySidebar = document.getElementById("mySidebar");
			var overlay = document.querySelector('.overlay');

			if (mySidebar.style.width === "0px") {
				mySidebar.style.width = "330px";
				overlay.style.opacity = '1';
				overlay.style.visibility = 'visible';
				document.body.style.overflow = 'hidden';
			} else {
				mySidebar.style.width = "0";
				overlay.style.opacity = '0';
				overlay.style.visibility = 'hidden';
				document.body.style.overflow = 'auto';
			}
		}
		document.querySelector('.overlay').addEventListener('click', toggleNav);
	</script>
	<script>
		var isLoggedIn = false;
		// Функция для закрытия приветственного сообщения
		function closeWelcomeMessage() {
			document.getElementById('welcome-message').classList.remove('show');

			// Сохраняем информацию о том, что сообщение было закрыто
			localStorage.setItem('welcomeMessageClosed', 'true');
		}

		// Функция для проверки, нужно ли показывать приветственное сообщение
		setTimeout(function checkWelcomeMessage() {
			var welcomeMessageClosed = localStorage.getItem('welcomeMessageClosed');
			// Показываем приветственное сообщение, если не было закрыто ранее и пользователь не авторизован
			if (!welcomeMessageClosed && !isLoggedIn) {
				document.getElementById('welcome-message').classList.add('show');
			}
		}, 5000);

		// Вызываем функцию проверки при загрузке страницы
		var checkWelcomeMessage;
		window.onload = checkWelcomeMessage; 
	</script>
	<script>
		function changePlayer() {
			var selectedPlayer = document.getElementById("playerSelector").value;

			// Скрываем все плееры
			document.getElementById("player-kodik1").style.display = "none";
			document.getElementById("player-kodik2").style.display = "none";

			// Отображаем выбранный плеер
			document.getElementById(selectedPlayer).style.display = "block";
		}
	</script>
	<script>//Скрипт для работы кнопки вверх
		// Показать/скрыть кнопку при прокрутке
		window.onscroll = function () {
			scrollFunction();
		};

		function scrollFunction() {
			var scrollToTopBtn = document.getElementById("scrollToTopBtn");
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				scrollToTopBtn.classList.add("show");
			} else {
				scrollToTopBtn.classList.remove("show");
			}
		}

		// Плавная прокрутка вверх
		function scrollToTop() {
			var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

			if (currentPosition > 0) {
				window.requestAnimationFrame(scrollToTop);
				window.scrollTo(0, currentPosition - currentPosition / 8);
			}
		}
	</script>

	<!-- Yandex.Metrika counter -->
	<script type="text/javascript">
		(function (m, e, t, r, i, k, a) {
			m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
			m[i].l = 1 * new Date();
			for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
			k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
		})
			(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

		ym(96107019, "init", {
			clickmap: true,
			trackLinks: true,
			accurateTrackBounce: true
		});
	</script>
	<noscript>
		<div><img src="https://mc.yandex.ru/watch/96107019" style="position:absolute; left:-9999px;" alt="" /></div>
	</noscript>
	<script type="text/javascript" src="./templates/ai-anime/modules/slick/slick/slick.js"></script>
	<script type="text/javascript">
		$('.season').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					unslick: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	</script>
	<script>
		$('.sim-slider-list').slick({
			infinite: true,
			//autoplay: true,
			//autoplaySpeed: 5000,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		})
	</script>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        const logoutButtons = document.querySelectorAll("#logoutButtonOne, #logoutButtonTwo");
        const hideornoElements = document.querySelectorAll(".hideorno");
        const isLoggedIn = document.querySelector(".user-text-name").textContent.trim() !== "";
        const displayValue = isLoggedIn ? "block" : "none";
        const buttonText = isLoggedIn ? "Выход" : "Вход";

        logoutButtons.forEach((button) => {
            button.textContent = buttonText;
            button.addEventListener("click", function () {
                // Добавьте здесь логику для выхода из аккаунта, если это необходимо
            });
        });

        hideornoElements.forEach((element) => {
            element.style.display = displayValue;
        });

        const maxLength = 160;
        const descriptionElements = document.querySelectorAll(".description-short-box h3");

        descriptionElements.forEach(function (element) {
            const originalText = element.textContent.trim();
            if (originalText.length > maxLength) {
                const shortenedText = originalText.substring(0, maxLength) + "...";
                element.textContent = shortenedText;
            }
        });

        const filterLinks = document.querySelectorAll(".button-filter");

        filterLinks.forEach(function (link) {
            link.addEventListener("mouseenter", function () {
                this.nextElementSibling.classList.add('show');
            });

            link.addEventListener("mouseleave", function () {
                this.nextElementSibling.classList.remove('show');
            });

            link.addEventListener("click", function (event) {
                this.nextElementSibling.classList.toggle('show');
                event.preventDefault();
            });
        });

        const userLoginElements = document.querySelectorAll('.user-login');
        const userNotLoginElements = document.querySelectorAll('.user-notlogin');
        const profileLoginValue = '{profile-login}';

        userLoginElements.forEach(function (userLoginDiv) {
            userLoginDiv.style.display = profileLoginValue.trim() !== '' ? 'block' : 'none';
        });

        userNotLoginElements.forEach(function (userNotLoginDiv) {
            userNotLoginDiv.style.display = profileLoginValue.trim() === '' ? 'block' : 'none';
        });

        const titleMaxLength = 19;
        const titleElements = document.querySelectorAll(".title");

        titleElements.forEach(function (titleElement) {
            const originalText = titleElement.textContent.trim();

            if (originalText.length > titleMaxLength) {
                const shortenedText = originalText.substring(0, titleMaxLength) + "...";
                titleElement.textContent = shortenedText;
            }
        });

        setTimeout(function () {
            document.querySelector('.loader-container').classList.add('hide-loader');
        }, 500);

        function showLoader() {
            document.querySelector('.loader-container').classList.add('show-loader');
        }

        function hideLoader() {
            document.querySelector('.loader-container').classList.remove('show-loader');
        }

        // Проверяем наличие элемента iframe перед получением его содержимого
        const playerKodik = document.getElementById('player-kodik1');
        let kodikIframe;
        if (playerKodik) {
            kodikIframe = playerKodik.contentWindow;
        }

        function hideAllPlayers() {
            const player22 = document.getElementById('player22');
            if (player22) {
                player22.style.display = "none";
            }
            if (playerKodik) {
                playerKodik.style.display = "none";
            }
        }

        function showKodikPlayer() {
            hideAllPlayers();
            if (playerKodik) {
                playerKodik.style.display = "block";
                kodikIframe.postMessage({ key: "kodik_player_api", value: { method: "play" } }, '*');
            }
        }

        function showPlayer2() {
            hideAllPlayers();
            const player22 = document.getElementById('player22');
            if (player22) {
                player22.style.display = "block";
                if (kodikIframe) {
                    kodikIframe.postMessage({ key: "kodik_player_api", value: { method: "pause" } }, '*');
                }
            }
        }

        const watchOnlineButton = document.getElementById('watch-online');
        const player2Button = document.getElementById('player-2');

        if (watchOnlineButton && player2Button) {
            watchOnlineButton.addEventListener('click', function () {
                watchOnlineButton.classList.add('is-active');
                player2Button.classList.remove('is-active');
                showKodikPlayer();
            });

            player2Button.addEventListener('click', function () {
                player2Button.classList.add('is-active');
                watchOnlineButton.classList.remove('is-active');
                showPlayer2();
            });
        }

        const sortMain = document.querySelector('.sort-main');
        const sortList = sortMain.querySelector('.sort');
        const currentSort = sortMain.querySelector('.current-sort-text');

        if (currentSort) {
            currentSort.addEventListener('click', function (event) {
                event.stopPropagation();
                sortList.classList.toggle('open');
            });

            document.addEventListener('click', function () {
                sortList.classList.remove('open');
            });
        }

        $('.filter-downcategory').mouseleave(function () {
            $(this).hide();
        });
    });
</script>
</body>

</html>