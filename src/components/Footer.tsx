import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-muted">
              <span>Powered by</span>
              <br />
              <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 18 }}>VALPRE</span>
            </div>
          </div>
          <div className="footer-muted">
            <span style={{ color: 'var(--foreground)' }}>Version:</span> v1.0.1
          </div>
          <div className="footer-muted">
            <span style={{ color: 'var(--foreground)' }}>Environment:</span> Production
          </div>
          <div>
            <a href="#" className="footer-link">Contact Valpre Support</a>
          </div>
        </div>
        <div className="footer-meta">
          <p className="footer-muted">
            <strong>Disclaimer:</strong> This application contains confidential and proprietary information of Barclays.
            Access is restricted to authorized personnel only. Unauthorized use, disclosure or distribution of any data
            contained herein is strictly prohibited and may result in disciplinary or legal action.
          </p>
          <p className="footer-muted" style={{ marginTop: 16 }}>
            © 2024 Valpre (Barclays). All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};