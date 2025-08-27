import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const pointerStartXRef = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const goTo = useCallback((index: number) => {
    const safe = (index + slides.length) % slides.length;
    setCurrentIndex(safe);
  }, []);

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStartXRef.current = e.clientX;
    setIsDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging || pointerStartXRef.current == null) return;
    const delta = e.clientX - pointerStartXRef.current;
    setDragOffset(delta);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging || pointerStartXRef.current == null) return;
    const delta = e.clientX - pointerStartXRef.current;
    const threshold = 60;
    setIsDragging(false);
    setDragOffset(0);
    pointerStartXRef.current = null;
    if (delta > threshold) prev();
    else if (delta < -threshold) next();
  };

  const transform = `translateX(calc(${-currentIndex * 100}% + ${dragOffset}px))`;

  return (
    <div className="carousel" aria-roledescription="carousel">
      <button aria-label="Previous slide" onClick={prev} className="carousel-arrow left">
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button aria-label="Next slide" onClick={next} className="carousel-arrow right">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="carousel-viewport">
        <div
          ref={trackRef}
          className={`carousel-track${isDragging ? ' dragging' : ''}`}
          style={{ transform }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {slides.map((slide, idx) => (
            <div key={slide.id} className={`carousel-slide${idx === currentIndex ? ' is-active' : ''}`}>
              <Card className="carousel-card">
                <div className="carousel-card-bg">
                  <div className="carousel-radial-1" />
                  <div className="carousel-radial-2" />
                </div>

                <div className="carousel-content">
                  <div className="carousel-text">
                    <h2 className="carousel-title">{slide.title}</h2>
                    <h3 className="carousel-subtitle">{slide.subtitle}</h3>
                    <p className="carousel-desc">{slide.description}</p>
                  </div>
                  <div className="carousel-avatar-wrap">
                    <div className="carousel-avatar">
                      <div className="carousel-avatar-pulse" />
                      <img src={slide.image} alt="Profile" className="w-full h-full object-cover rounded-full relative z-10" />
                    </div>
                    <div className="carousel-ring" />
                    <div className="carousel-ring delay" />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots" role="tablist" aria-label="Slides">
        {slides.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to slide ${index + 1}`}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
};