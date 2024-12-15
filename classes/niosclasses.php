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
      src="https://www.facebook.com/tr?id=197457063420380&ev=PageView&noscript=1" />
  </noscript>
  <!-- Google tag (gtag.js) -->
  


  <meta charset="utf-8" />
  <title>NIOS Prep Classes | ADynamics</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="" name="keywords" />
  <meta content="" name="description" />

  <!-- Favicon -->
  <link rel="apple-touch-icon" sizes="180x180" href="../img/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="../img/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../img/favicon-16x16.png">
  <link rel="manifest" href="../site.webmanifest">

  <!-- Google Web Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <!-- Icon Font Stylesheet -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

  <!-- Libraries Stylesheet -->
  <link href="../lib/animate/animate.min.css" rel="stylesheet" />
  <link href="../lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

  <!-- Customized Bootstrap Stylesheet -->
  <link href="../css/bootstrap.min.css" rel="stylesheet" />

  <!-- Template Stylesheet -->
  <link rel="stylesheet" href="../css/style.css?<?php echo filemtime('../css/style.css'); ?>" />
  <link rel="stylesheet" href="../css/course-details.css?<?php echo filemtime('../css/course-details.css'); ?>" />
  <link rel="stylesheet" href="../css/hero.css?<?php echo filemtime('../css/hero.css'); ?>">
  <link rel="stylesheet" href="../check.css?<?php echo filemtime('../check.css'); ?>">
  <link rel="stylesheet" href="../css2/style.css?<?php echo filemtime('../css2/style.css'); ?>">

  <!-- Custom styles only for the classes details pages -->
  <link rel="stylesheet" href="./styles.css?<?php echo filemtime('./styles.css'); ?>" />

  <style>
    div.timeline-container ul.timeline::before {
      display: none !important;
    }

    section.section-course-details {
      min-height: max-content !important;
    }
  </style>

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
    <button class="close-demo-class" onclick="closeDemoClass()"><i class="fa fa-times"></i></button>
  </div>


  <!-- Top bar and Header -->
  <global-header></global-header>


  <section class="section-course-head pt-5">
    <div class="container-lg pt-5 mt-2">
      <div class="d-flex align-items-center justify-content-center gap-5">
        <!-- card 1 -->
        <div class="header-card-selector active" data-content="navigation">
          <img src="./images/physics-study.jpg" alt="Navigation" title="" />
        </div>
        <!-- card 2 -->
        <div class="header-card-selector" data-content="regulations">
          <img src="./images/mathematics.jpg" alt="Regulations" title="" />
        </div>
      </div>

      <!-- Dynamic Content Sections -->
      <div class="course-content pt-3 mt-5 text-center">
        <div id="navigation-content" class="content-section active">
          <h1 class="fw-bold text-center" style="font-size: 36px; color: #49AAAA;">Physics</h1>
        </div>
        <div id="regulations-content" class="content-section" style="display: none;">
          <h1 class="fw-bold text-center" style="font-size: 36px; color: #49AAAA;">Mathematics</h1>
        </div>
      </div>
    </div>
  </section>

  <!-- Section to show the selected course details -->
  <section class="section-course-details bg-primary-bg">
    <div class="container timeline-container course-detail-element navigation" data-content="navigation">
      <ul class="timeline">
        <li class="timeline-inverted">
          <div class="timeline-panel">
            <div class="timeline-heading">
              <img src="./images/nios_classes_2.jpeg" alt="" width="100%" height="auto">
            </div>
            <div class="timeline-subtitle" style="width: 60%; padding-left: 1rem;">
              <h4 style="color: #FFFFFF !important; font-size: 1.25em !important; text-align: left !important;">
                1. Mechanics</h4>
              <div class="timeline-title"
                style="font-weight: normal !important; text-align: left !important; font-size: 1em !important;">
                Study of motion, forces, energy, and matter. Topics include kinematics, laws of motion, work, energy,
                and rotational motion.
              </div>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-panel">

            <div class="timeline-heading">
              <img src="./images/nios_clases_3.jpeg" alt="" width="100%" height="auto">
            </div>
            <div class="timeline-subtitle" style="width: 60%; padding-left: 1rem;">
              <h4 style="color: #FFFFFF !important; font-size: 1.25em !important; text-align: left !important;">
                2. Thermodynamics</h4>
              <div class="timeline-title"
                style="font-weight: normal !important; text-align: left !important; font-size: 1em !important;">
                Understanding heat, temperature, laws of thermodynamics, and heat transfer mechanisms
              </div>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-panel">

            <div class="timeline-heading">
              <img src="./images/nios_classes4.jpeg" alt="" width="100%" height="auto">
            </div>
            <div class="timeline-subtitle" style="width: 60%; padding-left: 1rem;">
              <h4 style="color: #FFFFFF !important; font-size: 1.25em !important; text-align: left !important;">
                3. Electromagnetism</h4>
              <div class="timeline-title"
                style="font-weight: normal !important; text-align: left !important; font-size: 1em !important;">
                Covers electric charges, fields, circuits, magnetic fields, and electromagnetic waves.
              </div>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-panel">

            <div class="timeline-heading">
              <img src="./images/nios_classes_5.jpeg" alt="" width="100%" height="auto">
            </div>
            <div class="timeline-subtitle" style="width: 60%; padding-left: 1rem;">
              <h4 style="color: #FFFFFF !important; font-size: 1.25em !important; text-align: left !important;">4.
                Optics
              </h4>
              <div class="timeline-title"
                style="font-weight: normal !important; text-align: left !important; font-size: 1em !important;">
                Study of light, reflection, refraction, lenses, and optical instruments.
              </div>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-panel">

            <div class="timeline-heading">
              <img src="./images/nios_classes6.jpeg" alt="" width="100%" height="auto">
            </div>
            <div class="timeline-subtitle" style="width: 60%; padding-left: 1rem;">
              <h4 style="color: #FFFFFF !important; font-size: 1.25em !important; text-align: left !important;">5.
                Modern
                Physics</h4>
              <div class="timeline-title"
                style="font-weight: normal !important; text-align: left !important; font-size: 1em !important;">
                Focuses on quantum mechanics, atomic physics, nuclear physics, and particle physics.
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>


    <div class="container timeline-container course-detail-element regulations" data-content="regulations">
      <ul class="timeline">
        <li class="timeline-inverted">
          <div class="timeline-panel">
            <div class="timeline-heading">
              <img src="./images/nios_classes7.jpeg" alt="" width="100%" height="auto">
            </div>
            <div class="timeline-subtitle" style="width: 60%; padding-left: 1rem;">
              <h4 style="color: #FFFFFF !important; font-size: 1.25em !important; text-align: left !important;">1. Sets
                and
                Functions</h4>
              <div class="timeline-title"
                style="font-weight: normal !important; text-align: left !important; font-size: 1em !important;">
                Understanding sets, relations, functions, and mathematical reasoning.
              </div>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-panel">

            <div class="timeline-heading">
              <img src="./images/niosc_classes8.jpeg" alt="" width="100%" height="auto">
            </div>
            <div class="timeline-subtitle" style="width: 60%; padding-left: 1rem;">
              <h4 style="color: #FFFFFF !important; font-size: 1.25em !important; text-align: left !important;">2.
                Algebra
              </h4>
              <div class="timeline-title"
                style="font-weight: normal !important; text-align: left !important; font-size: 1em !important;">
                In-depth study of complex numbers, quadratic equations, matrices, and determinants.
              </div>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-panel">

            <div class="timeline-heading">
              <img src="./images/nios_classes9.jpeg" alt="" width="100%" height="auto">
            </div>
            <div class="timeline-subtitle" style="width: 60%; padding-left: 1rem;">
              <h4 style="color: #FFFFFF !important; font-size: 1.25em !important; text-align: left !important;">3.
                Calculus
              </h4>
              <div class="timeline-title"
                style="font-weight: normal !important; text-align: left !important; font-size: 1em !important;">
                Covers limits, continuity, differentiation, integration, and differential equations.
              </div>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-panel">

            <div class="timeline-heading">
              <img src="./images/nios.jpeg" alt="" width="100%" height="auto">
            </div>
            <div class="timeline-subtitle" style="width: 60%; padding-left: 1rem;">
              <h4 style="color: #FFFFFF !important; font-size: 1.25em !important; text-align: left !important;">
                4. Statistics and Probability</h4>
              <div class="timeline-title"
                style="font-weight: normal !important; text-align: left !important; font-size: 1em !important;">
                Analyzing data, probability distributions, and inferential statistics.
              </div>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-panel">

            <div class="timeline-heading">
              <img src="./images/nios_1.jpeg" alt="" width="100%" height="auto">
            </div>
            <div class="timeline-subtitle" style="width: 60%; padding-left: 1rem;">
              <h4 style="color: #FFFFFF !important; font-size: 1.25em !important; text-align: left !important;">
                5. Coordinate Geometry</h4>
              <div class="timeline-title"
                style="font-weight: normal !important; text-align: left !important; font-size: 1em !important;">
                Study of lines, conic sections, three-dimensional geometry, and vector algebra.
              </div>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-panel">

            <div class="timeline-heading">
              <img src="./images/nios2.jpeg" alt="" width="100%" height="auto">
            </div>
            <div class="timeline-subtitle" style="width: 60%; padding-left: 1rem;">
              <h4 style="color: #FFFFFF !important; font-size: 1.25em !important; text-align: left !important;">
                6. Mathematical Reasoning and Mathematical Induction</h4>
              <div class="timeline-title"
                style="font-weight: normal !important; text-align: left !important; font-size: 1em !important;">
                Developing logical and inductive reasoning skills in mathematics.
              </div>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-panel">

            <div class="timeline-heading">
              <img src="./images/nios5.jpeg" alt="" width="100%" height="auto">
            </div>
            <div class="timeline-subtitle" style="width: 60%; padding-left: 1rem;">
              <h4 style="color: #FFFFFF !important; font-size: 1.25em !important; text-align: left !important;">7.
                Linear
                Programming and Probability</h4>
              <div class="timeline-title"
                style="font-weight: normal !important; text-align: left !important; font-size: 1em !important;">
                Practical applications in optimizing solutions and understanding random events.
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </section>


  <!-- Section for Appointment -->
  <section class="section-appointment-common">
    <div class="container my-5">
      <div class="form-classes col-12 wow fadeInUp col-lg-6" id="dgcaEnquiry" data-wow-delay="0.5s" style="
        visibility: visible;
        animation-delay: 0.5s;
        animation-name: fadeInUp;
      ">
        <div class="imPart-bg p-3 border-r10">
          <h6 class="text-primary text-uppercase mb-2">Apply Now</h6>
          <h5 class="mb-4">Make An Appointment now</h5>
          <form id="niosclassesForm" name="niosclassesForm" onsubmit="Sendmail();reset();">
            <div class="row g-3">
              <div class="col-sm-6">
                <div class="form-floating">
                  <input type="text" class="form-control border-0 bg-white border-r8" id="fname" name="fname"
                    placeholder="First Name" required />
                  <label for="fname">First Name</label>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-floating">
                  <input type="text" class="form-control border-0 bg-white border-r8" id="lname" name="lname"
                    placeholder="Last Name" required />
                  <label for="lname">Last Name</label>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-floating">
                  <input type="email" class="form-control border-0 bg-white border-r8" id="email" placeholder="Email"
                    name="email" required />
                  <label for="email">Email</label>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-floating">
                  <input type="tel" class="form-control border-0 bg-white border-r8" id="phno" name="phone"
                    placeholder="Phone No" required />
                  <label for="phno">Phone No</label>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-floating">
                  <select class="form-select border-0 bg-white border-r8" id="compNo"
                    name="Do you have a Computer Number?" required>
                    <option value="" disabled selected>Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <label for="compNo">Do you have a Computer Number?</label>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-floating">
                  <select class="form-select border-0 bg-white border-r8" id="class2med"
                    name="Do you have a class 2 Medical?" required>
                    <option value="" disabled selected>Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <label for="class2med">Do you have a class 2 Medical?</label>
                </div>
              </div>
              <div class="col-sm-12">
                <label class="form-label" for="subjects">What all subjects do you want to take?</label>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Air Navigation" id="subjectA"
                    name="subjects[]">
                  <label class="form-check-label" for="subjectA">Air Navigation</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Air Regulation" id="subjectB"
                    name="subjects[]">
                  <label class="form-check-label" for="subjectB">Air Regulation</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Air Meteorology" id="subjectC"
                    name="subjects[]">
                  <label class="form-check-label" for="subjectC">Air Meteorology</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="RTR Classes" id="subjectD" name="subjects[]">
                  <label class="form-check-label" for="subjectD">RTR Classes</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="NIOS Classes" id="subjectE" name="subjects[]">
                  <label class="form-check-label" for="subjectE">NIOS Classes</label>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary w-100 py-3 border-r8" type="submit">Submit</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  </section>
  <!-- Section for Appointment -->

  <!-- Footer Start -->
  <global-footer></global-footer>
  <!-- Footer End -->



  <!-- JavaScript Libraries -->
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="../lib/wow/wow.min.js"></script>
  <script src="../lib/easing/easing.min.js"></script>
  <script src="../lib/waypoints/waypoints.min.js"></script>
  <script src="../lib/owlcarousel/owl.carousel.min.js"></script>

  <!-- Template Javascript -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

  <script src="../js/main.js?<?php echo filemtime('../js/main.js'); ?>"></script>
  <script src="../assets/js/main.js?<?php echo filemtime('../assets/js/main.js'); ?>"></script>

  <!-- Import Header and Footer -->
  <script src="../js/header-global.js?<?php echo filemtime('../js/header-global.js'); ?>"></script>
  <script src="../js/footer-global.js?<?php echo filemtime('../js/footer-global.js'); ?>"></script>

  <script src="./class-js.js?<?php echo filemtime('./class-js.js'); ?>"></script>

  <script>
    scriptURL = 'https://script.google.com/macros/s/AKfycbycwxQkSHyTjQ9CUaKqMmWUutWbbBT2K9PmWDOZ6bT_rV-nlXdKDJa6KPlWO2otwBqfZg/exec'

    niosclassesForm = document.forms['niosclassesForm']

    niosclassesForm.addEventListener('submit', e => {
      e.preventDefault()
      formData = new FormData(niosclassesForm);
      currentDate = new Date();

      formattedDate = currentDate.getFullYear() + '-' +
        String(currentDate.getMonth() + 1).padStart(2, '0') + '-' +
        String(currentDate.getDate()).padStart(2, '0') + ' ' +
        String(currentDate.getHours()).padStart(2, '0') + ':' +
        String(currentDate.getMinutes()).padStart(2, '0') + ':' +
        String(currentDate.getSeconds()).padStart(2, '0');

      formName = 'NIOS classes Form';
      formData.append('formName', formName);
      formData.append('dateTime', formattedDate);
      fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
    })

  </script>
</body>

</html>