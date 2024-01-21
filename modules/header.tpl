<header class="header">
	<div class="in-header-content">
		<div class="header-title">
			<a class="header-link" href="/">AI ANIME</a>
		</div>
		<div class="profile hideorno">
			<a  onclick="ShowProfile('{profile-login}', 'https://ai-anime.ru/user/{profile-login}', '1'); return false;"
				href="/user/{profile-login}">
				<Div class="icon">
					<div class="imgBx-header">
						<img src="{foto}">
					</div>
				</div>
			</a>
			<div class="profile-link-header">
				<ul>
					<li style=>
						<a href="#">
							<div class="icon"><ion-icon name="chatbubbles-outline"></ion-icon></div>
							<div class="text">Профиль</div>
						</a>
					</li>
					<li style=>
						<a href="#">
							<div class="icon"><ion-icon name="chatbubbles-outline"></ion-icon></div>
							<div class="text">Сообщения</div>
						</a>
					</li>
					<li style=>
						<a href="index.php?do=favorites">
							<div class="icon"><ion-icon name="bookmarks-outline"></ion-icon></div>
							<div class="text">Закладки</div>
						</a>
					</li>
					<li style=>
						<a href="#">
							<div class="icon"><ion-icon name="stats-chart-outline"></ion-icon></div>
							<div class="text">Статистика</div>
						</a>
					</li>
					<li>
						<a href="index.php?action=logout">
							<div class="icon"><ion-icon name="log-out-outline"></ion-icon></div>
							<div class="text" id="logoutButton">Вход</div>
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