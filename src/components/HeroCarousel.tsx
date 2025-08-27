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
    <div className="relative w-full max-w-5xl mx-auto px-4">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-valpre-card/80 backdrop-blur-sm border border-valpre-border rounded-full flex items-center justify-center text-valpre-text hover:bg-valpre-card hover:border-valpre-accent transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-valpre-card/80 backdrop-blur-sm border border-valpre-border rounded-full flex items-center justify-center text-valpre-text hover:bg-valpre-card hover:border-valpre-accent transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden rounded-3xl mx-12">
        <div 
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <Card className="bg-gradient-to-br from-valpre-card to-valpre-card/90 border border-valpre-border/50 relative overflow-hidden min-h-[400px] shadow-2xl">
                {/* Background Effects */}
                <div className="absolute inset-0">
                  <div 
                    className="absolute top-0 right-0 w-96 h-96 opacity-20"
                    style={{
                      background: 'radial-gradient(circle, hsl(var(--valpre-accent) / 0.6) 0%, transparent 70%)'
                    }}
                  />
                  <div 
                    className="absolute bottom-0 left-0 w-64 h-64 opacity-10"
                    style={{
                      background: 'radial-gradient(circle, hsl(var(--valpre-accent) / 0.4) 0%, transparent 70%)'
                    }}
                  />
                </div>
                
                <div className="relative z-10 p-12 flex items-center justify-between h-full">
                  <div className="flex-1 max-w-2xl">
                    <h2 className="text-3xl font-light text-valpre-text mb-3 tracking-wide">
                      {slide.title}
                    </h2>
                    <h3 className="text-6xl font-bold text-valpre-accent mb-6 tracking-tight leading-tight">
                      {slide.subtitle}
                    </h3>
                    <p className="text-valpre-text-muted text-xl leading-relaxed max-w-lg">
                      {slide.description}
                    </p>
                  </div>
                  
                  <div className="ml-16 flex-shrink-0">
                    <div className="relative">
                      <div className="w-40 h-40 rounded-full border-4 border-valpre-accent/60 relative overflow-hidden shadow-lg">
                        <div 
                          className="absolute inset-0 animate-pulse"
                          style={{
                            background: `conic-gradient(from 0deg, transparent 0%, hsl(var(--valpre-accent) / 0.3) 50%, transparent 100%)`
                          }}
                        />
                        <img
                          src={slide.image}
                          alt="Profile"
                          className="w-full h-full object-cover rounded-full relative z-10"
                        />
                      </div>
                      {/* Decorative rings */}
                      <div className="absolute -inset-4 border border-valpre-accent/20 rounded-full animate-pulse"></div>
                      <div className="absolute -inset-8 border border-valpre-accent/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="flex justify-center mt-8 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-8 h-3 bg-valpre-accent shadow-lg' 
                : 'w-3 h-3 bg-valpre-text-muted hover:bg-valpre-accent/60 hover:scale-125'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};