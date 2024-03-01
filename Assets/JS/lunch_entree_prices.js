/* Script to update lunch entrees, curries, noodles & fried rice price changes */

/* Note: Enter the format "$0.00" when updating prices. */

const proteinOptionsPrice = document.querySelectorAll(".all-protein");
const shrimpPrice = document.querySelectorAll(".reg-shrimp");
const cashewProteinOptionsPrice = document.querySelectorAll(".cashew-protein");
const cashewShrimpPrice = document.querySelector(".cashew-shrimp");


for (i = 0; i < proteinOptionsPrice.length; i++) {
    proteinOptionsPrice[i].textContent = "$12.25"; /* <--- ENTER STANDARD CHICKEN, BEEF, TOFU, MIXED VEGETABLES OPTIONS PRICE */
}

for (i = 0; i < shrimpPrice.length; i++) {
    shrimpPrice[i].textContent = "$13.25"; /* <--- ENTER STANDARD SHRIMP OPTION PRICE */
}

for (i = 0; i < cashewProteinOptionsPrice.length; i++) {
    cashewProteinOptionsPrice[i].textContent = "$12.55"; /* <--- ENTER CRYSTAL THAI CASHEW CHICKEN, BEEF, TOFU MIXED VEGETABLES OPTIONS PRICE */
}

cashewShrimpPrice.textContent = "$13.55"; /* <--- ENTER CRYSTAL THAI CASHEW SHRIMP OPTION PRICE */