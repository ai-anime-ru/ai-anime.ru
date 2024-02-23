var bodyElement = document.body;

function openPopUp() {
    document.getElementById('overlay').classList.add('active');
    document.querySelector('.user-pop-up-window').classList.add('active');
    bodyElement.style.overflow = "hidden";

}

function closePopUp() {
    document.getElementById('overlay').classList.remove('active');
    document.querySelector('.user-pop-up-window').classList.remove('active');
    bodyElement.style.overflow = "visible";
}

document.getElementById('overlay').addEventListener('click', function(event) {
    if (event.target === this) {
        closePopUp();
    }
});