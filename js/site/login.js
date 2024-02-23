document.addEventListener("DOMContentLoaded", function() {
    const logoutButtons = document.querySelectorAll("#logoutButtonOne, #logoutButtonTwo");
    const hideornoElements = document.querySelectorAll(".hideorno");

    const isLoggedIn = document.querySelector(".user-text-name").textContent !== "";

    const displayValue = isLoggedIn ? "block" : "none";
    const buttonText = isLoggedIn ? "Выход" : "Вход";

    logoutButtons.forEach((button) => {
        button.textContent = buttonText;
        button.addEventListener("click", function() {
            // Здесь вы можете добавить логику выхода, если это необходимо
        });
    });

    hideornoElements.forEach((element) => {
        element.style.display = displayValue;
    });
});