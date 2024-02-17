{css_link}
<div class="room-container">
   <div class="row">
      <div class="col s12 l9">
         <div class="loader-wrapper">
            <div class="lds-ring">
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
         </div>
         <div class="room" id="room-data" data-id="{id}" data-leader="{leader}" data-shikimori_id="{shikimori_id}"
            data-mdl_id="{mdl_id}">
            <div class="room-anime room--visible">
               <div class="room-anime__wrapper">
                  <a href="#" class="room-anime__name">{title}</a>
                  <div class="room-anime__info">Создатель комнаты: <a href="/user/{leader}/">{leader}</a></div>
               </div>
               <div class="room-anime__controls">
                  <div class="room-anime__status"><i class="fa fa-clock"></i> <span class="room-status" id="room-status">На паузе</span>
                  </div>
                  <div class="room-anime__episode">Серия <span id="room-episode">{episode_num}</span></div>
               </div>
            </div>
            <div class="room__player">
               <div class="iframe-container"><iframe id="room-player" src="{iframe}" frameborder="0"
                     webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no" allowfullscreen
                     allow="autoplay *; fullscreen *"></iframe></div>
            </div>
            <div class="anime-player__controls">
               <button class="anime-player__fullscreen-btn" aria-label="Развернуть на весь экран"><i
                     class="fa fa-expand-arrows-alt"></i> <span>На весь экран</span></button>
               <button class="anime-player__info-btn" style="display:none;"><i class="fa fa-info"></i> <span>Нажмите
                     кнопку плей</span></button>
            </div>
         </div>
      </div>
      <div class="col s12 l3 sidebar">
         <div class="room-chat">
            <div>
               <div class="small-title">Чат участников:</div>
               <button class="anime-player__fullscreen-btn-close" aria-label="Свернуть"><i
                     class="fa fa-expand-arrows-alt"></i> <span>Свернуть</span></button>
               <button class="anime-player__info2-btn" style="display:none;"><i class="fa fa-info"></i> <span>Нажмите
                     кнопку плей</span></button>
            </div>
            <div class="room-chat__messages scroll" id="room-chat-scroll">
               {chat}
            </div>
            <div class="room-chat__send-form">
               <textarea name="room-chat" id="room-chat" cols="30" rows="10" placeholder="Написать в чат"></textarea>
               <button class="room-chat__send-message-btn blue-btn button-auto"><i
                     class="fa fa-paper-plane"></i></button>
            </div>
         </div>
         <div class="small-title">Настройки:</div>
         <div class="room-settings">
            <div class="room-settings__item">
               <div class="room-settings__item-title">Пригласить друзей</div>
               <div class="room-settings__item-link">
                  <div id="copy-room-link">{link}</div> <button onclick="CopyRoomLink(); return false;"><i
                        class="fa fa-copy"></i></button>
               </div>
            </div>
            <div class="room-settings__item">
               <div class="room-settings__item-title">Звук новых сообщений</div>
               <div class="switch">
                  <input class="switch-input" id="soundSwitch" type="checkbox" checked>
                  <label class="switch-for" for="soundSwitch"></label>
               </div>
            </div>
            [if_leader]<div class="room-settings__item">
               <div class="room-settings__item-title">Приватная комната</div>
               <div class="switch">
                  <input class="switch-input" id="isPublic" type="checkbox" {public}>
                  <label class="switch-for" for="isPublic"></label>
               </div>
            </div>[/if_leader]
         </div>
         <div class="small-title">Пользователи:</div>
         <div class="room-users">
            {online}
         </div>
      </div>
   </div>
</div>