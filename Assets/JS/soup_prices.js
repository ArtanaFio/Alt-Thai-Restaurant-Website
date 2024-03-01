/* Script to update soup price changes */

/* Note: Enter the format "$0.00" when updating prices. */

const wontonSoupPrice = document.querySelector(".wonton");
const woonSenSoupPrice = document.querySelector(".woon");
const nonSeafoodOptionsPrice = document.querySelectorAll(".non-seafood");
const shrimpOptionPrice = document.querySelectorAll(".shrimp");
const tomYumTalayPrice = document.querySelector(".talay")
const veggieSoupPrice = document.querySelector(".veggie");

/* ENTER WONTON SOUP PRICE */ wontonSoupPrice.textContent = "$7.45";
/* ENTER WOON SEN PRICE */ woonSenSoupPrice.textContent = "$7.45";
/* ENTER TOM YUM TALAY PRICE */ tomYumTalayPrice.textContent = "$11.95";
/* ENTER VEGGIE SOUP PRICE */ veggieSoupPrice.textContent = "$7.45";

for (i = 0; i < nonSeafoodOptionsPrice.length; i++) {
    nonSeafoodOptionsPrice[i].textContent = "$8.45"; /* <--- ENTER CHICKEN, TOFU, VEGGIE OPTIONS PRICE FOR TOM YUM AND TOM KA */
}

for (i = 0; i < shrimpOptionPrice.length; i++) {
    shrimpOptionPrice[i].textContent = "$9.45"; /* <--- ENTER SHRIMP OPTION PRICE FOR TOM YUM AND TOM KA */
}