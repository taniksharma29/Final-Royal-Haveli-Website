import React from "react";
import { motion } from "motion/react";

const marqueeItems = [
  "Authentic Indian Cuisine",
  "Luxury Dining Experience",
  "Fine Dining",
  "Fresh Ingredients",
  "Catering Services",
  "Birthday Celebrations",
  "Royal Ambience",
  "Reserve Your Table",
  "Premium Hospitality",
];

export const MarqueeSlider: React.FC = () => {
  // We duplicate the array to ensure the viewport is filled and the scroll is seamless
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full animate-on-scroll"
      style={{ marginTop: "0px", marginBottom: "0px" }}
      id="premium-marquee-section"
    >
      <div className="premium-marquee-wrapper">
        {/* Shifting light overlay */}
        <div className="premium-marquee-shine"></div>

        {/* Outer subtle particles or light indicators */}
        <div className="premium-marquee-indicator-left"></div>
        <div className="premium-marquee-indicator-right"></div>

        {/* Marquee Viewport with mask fade */}
        <div className="marquee-viewport mask-faded-horizontal">
          <div className="marquee-track">
            {duplicatedItems.map((item, index) => (
              <div key={index} className="marquee-item-wrapper">
                <span className="marquee-text">{item}</span>
                <span className="marquee-divider" aria-hidden="true">
                  ✦ <span className="divider-center">◆</span> ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
