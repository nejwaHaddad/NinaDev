/* ======== MENU BURGER ======== */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

/* ======== EFFET MACHINE À ÉCRIRE ======== */
const typedTextSpan = document.getElementById("typed-text");
const textArray = [ "Développeur Web", "Passionné par JavaScript"];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, 200);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (textArray.length) setTimeout(type, 500);
});

/* ======== BOUTON REMONTER EN HAUT ======== */
const btnTop = document.getElementById("btn-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* ======== ANIMATION AU SCROLL ======== */
const elements = document.querySelectorAll("section, .carte-projet");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
});



document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert("✅ Message envoyé avec succès !");
            this.reset();
        } else {
            alert("❌ Erreur lors de l'envoi, réessayez.");
        }
    });
});
