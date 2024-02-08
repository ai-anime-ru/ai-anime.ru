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
-->
	<!--
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
				<div class="main__content">
					{include file="modules/main.tpl"}
				</div>

				<!-- () Выводим ошибки () -->
				{include file="/modules/footer.tpl"}
			</div>
		</div>
	</div>
	<div class="user-text-name" style="display: none;">{profile-login}</div>
	<button class="scrollToTopBtn" id="scrollToTopBtn" onclick="scrollToTop()"><ion-icon
			name="chevron-up-outline"></ion-icon></button>


	<script>
		// JavaScript
		document.addEventListener('DOMContentLoaded', function () {
			var sortMain = document.querySelector('.sort-main');
			var sortList = sortMain.querySelector('.sort');
			var currentSort = sortMain.querySelector('.current-sort-text');

			currentSort.addEventListener('click', function (event) {
				event.stopPropagation();
				sortList.classList.toggle('open');
			});

			document.addEventListener('click', function () {
				sortList.classList.remove('open');
			});
		});
	</script>

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

	<!-- () Обрезаем длину названия () -->
	<script>
		document.addEventListener("DOMContentLoaded", function () {
			var maxLength = 19;
			var textElements = document.querySelectorAll(".title");

			textElements.forEach(function (textElement) {
				var originalText = textElement.textContent;

				if (originalText.length > maxLength) {
					var shortenedText = originalText.substring(0, maxLength) + "...";
					textElement.textContent = shortenedText;
				}
			});
		});
	</script>


	<!-- () Смена кнопок Вход/Выход и скрытие элементов () -->
	<!-- () Смена кнопок Вход/Выход и скрытие элементов () -->
	<script type="text/javascript">
		document.addEventListener("DOMContentLoaded", function () {
			const logoutButtons = document.querySelectorAll("#logoutButtonOne, #logoutButtonTwo");
			const hideornoElements = document.querySelectorAll(".hideorno");

			const isLoggedIn = document.querySelector(".user-text-name").textContent !== "";

			const displayValue = isLoggedIn ? "block" : "none";
			const buttonText = isLoggedIn ? "Выход" : "Вход";

			logoutButtons.forEach((button) => {
				button.textContent = buttonText;
				button.addEventListener("click", function () {
					// Здесь вы можете добавить логику выхода, если это необходимо
				});
			});

			hideornoElements.forEach((element) => {
				element.style.display = displayValue;
			});
		});
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
	<!-- () Обрезаем длину описания () 
	<script>
		document.addEventListener("DOMContentLoaded", function () {
			var maxLength = 105;
			var textElements = document.querySelectorAll(".description");

			textElements.forEach(function (textElement) {
				var originalText = textElement.textContent;

				if (originalText.length > maxLength) {
					var shortenedText = originalText.substring(0, maxLength) + "...";
					textElement.textContent = shortenedText;
				}
			});
		});
	</script>
-->

	<!-- () Обрезаем длину описания в фулл стори -->
	<script>
		document.addEventListener("DOMContentLoaded", function () {
			var maxLength = 205;
			var textElements = document.querySelectorAll(".description-short-box h3");

			textElements.forEach(function (textElement) {
				var originalText = textElement.textContent;

				if (originalText.length > maxLength) {
					var shortenedText = originalText.substring(0, maxLength) + "...";
					textElement.textContent = shortenedText;
				}
			});
		});
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
	<!-- /Yandex.Metrika counter -->

	<!--Скрипт лоадера страницы-->
	<script>
		document.addEventListener("DOMContentLoaded", function () {
			setTimeout(function () {
				document.querySelector('.loader-container').classList.add('hide-loader');
			}, 500);
		});
	</script>

	<script>
		// Показать лоадер
		function showLoader() {
			document.querySelector('.loader-container').classList.remove('hide-loader')
			document.querySelector('.loader-container').classList.add('show-loader');
		}

		// Скрыть лоадер
		function hideLoader() {
			document.querySelector('.loader-container').classList.remove('show-loader');
		}
	</script>
	<script>
		document.addEventListener('DOMContentLoaded', function () {
			// Получаем все элементы с классом 'user-login' и 'user-notlogin'
			var userLoginElements = document.querySelectorAll('.user-login');
			var userNotLoginElements = document.querySelectorAll('.user-notlogin');

			// Получаем значение переменной {profile-login}
			var profileLoginValue = '{profile-login}';

			// Обходим все элементы с классом 'user-login' и обновляем их отображение в зависимости от статуса пользователя
			userLoginElements.forEach(function (userLoginDiv) {
				// Проверяем, вошел ли пользователь в аккаунт
				if (profileLoginValue.trim() !== '') {
					// Пользователь в аккаунте, отображаем содержимое user-login
					userLoginDiv.style.display = 'block';
				} else {
					// Пользователь не в аккаунте, скрываем содержимое user-login
					userLoginDiv.style.display = 'none';
				}
			});

			// Обходим все элементы с классом 'user-notlogin' и обновляем их отображение в зависимости от статуса пользователя
			userNotLoginElements.forEach(function (userNotLoginDiv) {
				// Проверяем, вошел ли пользователь в аккаунт
				if (profileLoginValue.trim() !== '') {
					// Пользователь в аккаунте, скрываем содержимое user-notlogin
					userNotLoginDiv.style.display = 'none';
				} else {
					// Пользователь не в аккаунте, отображаем содержимое user-notlogin
					userNotLoginDiv.style.display = 'block';
				}
			});
		});
	</script>

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
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
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
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		})
	</script>
</body>

</html>