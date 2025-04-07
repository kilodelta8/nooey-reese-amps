// src/components/SpeakerCabinetCard.tsx
import { JSX } from 'react';
import { SpeakerCabinet } from '../types/speakerCabinet'; // Adjust path if needed
import '../css/SpeakerCabinetCard.css'; // For styling the card

interface SpeakerCabinetCardProps {
  cabinet: SpeakerCabinet;
}

function SpeakerCabinetCard({ cabinet }: SpeakerCabinetCardProps): JSX.Element {
  return (
    <article className="cabinet-card"> {/* Changed class name slightly */}
      <div className="cabinet-image-container">
        <img src={cabinet.imageUrl} alt={cabinet.name} className="cabinet-image" />
      </div>
      <div className="cabinet-info">
        <h2 className="cabinet-name">{cabinet.name}</h2>
        <p className="cabinet-short-desc">{cabinet.shortDescription}</p>
        <p className="cabinet-detail-desc">{cabinet.detailedDescription}</p>

        {cabinet.keyFeatures && cabinet.keyFeatures.length > 0 && (
          <div className="cabinet-features">
            <h3>Key Features:</h3>
            <ul>
              {cabinet.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Optional: Display Specs */}
        {cabinet.specs && (
            <div className="cabinet-specs">
                <h3>Specifications:</h3>
                <ul>
                    {Object.entries(cabinet.specs).map(([key, value]) => (
                        <li key={key}><strong>{key}:</strong> {value}</li>
                    ))}
                </ul>
            </div>
        )}

         {/* Optional: Display Price */}
         {cabinet.price && (
            <p className="cabinet-price">Price: {cabinet.price}</p>
         )}

        {/* Optional: Link to contact */}
        {/* <Link to={`/contact?inquiry=cabinet.name`}>Inquire</Link> */}
      </div>
    </article>
  );
}

export default SpeakerCabinetCard;