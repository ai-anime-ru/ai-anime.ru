<div class="form-wrap blc blc_n">
	<h1>[registration]Регистрация[/registration][validation]Обновление профиля[/validation]</h1>
	<div class="full-text">		
			[registration]
				<b>Здравствуйте, уважаемый посетитель нашего сайта!</b><br />
				Регистрация на нашем сайте позволит Вам быть его полноценным участником.
				Вы сможете добавлять новости на сайт, оставлять свои комментарии, просматривать скрытый текст и многое другое.
				<br />В случае возникновения проблем с регистрацией, обратитесь к <a href="/index.php?do=feedback">администратору</a> сайта.
			[/registration]
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
		<input title="Проверить доступность логина для регистрации" onclick="CheckLogin(); return false;" type="button" value="Проверить имя" />
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
	[question]
	<div class="form-item clearfix imp">
		<label>Вопрос:</label>
		<div class="form-secur"><div style="margin-bottom:10px;">{question}</div>
        <input type="text" name="question_answer" placeholder="Впишите ответ на вопрос" required />
		</div>
	</div>
	[/question]
	[sec_code]
	<div class="form-item clearfix imp">
		<label>Введите код с картинки:</label>
		<div class="form-secur">
            <input type="text" name="sec_code" id="sec_code" placeholder="Впишите код с картинки" maxlength="45" required />{reg_code}
		</div>
	</div>
	[/sec_code]
	[recaptcha]
	<div class="form-item clearfix imp">
		<label>Введите два слова с картинки:</label>
		<div class="form-secur">
			{recaptcha}
		</div>
	</div>
	[/recaptcha]
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
		<button name="submit" type="submit">Отправить</button>
	</div>		
			
</div>