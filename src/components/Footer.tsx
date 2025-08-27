import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 border-t border-valpre-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex items-center">
            <div className="text-sm text-valpre-text-muted">
              <span className="text-valpre-text font-medium">Powered by</span>
              <br />
              <span className="text-valpre-accent font-bold text-lg">VALPRE</span>
            </div>
          </div>
          
          <div className="text-sm text-valpre-text-muted">
            <span className="font-medium text-valpre-text">Version:</span> v1.0.1
          </div>
          
          <div className="text-sm text-valpre-text-muted">
            <span className="font-medium text-valpre-text">Environment:</span> Production
          </div>
          
          <div className="text-sm">
            <a 
              href="#" 
              className="text-valpre-accent hover:text-valpre-accent/80 transition-colors duration-200 underline"
            >
              Contact Valpre Support
            </a>
          </div>
        </div>
        
        <div className="border-t border-valpre-border pt-6">
          <p className="text-xs text-valpre-text-muted leading-relaxed">
            <strong>Disclaimer:</strong> This application contains confidential and proprietary information of Barclays. 
            Access is restricted to authorized personnel only. Unauthorized use, disclosure or distribution of any data 
            contained herein is strictly prohibited and may result in disciplinary or legal action.
          </p>
          
          <p className="text-xs text-valpre-text-muted mt-4">
            © 2024 Valpre (Barclays). All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};