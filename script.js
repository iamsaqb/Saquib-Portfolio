const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const topBtn = document.getElementById("topBtn");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
  topBtn.classList.toggle("show", window.scrollY > 500);
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener("click", e => e.preventDefault());
});
