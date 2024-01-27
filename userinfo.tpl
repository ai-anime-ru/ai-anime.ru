<div class="user-info">
	<article class="box story">
		<div class="box_in dark_top userinfo_top">
			<div class="avatar" background="{foto}">
				<div class="background-photo"><img src="{foto}"></div>
				<div class="avatar-photo-box">
					<img class="avatar-photo" src="{foto}">
				</div>
				<span>{usertitle}</span>
				[not-group=5]
				{pm}
				[/not-group]
			</div>
		</div>
		[not-logged]
		<ul>
			<li><a href="{friends-link}">Мои друзья {request-count}</a></li>
			<li><a href="{feed-link}">Новости друзей</a></li>
			<li>{dofriends}</li>
		</ul>
		[/not-logged]
		<!--<div><a href="#user2" data-toggle="tab">Редактировать</a></div>-->
		[info]
		<div class="profile-info">
			<h4 class="heading-info">О себе:</h4>
			<p class="info-profile">{info}</p>
		</div>
		[/info]

		[signature]
		<h4 class="heading-info">Подпись</h4>
		<p class="info-profile">{signature}</p>
		[/signature]
		<div class="line"></div>
		<div class="box_in">
			<div class="tab-content">
				<div class="panel-clr tab-pane active" id="user1">
					<div class="table-1">
						<table>
							<tbody>
								<tr>
									<th class="ui-c1 grey">Имя</th>
									<th class="ui-c2">{fullname}[not-fullname]Неизвестно[/not-fullname]</th>
								</tr>
								<tr>
									<th class="ui-c1 grey">Место жительства</th>
									<th class="ui-c2">{land}[not-land]Неизвестно[/not-land]</th>
								</tr>
								<tr>
									<th class="ui-c1 grey">Группа</th>
									<th class="ui-c2">{status}[ignore]Игнорировать[/ignore]</th>
								</tr>
							</tbody>
						</table>
						<table>
							<tbody>
								<tr>
									<th class="ui-c1 grey">Зарегистрирован</th>
									<th class="ui-c2">{registration}</th>
								</tr>
								<tr>
									<th class="ui-c1 grey">Последняя активность
									</th>
									<th class="ui-c2">{lastdate}</th>
								</tr>
								<tr>
									<th class="ui-c1 grey">Статус</th>
									<th class="ui-c2">[online]<span
											style="color: #70bb39;">Онлайн</span>[/online][offline]Офлайн[/offline]
									</th>
								</tr>
							</tbody>
						</table>
					</div>
					<ul class="usinf ">
						<li>
							<div class="ui-c1 grey">Кол-во публикаций</div>
							<div class="ui-c2">{news-num}&nbsp;&nbsp; [ {news} ]</div>
						</li>
						<li>
							<div class="ui-c1 grey">Кол-во комментариев</div>
							<div class="ui-c2">{comm-num}&nbsp;&nbsp; [ {comments} ]</div>
						</li>
						<li>
							<div class="ui-c1 grey">Рейтинг публикаций</div>
							<div class="ui-c2">{rate}</div>
						</li>
						<li>
							<div class="ui-c1 grey">Рейтинг комментариев</div>
							<div class="ui-c2">{commentsrate}</div>
						</li>
					</ul>
					</table>
				</div>
				[not-logged]
				<div class="edit-profile">
					<button class="edit-btn" id="edit-btn" type="button">Редактировать профиль</button>
				</div>
				[/not-logged]
				[not-logged]
				<div class="user-info-edit" id="user-info-edit" style="display: none;">
					[friends]
					<div class="friends ussep">
						<span class="grey">Друзья ({friends-count}) [friends-link]Все друзья[/friends-link]
							[requests]{requests-count} ожидающих подтверждения[/requests]</span>
						{friends}
						<div class="clr"></div>
					</div>
					[/friends]
					[common-friends]
					<div class="friends ussep">
						<span class="grey">Общие друзья ({common-count}) [common-link]Все общие
							друзья[/common-link]</span>
						{common-friends}
						<div class="clr"></div>
					</div>
					[/common-friends]
					[not-logged]
					<div class="tab-pane" id="user2">
						<!-- Настройки пользователя -->
						<div id="options">
							<div class="addform">
								<div class="ui-form">
									<div class="user-1">
										<div class="form-group">
											<label for="fullname">Ваше имя</label>
											<input type="text" name="fullname" id="fullname" value="{fullname}"
												class="wide">
										</div>
										<div class="form-group">
											<label for="email">Ваш e-mail</label>
											<input type="email" name="email" id="email" value="{editmail}" class="wide"
												required>
											<div class="checkbox">{hidemail}</div>
										</div>
									</div>
									<div class="user-1">
										<div class="form-group">
											<label for="info">О себе</label>
											<textarea name="info" id="info" rows="5" class="wide">{editinfo}</textarea>
										</div>
										<div class="form-group">
											<label for="signature">Подпись</label>
											<textarea name="signature" id="signature" rows="3"
												class="wide">{editsignature}</textarea>
										</div>
									</div>
									<tr>
										<td class="label">Друзья:</td>
										<td>
											<div class="checkbox">{friends_status_f} <label
													for="friends_status_f">Разрешить добавлять меня в друзья</label>
											</div>
											<div class="checkbox">{friends_info_mail} <label
													for="friends_info_mail">Получать уведомления о предложениях дружбы
													на E-mail</label></div>
											<div class="checkbox">{friends_info_pm} <label
													for="friends_info_pm">Получать уведомления о предложениях дружбы в
													ЛС</label></div>
											<div class="checkbox">{friends_pm} <label for="friends_pm">Получать
													<strong>личные сообщения</strong> только от друзей</label></div>
										</td>
									</tr>
									<div class="user-1">
										<div class="form-group">
											<label for="land">Эу! Дай знать где ты находишься</label>
											<input type="text" name="land" id="land" value="{land}" class="wide">
										</div>
										<div class="form-group">
											<label>Часовой пояс</label>
											{timezones}
										</div>
									</div>
									<div class="form-group form-sep">
										<div class="user-1">
											<div class="form-group">
												<label for="image">Загрузите аватар</label>
												<input type="file" name="image" id="image" class="wide">
											</div>
											<div class="form-group">
												<label for="image">Использовать Gravatar</label>
												<input placeholder="Использовать Gravatar" type="text" name="gravatar"
													id="gravatar" value="{gravatar}" class="wide">
											</div>
										</div>
										<div class="checkbox"><input type="checkbox" name="del_foto" id="del_foto"
												value="yes" />
											 <label for="del_foto">Удалить аватар</label>
										</div>
										<div class="safety">
											<h4 class="heading">Безопасность</h4>
											<div class="form-group form-sep">
												<div class="form-group">
													<label for="altpass">Старый пароль</label>
													<input type="password" name="altpass" id="altpass" class="wide">
												</div>
												<div class="user-1">
													<div class="form-group">
														<label for="password1">Новый пароль</label>
														<input type="password" name="password1" id="password1"
															class="wide">
													</div>
													<div class="form-group">
														<label for="password2">Повторите новый пароль</label>
														<input type="password" name="password2" id="password2"
															class="wide">
													</div>
												</div>
												<div class="form-group form-sep">
													<div class="form-group">
														<label>Двухфакторная авторизация</label>
														{twofactor-auth}
													</div>
												</div>
											</div>
											<div class="form-group form-sep"></div>
											<div class="form-group">
												<label for="signature">Список игнорируемых пользователей:</label>
												{ignore-list}
											</div>
											<div class="form-group form-sep"></div>
											[group=1,2,3]
											<div class="form-group">
												<label for="allowed_ip">Блокировка по IP</label>
												<textarea
													placeholder="Примеры: 192.48.25.71 либо маска 129.42.0.0/16 либо со звездами 129.42.*.*"
													name="allowed_ip" id="allowed_ip" rows="5"
													class="field wide">{allowed-ip}</textarea>
											</div>
											[/group]
											<div class="form-group">
												<table class="xfields">
													{xfields}
												</table>
											</div>
											<div class="form-group">
												<fieldset>
													<legend>Привязка аккаунта с социальным сетям:</legend>
													<div class="soc_links">
														[vk]<a href="{vk_url}" target="_blank" class="soc_vk">
															<svg class="icon icon-vk">
																<use xlink:href="#icon-vk" />
															</svg>
														</a>[/vk]
														[yandex]<a href="{yandex_url}" target="_blank" class="soc_ya">
															<svg class="icon icon-ya">
																<use xlink:href="#icon-ya" />
															</svg>
														</a>[/yandex]
														[facebook]<a href="{facebook_url}" target="_blank"
															class="soc_fb">
															<svg class="icon icon-fb">
																<use xlink:href="#icon-fb" />
															</svg>
														</a>[/facebook]
														[google]<a href="{google_url}" target="_blank" class="soc_gp">
															<svg class="icon icon-gp">
																<use xlink:href="#icon-gp" />
															</svg>
														</a>[/google]
														[odnoklassniki]<a href="{odnoklassniki_url}" target="_blank"
															class="soc_od">
															<svg class="icon icon-od">
																<use xlink:href="#icon-od" />
															</svg>
														</a>[/odnoklassniki]
														[mailru]<a href="{mailru_url}" target="_blank" class="soc_mail">
															<svg class="icon icon-mail">
																<use xlink:href="#icon-mail" />
															</svg>
														</a>[/mailru]
													</div>
												</fieldset>
											</div>
											<div class="form-group">
												<fieldset>
													<legend>Список привязанных социальных сетей:</legend>
													{social-list}
												</fieldset>
											</div>
											<div class="form-group">
												<div class="checkbox">{news-subscribe}</div>
											</div>
											<div class="form-group">
												<div class="checkbox">{comments-reply-subscribe}</div>
											</div>
											<div class="form-group">
												<div class="checkbox">{unsubscribe}</div>
											</div>
										</div>
										<div class="form_submit">
											<button class="btn btn-big" name="submit"
												type="submit"><b>Сохранить</b></button>
											[delete]<b>Удалить аккаунт</b>[/delete]
											<button class="close-btn" id="close-btn" type="button">Закрыть
												редактор</button>
											<input name="submit" type="hidden" id="submit" value="submit">
										</div>
									</div>
								</div>
								<!-- / Настройки пользователя -->
							</div>
						</div>
					</div>
				</div>
				[/not-logged]
			</div>
		</div>
	</article>
</div>

<script>
	document.getElementById('edit-btn').addEventListener('click', function () {
		var userInfoEdit = document.getElementById('user-info-edit');

		// Проверка наличия элемента
		if (userInfoEdit) {
			// Переключение класса для анимации
			(userInfoEdit.classList.toggle('expanded'));
			userInfoEdit.style.height = userInfoEdit.scrollHeight + 'px';
			userInfoEdit.style.display = 'block';

			// Если блок отображается, изменяем текст кнопки, иначе возвращаем исходный текст
			if (userInfoEdit.classList.contains('expanded')) {
				userInfoEdit.style.height = userInfoEdit.scrollHeight + 'px';
				userInfoEdit.style.display = 'block';
				document.getElementById('edit-btn').innerText = 'Закрыть редактор';
			} else {
				userInfoEdit.style.height = '0';
				userInfoEdit.addEventListener('transitionend', function () {
					userInfoEdit.style.display = '';
					document.getElementById('edit-btn').innerText = 'Редактировать профиль';
				}, { once: true });
			}
		}
	});


	document.getElementById('close-btn').addEventListener('click', function () {
		var userInfoEdit = document.getElementById('user-info-edit');

		// Скрытие блока
		userInfoEdit.classList.remove('expanded');
		userInfoEdit.style.height = '0';
		userInfoEdit.addEventListener('transitionend', function () {
			userInfoEdit.style.display = '';
			document.getElementById('edit-btn').innerText = 'Редактировать профиль';
		}, { once: true });
	});
</script>

<script>
	document.getElementsByClassName('edit-btn')[0].addEventListener('click', function () {
		var editBox = document.querySelector('.user-info-edit');

		if (editBox) {
			var offset = 70;
			var editBoxTop = editBox.getBoundingClientRect().top + window.scrollY - offset;

			setTimeout(function () {
				window.scrollTo({
					top: editBoxTop,
					behavior: 'smooth'
				});
			}, 200);
		}
	});

	document.getElementsByClassName('close-btn')[0].addEventListener('click', function () {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
</script>