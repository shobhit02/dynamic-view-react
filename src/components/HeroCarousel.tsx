import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Welcome to",
    subtitle: "VALPRE",
    image: "/lovable-uploads/6ae37d18-9918-4a5a-a42a-ae0819b43f05.png",
    description: "Single source framework for Transformation"
  },
  {
    id: 2,
    title: "Secure Access",
    subtitle: "MANAGEMENT",
    image: "/lovable-uploads/6ae37d18-9918-4a5a-a42a-ae0819b43f05.png",
    description: "Streamlined approval process for teams"
  },
  {
    id: 3,
    title: "Enterprise",
    subtitle: "SOLUTION",
    image: "/lovable-uploads/6ae37d18-9918-4a5a-a42a-ae0819b43f05.png",
    description: "Built for modern organizations"
  }
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="carousel-arrow left">
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button onClick={nextSlide} className="carousel-arrow right">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Container */}
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="carousel-slide">
              <Card className="carousel-card">
                {/* Background Effects */}
                <div className="carousel-card-bg">
                  <div className="carousel-radial-1" />
                  <div className="carousel-radial-2" />
                </div>
                
                <div className="carousel-content">
                  <div className="carousel-text">
                    <h2 className="carousel-title">
                      {slide.title}
                    </h2>
                    <h3 className="carousel-subtitle">
                      {slide.subtitle}
                    </h3>
                    <p className="carousel-desc">
                      {slide.description}
                    </p>
                  </div>
                  
                  <div className="carousel-avatar-wrap">
                    <div className="carousel-avatar">
                      <div className="carousel-avatar-pulse" />
                        <img
                          src={slide.image}
                          alt="Profile"
                          className="w-full h-full object-cover rounded-full relative z-10"
                        />
                      </div>
                      {/* Decorative rings */}
                      <div className="carousel-ring" />
                      <div className="carousel-ring delay" />
                    </div>
                  </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button key={index} className={`carousel-dot ${index === currentSlide ? 'active' : ''}`} onClick={() => goToSlide(index)} />
        ))}
      </div>
    </div>
  );
};