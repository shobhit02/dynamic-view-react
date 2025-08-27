import { HeroCarousel } from '@/components/HeroCarousel';
import { AccessSteps } from '@/components/AccessSteps';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-valpre-dark text-valpre-text">
      {/* Hero Section with Auto-Scroll Carousel */}
      <section className="px-6 py-16">
        <HeroCarousel />
      </section>
      
      {/* Access Steps Section */}
      <section className="px-6">
        <AccessSteps />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
