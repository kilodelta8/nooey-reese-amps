// src/pages/CustomBuildsPage.tsx
import { JSX } from 'react';
import { Link } from 'react-router-dom';
import '../css/CustomBuildsPage.css'; // For styling this specific page

// Optional: Import images if managed via src/assets
// import customBuildImage from '../assets/custom-build-showcase.jpg';
// import modWorkbenchImage from '../assets/mod-workbench.jpg';

function CustomBuildsPage(): JSX.Element {
  return (
    <div className="custom-builds-page">
      <header className="page-header">
        <h1>Custom Tube Amplifier Builds & Modifications</h1>
        <p>Your unique sonic vision, brought to life with vacuum tubes and expert craftsmanship.</p>
      </header>

      {/* Introduction Section */}
      <section className="intro-section">
        <h2>Bespoke Tone, Tailored For You</h2>
        <p>
          {/* Replace with your actual philosophy */}
          Beyond our signature amplifier line, Nooey Reese Amplification offers truly personalized services. Whether you dream of a completely custom-designed amplifier or want to refine the voice of your current tube amp, we work closely with you to achieve your specific tonal goals.
        </p>
      </section>

      {/* Full Custom Builds Section */}
      <section className="service-section custom-build-details">
        {/* Optional: Image Placeholder/Gallery */}
        {/* <img src={customBuildImage} alt="Showcase of custom built amplifiers" className="service-image" /> */}
        <div className="placeholder-image wide-placeholder">
             Image Showcase: Examples of Past Custom Builds (Placeholder)
        </div>

        <div className="service-description">
          <h2>Full Custom Amplifier Builds</h2>
          <p>
            Imagine an amplifier built exclusively for your playing style and sonic preferences. Our full custom build process is a collaborative journey:
          </p>
          <ul>
            <li><strong>Consultation:</strong> We start by discussing your ideal tone, influences, required features, and preferred aesthetics.</li>
            <li><strong>Design:</strong> Based on our discussion, we can design a unique circuit or draw inspiration from classic platforms (e.g., British Plexi, American Tweed, High-Gain circuits) tailored to your needs.</li>
            <li><strong>Component Selection:</strong> We utilize high-quality, reliable components, sourcing specific transformers, capacitors, resistors, and tubes to shape the final sound and ensure longevity.</li>
            <li><strong>Hand-Wired Craftsmanship:</strong> Each custom amp is meticulously hand-wired (point-to-point or turret board) with attention to detail, layout, and lead dress for optimal performance and low noise.</li>
            <li><strong>Cabinet & Aesthetics:</strong> We can work with you or trusted cabinet builders to house your custom circuit in a head or combo cabinet that matches your vision.</li>
          </ul>
          <p>
            From low-wattage practice amps to stage-ready powerhouses, we can build the tube amp you've always wanted.
          </p>
        </div>
      </section>

      {/* Amplifier Modifications Section */}
      <section className="service-section amp-mods-details">
         {/* Optional Image Placeholder */}
         {/* <img src={modWorkbenchImage} alt="Amplifier chassis on workbench undergoing modification" className="service-image" /> */}
         <div className="placeholder-image small-placeholder">
              Image: Mod work in progress (Placeholder)
         </div>

        <div className="service-description">
          <h2>Amplifier Modifications (Mods)</h2>
          <p>
            Love your current tube amp but wish it had a little something extra? Modifications can unlock new possibilities and tailor your amp's performance without needing a completely new build. We offer a range of modification services, including:
          </p>
          <ul>
            <li><strong>Gain Structure Mods:</strong> Adding extra gain stages, boost switches, or refining existing gain characteristics.</li>
            <li><strong>Master Volume Controls:</strong> Adding Post-Phase Inverter (PPIMV) or other types of master volumes for achieving overdrive at lower volumes.</li>
            <li><strong>Effects Loops:</strong> Installing transparent series or parallel effects loops for better integration of time-based effects.</li>
            <li><strong>Voicing Changes:</strong> Adjusting EQ frequencies, negative feedback, or component values to alter the amp's core tone (e.g., brighter, darker, tighter bass).</li>
            <li><strong>Component Upgrades:</strong> Swapping specific capacitors, resistors, or potentiometers for tonal shaping or improved reliability.</li>
            <li><strong>Bias Conversions:</strong> Converting fixed-bias amps to cathode bias or vice-versa (where appropriate).</li>
            <li><strong>Reverb Additions/Changes:</strong> Adding or modifying reverb circuits.</li>
          </ul>
          <p>
            We'll discuss the feasibility and potential impact of any modification on your specific amplifier model before proceeding. Our goal is to enhance your amp thoughtfully and reliably.
          </p>
        </div>
      </section>

      {/* The Process Section */}
       <section className="process-section">
            <h2>The Custom Process</h2>
            <p>
                Every custom project, whether a full build or a modification, starts with a conversation. We want to understand your goals thoroughly. We'll discuss options, provide recommendations, estimate costs and timelines, and ensure you're involved throughout the process. Our commitment is to quality craftsmanship and delivering exceptional tone that inspires you.
            </p>
       </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Have an Idea for a Build or Mod?</h2>
        <p>
          Let's talk about your dream tone! Contact us to start the conversation about your custom amplifier build or modification project. Please provide as much detail as possible about your ideas in the contact form.
        </p>
        <Link to="/contact" className="cta-button button">
          Inquire About Custom Work
        </Link>
      </section>
    </div>
  );
}

export default CustomBuildsPage;