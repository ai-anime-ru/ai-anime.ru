<div class="form-registration">
	<h1>[registration]Регистрация[/registration][validation]Обновление профиля[/validation]</h1>
	<div class="full-text">		
			[validation]
				<b>Уважаемый посетитель,</b><br />
				Ваш аккаунт был зарегистрирован на нашем сайте,
				однако информация о Вас является неполной, поэтому заполните дополнительные поля в Вашем профиле.
			[/validation]
	</div>		

[registration]
	<div class="form-item clearfix imp">
		<label for="name">Логин:</label>
		<input type="text" name="name" id="name" required />
		<button class="button-check-name" title="Проверить доступность логина для регистрации" onclick="CheckLogin(); return false;" type="button" value="Проверить имя">Проверить имя</button>
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
		<input placeholder="Повторите код" title="Введите код указанный на картинке" type="text" name="sec_code" id="sec_code" required>
	</div>
	[/sec_code]
[/registration]

[validation]
	<div class="form-item clearfix">
		<label for="fullname">Ваше Имя:</label>
		<input type="text" id="fullname" name="fullname" />
	</div>
	<div class="form-item clearfix">
		<label for="land">Место жительства:</label>
		<input type="text" id="land" name="land" />
	</div>
	<div class="form-item clearfix">
		<label for="image">Фото:</label>
		<input type="file" id="image" name="image" />
	</div>
	<div class="form-textarea">
		<label>О себе:</label>
		<textarea id="info" name="info" rows="8" /></textarea>
	</div>
	<div class="form-xfield">{xfields}</div>
[/validation]

	<div class="form-submit">
		<button name="submit" type="submit">Регистрация</button>
	</div>		
			
</div>