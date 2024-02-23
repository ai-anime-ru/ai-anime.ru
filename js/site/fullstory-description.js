 // Скрипт сокращение описания на fullstory
 document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth < 480) {
        var description = document.querySelector('.description-full-box p');
        var readMoreSpan = document.createElement('span');

        readMoreSpan.innerHTML = '... <a href="#" style="color: var(--active); text-decoration: none;">Читать далее</a>';
        readMoreSpan.style.display = 'inline';

        var fullText = description.innerHTML;
        var shortText = fullText.substring(0, 200);

        description.innerHTML = shortText;
        description.appendChild(readMoreSpan);

        readMoreSpan.onclick = function(event) {
            event.preventDefault();
            if (description.innerHTML === shortText + readMoreSpan.outerHTML) {
                description.innerHTML = fullText;
                readMoreSpan.style.display = 'none';
            }
        }
    }
});