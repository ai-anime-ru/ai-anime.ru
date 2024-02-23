document.addEventListener("DOMContentLoaded", function() {
    var maxLength = 19;
    var textElements = document.querySelectorAll(".title");

    textElements.forEach(function(textElement) {
        var originalText = textElement.textContent;

        if (originalText.length > maxLength) {
            var shortenedText = originalText.substring(0, maxLength) + "...";
            textElement.textContent = shortenedText;
        }
    });
});