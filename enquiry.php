<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PFNNX2Q3');</script>
  <!-- End Google Tag Manager -->
  
  <!-- Google Tag Manager -->
  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16756585547"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-16756585547');
</script>
  <!-- End Google Tag Manager -->

  <!-- Meta Pixel Code -->
  <script>
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '197457063420380');
    fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=197457063420380&ev=PageView&noscript=1" /></noscript>
  <!-- End Meta Pixel Code -->






  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Enquiry</title>
  <!-- Favicon -->
  <link rel="apple-touch-icon" sizes="180x180" href="./img/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="./img/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="./img/favicon-16x16.png">
  <link rel="manifest" href="./site.webmanifest">

  <!-- Google Web Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <!-- Icon Font Stylesheet -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">

  <!-- Libraries Stylesheet -->
  <link href="./lib/animate/animate.min.css" rel="stylesheet" />
  <link href="./lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

  <!-- Customized Bootstrap Stylesheet -->
  <link href="./css/bootstrap.min.css" rel="stylesheet" />

  <!-- Template Stylesheet -->
  <link href="./css/style.css?<?php echo filemtime('./css/style.css'); ?>" rel="stylesheet" />
  <link rel="stylesheet" href="./check.css?<?php echo filemtime('./check.css'); ?>" />
  <link rel="stylesheet" href="./css/enquiry.css?<?php echo filemtime('./css/enquiry.css'); ?>" />
  <link rel="stylesheet" href="./css2/style.css?<?php echo filemtime('./css2/style.css'); ?>" />
</head>

<body>
  
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PFNNX2Q3"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <div class="demo-class">
    <iframe src="https://www.youtube.com/embed/lKr-EdxFhnM?si=rVfbLDS_tgJVAEvE" id="player" title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <button class="close-demo-class" onclick="closeDemoClass()">
      <i class="fa fa-times"></i>
    </button>
  </div>



  <global-header></global-header>


  <!-- Form Start -->
  <section class="enquiry-section">
    <div class="form-container">

      <form id="enquiryForm" name="enquiryForm">
        <h1>Enquiry Form</h1>
        <p>Fill out the form below to get in touch with us.</p>
        <div class="input-container">
          <span><i class="fa fa-user"></i></span>
          <input type="text" id="name" name="name" placeholder="Name" required>
        </div>
        <div class="input-container">
          <span><i class="fa-solid fa-phone"></i></span>
          <input type="tel" id="phone" name="phone" placeholder="Phone" required>
        </div>
        <div class="input-container">
          <span><i class="fa fa-envelope"></i></span>
          <input type="email" id="email" name="email" placeholder="Email" required>
        </div>
        <div class="input-container">
          <span><i class="fa fa-hotel"></i></span>
          <select id="course" name="course" required>
            <option value="">Select Course</option>
            <option value="A320 Pre Type Rating Classes">A320 Pre Type Rating Classes</option>
            <option value="DGCA Ground Classes">DGCA Ground Classes</option>
            <option value="Radio Telephony (RTR) Classes">Radio Telephony (RTR) Classes</option>
            <option value="NIOS Prep Classes">NIOS Prep Classes</option>
          </select>
        </div>
        <div class="input-container">
          <!-- <img src="message-logo.png" alt="Message"> -->
          <span><i class="fa fa-comment"></i></span>
          <textarea id="message" name="message" placeholder="Message" required></textarea>
        </div>
        <button id="form-submit-btn" type="submit">Submit</button>
      </form>
      <img src="./assets/img/enquiry-bg-1.jpeg" alt="">
    </div>
  </section>



  <global-footer></global-footer>


  <a href="https://wa.me/8050076136?text=Hello!%20I%20would%20like%20to%20chat%20with%20you."
    class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-whatsapp"></i></a>
  <!-- JavaScript Libraries -->
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="./lib/wow/wow.min.js"></script>
  <script src="./lib/easing/easing.min.js"></script>
  <script src="./lib/waypoints/waypoints.min.js"></script>
  <script src="./lib/owlcarousel/owl.carousel.min.js"></script>

  <!-- Template Javascript -->
  <script src="./js/main.js?<?php echo filemtime('./js/main.js'); ?>"></script>
  <script src="./assets/js/main.js?<?php echo filemtime('./assets/js/main.js'); ?>"></script>
    <script>
    crm_url = 'https://841ef5d6-d95a-4a12-878f-de12e62c0cdc.neodove.com/integration/custom/6d5d8342-f65d-4a0a-a750-a0f8e8af5dad/leads'
    spread_sheet_url = 'https://script.google.com/macros/s/AKfycbycwxQkSHyTjQ9CUaKqMmWUutWbbBT2K9PmWDOZ6bT_rV-nlXdKDJa6KPlWO2otwBqfZg/exec'

    const Enquiryform = document.forms['enquiryForm']

    Enquiryform.addEventListener('submit', e => {
     
      const submitBtn = document.getElementById('form-submit-btn');
			submitBtn.disabled = true;
			submitBtn.innerText = "Submitting...";
      e.preventDefault()
      formData = new FormData(Enquiryform);
      currentDate = new Date();

      formattedDate = currentDate.getFullYear() + '-' +
        String(currentDate.getMonth() + 1).padStart(2, '0') + '-' +
        String(currentDate.getDate()).padStart(2, '0') + ' ' +
        String(currentDate.getHours()).padStart(2, '0') + ':' +
        String(currentDate.getMinutes()).padStart(2, '0') + ':' +
        String(currentDate.getSeconds()).padStart(2, '0');

      formName = 'Enquiry Form';
      formData.append('formName', formName);
      formData.append('dateTime', formattedDate);
			const jsonObject = {};
			formData.forEach((value, key) => {
				jsonObject[key] = value;
			});


			const jsonString = JSON.stringify(jsonObject);  

			console.log(jsonString);



			fetch(crm_url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: jsonString
			})
			.then(response => alert("Thank you! your form is submitted successfully."))
				.then(() => { 
				    Enquiryform.reset();
				    submitBtn.disabled = false;
					submitBtn.innerText = "Submit";
				 })
		.then((r)=>{ 
      
      fetch(spread_sheet_url, {	method: 'POST',	body: formData	})
    
    }).then((r)=>{
      window.location.href = 'thankyou/enquiry.php';
    })
        .catch(error => console.error('Error!', error.message))
    })

  </script>

  <!-- Import Header and Footer -->
  <script src="js/header-global-fl.js?<?php echo filemtime('js/header-global-fl.js'); ?>"></script>
  <script src="js/footer-global-fl.js?<?php echo filemtime('js/footer-global-fl.js'); ?>"></script>

</body>

</html>