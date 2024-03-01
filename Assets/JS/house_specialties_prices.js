/* Script to update house specialties price changes */

/* Note: Enter the format "$0.00" when updating prices. */

const crystalThaiSeafoodPrice = document.querySelector(".crystal-seafood");
const padWoonSenPrice = document.querySelector(".pad");
const sizzlingPrice = document.querySelector(".sizzling");
const musselsPrice = document.querySelector(".herbal");
const fishFilletPrice = document.querySelector(".crispy");
const veggiePrice = document.querySelector(".mix-veg");
const meatOptionsPrice = document.querySelectorAll(".meat");
const seafoodOptionsPrice = document.querySelectorAll(".sea");


/* ENTER PRICE FOR CRYSTAL THAI SEAFOOD */ crystalThaiSeafoodPrice.textContent = "$20.95";
/* ENTER PRICE FOR PAD WOON SEN */ padWoonSenPrice.textContent = "$16.95";
/* ENTER PRICE FOR SIZZLING SEAFOOD */ sizzlingPrice.textContent = "$21.95";
/* ENTER PRICE FOR HERBAL MUSSELS */ musselsPrice.textContent = "$18.95";
/* ENTER PRICE FOR CRISPY FISH FILLET */ fishFilletPrice.textContent = "$20.95";
/* ENTER PRICE FOR PINEAPPLE VEGGIE OPTION*/ veggiePrice.textContent = "$16.95";

for (let i = 0; i < meatOptionsPrice.length; i++) {
    meatOptionsPrice[i].textContent = "$17.95"; /* <--- ENTER PRICE FOR PINEAPPLE MEAT AND TOFU OPTIONS */
}

for (let i = 0; i < seafoodOptionsPrice.length; i++) {
    seafoodOptionsPrice[i].textContent = "$19.95"; /* <--- ENTER PRICE FOR PINEAPPLE SEAFOOD OPTIONS */
}