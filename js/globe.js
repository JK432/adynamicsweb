var world = document.getElementsByTagName("path");
for (var i = 0; i < world.length; i++) {
  var country = world[i];
  if (country.getAttribute("id") == "plane") continue;
  country.setAttribute("data-toggle", "tooltip");
  country.setAttribute("data-placement", "top");
  country.setAttribute("title", country.getAttribute("id"));
}

// $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });

// Function to handle click and hover events for countries
function setupCountryEvents(countryId, cardClass, url) {
  // Store the fadeOut timeout ID to clear it when necessary
  let fadeOutTimeout;

  // Function to check screen width
  function isScreenLargeEnough() {
    return window.innerWidth >= 578;
  }

  // Click event to redirect to the specific URL
  // $(`#${countryId}`).click(function () {
  //   window.location.href = url;
  // });

  // Mouseover event to show the card
  $(`#${countryId}`).mouseover(function () {
    if (isScreenLargeEnough()) {
      clearTimeout(fadeOutTimeout); // Clear any existing timeout
      $(".card").hide(); // Hide all cards
      $(`.${cardClass}`).show(); // Show the relevant card
    }
  });

  // Mouseout event to hide the card after a delay
  $(`#${countryId}`).mouseout(function () {
    if (isScreenLargeEnough()) {
      fadeOutTimeout = setTimeout(function () {
        $(`.${cardClass}`).fadeOut(500);
      }, 500);
    }
  });

  // Mouseover event to keep the card visible
  $(`.${cardClass}`).mouseover(function () {
    if (isScreenLargeEnough()) {
      clearTimeout(fadeOutTimeout); // Clear the timeout to prevent hiding
    }
  });

  // Mouseout event to hide the card after a delay
  $(`.${cardClass}`).mouseout(function () {
    if (isScreenLargeEnough()) {
      fadeOutTimeout = setTimeout(function () {
        $(`.${cardClass}`).fadeOut(500);
      }, 500);
    }
  });
}

// Setup events for each country
setupCountryEvents("south_africa", "south-africa", "../flying/cplsouth.php");
setupCountryEvents("usa", "usa", "../flying/cpltraining.php");
setupCountryEvents("argentina", "argentina", "../flying/cplargentina.php");
setupCountryEvents("tunisia", "tunisia", "../flying/cpltunisia.php");
setupCountryEvents("morocco", "morocco", "../flying/cplmorocco.php");
setupCountryEvents("india", "india", "../flying/conversion.php");
setupCountryEvents("australia", "australia","../flying/conversion.php")

function createRippleAnimation(ripple, delay) {
  gsap.fromTo(
    ripple,
    { attr: { r: 0, opacity: 1 } },
    {
      attr: { r: 25, opacity: 0 },
      duration: 2,
      ease: "power1.out",
      repeat: -1,
      delay: delay,
    }
  );
}

// Create ripple animations with delays
createRippleAnimation(".ripple1", 0);
createRippleAnimation(".ripple2", 0.5);
createRippleAnimation(".ripple3", 1);

// Function to animate a path
function animatePath(path) {
  const pathLength = path.getTotalLength();
  gsap.set(path, {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength,
  });
  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 3,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  });
}

// Animate the curved path from India to South Africa
animatePath(document.getElementById("in-sa"));
animatePath(document.getElementById("in-ag"));
animatePath(document.getElementById("in-tun"));
animatePath(document.getElementById("in-aus"));
animatePath(document.getElementById("in-mor"));
animatePath(document.getElementById("in-usa"));

const viewBoxValues = {
  usa: "100 100 200 250",
  argentina: "200 310 200 250",
  morocco: "370 180 100 125",
  tunisia: "450 180 100 125",
  south_africa: "400 280 200 250",
  india: "580 120 200 250",
  australia: "700 300 200 250",
};

const countryOrder = [
  "usa",
  "argentina",
  "morocco",
  "tunisia",
  "south_africa",
  "india",
  "australia"
];
let currentIndex = 5;

const svg = document.getElementById("world-map");
const originalViewBox = svg.getAttribute("viewBox");
const tooltip = document.getElementById("countryTooltip");

const contentIndia = document.querySelector(".india-content");
const contentTunisia = document.querySelector(".tunisia-content");
const contentSouthAfrica = document.querySelector(".south-africa-content");
const contentMorocco = document.querySelector(".morocco-content");
const contentArgentina = document.querySelector(".argentina-content");
const contentUsa = document.querySelector(".usa-content");
const contentAustralia = document.querySelector(".australia-content");

function showCountryContent(currentIndex) {
  console.log("currentIndex", currentIndex);
  
  switch (currentIndex) {
    case 0:contentUsa.classList.add("active");contentAustralia.classList.remove("active");contentIndia.classList.remove("active");contentTunisia.classList.remove("active");contentSouthAfrica.classList.remove("active");contentMorocco.classList.remove("active");contentArgentina.classList.remove("active");break;
    case 1:contentArgentina.classList.add("active");contentAustralia.classList.remove("active");contentIndia.classList.remove("active");contentTunisia.classList.remove("active");contentSouthAfrica.classList.remove("active");contentMorocco.classList.remove("active");contentUsa.classList.remove("active");break;
    case 2:contentMorocco.classList.add("active");contentAustralia.classList.remove("active");contentIndia.classList.remove("active");contentTunisia.classList.remove("active");contentSouthAfrica.classList.remove("active");contentUsa.classList.remove("active");contentArgentina.classList.remove("active");break;
    case 3:contentTunisia.classList.add("active");contentAustralia.classList.remove("active");contentIndia.classList.remove("active");contentUsa.classList.remove("active");contentSouthAfrica.classList.remove("active");contentMorocco.classList.remove("active");contentArgentina.classList.remove("active");break;
    case 4:contentSouthAfrica.classList.add("active");contentAustralia.classList.remove("active");contentIndia.classList.remove("active");contentTunisia.classList.remove("active");contentUsa.classList.remove("active");contentMorocco.classList.remove("active");contentArgentina.classList.remove("active");break;
    case 5:contentIndia.classList.add("active");contentAustralia.classList.remove("active");contentUsa.classList.remove("active");contentTunisia.classList.remove("active");contentSouthAfrica.classList.remove("active");contentMorocco.classList.remove("active");contentArgentina.classList.remove("active");break;
    case 6:contentAustralia.classList.add("active");contentUsa.classList.remove("active");contentIndia.classList.remove("active");contentTunisia.classList.remove("active");contentSouthAfrica.classList.remove("active");contentMorocco.classList.remove("active");contentArgentina.classList.remove("active");break;
  }
}



function showTooltip({countryName,flag}) {
  tooltip.innerHTML = `
    <img src="${flag}" alt="${countryName} Flag" class="tooltip-flag" />
    <span>${countryName}</span>
  `;
  gsap.fromTo(
    tooltip,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, display: "flex" }
  );
}

function hideTooltip() {
  gsap.to(tooltip, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      tooltip.style.display = "none";
    },
  });
}

const updateViewBox = (index) => {
  const country = countryOrder[index];
  const newViewBox = viewBoxValues[country];
  gsap.to(svg, {
    attr: { viewBox: newViewBox },
    duration: 1,
    ease: "power2.inOut",
  });
  // const countryNames = {
  //   india: "India",
  //   south_africa: "South Africa",
  //   usa: "USA",
  //   argentina: "Argentina",
  //   tunisia: "Tunisia",
  //   morocco: "Morocco",
  // };

  const countryNames = {
    india: {
      countryName: "India",
      flag: "/assets/img/flags/india-flag.png",
    },
    south_africa: {
      countryName: "South Africa",
      flag: "/assets/img/flags/south-africa-flag.png",
    },
    usa: {
      countryName: "USA",
      flag: "/assets/img/flags/usa-flag.png",
    },
    argentina: {
      countryName: "Argentina",
      flag: "/assets/img/flags/argentine-flag.png",
    },
    tunisia: {
      countryName: "Tunisia",
      flag: "/assets/img/flags/tunisia-flag.jpeg",
    },
    morocco: {
      countryName: "Morocco",
      flag: "/assets/img/flags/morroco-flag.png",
    },
    australia: {
      countryName: "Australia",
      flag: "/assets/img/flags/australia-flag.png"
    }
  };

  if (window.innerWidth < 578) {
    showTooltip(countryNames[country]);
    showCountryContent(currentIndex);
  } else {
    hideTooltip();
  }
};

const resetViewBox = () => {
  gsap.to(svg, {
    attr: { viewBox: originalViewBox },
    duration: 1,
    ease: "power2.inOut",
  });
};

const handleResize = () => {
  if (window.innerWidth < 578) {
    updateViewBox(currentIndex);
    $(".navigation-buttons").show();
    $(".map-sub-text").show();
  } else {
    resetViewBox();
    $(".navigation-buttons").hide();
    hideTooltip();
    $(".map-sub-text").hide();
  }
};

window.addEventListener("resize", handleResize);
handleResize();

let startX;

const handleTouchStart = (event) => {
  startX = event.touches[0].clientX;
};

const handleTouchEnd = (event) => {
  const endX = event.changedTouches[0].clientX;
  if (startX > endX + 50) {
    // Swipe left
    currentIndex = (currentIndex + 1) % countryOrder.length;
  } else if (startX < endX - 50) {
    // Swipe right
    currentIndex =
      (currentIndex - 1 + countryOrder.length) % countryOrder.length;
  }
  if (window.innerWidth < 578) {
    updateViewBox(currentIndex);
  }
};

svg.addEventListener("touchstart", handleTouchStart);
svg.addEventListener("touchend", handleTouchEnd);

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + countryOrder.length) % countryOrder.length;
  if (window.innerWidth < 578) {
    updateViewBox(currentIndex);
  }
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % countryOrder.length;
  if (window.innerWidth < 578) {
    updateViewBox(currentIndex);
  }
});
