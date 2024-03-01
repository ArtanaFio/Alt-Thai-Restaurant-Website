/* Script to update appetizer price changes */

/* Note: Enter the format "$0.00" when updating prices. */

const extraSaucePrice = document.querySelector(".dipping");
const veggieSpringRollsPrice = document.querySelector(".spring");
const todMunPrice = document.querySelector(".tod");
const friedTofuPrice = document.querySelector(".fried-tofu");
const potstickersPrice = document.querySelector(".potstickers");
const curryPuffsPrice = document.querySelector(".puff");
const shrimpSpringRollsPrice = document.querySelector(".shrimp-roll");
const dumplingsPrice = document.querySelector(".steam");
const satayPrice = document.querySelector(".satay");
const coconutShrimpPrice = document.querySelector(".coconut");
const shrimpSummerRollsPrice = document.querySelector(".summer");
const veganSummerRollOptionsPrice = document.querySelectorAll(".vegan-summer")

/* ENTER EXTRA DIPPING SAUCE PRICE */ extraSaucePrice.textContent = "$0.50";
/* ENTER  VEGGIE SPRING ROLLS PRICE */ veggieSpringRollsPrice.textContent = "$5.95";
/* ENTER  TOD MUN PRICE */ todMunPrice.textContent = "$7.95";
/* ENTER  BANG BANG POTSTICKERS PRICE */ potstickersPrice.textContent = "$6.75";
/* ENTER  FRIED TOFU PRICE */ friedTofuPrice.textContent = "$5.95";
/* ENTER  CURRY PUFFS PRICE */ curryPuffsPrice.textContent = "$7.50";
/* ENTER  SHRIMP SPRING ROLLS PRICE */ shrimpSpringRollsPrice.textContent = "$7.50";
/* ENTER  STEAMED CHICKEN DUMPLINGS PRICE */ dumplingsPrice.textContent = "$7.95";
/* ENTER  CHICKEN SATAY PRICE */ satayPrice.textContent = "$9.00";
/* ENTER  COCONUT SHRIMP PRICE */ coconutShrimpPrice.textContent = "10.95";
/* ENTER  SHRIMP SUMMER ROLLS PRICE */ shrimpSummerRollsPrice.textContent = "$9.95";

for (i = 0; i < veganSummerRollOptionsPrice.length; i++) {
    veganSummerRollOptionsPrice[i].textContent = "$8.95"; /* <--- ENTER SUMMER ROLLS VEGAN OPTIONS PRICE */
}

