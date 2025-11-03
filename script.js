// --- MENU MOBILE ---
const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu ul");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// --- ANIMATION APPARITION AU SCROLL ---
const fadeElements = document.querySelectorAll(".fade-in");

function checkVisibility() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkVisibility);
checkVisibility();

// --- BOUTON RETOUR EN HAUT ---
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
