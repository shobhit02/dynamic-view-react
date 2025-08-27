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
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const pointerStartXRef = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const GAP = 24;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => setReduced(mq.matches);
    handler();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, reduced]);

  useEffect(() => {
    const measure = () => {
      if (!viewportRef.current) return;
      const vw = viewportRef.current.offsetWidth;
      setViewportWidth(vw);
      setSlideWidth(Math.round(vw * 0.8));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
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

  const baseOffset = viewportWidth && slideWidth ? (viewportWidth - slideWidth) / 2 : 0;
  const translatePx = baseOffset - currentIndex * (slideWidth + GAP) + dragOffset;
  const transform = `translateX(${translatePx}px)`;

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    else if (e.key === 'Home') { e.preventDefault(); goTo(0); }
    else if (e.key === 'End') { e.preventDefault(); goTo(slides.length - 1); }
  };

  return (
    <div
      className="carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button aria-label="Previous slide" onClick={prev} className="carousel-arrow left">
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button aria-label="Next slide" onClick={next} className="carousel-arrow right">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div
        className="carousel-viewport"
        role="group"
        aria-label="Slides"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div
          ref={trackRef}
          className={`carousel-track${isDragging ? ' dragging' : ''}`}
          style={{ transform, gap: `${GAP}px` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              ref={idx === 0 ? viewportRef : undefined}
              className={`carousel-slide${idx === currentIndex ? ' is-active' : ''}`}
              style={slideWidth ? { width: `${slideWidth}px` } : undefined}
            >
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
                  <div className="carousel-media">
                    <img src={slide.image} alt="Slide media" className="carousel-img" />
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