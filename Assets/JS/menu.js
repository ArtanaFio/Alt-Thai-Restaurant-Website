/* Automatically update copyright year */

const copyrightYear = document.querySelector(".year");

copyrightYear.textContent = new Date().getFullYear();

/* Remove modal from screen */

const popup = document.querySelector(".modal");
const closeButton = document.querySelector(".close");

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

/* Allow modal to appear on screen after a delay */

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function() {
        popup.style.display = "block";
    }, 1000);
});
