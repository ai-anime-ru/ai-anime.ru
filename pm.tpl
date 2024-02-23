<div class="pm-container">
    <div class="box_in">
        <h1 class="title h1">Личные сообщения</h1>
        <div class="pm-box">
            <nav class="pm-menu" id="pm-menu">
                <ul>
                    <li>[inbox]<span>Входящие</span>[/inbox]</li>
                    <li>[outbox]<span>Отправленные</span>[/outbox]</li>
                    <li>[new_pm]<span>Написать</span>[/new_pm]</li>
                </ul>
            </nav>
            <div class="pm_status">
                <!--{pm-progress-bar}
					{proc-pm-limit} % / ({pm-limit} сообщений)
					-->
            </div>
        </div>
        [pmlist]
        <div class="pmlist">
            {pmlist}
        </div>
        [/pmlist] [newpm]
        <h4 class="heading">Создать сообщение</h4>
        <div class="addform addpm">
            <ul class="ui-form">
                <li class="form-group combo">
                    <div class="combo_field">
                        <input placeholder="Имя адресата" type="text" name="name" value="{author}" class="wide" required>
                    </div>
                    <div class="combo_field">
                        <input placeholder="Тема сообщения" type="text" name="subj" value="{subj}" class="wide" required>
                    </div>
                </li>
                <li id="comment-editor">{editor}</li>
                <li><input type="checkbox" id="outboxcopy" name="outboxcopy" value="1" checked /> <label for="outboxcopy">Сохранить сообщение в папке "Отправленные"</label></li>
                [recaptcha]
                <li>{recaptcha}</li>
                [/recaptcha] [question]
                <li class="form-group">
                    <label for="question_answer">Вопрос: {question}</label>
                    <input placeholder="Ответ" type="text" name="question_answer" id="question_answer" class="wide" required>
                </li>
                [/question]
            </ul>
            <div class="form_submit">
                [sec_code]
                <div class="c-captcha">
                    {sec_code}
                    <input placeholder="Повторите код" title="Введите код указанный на картинке" type="text" name="sec_code" id="sec_code" required>
                </div>
                [/sec_code]
                <button class="btn btn-big" type="submit" name="add"><b>Отправить</b></button>
                <button class="btn-border btn-big" type="button" onclick="dlePMPreview()">Предпросмотр</button>
            </div>
        </div>
        [/newpm]
    </div>
    [readpm]
    <div class="comment" id="{comment-id}">
        <div class="com_info">
            <div class="avatar">
                <div class="avatar-pm-box">
                    <img class="avatar-pm" src="{foto}">
                    <div class="avata-pm-text">
                        <b class="name">{author}</b>
                        <div class="up-status">
                            [online]
                            <p class="online">В сети</p>[/online] [offline]
                            <p class="offline">Не в сети</p>[/offline]
                        </div>
                        <div class="user-group">
                            <p>{group}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--[online]<span class="com_online" title="{login} - онлайн">Онлайн</span>[/online] -->
            <!--<p class="wrote-a-message">Написал сообщение:</p>-->
            <div class="com_user">
                <span>Тема: <p>{subj}</p></span>
                <span class="grey">
						{date}
					</span>
            </div>
        </div>
        <div class="com_content">
            <h4 class="title">{subj}</h4>
            <div class="text"><a href="#" title="Сообщение">Сообщение:</a> {text}</div>
            [signature]
            <div class="signature">--------------------<br />{signature}</div>[/signature]
        </div>
    </div>
    <div class="meta">
        <ul class="left">
            <li class="reply grey" title="Ответить">[reply]
                <div class="icon-pm">
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                </div>
                <span>Ответить</span>[/reply]
            </li>
            <li class="reply grey" title="Игнорировать">[ignore]
                <div class="icon-pm">
                    <ion-icon name="remove-circle-outline"></ion-icon>
                </div>
                <span>Игнорировать</span>[/ignore]
            </li>
            <li class="complaint" title="Жалоба">[complaint]
                <div class="icon-pm">
                    <ion-icon name="warning-outline"></ion-icon>
                </div>
                <span class="title_hide">Жалоба</span>[/complaint]
            </li>
            <li class="del" title="Удалить">[del]
                <div class="icon-pm">
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
                <span class="title_hide">Удалить</span>[/del]
            </li>
        </ul>
    </div>
    [/readpm]
</div>