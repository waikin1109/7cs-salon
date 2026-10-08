const headerEl = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        headerEl.classList.add("header-scrolled");
    } else {
        headerEl.classList.remove("header-scrolled");
    }
});

const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".nav");


hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});