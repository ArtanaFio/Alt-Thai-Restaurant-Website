/* Script to update dinner entrees, curries, noodles & fried rice price changes */

/* Note: Enter the format "$0.00" when updating prices. */

const veggiePrice = document.querySelectorAll(".mix-veg");
const meatOptionsPrice = document.querySelectorAll(".meat");
const seafoodOptionsPrice = document.querySelectorAll(".sea");
const specialVeggiePrice = document.querySelectorAll(".special-veg");
const specialMeatOptionsPrice = document.querySelectorAll(".special-meat");
const specialSeafoodOptionsPrice = document.querySelectorAll(".special-seafood");
const seafoodPrice = document.querySelector('.seafood');
const talayWoonSenPrice = document.querySelector(".talay");
const spicyEggplantPrice = document.querySelector(".spicy");
const grilledSalmonPrice = document.querySelector(".salmon");
const eggplantDelightPrice = document.querySelector(".delight");
const crystalFriedRicePrice = document.querySelector(".crystal-fried-rice");

for (let i = 0; i < veggiePrice.length; i++) {
    veggiePrice[i].textContent = '$16.50'; /* <--- ENTER PRICE FOR ALL STANDARD ENTREE MIX VEGGETABLE OPTIONS*/
}

for (let i = 0; i < meatOptionsPrice.length; i++) {
    meatOptionsPrice[i].textContent = '$16.95'; /* <--- ENTER PRICE FOR ALL STANDARD ENTREE MIX VEGGETABLE OPTIONS*/
}

for (let i = 0; i < seafoodOptionsPrice.length; i++) {
    seafoodOptionsPrice[i].textContent = '$18.95'; /* <--- ENTER PRICE FOR ALL STANDARD ENTREE MIX VEGGETABLE OPTIONS*/
}

for (let i = 0; i < specialVeggiePrice.length; i++) {
    specialVeggiePrice[i].textContent = '$16.95'; /* <--- ENTER PRICE FOR THE MIX VEGGETABLE OPTION FOR CRYSTAL THAI CASHEW, FRESH GARLIC BLACK PEPPER, PAD PIK KING, CRYSTAL THAI PEANUT */
}

for (let i = 0; i < specialMeatOptionsPrice.length; i++) {
    specialMeatOptionsPrice[i].textContent = '$17.95'; /* <--- ENTER PRICE FOR ALL CHICKEN/BEEF/TOFU OPTIONS FOR CRYSTAL THAI CASHEW, FRESH GARLIC BLACK PEPPER, PAD PIK KING, CRYSTAL THAI PEANUT */
}

for (let i = 0; i < specialSeafoodOptionsPrice.length; i++) {
    specialSeafoodOptionsPrice[i].textContent = '$19.95'; /* <--- ENTER PRICE FOR ALL SEAFOOD OPTIONS FOR CRYSTAL THAI CASHEW, FRESH GARLIC BLACK PEPPER, PAD PIK KING */
}

/* ENTER SEAFOOD PRICE (PAD THAI) */ seafoodPrice.textContent = "$20.95";
/* ENTER CRYSTAL FRIED RICE PRICE */ crystalFriedRicePrice.textContent = "$20.95";
/* ENTER TALAY WOON SEN PRICE */ talayWoonSenPrice.textContent = "$22.95";
/* ENTER SPICY EGGPLANT PRICE */ spicyEggplantPrice.textContent = "$17.95";
/* ENTER GRILLED SALMON PRICE */ grilledSalmonPrice.textContent = "$21.95";
/* ENTER EGGPLANT DELIGHT PRICE */ eggplantDelightPrice.textContent = "$16.95";