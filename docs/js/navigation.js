// =========================================
// Navigation du livre
// =========================================

let pages = [];
let current = 0;

// -----------------------------------------
// Initialisation
// -----------------------------------------

window.addEventListener("DOMContentLoaded", () => {

    pages = [...document.querySelectorAll(".page")];

    showPage(0);

    const left = document.querySelector(".nav-left");
    const right = document.querySelector(".nav-right");

    if (left) {
        left.addEventListener("click", previous);
    }

    if (right) {
        right.addEventListener("click", next);
    }

});

// -----------------------------------------
// Affichage d'une page
// -----------------------------------------

function showPage(index) {

    pages.forEach((page, i) => {

        page.style.display = (i === index) ? "flex" : "none";

    });

    pages[index].classList.remove("fade");
    void pages[index].offsetWidth;
    pages[index].classList.add("fade");

    current = index;

    updateCounter();

}

// -----------------------------------------
// Compteur
// -----------------------------------------

function updateCounter() {

    const counter = document.getElementById("page-counter");

    if (!counter) return;

    // Pas de compteur sur la couverture
    if (current === 0) {

        counter.style.display = "none";
        return;

    }

    counter.style.display = "block";

    const page = current;
    const total = pages.length - 1;

    counter.textContent = page + " / " + total;

}

// -----------------------------------------
// Navigation
// -----------------------------------------

function next() {

    if (current < pages.length - 1) {

        showPage(current + 1);

    }

}

function previous() {

    if (current > 0) {

        showPage(current - 1);

    }

}

// -----------------------------------------
// Clavier
// -----------------------------------------

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") next();

    if (e.key === "ArrowLeft") previous();

    if (e.code === "Space") {

        e.preventDefault();

        next();

    }

    if (e.key === "Enter" && current === 0) {

        next();

    }

});

// -----------------------------------------
// Mobile
// -----------------------------------------

let startX = 0;

document.addEventListener("touchstart", (e) => {

    startX = e.touches[0].clientX;

});

document.addEventListener("touchend", (e) => {

    const endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {

        next();

    }

    if (endX - startX > 50) {

        previous();

    }

});