const navBar = document.querySelector(".navbar");
const navLinks = document.querySelector(".navlinks");
const hamburger = document.querySelector(".fa-bars");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navBar.classList.toggle("active");
})