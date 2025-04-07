// src/pages/RepairRestorationPage.tsx
import { JSX } from 'react';
import { Link } from 'react-router-dom';
import '../css/RepairRestorationPage.css'; // For styling this specific page

// Optional: Import images if you manage them via src/assets
// import ampRepairImage from '../assets/amp-repair.jpg';
// import radioRestorationImage from '../assets/radio-restoration.jpg';

function RepairRestorationPage(): JSX.Element {
  return (
    <div className="repair-restoration-page">
      <header className="page-header">
        <h1>Tube Amp & Vintage Radio Repair & Restoration</h1>
        <p>Bringing classic electronics back to life with expert care and attention to detail.</p>
      </header>

      {/* Introduction/Philosophy Section */}
      <section className="intro-section">
        <h2>Our Approach</h2>
        <p>
          {/* Replace with your actual philosophy */}
          At Nooey Reese Amplification, we understand the connection musicians have with their tube amps and the nostalgic value of vintage radios. We combine technical expertise with a respect for original designs to provide high-quality repair and restoration services. Whether it's routine maintenance or a full overhaul, we treat every piece of equipment with the care it deserves.
        </p>
      </section>

      {/* Amplifier Services Section */}
      <section className="service-section amp-services">
         {/* Optional Image */}
         {/* <img src={ampRepairImage} alt="Guitar amplifier being repaired on workbench" className="service-image" /> */}
         <img src="src/assets/amp-repair-placeholder.jpg" alt="Guitar amplifier repair workbench" className="service-image" /> {/* Example using public folder */}

        <div className="service-description">
            <h2>Vacuum Tube Amplifier Services</h2>
            <p>
              Keep your tone machine running reliably and sounding its best. We service all makes and models of tube guitar amplifiers, from vintage classics to modern boutique amps. Our services include:
            </p>
            <ul>
              <li>Troubleshooting & Diagnosis</li>
              <li>Re-tubing & Biasing</li>
              <li>Capacitor Replacement ("Cap Job")</li>
              <li>Circuit Modifications & Upgrades</li>
              <li>Noise Reduction</li>
              <li>Component-Level Repair</li>
              <li>Full Electronic Restorations</li>
              <li>Routine Maintenance & Cleaning</li>
            </ul>
            <p>
              We use high-quality replacement parts and follow best practices to ensure the longevity and safety of your amplifier.
            </p>
        </div>
      </section>

      {/* Radio Services Section */}
      <section className="service-section radio-services">
         {/* Optional Image */}
         {/* <img src={radioRestorationImage} alt="Vintage vacuum tube radio restored" className="service-image" /> */}
          <img src="src/assets/radio-restore-placeholder.jpg" alt="Restored vintage tube radio" className="service-image" /> {/* Example using public folder */}

         <div className="service-description">
            <h2>Vintage Tube Radio Restoration</h2>
            <p>
              Rediscover the magic of vintage radio! We specialize in the electronic restoration of vacuum tube radios primarily from the 1930s to the 1960s. Our goal is to bring these historical pieces back to safe, working order while preserving their original character.
            </p>
            <ul>
              <li>Initial Assessment & Safety Check</li>
              <li>Capacitor and Resistor Replacement (as needed for reliability/safety)</li>
              <li>Tube Testing & Replacement</li>
              <li>Circuit Alignment (if necessary)</li>
              <li>Cleaning of Chassis and Controls</li>
              <li>Power Cord Replacement</li>
              {/* Mention if you do cabinet work or focus only on electronics */}
              <li>Focus on Electronic Restoration (Cabinet refinishing typically referred out)</li>
            </ul>
            <p>
              We handle each radio with historical sensitivity, aiming for reliable operation so you can enjoy listening for years to come.
            </p>
         </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready for Service?</h2>
        <p>
          Have an amplifier needing attention or a vintage radio waiting to be restored? Contact us today to discuss your project and get an estimate. Please provide the make, model, and a description of the issue on our contact form.
        </p>
        <Link to="/contact" className="cta-button button">
          Contact Us for Repair/Restoration
        </Link>
      </section>
    </div>
  );
}

export default RepairRestorationPage;