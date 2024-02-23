<div class="comment-box">
    <div id="addcomment" class="addcomment">
        <div class="plus_icon"><span>Добавить комментарий</span></div>
        <div class="box_in">
            <ul class="ui-form">
                [not-logged]
                <li class="form-group combo">
                    <div class="combo_field"><input placeholder="Ваше имя" type="text" name="name" id="name" class="wide" required></div>
                    <div class="combo_field combo_field_left"><input placeholder="Ваш e-mail" type="email" name="mail" id="mail" class="wide"></div>
                </li>
                [/not-logged]
                <li id="comment-editor">
                    {editor}
                </li>
                <!--
			[allow-comments-subscribe]
				<li>{comments-subscribe}</li>
			[/allow-comments-subscribe]
			[recaptcha]
				<li>{recaptcha}</li>
			[/recaptcha]
			[question]
				<li class="form-group">
					<label for="question_answer">{question}</label>
					<input placeholder="Ответ" type="text" name="question_answer" id="question_answer" class="wide" required>
				</li>
			[/question]
			-->
            </ul>
            [sec_code]
            <div class="c-captcha">
                {sec_code}
                <input placeholder="Повторите код" title="Введите код указанный на картинке" type="text" name="sec_code" id="sec_code" required>
            </div>
            [/sec_code]
            <div class="form_submit">
                <button class="btn btn-big" type="submit" name="submit" title="Отправить комментарий"><b>Отправить комментарий</b></button>
            </div>
        </div>
    </div>
</div>