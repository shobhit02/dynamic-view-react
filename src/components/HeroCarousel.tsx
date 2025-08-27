import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

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

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <Card className="bg-valpre-card border-valpre-border p-8 relative overflow-hidden">
                {/* Radial gradient background */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'radial-gradient(circle at 80% 20%, hsl(var(--valpre-accent) / 0.4) 0%, transparent 60%)'
                  }}
                />
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-4xl font-light text-valpre-text mb-2">
                      {slide.title}
                    </h2>
                    <h3 className="text-5xl font-bold text-valpre-accent mb-4">
                      {slide.subtitle}
                    </h3>
                    <p className="text-valpre-text-muted text-lg">
                      {slide.description}
                    </p>
                  </div>
                  
                  <div className="ml-8">
                    <div className="relative">
                      {/* Circular frame with radial lines */}
                      <div className="w-32 h-32 rounded-full border-4 border-valpre-accent relative overflow-hidden">
                        <div 
                          className="absolute inset-0"
                          style={{
                            background: `conic-gradient(from 0deg, transparent 0%, hsl(var(--valpre-accent) / 0.3) 50%, transparent 100%)`
                          }}
                        />
                        <img
                          src={slide.image}
                          alt="Profile"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-valpre-accent scale-125' 
                : 'bg-valpre-text-muted hover:bg-valpre-accent/50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};