/*
  BCU CompSoc Portfolio Workshop
  JavaScript controls interactive behaviour on the page.
*/

// Find the menu button and the navigation list in the HTML.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

// Open or close the mobile navigation when the button is clicked.
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    // Update the visual menu state.
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Open navigation menu" : "Close navigation menu"
    );
    navLinks.classList.toggle("is-open", !isOpen);
  });

  // Close the mobile menu after a navigation link is selected.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

// Keep the footer year up to date automatically.
const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
