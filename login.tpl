
	<div class="login-box" id="login_box" title="Авторизация">
		<div class="title-text-login">
		<div class="lb_title">Авторизация</div>
		<a class="">Нет аккаунта?<a href="/?do=register" class="log-register">Зарегистрироваться</a></a>
	</div>

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
			<div class="lb-lnk fx-row fx-between fx-center lost-and-reg">
				<a href="{lostpassword-link}">Забыли пароль?</a>
			</div>
		</form>
	</div>