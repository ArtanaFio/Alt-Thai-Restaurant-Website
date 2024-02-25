/* Automatically update copyright year */

const copyrightYear = document.querySelector(".year");

copyrightYear.textContent = new Date().getFullYear();

/* Remove modal from screen */

const popup = document.getElementById("alert-hours");
const closeButton = document.querySelector(".close");

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

/* Slide modal onto the screen */

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function() {
        popup.style.display = "block";
    }, 1000);
});
