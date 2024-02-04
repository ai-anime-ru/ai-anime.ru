[not-group=5]
	<div class="login-box" id="login_box" title="{login}">
		<div class="lb-user">
			<div class="lb-ava img-box" id="lb-ava"><img src="{foto}" title="{login}" alt="{login}" /></div>
			<div class="lb-name">
				<div>{login}</div>
				[group=1]<a href="{admin-link}" target="_blank">Админпанель</a>[/group]
			</div>
		</div>
		<ul class="lb-menu">
			<li><a href="{addnews-link}">Добавить пост</a></li>
			<li><a href="{profile-link}">Мой профиль</a></li>
			<li><a href="{pm-link}">Сообщения: <span class="badge">{new-pm}</span></a></li>
			<li><a href="{stats-link}">Статистика</a></li>
			<li><a href="{newposts-link}">Непрочитанное</a></li>
			<li><a href="/?do=lastcomments">Последние комментарии</a></li>
			<li><a href="{logout-link}">Выйти</a></li>
		</ul>
		
		<div class="lb-title">Мои списки Аниме:</div>
		<ul class="lb-menu">
			<li><a href="/mylists/ne-smotrju">Не смотрю <span class="badge"><span class="mylists-count" data-id="1"></span></span></a></li>
			<li><a href="/mylists/smotrju">Смотрю <span class="badge"><span class="mylists-count" data-id="2"></span></span></a></li>
			<li><a href="/mylists/v-planah">В планах <span class="badge"><span class="mylists-count" data-id="3"></span></span></a></li>
			<li><a href="/mylists/perestal">Перестал <span class="badge"><span class="mylists-count" data-id="4"></span></span></a></li>
			<li><a href="/mylists/peresmatrivaju">Пересматриваю <span class="badge"><span class="mylists-count" data-id="5"></span></span></a></li>
			<li><a href="/mylists/prosmotreno">Просмотрено <span class="badge"><span class="mylists-count" data-id="6"></span></span></a></li>
		</ul>
	</div>
[/not-group]

[group=5]
	<div class="login-box" id="login_box" title="Авторизация">
		<div class="lb_title">Авторизация</div>
	[vk]<div class="lb-soc">
		<div>Войти через:</div>[/vk]
		[vk]<a href="{vk_url}" target="_blank"><img src="{THEME}/images/social/vk.png" /></a>[/vk]
		[odnoklassniki]<a href="{odnoklassniki_url}" target="_blank"><img src="{THEME}/images/social/ok.png" /></a>[/odnoklassniki]
		[facebook]<a href="{facebook_url}" target="_blank"><img src="{THEME}/images/social/fb.png" /></a>[/facebook]
		[mailru]<a href="{mailru_url}" target="_blank"><img src="{THEME}/images/social/mail.png" /></a>[/mailru]
		[google]<a href="{google_url}" target="_blank"><img src="{THEME}/images/social/google.png" /></a>[/google]
		[yandex]<a href="{yandex_url}" target="_blank"><img src="{THEME}/images/social/yandex.png" /></a>[/yandex]
	[vk]</div>[/vk]
		<form method="post">
			<input type="text" name="login_name" id="login_name" placeholder="Ваш логин"/>
			<input type="password" name="login_password" id="login_password" placeholder="Ваш пароль" />
			<div class="fx-row fx-between fx-center">
				<button onclick="submit();" type="submit" title="Вход">Войти на сайт</button>
				<input name="login" type="hidden" id="login" value="submit" />
				<div class="lb-check form-checks">
					<input type="checkbox" name="login_not_save" id="login_not_save" value="1" class="switch" />
					<label for="login_not_save" class='switch_label'><span>Не запоминать меня</span></label>
				</div>
			</div>
			<div class="lb-lnk fx-row fx-between fx-center">
				<a href="{lostpassword-link}">Забыли пароль?</a>
				<a href="/?do=register" class="log-register">Регистрация</a>
			</div>
		</form>
	</div>
[/group]