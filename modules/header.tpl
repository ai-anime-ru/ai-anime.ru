<header class="header">
	<div class="in-header-content">
		<div class="header-title">
			<button class="openbtn" onclick="toggleNav()"><ion-icon name="menu-outline"></ion-icon></button>
			<a class="header-link" href="/">AI ANIME</a>
		</div>
		<div class="profile" onclick="toggleDropdownHeader()">
			<a>
				<div class="icon">
					<div class="imgBx-header">
						<img src="{foto}">
					</div>
				</div>
			</a>
			<div class="profile-link-header" id="myDropdownMenu">
				<ul>
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
						<a href="index.php?subaction=userinfo&user={profile-login}">
							<div class="icon color-in-header-menu"><ion-icon name="chatbubbles-outline"></ion-icon>
							</div>
							<div class="text color-in-header-menu">Профиль</div>
						</a>
					</li>
					<li class="hideorno">
						<a href="/index.php?do=pm">
							<div class="icon color-in-header-menu"><ion-icon name="chatbubbles-outline"></ion-icon>
							</div>
							<div class="text color-in-header-menu">Сообщения</div>
						</a>
					</li>
					<li class="hideorno">
						<a href="index.php?do=favorites">
							<div class="icon color-in-header-menu"><ion-icon name="bookmarks-outline"></ion-icon></div>
							<div class="text color-in-header-menu">Закладки</div>
						</a>
					</li>
					<li class="hideorno">
						<a href="/index.php?do=stats">
							<div class="icon color-in-header-menu"><ion-icon name="stats-chart-outline"></ion-icon>
							</div>
							<div class="text color-in-header-menu">Статистика</div>
						</a>
					</li>
					[group=5]
					<li>
						<a onclick="openPopUp()">
							<div class="icon color-in-header-menu"><ion-icon name="log-out-outline"></ion-icon></div>
							<div class="text color-in-header-menu">Вход</div>
						</a>
					</li>
					[/group]
					<li class="user-login">
						<a href="/?action=logout">
							<div class="icon color-in-header-menu"><ion-icon name="log-out-outline"></ion-icon></div>
							<div class="text color-in-header-menu">Выход</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
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
	</div>
</header>

<script> //Скрипт открытия и закрытия Списков
	// Функция для отображения/скрытия выпадающего меню
	function toggleDropdownHeader() {
		var dropdown = document.getElementById("myDropdownMenu");
		dropdown.classList.toggle("show");
	}

	// Закрывать меню, если пользователь кликает вне него
	window.onclick = function (event) {
		if (!event.target.matches('.profile')) {
			var dropdowns = document.getElementsByClassName("profile-link-header");
			for (var i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
					openDropdown.classList.remove('show');
				}
			}
		}
	}

	// Закрывать меню при убирании мыши с него
	var dropdown = document.getElementById("myDropdownMenu");
	dropdown.setAttribute("SameSite", "Lax");
	dropdown.addEventListener("mouseleave", function () {
		if (dropdown.classList.contains('show')) {
			dropdown.classList.remove('show');
		}
	});

	window.onclick = function (event) { }
</script>