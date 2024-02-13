/* Update tab content for links within index.html */

const head = document.querySelector("head");
const tab = document.querySelector("title");
const homeLink = document.querySelector(".home-link");
const aboutLink = document.querySelector(".about-link");
const hoursLink = document.querySelector(".hours-link");
const contactLink = document.querySelector(".contact-link");
const locationLink = document.querySelector(".location-link");
const faqLink = document.querySelector(".faq-link");

homeLink.addEventListener('click', () => {
    tab.textContent = "Crystal Thai Restaurant";
});

aboutLink.addEventListener('click', () => {
    tab.textContent = "Crystal Thai - About Us";
});

hoursLink.addEventListener('click', () => {
    tab.textContent = "Crystal Thai Hours";
});

contactLink.addEventListener('click', () => {
    tab.textContent = "Crystal Thai - Contact";
});

locationLink.addEventListener('click', () => {
    tab.textContent = "Crystal Thai - Location";
});

faqLink.addEventListener('click', () => {
    tab.textContent = "Crystal Thai - FAQs";
});

head.appendChild(tab);

/* Automatically update copyright year */

const copyrightYear = document.querySelector(".year");

copyrightYear.textContent = new Date().getFullYear();
