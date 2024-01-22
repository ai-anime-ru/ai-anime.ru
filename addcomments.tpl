<!--noindex-->
<div class="add-comm-form clearfix" id="add-comm-form">
		
	<div class="ac-title">Прокомментировать</div>
	
		[not-logged]
		[vk]<div class="ac-soc" data-label="Войти через">[/vk]
			[vk]<a href="{vk_url}" target="_blank"><img src="{THEME}/images/social/vk.png" /></a>[/vk]
			[odnoklassniki]<a href="{odnoklassniki_url}" target="_blank"><img src="{THEME}/images/social/ok.png" /></a>[/odnoklassniki]
			[facebook]<a href="{facebook_url}" target="_blank"><img src="{THEME}/images/social/fb.png" /></a>[/facebook]
			[mailru]<a href="{mailru_url}" target="_blank"><img src="{THEME}/images/social/mail.png" /></a>[/mailru]
			[google]<a href="{google_url}" target="_blank"><img src="{THEME}/images/social/google.png" /></a>[/google]
			[yandex]<a href="{yandex_url}" target="_blank"><img src="{THEME}/images/social/yandex.png" /></a>[/yandex]
		[vk]</div>[/vk]
		<div class="ac-inputs fx-row">
			<input type="text" maxlength="35" name="name" id="name" placeholder="Ваше имя" />
			<input type="text" maxlength="35" name="mail" id="mail" placeholder="Ваш e-mail (необязательно)" />
		</div>
		[/not-logged]
			
		<div class="ac-textarea">{editor}</div>
			
[not-group=1]
			<div class="ac-protect">
				[question]
				<div class="form-item clearfix">
					<label>Вопрос:</label>
					<div class="form-secur"><div style="margin-bottom:10px;">{question}</div>
					<input type="text" name="question_answer" placeholder="Впишите ответ на вопрос" required />
					</div>
				</div>
				[/question]
				[sec_code]
				<div class="form-item clearfix">
					<label>Введите код с картинки:</label>
					<div class="form-secur">
						<input type="text" name="sec_code" id="sec_code" placeholder="Впишите код с картинки" maxlength="45" required />{sec_code}
					</div>
				</div>
				[/sec_code]
				[recaptcha]
				<div class="form-item clearfix">
					<label>Введите два слова с картинки:</label>
					<div class="form-secur">
						{recaptcha}
					</div>
				</div>
				[/recaptcha]
			</div>
[/not-group]

	<div class="ac-submit clearfix">
		<div class="ac-av img-box" id="ac-av"></div>
		<button name="submit" type="submit">Отправить</button>
	</div>
	
</div>
<!--/noindex-->