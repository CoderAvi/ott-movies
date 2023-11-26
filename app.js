// Toggle Dark Mode
/*const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.toggle,.sidebar,.left-menu-icon"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});*/

// app.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Find the scroll button
  const scrollButton = document.querySelector(".featured-button a");

  // Add a click event listener to the scroll button
  scrollButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Find the target element to scroll to (e.g., "new-releases" section)
    const targetId = this.getAttribute("href").substring(1); // Get the target element's id
    const targetElement = document.getElementById(targetId);

    // Scroll to the target element smoothly
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});
