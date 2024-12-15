class GlobalFooter extends HTMLElement {
  constructor() {
    super();

    // Create the structure for the header component
    this.innerHTML = `
        <footer class="new_footer_area bg_color  ft_mar">
    <div class="new_footer_top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s"
              style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;">
              <h3 class="f-title f_600 t_color f_size_18">Contact</h3>
              <p><i class="fa fa-map-marker-alt me-2"></i>Bengaluru, Karnataka </p>
              <a href="tel:+91-8050076136" target="_blank"><i class="fa-solid fa-phone me-2"></i>+91-8050076136 </a>
              <p><a href="mailto:himanshu@adynamics.in"><i class="fa-solid fa-envelope me-2"></i>info@adynamics.com</a>
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s"
              style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft;">
              <h3 class="f_600 t_color f_size_18">Courses</h3>
              <ul class="list-unstyled f_list" style="font-size: 1rem;margin-block:1rem;">
                <li><a href="../classes/pretyping.php">A320 Pre Type Rating Classes</a></li>
                <li><a href="../classes/dgcaground.php">DGCA Ground Classes</a></li>
                <li><a href="../classes/RTR.php">Radio Telephony (RTR) Classes</a></li>
                <li><a href="../classes/niosclasses.php">NIOS Prep Classes</a></li>
                <li><a href="../classes/conversion.php">CPL Conversion</a></li>
                <li><a href="../classes/cplsouth.php">SACAA CPL</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s"
              style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;">
              <h3 class="f_600 t_color f_size_18">Help</h3>
              <ul class="list-unstyled f_list" style="font-size: 1rem;margin-block:1rem;">
                <li><a href="../about.php">About us</a></li>
                <li><a href="#testi">Testimonial</a></li>
                <li><a href="#" onclick="playDemoClass()">Demo video</a></li>
                <li><a href="../about.php#contact">Contact</a></li>
                <li><a href="../classes.php">Training</a></li>
                <li><a href="../privacy-policy.php">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s"
              style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInLeft;">
              <h3 class="f-title f_600 t_color f_size_18">Team Solutions</h3>
              <div class="f_social_icon">
                <a href="https://www.facebook.com/people/ADynamics/100070159968453/" target="_blank" class="fab fa-facebook"
                  title="Facebook"></a>
                <a href="https://www.linkedin.com/company/adynamics-aviation/" target="_blank" class="fab fa-linkedin"
                  title="LinkedIn"></a>
                <a href="https://www.youtube.com/@ADynamics_class/" target="_blank" class="fab fa-youtube" title="Youtube"></a>
                <a href="https://www.instagram.com/adynamics_aviation/" target="_blank" class="fab fa-instagram" title="Instagram"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_bg">
      </div>
    </div>
  </footer>

  <!-- Button for Instagram Reel -->
  <button class="insta-button" onclick="openModal()">
   <img src="assets/img/Instagram_icon.png" alt="Instagram Reel" class="insta-icon">
  </button>

  <!-- Modal for Instagram Reel -->
  <div id="instaModal" class="modal modal-insta">
    <div class="modal-content insta-modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <iframe src="https://www.instagram.com/reel/DBJiyZltvXW/embed" width="400" height="480" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>

  <!-- Whatsapp Button -->
  <button
  style="position: fixed; width: 50px; height: 54px; background-color: #FFFFFF !important; border: 1px solid #ddd !important; z-index: 1000 !important; padding: 5px; right: 23px !important; bottom: 30px !important; border: none; color: green; font-size: 28px; border-radius: 100%; display: flex; align-items: center; justify-content: center; line-height: unset;"
  >
  <a href="https://wa.me/+918050076136?text=Hello!%20I%20would%20like%20to%20chat%20with%20you." target="_blank" title="Connect Whatsapp"
    class="btn-whtsp"><i class="bi bi-whatsapp"></i>
    </a>
  </button>

      `;
  }
}

// Define the custom element
customElements.define("global-footer", GlobalFooter);
