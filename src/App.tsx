/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { menuSections, MenuItem, MenuSection } from "./menuData";
import { TestimonialSlider } from "./components/TestimonialSlider";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";
import { MarqueeSlider } from "./components/MarqueeSlider";
import mainImg from "./assets/main.png";
import newImg from "./assets/new.png";
import logo from "./assets/images/logo.png";
import royalHaveli from "./assets/images/royal-haveli-dark.png";
import cateringServiceImg from "./assets/images/catering-services.png";
import birthdayServiceImg from "./assets/images/birthday-elebrations.png";

const signatureTargetTitles = [
  { title: "Vegetable Samosa", category: "appetizers", badge: "Popular" },
  { title: "Paneer Malai Tikka", category: "appetizers", badge: "Chef's Choice" },
  { title: "Chana Bhatura", category: "appetizers", badge: "Award Winning" },
  { title: "Amritsari Fish Pakora", category: "appetizers", badge: "Must Try" },
  { title: "Butter Chicken", category: "mains", badge: "Best Seller" },
  { title: "Lamb Dum Biryani", category: "mains", badge: "Royal Signature" },
  { title: "Dal Makhani", category: "mains", badge: "Slow Cooked" },
  { title: "Paneer Tikka Masala", category: "mains", badge: "Trending" },
  { title: "Rasmalai", category: "desserts", badge: "Traditional" },
  { title: "Gajar Ka Halwa", category: "desserts", badge: "House Special" },
  { title: "Falooda Ice Cream", category: "desserts", badge: "Refreshing" }
];

const getSignatureItems = () => {
  const items: any[] = [];
  signatureTargetTitles.forEach((target) => {
    for (const section of menuSections) {
      const found = section.items.find(
        (item) => item.title.toLowerCase() === target.title.toLowerCase()
      );
      if (found) {
        // Prepare subcategory to ensure VEG/NON-VEG tags render correctly on Home Page
        let subcat = found.subcategory || "";
        if (!subcat) {
          if (section.id === "veg-entrees") subcat = "VEG ENTREE";
          if (section.id === "nonveg-entrees") subcat = "NON VEG ENTREE";
          if (section.id === "desserts") subcat = "DESSERTS";
        }
        items.push({
          ...found,
          subcategory: subcat,
          category: target.category,
          badge: target.badge
        });
        break;
      }
    }
  });
  return items;
};

const signatureMenuItems = getSignatureItems();

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "menu" | "contact">(
    "home",
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Home signature dishes filter state
  const [homeFilter, setHomeFilter] = useState("all");
  const [homeFadeState, setHomeFadeState] = useState<"in" | "out">("in");
  const [displayedHomeFilter, setDisplayedHomeFilter] = useState("all");

  // Menu page categories filter state
  const [menuFilter, setMenuFilter] = useState("all");
  const [menuFadeState, setMenuFadeState] = useState<"in" | "out">("in");
  const [displayedMenuFilter, setDisplayedMenuFilter] = useState("all");

  // Form submission feedback states
  const [resSubmitState, setResSubmitState] = useState<
    "idle" | "processing" | "success"
  >("idle");
  const [newsletterSubmitState, setNewsletterSubmitState] = useState<
    "idle" | "processing" | "success"
  >("idle");
  const [contactSubmitState, setContactSubmitState] = useState<
    "idle" | "processing" | "success"
  >("idle");

  // Premium Cinematic Website Splash Screen States
  const [showSplash, setShowSplash] = useState(true);
  const [splashExit, setSplashExit] = useState(false);

  // Cinematic splash timers for smooth stage transitions
  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setSplashExit(true);
    }, 4200); // Begin luxury exit animation at 4.2 seconds

    const removeTimer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // Completely unmount the intro loader at 5.0 seconds

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Redesigned premium reservation booking form states
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    date: "",
    time: "",
    requests: "",
  });
  const [bookingErrors, setBookingErrors] = useState<Record<string, string>>(
    {},
  );
  const [bookingGeneralError, setBookingGeneralError] = useState("");
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Helper to construct fully qualified image URLs pointing to the main repository assets
const getImgUrl = (src: string) => {
  return `/${src}`;
};

  // Navigates between page views and automatically scrolls back to the top
  const navigateTo = (page: "home" | "menu" | "contact") => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 1. Navbar transparent-to-solid scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when the modal, mobile menu drawer, or splash screen is open
  useEffect(() => {
    if (isModalOpen || isMobileMenuOpen || showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen, isMobileMenuOpen, showSplash]);

  // Handle keyboard Escape to close modal, and handle body-wide ESC triggers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Premium UX: auto-focus the first input field upon luxury booking modal open
  useEffect(() => {
    if (isModalOpen) {
      // Small timeout to allow transition scaling to begin before focusing
      const timeoutId = setTimeout(() => {
        nameInputRef.current?.focus();
      }, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [isModalOpen]);

  // 2. Scroll Animations via Intersection Observer
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [currentPage, displayedHomeFilter, displayedMenuFilter]);

  // 3. Home Signature filter handler with transition
  const handleHomeFilterChange = (filter: string) => {
    if (filter === homeFilter) return;
    setHomeFadeState("out");
    setHomeFilter(filter);
    setTimeout(() => {
      setDisplayedHomeFilter(filter);
      setHomeFadeState("in");
    }, 300);
  };

  // 4. Menu page filter handler with transition
  const handleMenuFilterChange = (filter: string) => {
    if (filter === menuFilter) return;
    setMenuFadeState("out");
    setMenuFilter(filter);
    setTimeout(() => {
      setDisplayedMenuFilter(filter);
      setMenuFadeState("in");
    }, 300);
  };

  // 5. Reservation booking state-controlled submission & validation
  const handleBookingChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { id, value } = e.target;
    const field = id.replace("b-", "");
    setBookingForm((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field dynamically
    if (bookingErrors[field]) {
      setBookingErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const validateBookingForm = () => {
    const errs: Record<string, string> = {};

    if (!bookingForm.name || bookingForm.name.trim().length < 2) {
      errs.name = "Full name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!bookingForm.email) {
      errs.email = "Email address is required.";
    } else if (!emailRegex.test(bookingForm.email)) {
      errs.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[+]?[0-9\s\-()]{7,18}$/;
    if (!bookingForm.phone) {
      errs.phone = "Phone number is required.";
    } else if (!phoneRegex.test(bookingForm.phone)) {
      errs.phone = "Please enter a valid phone number (min 7 digits).";
    }

    if (!bookingForm.date) {
      errs.date = "Please select a date.";
    }

    if (!bookingForm.time) {
      errs.time = "Please select a time.";
    }

    if (!bookingForm.guests) {
      errs.guests = "Please select the number of guests.";
    }

    setBookingErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleReservationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateBookingForm()) {
      return;
    }
    setResSubmitState("processing");
    setBookingGeneralError("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/taniksharma29@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Table Reservation Request from ${bookingForm.name}`,
          _honey: "", // Honeypot field for spam prevention
          "Guest Name": bookingForm.name,
          "Email Address": bookingForm.email,
          "Phone Number": bookingForm.phone,
          "Number of Guests": bookingForm.guests,
          "Reservation Date": bookingForm.date,
          "Reservation Time": bookingForm.time,
          "Special Requests": bookingForm.requests || "None"
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send reservation details. Please try again.");
      }

      const data = await response.json();
      if (data.success === "false" || data.success === false) {
        throw new Error(data.message || "Failed to submit booking.");
      }

      setResSubmitState("success");
      
      setTimeout(() => {
        setResSubmitState("idle");
        setIsModalOpen(false);
        // Reset full state
        setBookingForm({
          name: "",
          email: "",
          phone: "",
          guests: "1",
          date: "",
          time: "",
          requests: "",
        });
        setBookingErrors({});
        setBookingGeneralError("");
      }, 3500); // slightly longer success window to let them see everything

    } catch (error: any) {
      console.error("Booking submission error:", error);
      setResSubmitState("idle");
      setBookingGeneralError(error?.message || "Something went wrong. Please try again.");
    }
  };

  // Helpers to pre-populate booking form and open modal for premium services
  const openCateringBooking = () => {
    setBookingErrors({});
    setBookingGeneralError("");
    setResSubmitState("idle");
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      guests: "7+",
      date: "",
      time: "",
      requests: "Interested in Catering Services: Wedding / Corporate Event / Live Catering enquiry.",
    });
    setIsModalOpen(true);
  };

  const openCelebrationBooking = () => {
    setBookingErrors({});
    setBookingGeneralError("");
    setResSubmitState("idle");
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      guests: "5",
      date: "",
      time: "",
      requests: "Interested in Birthday & Celebration planning: Private table setups / Custom decorations / Cakes.",
    });
    setIsModalOpen(true);
  };

  // 6. Newsletter subscribing simulated submission
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterSubmitState("processing");
    setTimeout(() => {
      setNewsletterSubmitState("success");
      setTimeout(() => {
        setNewsletterSubmitState("idle");
        (e.target as HTMLFormElement).reset();
      }, 1500);
    }, 1200);
  };

  // 7. Contact form simulated submission
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactSubmitState("processing");
    setTimeout(() => {
      setContactSubmitState("success");
      setTimeout(() => {
        setContactSubmitState("idle");
        (e.target as HTMLFormElement).reset();
      }, 1500);
    }, 1200);
  };

  // Filters for Homepage Signature dishes
  const filteredHomeItems = signatureMenuItems.filter(
    (item) =>
      displayedHomeFilter === "all" || item.category === displayedHomeFilter,
  );

  // Filters for Menu Page layout grouping
  const filteredMenuSections = menuSections.filter(
    (sec) => displayedMenuFilter === "all" || sec.id === displayedMenuFilter,
  );

  // Available Menu Filter Categories
  const categoryFilters = [
    { id: "all", label: "All" },
    { id: "appetizers", label: "Appetizers" },
    { id: "chaat-corner", label: "Chaat Corner" },
    { id: "indo-chinese", label: "Indo Chinese" },
    { id: "kabab-grill", label: "Kabab & Grill" },
    { id: "biryani-rice", label: "Biryani and Rice" },
    { id: "veg-entrees", label: "Veg Entrées" },
    { id: "nonveg-entrees", label: "Non Veg Entrées" },
    { id: "wraps", label: "Wraps" },
    { id: "breads", label: "Breads" },
    { id: "bowls", label: "Bowls" },
    { id: "kids-menu", label: "Kid's Menu" },
    { id: "salad", label: "Salad" },
    { id: "soups", label: "Soups" },
    { id: "tacos", label: "Tacos" },
    { id: "extras", label: "Extras" },
    { id: "burgers", label: "Burgers" },
    { id: "desserts", label: "Desserts" },
    { id: "drinks", label: "Drinks" },
  ];

  return (
    <>
      {/* Premium Cinematic Website Splash Screen */}
      {showSplash && (
        <div className={`cinematic-splash ${splashExit ? "exit-active" : ""}`}>
          {/* Two 'door panels' with real outward motion on page open */}
          <div className="splash-door door-left">
            <div className="door-panel-trim"></div>
          </div>
          <div className="splash-door door-right">
            <div className="door-panel-trim"></div>
          </div>

          {/* Golden/Red Accent Glow Backdrop */}
          <div className="splash-ambient-glow"></div>

          {/* Luxury Center Brand Chamber */}
          <div className="splash-brand-chamber">
            <div className="splash-brand-content">
              <div className="splash-logo-container">
                <img
                  src={logo}
                  alt="Royal Haveli Logo Cinematic"
                  className="splash-logo"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="splash-logo-glow-ring"></div>
              </div>
              <h1 className="splash-welcome">Welcome To</h1>
              <h2 className="splash-brand-name">Royal Haveli</h2>

              <div className="splash-brand-divider">
                <span className="star-gold">★</span>
                <span className="star-gold font-large">★</span>
                <span className="star-gold">★</span>
              </div>

              <p className="splash-excellence-label">
                A SANCTUARY OF REGAL INDIAN GASTRONOMY
              </p>
            </div>

            {/* Cinematic background light dust particles */}
            <div className="splash-dust-container">
              <div className="dust-particle"></div>
              <div className="dust-particle"></div>
              <div className="dust-particle"></div>
              <div className="dust-particle"></div>
              <div className="dust-particle"></div>
            </div>
          </div>
        </div>
      )}

      <Navbar
        currentPage={currentPage}
        navigateTo={navigateTo}
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        setIsModalOpen={setIsModalOpen}
      />

      {/* ==================== HOME PAGE VIEW ==================== */}
      {currentPage === "home" && (
        <>
          {/* Hero Section */}
          <section id="home" className="hero">
            <div className="hero-bg">
              <img
                src={royalHaveli}
                alt="Royal Haveli"
                fetchPriority="high"
                decoding="async"
              />
              <div className="hero-overlay"></div>
            </div>
            <div className="container hero-content animate-on-scroll">
              <div className="hero-text">
                <div className="badge-icon">
                  <img
                    src={logo}
                    alt="Royal Haveli Logo Icon"
                    width={140}
                    height={140}
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
                <h1 className="title">Taste the Royal Flavors of India</h1>
                <div className="subtitle-wrapper">
                  <span className="line"></span>
                  <p className="subtitle">Welcome to Royal Haveli</p>
                  <span className="line"></span>
                </div>
                <p className="description">
                  At Royal Haveli, we believe food is not just a meal—it’s an
                  experience. Our chefs use time-honored recipes and the finest
                  ingredients to bring out the true essence of Indian cuisine.
                </p>
                <div className="hero-actions">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn btn-primary btn-reserve"
                  >
                    Book A Table
                  </button>
                  <button
                    onClick={() => navigateTo("menu")}
                    className="btn btn-secondary"
                  >
                    Discover Menu
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story Section */}
          <section id="our-story" className="our-story section-padding">
            <div className="container our-story-wrapper">
              {/* Left side: Premium image collage or elegant restaurant visuals */}
              <div className="our-story-image-group animate-on-scroll">
                <div className="img-frame-main">
                  <div className="img-large">
                    <img
                      src={mainImg}
                      alt="Premium dining setup"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="img-frame-accent">
                  <div className="img-small">
                    <img
                      src={newImg}
                      alt="Chef cooking authentic Indian food"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
              </div>

              {/* Right side: “Our Story” heading, subtitle, and descriptive content */}
              <div className="our-story-text animate-on-scroll">
                <div className="text-header">
                  <div className="subtitle-wrapper justify-start">
                    <span className="line"></span>
                    <p className="subtitle">Our Story</p>
                    <span className="line"></span>
                  </div>
                  <h2 className="section-title">
                    The Essence of Indian Flavors
                  </h2>
                </div>
                <p className="description">
                  At Royal Haveli, we believe food is not just a meal—it’s an
                  experience. Our chefs use time-honored recipes and the finest
                  ingredients to bring out the true essence of Indian cuisine.
                  Every dish reflects the diversity of India, blending bold
                  flavors, rich textures, and vibrant aromas.
                </p>
                <p className="description mt-4">
                  Whether you’re dining with family, friends, or celebrating a
                  special occasion, we promise a warm atmosphere and
                  unforgettable taste.
                </p>

                {/* Decorative premium dividers / features */}
                <div className="story-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fa-solid fa-leaf"></i>
                    </div>
                    <span>Fresh, High-Quality Ingredients</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fa-solid fa-fire-burner"></i>
                    </div>
                    <span>Traditional Cooking Methods</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Premium Infinite Marquee Slider */}
          <MarqueeSlider />



          {/* Premium Image Gallery */}
          <section id="gallery" className="gallery section-padding">
            <div className="container animate-on-scroll">
              <div className="section-header text-center mb-60">
                <div className="subtitle-wrapper">
                  <span className="line"></span>
                  <p className="subtitle">Visual Journey</p>
                  <span className="line"></span>
                </div>
                <h2 className="section-title">The Haveli Experience</h2>
              </div>

              <div className="gallery-bento premium-gallery">
                <div
                  className="gallery-item item-grid-large animate-on-scroll"
                  style={{ transitionDelay: "0.1s" }}
                >
                  <div className="img-wrapper">
                    <img
                      src="https://i.pinimg.com/736x/82/09/56/820956674034206c26b4a1d26f9cc6ee.jpg"
                      alt="Royal Lamb Dum Biryani"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-overlay-hover">
                    <div className="overlay-content">
                      <span className="gallery-tag">Masterpiece</span>
                      <h4>Royal Lamb Dum Biryani</h4>
                      <p>
                        Fragrant basmati rice slow-cooked with tender lamb, saffron, and traditional spices.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="gallery-item item-grid-square animate-on-scroll"
                  style={{ transitionDelay: "0.2s" }}
                >
                  <div className="img-wrapper">
                    <img
                      src="https://i.pinimg.com/736x/0b/fc/ab/0bfcab4f16e047f2b477687edf615723.jpg"
                      alt="Butter Chicken"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-overlay-hover">
                    <div className="overlay-content">
                      <span className="gallery-tag">Signature</span>
                      <h4>Butter Chicken</h4>
                    </div>
                  </div>
                </div>
                <div
                  className="gallery-item item-grid-square animate-on-scroll"
                  style={{ transitionDelay: "0.3s" }}
                >
                  <div className="img-wrapper">
                    <img
                      src={newImg}
                      alt="Chef cooking authentic Indian food"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-overlay-hover">
                    <div className="overlay-content">
                      <span className="gallery-tag">Culinary Craft</span>
                      <h4>The Essence of Art</h4>
                    </div>
                  </div>
                </div>
                <div
                  className="gallery-item item-grid-square animate-on-scroll"
                  style={{ transitionDelay: "0.4s" }}
                >
                  <div className="img-wrapper">
                    <img
                      src="https://i.pinimg.com/1200x/3e/e1/97/3ee1979f9c1f40e7d2f8015490645896.jpg"
                      alt="Vegetable Samosa"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-overlay-hover">
                    <div className="overlay-content">
                      <span className="gallery-tag">Appetizer</span>
                      <h4>Vegetable Samosa</h4>
                    </div>
                  </div>
                </div>
                <div
                  className="gallery-item item-grid-wide animate-on-scroll"
                  style={{ transitionDelay: "0.5s" }}
                >
                  <div className="img-wrapper">
                    <img
                      src={mainImg}
                      alt="Premium dining setup ambiance"
                      loading="lazy"
                    />
                  </div>
                  <div className="gallery-overlay-hover">
                    <div className="overlay-content">
                      <span className="gallery-tag">Atmosphere</span>
                      <h4>Regal Ambiance</h4>
                      <p>
                        Experience fine dining in a true Haveli setting curated
                        for luxury.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Premium Services Section */}
          <section id="services" className="services-premium section-padding">
            <div className="container animate-on-scroll">
              <div className="section-header text-center mb-60">
                <div className="subtitle-wrapper">
                  <span className="line"></span>
                  <p className="subtitle">What We Offer</p>
                  <span className="line"></span>
                </div>
                <h2 className="section-title">Premium Dining & Celebration Services</h2>
              </div>

              <div className="services-grid">
                {/* Catering Services */}
                <div className="service-card animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
                  <div className="service-img-wrapper">
                    <img
                      src={cateringServiceImg}
                      alt="Luxury Catering Services"
                      loading="lazy"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Catering Services</h3>
                    <p>
                      From private gatherings to corporate events, Royal Haveli delivers authentic flavors and premium hospitality for every occasion.
                    </p>
                    <ul className="service-features">
                      <li><i className="fa-solid fa-check"></i> Live Catering</li>
                      <li><i className="fa-solid fa-check"></i> Wedding Functions</li>
                      <li><i className="fa-solid fa-check"></i> Corporate Events</li>
                      <li><i className="fa-solid fa-check"></i> Custom Menu Options</li>
                    </ul>
                    <div className="service-btn">
                      <button onClick={openCateringBooking} className="btn btn-primary">Book Catering</button>
                    </div>
                  </div>
                </div>

                {/* Birthday Celebrations */}
                <div className="service-card animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
                  <div className="service-img-wrapper">
                    <img
                      src={birthdayServiceImg}
                      alt="Premium Birthday Celebrations"
                      loading="lazy"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Birthday Celebrations</h3>
                    <p>
                      Celebrate unforgettable moments with luxury dining, customized décor, music, and a warm royal ambiance.
                    </p>
                    <ul className="service-features">
                      <li><i className="fa-solid fa-check"></i> Private Table Setup</li>
                      <li><i className="fa-solid fa-check"></i> Customized Decorations</li>
                      <li><i className="fa-solid fa-check"></i> Group Reservations</li>
                      <li><i className="fa-solid fa-check"></i> Celebration Cakes</li>
                    </ul>
                    <div className="service-btn">
                      <button onClick={openCelebrationBooking} className="btn btn-primary">Plan Celebration</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Google Reviews Testimonials */}
          <section id="reviews" className="testimonial section-padding">
            <div className="container animate-on-scroll">
              <div className="section-header text-center mb-60">
                <div className="subtitle-wrapper">
                  <span className="line"></span>
                  <p className="subtitle">Guest Experiences</p>
                  <span className="line"></span>
                </div>
                <div className="google-badge">
                  <i className="fa-brands fa-google"></i>
                  <span>Highly Rated on Google Maps</span>
                </div>
                <h2 className="section-title">What Our Guests Say</h2>
                <div className="star-rating big">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span className="rating-num">4.9/5</span>
                </div>
              </div>

              <TestimonialSlider />

              <div className="text-center mt-60">
                <a
                  href="https://share.google/mH9DHjqQefOPXiD97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  Read All Google Reviews
                </a>
              </div>
            </div>
          </section>

          {/* Premium CTA Section */}
          <section className="premium-cta">
            <div className="cta-bg-wrapper">
              <img
                src={mainImg}
                alt="Luxury Dining Ambiance"
                className="cta-bg-image"
                loading="lazy"
              />
              <div className="cta-overlay"></div>
            </div>

            <div className="container relative cta-content-wrapper animate-on-scroll">
              <div className="cta-glass-card">
                <div className="subtitle-wrapper">
                  <span className="line"></span>
                  <p className="subtitle">Unforgettable Hospitality</p>
                  <span className="line"></span>
                </div>
                <h2 className="title cta-title">
                  Experience Royal Dining Like Never Before
                </h2>
                <p className="description cta-description">
                  Reserve your table today and indulge in authentic flavors,
                  luxury ambiance, and unforgettable hospitality.
                </p>
                <div className="cta-actions">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn btn-primary btn-glow"
                  >
                    Book Now
                  </button>
                  <button
                    onClick={() => navigateTo("menu")}
                    className="btn btn-secondary glass-btn"
                  >
                    Explore Menu
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ==================== DETAILED FULL MENU PAGE VIEW ==================== */}
      {currentPage === "menu" && (
        <>
          {/* Menu Page Hero Banner */}
          <section className="hero hero-compact">
            <div className="hero-bg">
              <img
                src="https://i.pinimg.com/1200x/48/d5/ad/48d5ad9c6e10398a51993fb20270112e.jpg"
                alt="Premium Menu background"
              />
              <div className="hero-overlay"></div>
            </div>
            <div className="container hero-content animate-on-scroll">
              <div className="hero-text">
                <h1 className="title">Our Menu</h1>
                <div className="subtitle-wrapper">
                  <span className="line"></span>
                  <p className="subtitle">Crafted with passion</p>
                  <span className="line"></span>
                </div>
                <p className="description">
                  Experience a symphony of flavors in every dish. Our menu
                  features a curated selection of time-honored recipes and the
                  highest quality ingredients, offering an unparalleled dining
                  journey.
                </p>
              </div>
            </div>
          </section>

          {/* Deep Catalog Menu section */}
          <section id="menu-page" className="menu section-padding">
            <div className="container">
              {/* Category selector filters */}
              <div className="menu-filters">
                {categoryFilters.map((tab) => (
                  <button
                    key={tab.id}
                    className={`filter-btn ${menuFilter === tab.id ? "active" : ""}`}
                    onClick={() => handleMenuFilterChange(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Categorized list items with seamless fade transition */}
              <div
                className="menu-list text-left"
                style={{
                  transition: "opacity 0.3s ease",
                  opacity: menuFadeState === "in" ? 1 : 0,
                }}
              >
                {filteredMenuSections.map((sec) => (
                  <div
                    key={sec.id}
                    className="menu-section"
                    data-category={sec.id}
                  >
                    <h3 className="menu-section-title">{sec.title}</h3>
                    {sec.items.map((item, index) => {
                      const showSubheading =
                        item.subcategory &&
                        (index === 0 ||
                          sec.items[index - 1].subcategory !==
                            item.subcategory);
                      return (
                        <React.Fragment key={index}>
                          {showSubheading && (
                            <h4 className="menu-subcategory-title">
                              {item.subcategory}
                            </h4>
                          )}
                          <div className="menu-item" data-category={sec.id}>
                            <img
                              src={getImgUrl(item.img)}
                              alt={item.title}
                              className="menu-item-img"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                            <div className="menu-item-info">
                              <div className="menu-item-header">
                                <h4 className="menu-item-title">
                                  {item.title}
                                </h4>
                                <span className="leader-line"></span>
                                <span
                                  className="menu-item-price"
                                  style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 500,
                                  }}
                                >
                                  {item.price}
                                </span>
                              </div>
                              <p className="menu-item-desc">{item.desc}</p>
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ==================== DETAILED CONTACT PAGE VIEW ==================== */}
      {currentPage === "contact" && (
        <>
          {/* Contact Page Hero Banner */}
          <section className="hero hero-compact">
            <div className="hero-bg">
              <img
                src={newImg}
                alt="Contact background"
              />
              <div className="hero-overlay"></div>
            </div>
            <div className="container hero-content animate-on-scroll">
              <div className="hero-text">
                <h1 className="title">Get In Touch</h1>
                <div className="subtitle-wrapper">
                  <span className="line"></span>
                  <p className="subtitle">We await your arrival</p>
                  <span className="line"></span>
                </div>
                <p className="description">
                  We would love to hear from you. Reach out for dinner
                  reservations, private event inquiries, or any special requests
                  to make your experience truly unforgettable.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            className="section-padding"
            style={{ backgroundColor: "var(--bg-dark)" }}
          >
            <div className="container contact-grid animate-on-scroll">
              {/* Contact Info (Left Column) */}
              <div>
                <div className="subtitle-wrapper justify-start">
                  <span className="line"></span>
                  <p className="subtitle">Get in Touch</p>
                  <span className="line"></span>
                </div>
                <h2 className="section-title">Contact Information</h2>
                <p style={{ color: "var(--text-muted)", marginBottom: "40px" }}>
                  Whether you're looking to book a private event, have questions
                  about our menu, or simply want to share your experience, our
                  team is here for you.
                </p>

                <div className="contact-info-item animate-on-scroll">
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <h4>Our Location</h4>
                    <p style={{ fontFamily: "'Poppins', sans-serif" }}>
                      <a
                        href="https://maps.google.com/?q=Royal+Haveli+3227+South+White+Road+San+Jose+CA+95148"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "inherit",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--accent-gold)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "inherit")
                        }
                      >
                        3227 South White Road
                        <br />
                        San Jose, California 95148, USA
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item animate-on-scroll">
                  <i className="fa-solid fa-phone"></i>
                  <div>
                    <h4>Call Us</h4>
                    <p style={{ fontFamily: "'Poppins', sans-serif" }}>
                      <a
                        href="tel:+14088896001"
                        style={{
                          color: "var(--accent-gold)",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--accent-gold-hover)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--accent-gold)")
                        }
                      >
                        (408) 889-6001
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item animate-on-scroll">
                  <i className="fa-solid fa-envelope"></i>
                  <div>
                    <h4>Email Us</h4>
                    <p style={{ fontFamily: "'Poppins', sans-serif" }}>
                      royalhavelisj@gmail.com
                    </p>
                  </div>
                </div>

                <div className="contact-info-item animate-on-scroll">
                  <i className="fa-solid fa-clock"></i>
                  <div>
                    <h4>Opening Hours</h4>
                    <p style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Morning 11:00 AM To 3:00 PM
                      <br />
                      Evening 5:00 PM To 10:00 PM
                      <br />
                      Tuesday Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form (Right Column) */}
              <div className="contact-form-premium">
                <div className="form-header">
                  <h3>Send Us a Message</h3>
                  <p>Inquire about reservations, private dining, or events.</p>
                </div>
                <form onSubmit={handleContactSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="c-name">
                        Full Name <span className="req-star">*</span>
                      </label>
                      <div className="input-icon-group">
                        <i className="fa-solid fa-user"></i>
                        <input
                          type="text"
                          id="c-name"
                          placeholder="E.g. Alexander Knight"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-email">
                        Email Address <span className="req-star">*</span>
                      </label>
                      <div className="input-icon-group">
                        <i className="fa-solid fa-envelope"></i>
                        <input
                          type="email"
                          id="c-email"
                          placeholder="alex@royalhaveli.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-phone">
                        Phone Number <span className="req-star">*</span>
                      </label>
                      <div className="input-icon-group">
                        <i className="fa-solid fa-phone"></i>
                        <input
                          type="tel"
                          id="c-phone"
                          placeholder="e.g. (408) 889-6001"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-subject">
                        Subject <span className="req-star">*</span>
                      </label>
                      <div className="input-icon-group">
                        <i className="fa-solid fa-pen-to-square"></i>
                        <input
                          type="text"
                          id="c-subject"
                          placeholder="Reservations / Inquiry"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-20">
                    <label htmlFor="c-message">
                      Your Message <span className="req-star">*</span>
                    </label>
                    <div className="input-icon-group textarea-icon-group">
                      <i className="fa-solid fa-message"></i>
                      <textarea
                        id="c-message"
                        rows={6}
                        placeholder="How can we make your visit special?"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-reserve-submit"
                    disabled={contactSubmitState === "processing"}
                    style={{ marginTop: "30px" }}
                  >
                    {contactSubmitState === "idle" && "Send Message"}
                    {contactSubmitState === "processing" && (
                      <>
                        <i className="fa-solid fa-spinner fa-spin"></i>{" "}
                        Processing...
                      </>
                    )}
                    {contactSubmitState === "success" && (
                      <>
                        <i className="fa-solid fa-check"></i> Message Received!
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Embedded Google Map Section */}
            <div
              className="container animate-on-scroll"
              style={{ marginTop: "50px" }}
            >
              <div className="map-container">
                <iframe
                  className="map-iframe"
                  title="Royal Haveli Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.127975284683!2d-121.7962179241379!3d37.315796172104754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcd6f966b9be5%3A0x6bba847c23bc9ee4!2sRoyal+Haveli!5e0!3m2!1sen!2sus!4v1779694884038!5m2!1sen!2sus"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="map-link-overlay">
                  <a
                    href="https://maps.google.com/?q=Royal+Haveli+3227+South+White+Road+San+Jose+CA+95148"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium-location-map"
                  >
                    <i className="fa-solid fa-map-location-dot"></i>
                    Find Us on Map
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer
        navigateTo={navigateTo}
        setIsModalOpen={setIsModalOpen}
      />

      {/* ==================== RESERVATION FORM MODAL ==================== */}
      <BookingModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        resSubmitState={resSubmitState}
        bookingForm={bookingForm}
        bookingErrors={bookingErrors}
        bookingGeneralError={bookingGeneralError}
        handleReservationSubmit={handleReservationSubmit}
        handleBookingChange={handleBookingChange}
        nameInputRef={nameInputRef}
      />
    </>
  );
}
