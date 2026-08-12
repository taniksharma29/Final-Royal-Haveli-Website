import React from "react";
import logo from "../assets/images/logo.png";

interface FooterProps {
  navigateTo: (page: "home" | "menu" | "contact") => void;
  setIsModalOpen: (open: boolean) => void;
}

export const Footer: React.FC<FooterProps> = ({
  navigateTo,
  setIsModalOpen,
}) => {
  return (
    <footer id="footer" className="footer" aria-label="Restaurant footer & quick navigation links">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Restaurant Branding */}
          <div className="footer-col branding-col animate-on-scroll" id="footer-col-branding">
            <a
              href="#home"
              className="footer-logo"
              id="footer-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("home");
              }}
              aria-label="Royal Haveli brand footer home link"
            >
              <img
                src={logo}
                alt="Royal Haveli Logo Footer"
                className="footer-logo-img"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="footer-desc">
              A sanctuary of regal Indian gastronomy, blending timeless
              culinary heritage, rich aromatic spices, and royal hospitality
              in an exquisitely crafted contemporary setting.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col animate-on-scroll" id="footer-col-links">
            <h4>Quick Links</h4>
            <ul className="footer-links-redesigned" id="footer-links-list">
              <li>
                <a
                  href="#home"
                  id="footer-link-home"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("home");
                  }}
                >
                  <span className="link-arrow">›</span> Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  id="footer-link-about"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("home");
                    setTimeout(
                      () =>
                        document
                          .getElementById("about")
                          ?.scrollIntoView({ behavior: "smooth" }),
                      100,
                    );
                  }}
                >
                  <span className="link-arrow">›</span> Our Story
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  id="footer-link-menu"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("menu");
                  }}
                >
                  <span className="link-arrow">›</span> Exquisite Menu
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  id="footer-link-contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("contact");
                  }}
                >
                  <span className="link-arrow">›</span> Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#reserve"
                  id="footer-link-reserve"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }}
                >
                  <span className="link-arrow">›</span> Book a Table
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="footer-col animate-on-scroll" id="footer-col-contact">
            <h4>Contact Info</h4>
            <ul
              className="footer-contact-info"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              id="footer-contact-info-list"
            >
              <li>
                <i className="fa-solid fa-map-pin" aria-hidden="true"></i>
                <span>
                  3227 South White Road
                  <br />
                  San Jose, California 95148
                </span>
              </li>
              <li>
                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                <a href="tel:+14088896001" id="footer-phone-link" aria-label="Call Royal Haveli: 408 889-6001">(408) 889-6001</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                <a href="mailto:royalhavelisj@gmail.com" id="footer-email-link" aria-label="Mail Royal Haveli: royalhavelisj@gmail.com">
                  royalhavelisj@gmail.com
                </a>
              </li>
              <li>
                <i className="fa-solid fa-clock" aria-hidden="true"></i>
                <span>
                  Morning 11:00 AM To 3:00 PM
                  <br />
                  Evening 5:00 PM To 10:00 PM
                  <br />
                  Tuesday Closed
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media & Map */}
          <div className="footer-col animate-on-scroll" id="footer-col-social">
            <h4>Connect With Us</h4>
            <p className="footer-connect-desc">
              Follow our culinary journey and stay updated with exquisite fine
              dining updates.
            </p>

            {/* Premium Circular Icons */}
            <div className="social-links-premium" id="footer-social-wrapper">
              <a
                href="https://www.facebook.com/profile.php?id=61589208322405"
                aria-label="Royali Haveli's Facebook profile (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle fb-circle"
                id="footer-social-fb"
              >
                <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/royalhavelisj/"
                aria-label="Royal Haveli's Instagram feed (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle ig-circle"
                id="footer-social-ig"
              >
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="https://maps.google.com/?q=Royal+Haveli+3227+South+White+Road+San+Jose+CA+95148"
                aria-label="Royal Haveli's Google maps listing (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle gm-circle"
                id="footer-social-gm"
              >
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              </a>
              <a
                href="https://biz.yelp.com/home/9W_0gYpzHYqZc7XWxcINGA"
                aria-label="Royal Haveli's Yelp listing (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle yelp-circle"
                id="footer-social-yelp"
              >
                <i className="fa-brands fa-yelp" aria-hidden="true"></i>
              </a>
            </div>

            <div className="location-btn-wrapper" id="footer-location-btn-group">
              <a
                href="https://maps.google.com/?q=Royal+Haveli+3227+South+White+Road+San+Jose+CA+95148"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-premium-location"
                id="footer-gm-address-btn"
                aria-label="Open maps directions for Royal Haveli in San Jose, CA (opens in new tab)"
              >
                <i className="fa-solid fa-location-arrow" aria-hidden="true"></i>
                <span>Find Us on Map</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-divider"></div>

        <div className="footer-bottom-redesigned" id="footer-copyright-banner">
          <p className="copyright-text">
            &copy; 2026 Royal Haveli. All Rights Reserved.
          </p>
          <div className="footer-bottom-details">
            <span>Fine Dining Experience</span>
            <span className="dot" aria-hidden="true">•</span>
            <span>San Jose CA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
