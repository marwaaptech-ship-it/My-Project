// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const menuIsOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(menuIsOpen));
    menuToggle.textContent = menuIsOpen ? "✕" : "☰";
  });

  // Close the menu after selecting a navigation link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Display the current year in the footer
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
