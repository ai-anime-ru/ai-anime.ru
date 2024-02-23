[desktop]
<div id="navigation" class="navigation" [available=lastcomments] style="padding: 4% 8%;" [/available]>
    <div class="page_next-prev">
        <span class="page_prev" title="Предыдущая страница">
			[prev-link]<ion-icon name="chevron-back-outline"></ion-icon>[/prev-link]
		</span>
        <span class="page_next" title="Следующая страница">
			[next-link]<ion-icon name="chevron-forward-outline"></ion-icon>[/next-link]
		</span>
    </div>
    <div class="pages">{pages}</div>
</div>
[/desktop] [tablet]
[smartphone]
<div id="navigation" class="navigation" [available=lastcomments] style="padding: 4% 8%;" [/available]>
    <button id="load-more" style="display: none;"> Загрузить ещё </button>
</div>
<script>
    $(document).ready(function() {
        var loading = false;
        var currentPage = 1;
        var scrollCount = 0; // Счетчик прокруток
        $(window).scroll(function() {
            // Проверяем, не выполняется ли уже запрос
            if (!loading) {
                var triggerPoint = $('#navigation').offset().top - $(window).height();
                if ($(window).scrollTop() + $(window).height() > triggerPoint) {
                    loading = true;
                    var nextPageLink = 'https://ai-anime.ru/?cstart=' + (currentPage + 1);
                    // Дополнительная проверка: если nextPageLink не содержит страницы, выходим из функции
                    if (nextPageLink === window.location.href) {
                        return;
                    }
                    $.ajax({
                        url: nextPageLink,
                        beforeSend: function() {
                            //ShowLoading('');
                        },
                        success: function(data) {
                            $('#items_news').append($('#items_news', data).html());
                            window.history.pushState("", "", nextPageLink);
                            //HideLoading('');
                            loading = false;
                            currentPage++;
                        },
                        complete: function() {
                            loading = false;
                        }
                    });
                }
            }
            // Показываем кнопку "Загрузить ещё" после трех прокруток
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                scrollCount++;
                if (scrollCount >= 3) {
                    $('#load-more').show();
                }
            }
        });
        // Обработчик события на кнопку "Загрузить ещё"
        $('#load-more').click(function() {
            if (!loading) {
                loading = true;
                var nextPageLink = 'https://ai-anime.ru/?cstart=' + (currentPage + 1);
                $.ajax({
                    url: nextPageLink,
                    beforeSend: function() {
                        //ShowLoading('');
                    },
                    success: function(data) {
                        $('#items_news').append($('#items_news', data).html());
                        window.history.pushState("", "", nextPageLink);
                        //HideLoading('');
                        loading = false;
                        currentPage++;
                    },
                    complete: function() {
                        loading = false;
                    }
                });
            }
        });
    });
</script>
[/smartphone]
[/tablet]