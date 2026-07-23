import "./style.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const content = document.querySelector(".content");
const navbarHome = document.querySelector(".navbar-home");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarContact = document.querySelector(".navbar-contact");

loadHome();
navbarHome.classList.add("active");

function clearContent() {
    content.innerHTML = "";
}

function setActive(tab) {
    navbarHome.classList.remove("active");
    navbarMenu.classList.remove("active");
    navbarContact.classList.remove("active");

    tab.classList.add("active");
}

navbarHome.addEventListener("click", () => {
    setActive(navbarHome);
    clearContent();
    loadHome();
});

navbarMenu.addEventListener("click", () => {
    setActive(navbarMenu);
    clearContent();
    loadMenu();
});

navbarContact.addEventListener("click", () => {
    setActive(navbarContact);
    clearContent();
    loadContact();
});
