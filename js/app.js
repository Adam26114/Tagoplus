const nav = document.querySelector(".header");
const dropdown = document.querySelector(".dropdown");
const navitems = document.querySelectorAll(".nav-item");
const navdark = document.querySelector(".btn-sm");
const navicon = document.querySelector(".navbar-icon");
const check = document.getElementById("check");
const navradios = document.querySelectorAll(".radio");

const gettoptop = document.querySelector(".get-to-top");

const scrolldownbtn = document.querySelector(".scroll-down-btn");



check.addEventListener("change", function () {
    nav.classList.toggle("header-black");
    navdark.classList.toggle("hide");
});

gettoptop.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

scrolldownbtn.addEventListener("click", function () {
    window.scrollTo(0, 2900);
});

navitems.forEach((navitem) => {
    navitem.addEventListener("click", () => {
        console.log("hi");
        dropdown.classList.toggle("active");
    });
});

function removeActiveClass() {
    navradios.forEach((navradio) => {
        navradio.classList.remove("active");
    });
}

navradios.forEach((navradio) => {
    navradio.addEventListener("click", () => {
        removeActiveClass();
        navradio.classList.add("active");
    });
});

window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY || window.pageYOffset;
    // console.log("Scroll position: " + scrollPosition);

    if (scrollPosition >= 2900) {
        nav.classList.add("nav-white");
        gettoptop.classList.add("active");
        navdark.classList.add("active");
        navicon.classList.add("dark");
    } else {
        nav.classList.remove("nav-white");
        gettoptop.classList.remove("active");
        navdark.classList.remove("active");
        navicon.classList.remove("dark");
    }

    if (scrollPosition >= 1600) {
        scrolldownbtn.classList.add("active");
    } else {
        scrolldownbtn.classList.remove("active");
    }
});
