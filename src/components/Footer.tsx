// src/components/Footer.tsx
import { JSX } from 'react';
import { Link } from 'react-router-dom'; // If you want navigation links
import '../css/Footer.css'; // For styling the footer

function Footer(): JSX.Element {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo"> {/* role="contentinfo" for accessibility */}
      <div className="footer-content">
        <div className="footer-copyright">
          <p>&copy; {currentYear} Nooey Reese Amplification. All Rights Reserved.</p>
          {/* Optional: Add a short tagline or location */}
          {/* <p>Handcrafted Tube Tone</p> */}
        </div>

        {/* Optional: Add some quick links */}
        <nav className="footer-nav" aria-label="Footer Navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/amplifiers">Amplifiers</Link></li>
            <li><Link to="/repair-restoration">Repair & Restoration</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* Add other relevant links if needed, e.g., Privacy Policy */}
          </ul>
        </nav>

        {/* Optional: Add simple contact info or social links */}
        {/* <div className="footer-contact"> */}
        {/* <p>your-email@example.com | (555) 123-4567</p> */}
        {/* <div className="social-links"> */}
        {/* <a href="#" aria-label="Facebook">FB</a> | <a href="#" aria-label="Instagram">IG</a> */}
        {/* </div> */}
        {/* </div> */}

      </div>
    </footer>
  );
}

export default Footer;