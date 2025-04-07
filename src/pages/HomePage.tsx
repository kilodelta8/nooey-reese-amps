// src/pages/HomePage.tsx
import { JSX } from 'react';
import logo from '../assets/react.svg'; // <-- Adjust path/name as needed
import '../css/Homepage.css'; // Optional: for specific homepage styling

function HomePage(): JSX.Element {
  return (
    <div className="home-page">
      <header className="home-header">
        <img src={logo} alt="Nooey Reese Amplification Logo" className="home-logo" />
        <h1>Welcome to Nooey Reese Amplification</h1>
      </header>

      <section className="home-description">
        <h2>Passion for Tone, Built by Hand</h2>
        <p>
          {/* Replace with your actual company description */}
          Nooey Reese Amplification specializes in hand-wired, vacuum tube guitar amplifiers designed for discerning musicians. 
          We are dedicated to crafting exceptional tone, inspired by classic circuits and tailored for modern players. 
          Each amplifier is a labor of love, built with the finest components and attention to detail.
          Whether you're a professional musician or a hobbyist, we have the perfect amplifier for you.
          Our commitment extends beyond our own amplifier line to expert custom builds and meticulous repair services.
        </p>
        <p>
          We also <strong>restore vintage radios</strong>, ensuring that the rich history of these devices is preserved for future generations.
          Our passion for vintage technology and music drives us to create products that not only sound great but also look stunning.
        </p>
      </section>

      <section className="home-services">
        <h2>Our Services</h2>
        <ul>
          <li>
            <strong>Nooey Reese Amplifiers:</strong> Explore our line of signature vacuum tube guitar amps, built with premium components and attention to detail.
          </li>
          <li>
            <strong>Custom Design & Builds:</strong> Have a specific sound in mind? We collaborate with you to design and build the tube amplifier of your dreams.
          </li>
          <li>
            <strong>Amplifier Repair & Restoration:</strong> Expert service for all brands of vacuum tube guitar amplifiers, from routine maintenance to complex restorations.
          </li>
          <li>
            <strong>Vintage Radio Repair & Restoration:</strong> We breathe new life into classic vacuum tube radios, preserving their history and function.
          </li>
        </ul>
        <p>
          {/* Optional: Add a call to action */}
          Use the navigation above to learn more about our amplifiers, custom work, and repair services, or contact us with your inquiry!
        </p>
      </section>
      <div>
        <h3>Check out our KiCAD Library on <a href='https://github.com/kilodelta8/kicad_vacuum_tube_library'>GITHUB</a></h3>
      </div>
    </div>
  );
}

export default HomePage;