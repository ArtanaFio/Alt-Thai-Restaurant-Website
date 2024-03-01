/* Script to update add-on prices and upcharges */

/* Note: Enter the format "$0.00" when updating prices. */

const noodlesUpcharge = document.querySelector(".sub-noodles");
const addMeat = document.querySelector(".extra-meat");
const addShrimp = document.querySelector(".extra-shrimp");
const addScallop = document.querySelector(".extra-scallop");
const addTofu = document.querySelector(".extra-tofu");
const addRice = document.querySelector(".extra-rice");
const addFriedRice = document.querySelectorAll(".extra-fried-rice");
const addNoodles = document.querySelectorAll(".extra-noodles");
const addEgg = document.querySelectorAll(".extra-egg");
const addCashews = document.querySelector(".extra-cashews");

/* ENTER PRICE TO SUBSTITUTE RICE NOODLES FOR RICE*/ noodlesUpcharge.textContent = "$1.00";

/* ENTER EXTRA CHICKEN/BEEF PRICE */ addMeat.textContent = "$3.50";
/* ENTER EXTRA SHRIMP PRICE */ addShrimp.textContent = "$5.00";
/* ENTER EXTRA SCALLOP PRICE */ addScallop.textContent = "$6.00";
/* ENTER EXTRA TOFU PRICE */ addTofu.textContent = "$3.00";

/* ENTER EXTRA JASMINE RICE PRICE */ addRice.textContent = "$2.50";


for (i = 0; i < addNoodles.length; i++) {
    addNoodles[i].textContent = "$3.00"; /* <--- ENTER EXTRA NOODLES PRICE */ 
}

for (i = 0; i < addFriedRice.length; i++) {
    addFriedRice[i].textContent = "$2.00"; /* <--- ENTER EXTRA FRIED RICE PRICE */ 
}

for (i = 0; i < addEgg.length; i++) {
    addEgg[i].textContent = "$1.25"; /* <--- ENTER EXTRA EGG PRICE */ 
}

/* ENTER EXTRA CASHEW NUTS PRICE */ addCashews.textContent = "$2.50";