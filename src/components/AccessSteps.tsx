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
    <div className="container section steps">
      <h2 className="steps-title">
        How to Get Access
      </h2>
      
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div key={step.id} className="step">
            <Card className="step-card">
              <div className="step-card-glow" />
              
              <div className="step-card-inner">
                <div className="step-icon-wrap">
                  {step.icon}
                </div>
                
                <h3 className="step-title">
                  {step.title}
                </h3>
                
                <p className="step-desc">
                  {step.description}
                </p>
              </div>
            </Card>
            
            {/* Connection line (except for last item) */}
            {index < steps.length - 1 && (
              <div style={{ display: 'none' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};