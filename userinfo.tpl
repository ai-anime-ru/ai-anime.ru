<div class="user-info">
	<article class="box story">
		<div class="box_in dark_top userinfo_top">
			<div class="avatar" background="{foto}">
				<div class="background-photo"><img src="{foto}"></div>
				<div class="avatar-photo-box">
					<img class="avatar-photo" src="{foto}">
				</div>
				<span>{usertitle}</span>
				[not-group=5]{pm}[/not-group]
			</div>
		</div>
		<!--[not-logged]<div><a href="#user2" data-toggle="tab">Редактировать</a></div>[/not-logged]-->
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
					</table>
				</div>
				[not-logged]
				<div class="edit-profile">
					<button href="" type="button">Редактировать профиль</button>
				</div>
				[/not-logged]
			</div>
		</div>
	</article>
</div>