const hamburger = document.querySelector(".button");
const navMenu = document.querySelector(".nab");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

$('header').addClass('stop-scroll')
