<header class="header">
	<div class="in-header-content">
		<div class="header-title">
			<a class="header-link" href="/">AI ANIME</a>
		</div>
		<div class="profile">
			<a onclick="ShowProfile('{profile-login}', 'https://ai-anime.ru/user/{profile-login}', '1'); return false;"
				href="/user/{profile-login}">
				<Div class="icon">
					<div class="imgBx-header">
						<img src="{foto}">
					</div>
				</div>
			</a>
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
		<li style="--bg:#4d658c;">
			<a class="admin-link" href="{admin-link}">
				<div class="text">
					Админ
				</div>
			</a>
		</li>
		[/admin-link]
	</ul>
</header>