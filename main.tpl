<!DOCTYPE html>
<html lang="ru">

<head>
	<link rel="prefetch prerender" href="/templates/ai-anime/images/miku-loader.gif">
	{headers}
	<meta name="theme-color" content="#131318">
	<meta name="HandheldFriendly" content="true">
	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="default">
	<link href="https://ai-anime.ru/templates/ai-anime/css/loader.css" rel="stylesheet" type="text/css">
	<link rel="shortcut icon" href="https://ai-anime.ru/templates/ai-anime/images/logo.png">
	<link rel="apple-touch-icon" href="https://ai-anime.ru/templates/ai-anime/images/logo.png">
	<link rel="apple-touch-icon" sizes="76x76" href="https://ai-anime.ru/templates/ai-anime/images/logo.png">
	<link rel="apple-touch-icon" sizes="120x120" href="https://ai-anime.ru/templates/ai-anime/images/logo.png">
	<link rel="apple-touch-icon" sizes="152x152" href="https://ai-anime.ru/templates/ai-anime/images/logo.png">
	<link href="https://ai-anime.ru/templates/ai-anime/css/header.css" rel="stylesheet" type="text/css">
	<link href="https://ai-anime.ru/templates/ai-anime/css/main.css" rel="stylesheet" type="text/css">
	<link href="https://ai-anime.ru/templates/ai-anime/css/schedule.css" rel="stylesheet" type="text/css">
	<link href="https://ai-anime.ru/templates/ai-anime/css/fullstory.css" rel="stylesheet" type="text/css">
	<link href="https://ai-anime.ru/templates/ai-anime/css/plate-style.css" rel="stylesheet" type="text/css">
	<link href="https://ai-anime.ru/templates/ai-anime/css/sidebar.css" rel="stylesheet" type="text/css">
	<link href="https://ai-anime.ru/templates/ai-anime/css/full-story.css" rel="stylesheet" type="text/css">
	<link href="https://ai-anime.ru/templates/ai-anime/css/ui.css" rel="stylesheet" type="text/css">
	<link href="https://ai-anime.ru/templates/ai-anime/css/pm.css" rel="stylesheet" type="text/css">
	<link href="https://ai-anime.ru/templates/ai-anime/css/logreg.css" rel="stylesheet" type="text/css">
	<script type="module" src="https://ai-anime.ru/ionicons/dist/ionicons/ionicons.esm.js"></script>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-SK44Z46F4Y"></script>
	<script async src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
	<script src="https://ai-anime.ru/templates/ai-anime/js/moment.min.js"></script>
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

	{include file="modules/user-popup-window.tpl"}

	<div class="overlay"></div>
	<!---
	<div class="left-light"></div>
	<div class="right-light"></div>
	-->
	{AJAX}
	

	<div class="block-wrap">
		<button onclick="openPopUp()">Open Pop-up</button>
		<div class="wrap" id="main" style="margin-left: 0px;">
			<div class="block center fx-col">
				{include file="/modules/header.tpl"}
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
				<section class="main__content">
					{include file="modules/main.tpl"}
				</section>
				[not-aviable=main]{content}[/not-aviable]
				<!-- () Выводим ошибки () -->
				{info}
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
			
				document.getElementById('overlay').addEventListener('click', function(event) {
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

	<script>
		$('#show-more-today').on('click', function () {
			$('.list_today').show();
			$('#show-more-today').remove();
			return false;
		});
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

	<script> //Скрипт галереии
		function Sim(sldrId) {

			let id = document.getElementById(sldrId);
			if (id) {
				this.sldrRoot = id
			}
			else {
				this.sldrRoot = document.querySelector('.sim-slider')
			};

			// Carousel objects
			this.sldrList = this.sldrRoot.querySelector('.sim-slider-list');
			this.sldrElements = this.sldrList.querySelectorAll('.sim-slider-element');
			this.sldrElemFirst = this.sldrList.querySelector('.sim-slider-element');
			this.leftArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-left');
			this.rightArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-right');
			this.indicatorDots = this.sldrRoot.querySelector('div.sim-slider-dots');

			// Initialization
			this.options = Sim.defaults;
			Sim.initialize(this)
		};

		Sim.defaults = {

			// Default options for the carousel
			loop: true,     // Бесконечное зацикливание слайдера
			auto: true,     // Автоматическое пролистывание
			interval: 5000, // Интервал между пролистыванием элементов (мс)
			arrows: true,   // Пролистывание стрелками
			dots: true      // Индикаторные точки
		};

		Sim.prototype.elemPrev = function (num) {
			num = num || 1;

			let prevElement = this.currentElement;
			this.currentElement -= num;
			if (this.currentElement < 0) this.currentElement = this.elemCount - 1;

			if (!this.options.loop) {
				if (this.currentElement == 0) {
					this.leftArrow.style.display = 'none'
				};
				this.rightArrow.style.display = 'block'
			};

			this.sldrElements[this.currentElement].style.opacity = '1';
			this.sldrElements[prevElement].style.opacity = '0';

			if (this.options.dots) {
				this.dotOn(prevElement); this.dotOff(this.currentElement)
			}
		};

		Sim.prototype.elemNext = function (num) {
			num = num || 1;

			let prevElement = this.currentElement;
			this.currentElement += num;
			if (this.currentElement >= this.elemCount) this.currentElement = 0;

			if (!this.options.loop) {
				if (this.currentElement == this.elemCount - 1) {
					this.rightArrow.style.display = 'none'
				};
				this.leftArrow.style.display = 'block'
			};

			this.sldrElements[this.currentElement].style.opacity = '1';
			this.sldrElements[prevElement].style.opacity = '0';

			if (this.options.dots) {
				this.dotOn(prevElement); this.dotOff(this.currentElement)
			}
		};

		Sim.prototype.dotOn = function (num) {
			this.indicatorDotsAll[num].style.cssText = 'background-color:#BBB; cursor:pointer;'
		};

		Sim.prototype.dotOff = function (num) {
			this.indicatorDotsAll[num].style.cssText = 'background-color:#556; cursor:default;'
		};

		Sim.initialize = function (that) {

			// Constants
			that.elemCount = that.sldrElements.length; // Количество элементов

			// Variables
			that.currentElement = 0;
			let bgTime = getTime();

			// Functions
			function getTime() {
				return new Date().getTime();
			};
			function setAutoScroll() {
				that.autoScroll = setInterval(function () {
					let fnTime = getTime();
					if (fnTime - bgTime + 10 > that.options.interval) {
						bgTime = fnTime; that.elemNext()
					}
				}, that.options.interval)
			};

			// Start initialization
			if (that.elemCount <= 1) {   // Отключить навигацию
				that.options.auto = false; that.options.arrows = false; that.options.dots = false;
				that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
			};
			if (that.elemCount >= 1) {   // показать первый элемент
				that.sldrElemFirst.style.opacity = '1';
			};

			if (!that.options.loop) {
				that.leftArrow.style.display = 'none';  // отключить левую стрелку
				that.options.auto = false; // отключить автопркрутку
			}
			else if (that.options.auto) {   // инициализация автопрокруки
				setAutoScroll();
				// Остановка прокрутки при наведении мыши на элемент
				that.sldrList.addEventListener('mouseenter', function () { clearInterval(that.autoScroll) }, false);
				that.sldrList.addEventListener('mouseleave', setAutoScroll, false)
			};

			if (that.options.arrows) {  // инициализация стрелок
				that.leftArrow.addEventListener('click', function () {
					let fnTime = getTime();
					if (fnTime - bgTime > 1000) {
						bgTime = fnTime; that.elemPrev()
					}
				}, false);
				that.rightArrow.addEventListener('click', function () {
					let fnTime = getTime();
					if (fnTime - bgTime > 1000) {
						bgTime = fnTime; that.elemNext()
					}
				}, false)
			}
			else {
				that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
			};

			if (that.options.dots) {  // инициализация индикаторных точек
				let sum = '', diffNum;
				for (let i = 0; i < that.elemCount; i++) {
					sum += '<span class="sim-dot"></span>'
				};
				that.indicatorDots.innerHTML = sum;
				that.indicatorDotsAll = that.sldrRoot.querySelectorAll('span.sim-dot');
				// Назначаем точкам обработчик события 'click'
				for (let n = 0; n < that.elemCount; n++) {
					that.indicatorDotsAll[n].addEventListener('click', function () {
						diffNum = Math.abs(n - that.currentElement);
						if (n < that.currentElement) {
							bgTime = getTime(); that.elemPrev(diffNum)
						}
						else if (n > that.currentElement) {
							bgTime = getTime(); that.elemNext(diffNum)
						}
						// Если n == that.currentElement ничего не делаем
					}, false)
				};
				that.dotOff(0);  // точка[0] выключена, остальные включены
				for (let i = 1; i < that.elemCount; i++) {
					that.dotOn(i)
				}
			}
		};

		function toggleBookmark() {
			var xhr = new XMLHttpRequest();
			var bookmarkIcon = document.getElementsByClassName("bookmarks-icon")[0];
			setTimeout(function () { window.location.reload(); }, 0);
		}
		new Sim();
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
	document.addEventListener('DOMContentLoaded', function() {
		// Получаем элементы <div> с классами user-login и user-notlogin
		var userLoginDiv = document.querySelector('.user-login');
		var userNotLoginDiv = document.querySelector('.user-notlogin');

		// Получаем значение переменной {profile-login}
		var profileLoginValue = '{profile-login}';

		// Проверяем, вошел ли пользователь в аккаунт
		if (profileLoginValue.trim() !== '') {
			// Пользователь в аккаунте, отображаем содержимое user-login, скрываем содержимое user-notlogin
			userLoginDiv.style.display = 'block';
			userNotLoginDiv.style.display = 'none';
		} else {
			// Пользователь не в аккаунте, скрываем содержимое user-login, отображаем содержимое user-notlogin
			userLoginDiv.style.display = 'none';
			userNotLoginDiv.style.display = 'block';
		}
	});
	</script>
</body>

</html>