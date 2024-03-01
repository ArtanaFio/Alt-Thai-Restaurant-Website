/* Script to update salad price changes */

/* Note: Enter the format "$0.00" when updating prices. */

const namSodPrice = document.querySelector(".nam");
const beefSaladPrice = document.querySelector(".beef");
const seafoodSaladPrice = document.querySelector(".seafood");
const yumWoonSen = document.querySelector(".yum");
const crystalThaiGoongPrice = document.querySelector(".goong");
const peanutSaladPrice = document.querySelector(".peanut");
const extraDressingPrice = document.querySelector(".dressing");
const larbKaiPrice = document.querySelector(".kai");
const shrimpSomTumPrice = document.querySelector(".shrimp-som");
const veganSomTumPrice = document.querySelectorAll(".vegan-som");

/* ENTER NAM SOD PRICE */ namSodPrice.textContent = "$10.95";
/* ENTER BEEF SALAD PRICE */ beefSaladPrice.textContent = "$10.95";
/* ENTER SEAFOOD SALAD PRICE */ seafoodSaladPrice.textContent = "$12.95";
/* ENTER YUM WOON SEN PRICE */ yumWoonSen.textContent = "$10.95";
/* ENTER CRYSTAL THAI GOONG PRICE */ crystalThaiGoongPrice.textContent = "$11.95";
/* ENTER PEANUT SALAD PRICE */ peanutSaladPrice.textContent = "$7.95";
/* ENTER EXTRA PEANUT DRESSING PRICE */ extraDressingPrice.textContent = "$0.50";
/* ENTER LARB KAI PRICE */ larbKaiPrice.textContent = "$8.95";
/* ENTER SHRIMP SOM TUM PRICE */ shrimpSomTumPrice.textContent = "$11.95";

for (i = 0; i < veganSomTumPrice.length; i++) {
    veganSomTumPrice[i].textContent = "$8.95"; /* <--- ENTER TOFU AND PLAIN SOM TUM OPTIONS PRICE */
}