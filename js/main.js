(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // // Back to top button
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 300) {
  //     $(".back-to-top").fadeIn("slow");
  //   } else {
  //     $(".back-to-top").fadeOut("slow");
  //   }
  // });
  // $(".back-to-top").click(function () {
  //   $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
  //   return false;
  // });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
  });
})(jQuery);

// Function to handle the demo class
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    events: {
      onReady: function (event) {
        console.log("YouTube player is ready.");
      },
    },
  });
}

// Function to play the demo class and autoplay the video
function playDemoClass() {
  if (player && typeof player.playVideo === "function") {
    player.playVideo(); // Plays the video
  }
  $(".demo-class").show();
  window.scrollTo(0, 0); // Scroll to top
}

// Function to pause the video and hide the demo class
function closeDemoClass() {
  if (player && typeof player.pauseVideo === "function") {
    player.pauseVideo(); // Pauses the video
  }
  document.querySelector(".demo-class").style.display = "none";
}

// Load YouTube iframe API script
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Function to open the modal
function openModal() {
  document.getElementById("instaModal").style.display = "flex";
}

// Function to close the modal and reset the video
function closeModal() {
  const iframe = document.querySelector("#instaModal iframe");
  iframe.src = iframe.src;
  document.getElementById("instaModal").style.display = "none";
}
