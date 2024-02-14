<div>
    <a href="{full-link}">
        <div class="box">
            <article class="box-shortstory[fixed] fixed_story[/fixed] shortstory">
                <div class="poster-box">
                    <div class="poster-badge">
                        [xfgiven_kodik_status_ru]<span
                            class="badge">[xfvalue_shikimori_status_ru][xfnotgiven_shikimori_status_ru][xfvalue_kodik_status_ru][/xfnotgiven_shikimori_status_ru]</span>[/xfgiven_kodik_status_ru]
                        <!--<span class="badge">Серий: [xfvalue_shikimori_episodes_aired][xfnotgiven_shikimori_episodes_aired][xfvalue_kodik_last_episode][/xfnotgiven_shikimori_episodes_aired] из [xfvalue_shikimori_episodes][xfnotgiven_shikimori_episodes][xfvalue_kodik_episodes_total][/xfnotgiven_shikimori_episodes]</span>-->
                        [xfnotgiven_kodik_status_ru]
                        <span class="badge">Нет информации</span>
                        [/xfnotgiven_kodik_status_ru]
                    </div>
                    [xfvalue_poster]
                    [xfnotgiven_poster]<img class="xfieldimage poster" src="https://ai-anime.ru/uploads/none.png"
                        alt="">[/xfnotgiven_poster]
                    {user_subscribed}
                    <div class="play-button"><ion-icon name="play-outline"></ion-icon></div>
                    <div class="title-overlay">
                        <div>
                            <h2 class="title">{title}</h2>
                            <div class="description">
                                <span class="badge">Серий:
                                    [xfvalue_kodik_last_episode]
                                    [xfnotgiven_kodik_last_episode]
                                        [xfvalue_shikimori_episodes_aired]
                                        [xfnotgiven_shikimori_episodes_aired]
                                            ?
                                        [/xfnotgiven_shikimori_episodes_aired]
                                    [/xfnotgiven_kodik_last_episode]
                                </span>
                                <div class="dot"></div>
                                <div class="release-date">
                                    [xfgiven_kodik_premiere_world]<p>
                                        [xfvalue_shikimori_aired_on][xfnotgiven_shikimori_aired_on][xfvalue_kodik_premiere_world][/xfnotgiven_shikimori_aired_on]
                                    </p>[/xfgiven_kodik_premiere_world]
                                    [xfnotgiven_kodik_premiere_world]<p>Нет информации</p>
                                    [/xfnotgiven_kodik_premiere_world]
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="title-bookmarks-icon" onclick="toggleBookmark()">
                        [add-favorites]
                        <div class="bookmark-outline-add">
                            <ion-icon title="Добавить в закладки" name="bookmark-outline">
                            </ion-icon>
                        </div>
                        [/add-favorites]

                        [del-favorites]
                        <div class="bookmark-outline-remove">
                            <ion-icon class="remove-book" title="Удалить из закладок" name="checkmark-circle-outline">
                            </ion-icon>
                            <ion-icon class="remove-book" title="Удалить из закладок" name="close-circle-outline">
                            </ion-icon>
                        </div>
                        [/del-favorites]
                    </div>
                </div>
                <div class="news-block-hidden">
                    <div class="news-block">
                        <a class="title-text">
                            {title}
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </a>
</div>