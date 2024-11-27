class GlobalHeader extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
          <!-- Topbar Start -->
  <div class="container-fluid bg-dark text-light p-0">
    <div class="row gx-0 d-none d-lg-flex">
      <div class="col-lg-7 px-5 text-start">
        <div class="h-100 d-inline-flex align-items-center me-4">
          <small class="fa fa-map-marker-alt text-primary me-2"></small>
          <small>Bengaluru, Karnataka 560048</small>
        </div>
        <a href="mailto:info@adynamics.in" class="h-100 d-inline-flex align-items-center">
          <small class="far fa-clock text-primary me-2"></small>
          <small>info@adynamics.in</small>
        </a>
      </div>
      <div class="col-lg-5 px-5 text-end">
        <a href="tel:+91-8050076136" target="_blank" class="h-100 d-inline-flex align-items-center me-4">
          <small class="fa-solid fa-phone text-primary me-2"></small>
          <small>+91-8050076136</small>
        </a>
        <div class="h-100 d-inline-flex align-items-center mx-n2">
          <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"
            href="https://www.facebook.com/people/ADynamics/100070159968453/" target="_blank"><i class="fab fa-facebook-f"
              style="font-size: 20px; color: #fff"></i></a>
          <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"
            href="https://www.linkedin.com/company/adynamics-aviation/" target="_blank"><i class="fab fa-linkedin-in"
              style="font-size: 20px;"></i></a>
          <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"
            href="https://www.youtube.com/@ADynamics_class/" target="_blank"><i class="fab fa-youtube"
              style="font-size: 20px; color: #fff"></i></a>
          <a class="btn btn-square btn-link rounded-0" href="https://www.instagram.com/adynamics_aviation/" target="_blank"><i
              class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
  <!-- Topbar End -->

  <!-- Navbar Start -->
    <header>
        <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="../index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <img src="img/adynamicsLogo.png" width="180px" height="auto" alt="" />
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a href="../index.html" class="nav-item nav-link ">Home</a>
            <a href="../about.html" class="nav-item nav-link">About</a>
            <a href="../flying.html" class="nav-item nav-link">Flying</a>

            <div class="dropdown">
            <a href="../classes.html" class="nav-item nav-link nav-dropdown">Classes</a>
            <div class="dropdown-menu">
                <a href="../classes/pretyping.html">A320 Pre Type Rating Classes</a>
                <a href="../classes/dgcaground.html">DGCA Ground Classes</a>
                <a href="../classes/RTR.html">Radio Telephony (RTR) Classes</a>
                <a href="../classes/niosclasses.html">NIOS Prep Classes</a>
            </div>
            </div>
            <a href="../blog/homepageblog.html" class="nav-item nav-link">blog</a>
           <!-- <a href="#" id="demo-trigger" class="nav-item nav-link">DEMO</a> -->
        </div>
        <div class="button-container">
            <button class="button-enquiry" onclick="window.location.href='../enquiry.html'">
            <svg id="svgContainer" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="start">
                <path id="plane"
                    d="M 54.4141 28 C 54.3906 25.2578 50.6639 23.2656 46.1874 23.2656 L 36.7421 23.2656 C 35.4296 23.2656 34.9374 23.0547 34.1640 22.1641 L 18.4140 4.9844 C 17.9218 4.4219 17.3124 4.1406 16.6093 4.1406 L 13.8905 4.1406 C 13.2812 4.1406 12.9296 4.6797 13.2343 5.3359 L 21.3437 23.2656 L 9.4374 24.6250 L 5.1952 16.8437 C 4.8905 16.2578 4.3749 16 3.6015 16 L 2.5937 16 C 1.9843 16 1.5859 16.3984 1.5859 17.0078 L 1.5859 38.9922 C 1.5859 39.6016 1.9843 39.9766 2.5937 39.9766 L 3.6015 39.9766 C 4.3749 39.9766 4.8905 39.7188 5.1952 39.1563 L 9.4374 31.3750 L 21.3437 32.7344 L 13.2343 50.6641 C 12.9296 51.2968 13.2812 51.8594 13.8905 51.8594 L 16.6093 51.8594 C 17.3124 51.8594 17.9218 51.5547 18.4140 51.0156 L 34.1640 33.8125 C 34.9374 32.9453 35.4296 32.7344 36.7421 32.7344 L 46.1874 32.7344 C 50.6639 32.7344 54.3906 30.7188 54.4141 28 Z" />
                </g>
            </svg>
            <span id="enquiryText">ENQUIRY</span>
            </button>
        </div>
        </div>
    </nav>  
    </header>
  <!-- Navbar End -->
      `;
  }
}

// Define the custom element
customElements.define("global-header", GlobalHeader);
