import { HeroCarousel } from '@/components/HeroCarousel';
import { AccessSteps } from '@/components/AccessSteps';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="app-root">
      {/* Hero Section */}
      <section className="section">
        <HeroCarousel />
      </section>
      
      {/* Access Steps Section */}
      <section className="section">
        <AccessSteps />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
