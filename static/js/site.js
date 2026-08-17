document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobile-nav");
toggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});
mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("proposalForm");
const success = document.getElementById("formSuccess");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  success.hidden = false;
  form.reset();
  success.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
