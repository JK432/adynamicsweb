document.addEventListener("DOMContentLoaded", () => {
  const demoTrigger = document.getElementById("demo-trigger");
  const demoBookingSection = document.querySelector(
    "section.demo-booking-section"
  );
  const demoContainer = document.querySelector(
    "section.demo-booking-section .demo-booking-container"
  );
  const demoClose = document.querySelector("#demo-close");

  demoTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    demoBookingSection.style.display = "flex";
    demoBookingSection.classList.add("fade-in");
    demoBookingSection.classList.remove("fade-out");
    setTimeout(() => {
      demoContainer.classList.add("active");
    }, 220);
  });

  demoClose.addEventListener("click", () => {
    demoContainer.classList.remove("active");

    setTimeout(() => {
      demoBookingSection.classList.add("fade-out");
      demoBookingSection.classList.remove("fade-in");
      setTimeout(() => {
        demoBookingSection.style.display = "none";
      }, 200);
    }, 200);
  });
});
