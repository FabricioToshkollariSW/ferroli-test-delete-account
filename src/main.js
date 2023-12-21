import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/utils.css";

window.addEventListener("scroll", function () {
  var arrow = document.querySelector(".arrow");
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition < 100) {
    // ad esempio, fino a 100px di scroll
    arrow.style.animationPlayState = "running";
  } else {
    arrow.style.animationPlayState = "paused";
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scorrimento verso il basso
      document.querySelector(".header").classList.add("hidden");
    } else {
      // Scorrimento verso l'alto
      document.querySelector(".header").classList.remove("hidden");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Per i browser che non supportano lo scroll su
  },
  false
);

document.addEventListener("DOMContentLoaded", function () {
  const scrollToButton = document.getElementById("scroll-to-delete");
  const deleteProcedureSection = document.getElementById("deleteProcedure");

  scrollToButton.addEventListener("click", function () {
    deleteProcedureSection.scrollIntoView({ behavior: "smooth" });
  });
});
