const closeBtn = document.getElementById("close-btn");
const menuBtn = document.getElementById('menu-btn');
const linkList = document.getElementById('link-list');

// Add an event listener to the menu & close buttons:
closeBtn.addEventListener("click", toggleMenu);
menuBtn.addEventListener("click", toggleMenu);

// Define the toggleMenu() function
function toggleMenu() {
  linkList.classList.toggle("open");
  menuBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("visible");
}
