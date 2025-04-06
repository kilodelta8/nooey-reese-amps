// src/components/AmplifierCard.tsx
import { JSX } from 'react';
import { Amplifier } from '../types/amplifier'; // Adjust path if needed
import '../css/AmplifierCard.css'; // For styling the card

interface AmplifierCardProps {
  amplifier: Amplifier;
}

function AmplifierCard({ amplifier }: AmplifierCardProps): JSX.Element {
  return (
    <article className="amplifier-card">
      <div className="amplifier-image-container">
        <img src={amplifier.imageUrl} alt={amplifier.name} className="amplifier-image" />
      </div>
      <div className="amplifier-info">
        <h2 className="amplifier-name">{amplifier.name}</h2>
        <p className="amplifier-short-desc">{amplifier.shortDescription}</p>
        <p className="amplifier-detail-desc">{amplifier.detailedDescription}</p>

        {amplifier.keyFeatures && amplifier.keyFeatures.length > 0 && (
          <div className="amplifier-features">
            <h3>Key Features:</h3>
            <ul>
              {amplifier.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Optional: Display Specs */}
        {amplifier.specs && (
            <div className="amplifier-specs">
                <h3>Specifications:</h3>
                <ul>
                    {Object.entries(amplifier.specs).map(([key, value]) => (
                        <li key={key}><strong>{key}:</strong> {value}</li>
                    ))}
                </ul>
            </div>
        )}

        {/* Optional: Link to sound clip */}
        {amplifier.soundClipUrl && (
          <a
            href={amplifier.soundClipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sound-clip-link button" // Added button class for styling
          >
            Hear Sound Demo
          </a>
        )}

         {/* Optional: Display Price */}
         {amplifier.price && (
            <p className="amplifier-price">Price: {amplifier.price}</p>
         )}

        {/* Optional: Link to a dedicated product page or contact */}
        {/* <Link to={`/amplifiers/${amplifier.id}`}>More Details</Link> */}
        {/* <Link to="/contact?inquiry=amplifier.name">Inquire</Link> */}

      </div>
    </article>
  );
}

export default AmplifierCard;