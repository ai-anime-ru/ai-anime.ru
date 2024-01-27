<div class="user-info">
	<article class="box story">
		<div class="box_in dark_top userinfo_top">
			<ul class="title user_tab h1">
				<div class="active"><a href="#user1" data-toggle="tab">[group=5]Пользователь [/group]{usertitle}</a>
				</div>
				[not-logged]<div><a href="#user2" data-toggle="tab">Редактировать</a></div>[/not-logged]
				[not-group=5]<div>{pm}</div>[/not-group]
			</ul>
			<div class="avatar">
				<img src="{foto}">
				<span>{usertitle}</span>
			</div>
		</div>
		<div class="box_in">
			<div class="tab-content">
				<div class="tab-pane active" id="user1">
					<ul class="usinf">
						<li>
							<div class="ui-c1 grey">Имя</div>
							<div class="ui-c2">{fullname}[not-fullname]Неизвестно[/not-fullname]</div>
						</li>
						<li>
							<div class="ui-c1 grey">Место жительства</div>
							<div class="ui-c2">{land}[not-land]Неизвестно[/not-land]</div>
						</li>
						<div>
							<div class="ui-c1 grey">Зарегистрирован</div>
							<div class="ui-c2">{registration}</div>
							</li>
							<li>
								<div class="ui-c1 grey">Последняя активность</div>
								<div class="ui-c2">{lastdate}</div>
							</li>
							<li>
								<div class="ui-c1 grey">Группа</div>
								<div class="ui-c2">{status} &nbsp;&nbsp; [ignore]Игнорировать[/ignore]</div>
							</li>
							<li>
								<div class="ui-c1 grey">Статус</div>
								<div class="ui-c2">[online]<span
										style="color: #70bb39;">Онлайн</span>[/online][offline]Офлайн[/offline]</div>
								</li>
					</ul>
					<ul class="usinf">
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
					<h4 class="heading">О себе</h4>
					<p>{info}</p>
					[signature]
					<h4 class="heading">Подпись</h4>
					{signature}
					[/signature]
				</div>
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
											<textarea name="info" id="info" rows="5"
												class="wide">{editinfo}</textarea>
										</div>
										<div class="form-group">
											<label for="signature">Подпись</label>
											<textarea name="signature" id="signature" rows="3"
												class="wide">{editsignature}</textarea>
										</div>
								</div>
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
									<div class="form-group">
										<label for="altpass">Старый пароль</label>
										<input type="password" name="altpass" id="altpass" class="wide">
									</div>
									<div class="form-group">
										<label for="password1">Новый пароль</label>
										<input type="password" name="password1" id="password1" class="wide">
									</div>
									<div class="form-group">
										<label for="password2">Повторите новый пароль</label>
										<input type="password" name="password2" id="password2" class="wide">
									</div>
									<div class="form-group form-sep">
										<div class="form-group">
											<label>Двухфакторная авторизация</label>
											{twofactor-auth}
										</div>
										<div class="form-group form-sep">
											<div class="form-group">
												<label for="image">Загрузите аватар</label>
												<input type="file" name="image" id="image" class="wide">
											</div>
											<div class="form-group">
												<input placeholder="Использовать Gravatar" type="text" name="gravatar"
													id="gravatar" value="{gravatar}" class="wide">
											</div>
											<div class="form-group">
												<div class="checkbox"><input type="checkbox" name="del_foto"
														id="del_foto" value="yes" /> <label for="del_foto">Удалить
														аватар</label></div>
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
															[yandex]<a href="{yandex_url}" target="_blank"
																class="soc_ya">
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
															[google]<a href="{google_url}" target="_blank"
																class="soc_gp">
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
															[mailru]<a href="{mailru_url}" target="_blank"
																class="soc_mail">
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
												<input name="submit" type="hidden" id="submit" value="submit">
											</div>
										</div>
									</div>
									<!-- / Настройки пользователя -->
								</div>
								[/not-logged]
							</div>
						</div>
	</article>
</div>