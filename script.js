console.log("Script Loaded");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    console.log("Clicked");
    navLinks.classList.toggle("active");
});
