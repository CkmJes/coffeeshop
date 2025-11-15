// script.js
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in-down').forEach(el => {
    el.classList.add('animated');
  });
});




  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const dropdown = document.querySelector(".dropdown");

  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  dropdown.addEventListener("click", () => {
    if (window.innerWidth <= 850) {
      dropdown.classList.toggle("open");
    }
  });
