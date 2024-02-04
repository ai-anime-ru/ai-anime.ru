<div class="form-registration">
	<h1>[registration]Регистрация[/registration][validation]Регистрация завершена[/validation]</h1>

	[validation]
	<b>Приятного просмотра （*＾-＾*）</b>
	[/validation]

	[registration]
	<div class="form-item clearfix imp">
		<label for="name">Логин:</label>
		<input type="text" name="name" id="name" required />
		<button class="button-check-name" title="Проверить доступность логина для регистрации"
			onclick="CheckLogin(); return false;" type="button" value="Проверить имя">Проверить имя</button>
	</div>
	<div id='result-registration'></div>
	<div class="form-item clearfix imp">
		<label for="password1">Пароль:</label>
		<input type="password" name="password1" id="password1" required />
	</div>
	<div class="form-item clearfix imp">
		<label for="password2">Повторите пароль:</label>
		<input type="password" name="password2" id="password2" required />
	</div>
	<div class="form-item clearfix imp">
		<label for="email">Ваш E-Mail:</label>
		<input type="text" name="email" id="email" required />
	</div>
	[sec_code]
	<div class="c-captcha">
		{reg_code}
		<input placeholder="Повторите код" title="Введите код указанный на картинке" type="text" name="sec_code"
			id="sec_code" required>
	</div>
	[/sec_code]

	<div class="form-submit">
		<button name="submit" type="submit">Регистрация</button>
	</div>
	[/registration]

	[validation]
	<div class="registration-box">
		<button class="after-reg-btn" type="button"><a href="/">На главную</a></button>
	</div>
	[/validation]

</div>