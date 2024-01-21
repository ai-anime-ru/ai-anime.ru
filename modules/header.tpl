<header class="header">
	<div class="in-header-content">
		<div class="header-title">
			<a class="header-link" href="/">AI ANIME</a>
		</div>
		<div class="profile hideorno" onclick="toggleDropdownHeader()">
			<a>
				<Div class="icon">
					<div class="imgBx-header">
						<img src="{foto}">
					</div>
				</div>
			</a>
			<div class="profile-link-header" id="myDropdownHeader">
				<ul>
					<li style=>
						<a onclick="ShowProfile('{profile-login}', 'https://ai-anime.ru/user/{profile-login}', '1'); return false;"
						href="/user/{profile-login}">
							<div class="icon color-in-header-menu"><ion-icon name="chatbubbles-outline"></ion-icon></div>
							<div class="text color-in-header-menu">Профиль</div>
						</a>
					</li>
					<li style=>
						<a href="#">
							<div class="icon color-in-header-menu"><ion-icon name="chatbubbles-outline"></ion-icon></div>
							<div class="text color-in-header-menu">Сообщения</div>
						</a>
					</li>
					<li style=>
						<a href="index.php?do=favorites">
							<div class="icon color-in-header-menu"><ion-icon name="bookmarks-outline"></ion-icon></div>
							<div class="text color-in-header-menu">Закладки</div>
						</a>
					</li>
					<li style=>
						<a href="#">
							<div class="icon color-in-header-menu"><ion-icon name="stats-chart-outline"></ion-icon></div>
							<div class="text color-in-header-menu">Статистика</div>
						</a>
					</li>
					<li>
						<a href="index.php?action=logout">
							<div class="icon color-in-header-menu"><ion-icon name="log-out-outline"></ion-icon></div>
							<div class="text color-in-header-menu" id="logoutButton">Вход</div>
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
	<ul>
		[admin-link]
		<li style=>
			<a class="admin-link" href="{admin-link}">
				<div class="text">
					Админ
				</div>
			</a>
		</li>
		[/admin-link]
	</ul>
</header>

<script> //Скрипт открытия и закрытия Списков
    // Функция для отображения/скрытия выпадающего меню
	function toggleDropdownHeader() {
    var dropdown = document.getElementById("myDropdownHeader");
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
var dropdown = document.getElementById("myDropdownHeader");
dropdown.setAttribute("SameSite", "Lax");
dropdown.addEventListener("mouseleave", function () {
    if (dropdown.classList.contains('show')) {
       dropdown.classList.remove('show');
    }
});
</script>
</script>