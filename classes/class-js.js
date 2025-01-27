document.addEventListener("DOMContentLoaded", function () {
  // Set initial state: Show only the "navigation" content and details
  document.querySelectorAll(".content-section").forEach((section) => {
    if (section.id === "navigation-content") {
      section.style.display = "flex"; // Show the navigation content
    } else {
      section.style.display = "none"; // Hide other content sections
    }
  });

  document.querySelectorAll(".course-detail-element").forEach((item) => {
    if (item.getAttribute("data-content") === "navigation") {
      item.style.display = "flex"; // Show the navigation course details
    } else {
      item.style.display = "none"; // Hide other course details
    }
  });

  // Set the "navigation" header as active
  document
    .querySelector('.header-card-selector[data-content="navigation"]')
    .classList.add("active");

  // Add event listeners to header cards
  document.querySelectorAll(".header-card-selector").forEach((card) => {
    card.addEventListener("click", function () {
      // Remove active class from all cards and hide all content
      document
        .querySelectorAll(".header-card-selector")
        .forEach((c) => c.classList.remove("active"));
      document
        .querySelectorAll(".content-section")
        .forEach((section) => (section.style.display = "none"));
      document
        .querySelectorAll(".course-detail-element")
        .forEach((item) => (item.style.display = "none"));

      // Add active class to the clicked card
      this.classList.add("active");

      // Get the corresponding content based on data-content attribute
      const contentType = this.getAttribute("data-content");

      // Update the course head content
      document.getElementById(`${contentType}-content`).style.display = "flex";

      // Update the course details content
      document.querySelectorAll(`.course-detail-element`).forEach((el) => {
        if (el.getAttribute("data-content") === contentType) {
          el.style.display = "flex"; // Show matching course detail element
        }
      });
    });
  });
});
