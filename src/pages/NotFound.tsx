import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="centered-page">
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 12 }}>404</h1>
        <p style={{ fontSize: 20, color: '#4b5563', marginBottom: 12 }}>Oops! Page not found</p>
        <a href="/" className="footer-link">Return to Home</a>
      </div>
    </div>
  );
};

export default NotFound;
