import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-dark text-light">
      {/* Main Footer Content */}
      <div className="container py-5">
        <div className="row g-4">
          
          {/* --- About Us --- */}
          <div className="col-lg-4 col-md-6">
            <h4 className="text-primary mb-4 fw-bold border-bottom pb-2">
              <span className="text-light">About</span> Surreal Jersey
            </h4>
            <p className="text-warning">
              Welcome to <span className="text-danger">Surreal Jersey</span>, your premier destination for high-quality sports jerseys. 
              We blend passion with style, offering authentic, durable jerseys for football, basketball, and more. 
              Wear your team’s pride with our latest collections!
            </p>
            <div className="mt-4">
              <h6 className="text-light">Quick Links</h6>
              <ul className="text-light">
                <li><a href="#" className="text-success hover-text-primary">Home</a></li>
                <li><a href="#" className="text-success hover-text-primary">Shop</a></li>
                <li><a href="#" className="text-success hover-text-primary">New Arrivals</a></li>
                <li><a href="#" className="text-success hover-text-primary">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* --- Contact Form --- */}
          <div className="col-lg-4 col-md-6">
            <h4 className="text-primary mb-4 fw-bold border-bottom pb-2">
              Get In <span className="text-light">Touch</span>
            </h4>
            <form>
              <div className="mb-3, text-warnimg">
                <input 
                  type="email" 
                  className="form-control bg-dark text-light border-secondary" 
                  placeholder="Enter Your Email here" 
                  required 
                />
              </div>
              <div className="mb-3">
                <textarea 
                  className="form-control bg-transparent text-light border-secondary" 
                  rows="4" 
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button 
                className="btn btn-primary w-100 fw-bold hover-grow"
                type="submit"
              >
                Send Message <FaEnvelope className="ms-2" />
              </button>
            </form>
            <div className="mt-4">
              <div className="d-flex align-items-center mb-2">
                <FaMapMarkerAlt className="text-primary me-3" />
                <span className="text-danger">
                    <a 
  href="https://www.google.com/maps/dir/-1.2869037,36.7374907/Nairobi+Sports+House+Ltd.+(Moi+Avenue),+City+Center,+33+Moi+Ave,+Nairobi/@-1.2921031,36.6988818,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x182f10d60c35394d:0x81ceaa6fc646c801!2m2!1d36.823848!2d-1.283923?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-danger text-decoration-none"
>
  Tap here for location and directions
</a>

                </span>
              </div>
              <div className="d-flex align-items-center">
                <FaPhone className="text-primary me-3" />
                <span className="">(+254) 590 9262 23</span>
              </div>
            </div>
          </div>

          {/* --- Social & Newsletter --- */}
          <div className="col-lg-4 col-md-12">
            <h4 className="text-primary mb-4 fw-bold border-bottom pb-2">
              Follow <span className="text-light">Us</span>
            </h4>
            <div className="d-flex gap-3 mb-4">
              <a 
                href="https://facebook.com" 
                className="social-icon hover-scale"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaFacebook size={100} />
              </a>
              <a 
                href="https://instagram.com" 
                className="social-icon hover-scale"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaInstagram size={90} />
              </a>
              <a 
                href="https://x.com" 
                className="social-icon hover-scale"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTwitter size={80} />
              </a>
            </div>
            <div className="mb-4">
              <h6 className="text-light">Subscribe to Our Newsletter</h6>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control bg-transparent text-light border-secondary" 
                  placeholder="Enter Email" 
                />
                <button className="btn btn-outline-primary" type="button">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="">
              <p>
                Jerseys are more than sportswear—they symbolize <span className="text-warning">passion, loyalty, and identity</span>. 
                From classic designs to modern releases, they capture unforgettable moments in sports history.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <footer className="bg-black py-3 text-center">
        <p className="mb-0 text-light">
          &copy; 2025 <span className="text-primary">Surreal Jersey</span>. Masterminded by <span className="text-warning">Carly</span>. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
