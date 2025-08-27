import React from 'react';
import { Card } from '@/components/ui/card';
import { Monitor, FileText, CheckCircle } from 'lucide-react';

interface AccessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: AccessStep[] = [
  {
    id: 1,
    title: "Go to Request",
    description: "Search for ELM/Valpre or click on link",
    icon: <Monitor className="w-12 h-12 text-valpre-accent" />
  },
  {
    id: 2,
    title: "Raise Request",
    description: "Select your role and submit access request form",
    icon: <FileText className="w-12 h-12 text-valpre-accent" />
  },
  {
    id: 3,
    title: "Approval & Access",
    description: "Get approval from manager and access granted",
    icon: <CheckCircle className="w-12 h-12 text-valpre-accent" />
  }
];

export const AccessSteps = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-center text-valpre-text mb-12">
        How to Get Access
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center text-center group">
            <Card className="bg-valpre-card border-valpre-border p-8 rounded-2xl hover:bg-valpre-card/80 transition-colors duration-300 relative overflow-hidden">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-valpre-accent/20 to-transparent" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 p-4 rounded-full bg-valpre-accent/10 group-hover:bg-valpre-accent/20 transition-colors duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-valpre-text mb-3">
                  {step.title}
                </h3>
                
                <p className="text-valpre-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
            
            {/* Connection line (except for last item) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-valpre-accent/30 transform -translate-y-1/2" 
                   style={{ marginLeft: '2rem' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};