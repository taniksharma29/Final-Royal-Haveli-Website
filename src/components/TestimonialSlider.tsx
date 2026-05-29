import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Review {
  avatar: string;
  name: string;
  rating: number;
  content: string;
  date: string;
}

const reviews: Review[] = [
  {
    avatar: 'S',
    name: 'Sarah J.',
    rating: 5,
    content: '"An exquisite culinary journey. The Butter Chicken is velvety and rich, and the ambiance truly reflects the \'Haveli\' heritage. A must-visit in SJ!"',
    date: '1 week ago'
  },
  {
    avatar: 'R',
    name: 'Rajesh K.',
    rating: 5,
    content: '"The most authentic flavors I\'ve encountered. Every dish tells a story of tradition. The service is impeccably professional and the food is phenomenal."',
    date: '3 weeks ago'
  },
  {
    avatar: 'M',
    name: 'Michelle W.',
    rating: 5,
    content: '"Simply sublime. The attention to detail in their spices and presentation is remarkable. A premium dining experience that sets a new standard."',
    date: '1 month ago'
  }
];

export const TestimonialSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="testimonial-slider-container">
            <div className="slider-nav">
                <button 
                  onClick={prevSlide} 
                  className="nav-btn prev"
                  aria-label="Previous Review"
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <div className="slider-content">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.98, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: -15 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
                        >
                            {/* Card 1 */}
                            <div className="review-card-featured flex flex-col justify-between h-full">
                                <div className="review-header">
                                    <div className="reviewer-avatar">{reviews[currentIndex].avatar}</div>
                                    <div className="reviewer-meta">
                                        <h5>{reviews[currentIndex].name}</h5>
                                        <div className="star-rating">
                                            {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                                <i key={i} className="fa-solid fa-star"></i>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="google-icon-small"><i className="fa-brands fa-google"></i></div>
                                </div>
                                <p className="review-content">
                                    {reviews[currentIndex].content}
                                </p>
                                <div className="review-date">{reviews[currentIndex].date}</div>
                            </div>

                            {/* Card 2 - Hidden on mobile, shown on md and up */}
                            <div className="review-card-featured hidden md:flex flex-col justify-between h-full">
                                <div className="review-header">
                                    <div className="reviewer-avatar">
                                        {reviews[(currentIndex + 1) % reviews.length].avatar}
                                    </div>
                                    <div className="reviewer-meta">
                                        <h5>{reviews[(currentIndex + 1) % reviews.length].name}</h5>
                                        <div className="star-rating">
                                            {[...Array(reviews[(currentIndex + 1) % reviews.length].rating)].map((_, i) => (
                                                <i key={i} className="fa-solid fa-star"></i>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="google-icon-small"><i className="fa-brands fa-google"></i></div>
                                </div>
                                <p className="review-content">
                                    {reviews[(currentIndex + 1) % reviews.length].content}
                                </p>
                                <div className="review-date">
                                    {reviews[(currentIndex + 1) % reviews.length].date}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <button 
                  onClick={nextSlide} 
                  className="nav-btn next"
                  aria-label="Next Review"
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
            
            <div className="slider-indicators">
                {reviews.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`indicator ${currentIndex === index ? 'active' : ''}`}
                        aria-label={`Go to review ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
