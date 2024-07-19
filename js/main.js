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


function playDemoClass(){
  src = "https://www.youtube.com/embed/lKr-EdxFhnM?si=rVfbLDS_tgJVAEvE";
  $('#player').attr('src', src);
  $('.demo-class').show();
  window.scrollTo(0, 0);
}

function closeDemoClass() {
  $('.demo-class').hide();
  const iframe = document.getElementById('player');
  const src = iframe.src;
  iframe.src = ''; // Temporarily set the src to empty to stop the video
  iframe.src = src; // Reset the src to restart the video
}



