<div class="login-box" id="login_box" title="Авторизация">
	<div class="title-text-login">
		<div class="lb_title">Авторизация</div>
		<a class="log-register-title">Нет аккаунта?<a href="/?do=register"
				class="log-register">Зарегистрироваться</a></a>
	</div>

	[vk]<div class="lb-soc">
		<div>Войти через:</div>[/vk]
		[google]<a class="with-social-login" href="{google_url}">
			<div class="icon">
				<ion-icon name="logo-google"></ion-icon>
			</div>
			<b>Войти через Google</b>
		</a>[/google]
		[vk]
	</div>[/vk]
	<div class="line-login">или</div>
	<form method="post">
		<div class="login-info-input">
			<laber>Логин:</laber>
			<input placeholder="Введите логин" type="text" name="login_name" id="login_name" />
		</div>
		<div class="login-info-input">
			<div class="pass-info">
				<label>Пароль:</label>
				<a href="{lostpassword-link}">Забыли пароль?</a>
			</div>
			<input placeholder="Введите пароль" type="password" name="login_password" id="login_password" />
		</div>
		<div class="lb-check form-checks">
			<input type="checkbox" name="login_not_save" id="login_not_save" value="1" class="switch" />
			<label for="login_not_save" class='switch_label'><span>Не запоминать меня</span></label>
		</div>
		<div class="fx-row fx-between fx-center login-btn-flex">
			<button onclick="submit();" type="submit" title="Вход">Войти</button>
			<input name="login" type="hidden" id="login" value="submit" />
		</div>
	</form>
</div>