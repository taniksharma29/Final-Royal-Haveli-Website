import React from "react";
import logo from "../assets/images/logo.png";

interface NavbarProps {
  currentPage: "home" | "menu" | "contact";
  navigateTo: (page: "home" | "menu" | "contact") => void;
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  setIsModalOpen: (open: boolean) => void;
  getImgUrl: (src: string) => string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  navigateTo,
  isScrolled,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  setIsModalOpen,
  getImgUrl,
}) => {
  return (
    <>
      {/* Sticky Premium Header / Navbar */}
      <header
        className={`header ${isScrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "menu-open" : ""}`}
      >
        <div className="container">
          <nav className="navbar" aria-label="Global navigation">
            <a
              href="#home"
              className="logo"
              id="navbar-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("home");
              }}
              aria-label="Royal Haveli brand homepage logo"
            >
              <img
                src={logo}
                alt="Royal Haveli Logo"
                style={{ height: "60px", width: "auto" }}
                fetchPriority="high"
                decoding="async"
              />
            </a>
            <ul className="nav-links">
              <li>
                <a
                  href="#home"
                  id="nav-link-home"
                  className={currentPage === "home" ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("home");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  id="nav-link-menu"
                  className={currentPage === "menu" ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("menu");
                  }}
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  id="nav-link-contact"
                  className={currentPage === "contact" ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("contact");
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="nav-actions">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary btn-reserve"
                id="navbar-reserve-btn"
                aria-label="Initiate table reservation popup modal"
              >
                Book a Table
              </button>
              <div
                className={`mobile-toggle ${isMobileMenuOpen ? "open" : ""}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile slide out drawer navigation menu"
                id="mobile-nav-toggle"
              >
                <span className="line-1"></span>
                <span className="line-2"></span>
                <span className="line-3"></span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Premium Luxury Mobile Menu Drawer Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "active" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
        id="mobile-drawer-overlay"
      >
        <div
          className={`mobile-menu-drawer ${isMobileMenuOpen ? "active" : ""}`}
          onClick={(e) => e.stopPropagation()}
          id="mobile-drawer-container"
        >
          <div className="mobile-menu-header">
            <a
              href="#home"
              className="logo"
              id="mobile-drawer-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("home");
                setIsMobileMenuOpen(false);
              }}
              aria-label="Royal Haveli brand drawer homepage logo"
            >
              <img
                src={logo}
                alt="Royal Haveli Logo"
                style={{ height: "50px", width: "auto" }}
                decoding="async"
              />
            </a>
            <div
              className={`mobile-toggle open`}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile navigation menu"
              id="mobile-drawer-close-btn"
            >
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
            </div>
          </div>

          <ul className="mobile-nav-links">
            <li style={{ "--index": 1 } as React.CSSProperties}>
              <a
                href="#home"
                id="mobile-nav-link-home"
                className={currentPage === "home" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("home");
                }}
              >
                <span className="num">01.</span> Home
              </a>
            </li>
            <li style={{ "--index": 2 } as React.CSSProperties}>
              <a
                href="#menu"
                id="mobile-nav-link-menu"
                className={currentPage === "menu" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("menu");
                }}
              >
                <span className="num">02.</span> Menu
              </a>
            </li>
            <li style={{ "--index": 3 } as React.CSSProperties}>
              <a
                href="#contact"
                id="mobile-nav-link-contact"
                className={currentPage === "contact" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("contact");
                }}
              >
                <span className="num">03.</span> Contact Us
              </a>
            </li>
          </ul>

          <div className="mobile-menu-footer">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="btn btn-primary"
              id="mobile-drawer-reserve-btn"
              style={{ width: "100%" }}
              aria-label="Initiate table reservation from mobile menu"
            >
              Book a Table
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
