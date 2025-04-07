// src/pages/SpeakerCabinetsPage.tsx
import { JSX } from 'react';
import SpeakerCabinetCard from '../components/SpeakerCabinetCard'; // Adjust path if needed
import { SpeakerCabinet } from '../types/speakerCabinet'; // Adjust path if needed
import '../css/SpeakerCabinetsPage.css'; // For styling the overall page layout

// --- Sample Data (Replace with your actual cabinet data) ---
// Ideally, import this from a separate file (e.g., src/data/cabinets.ts)
const cabinetData: SpeakerCabinet[] = [
  {
    id: 'nra-cab-112-ob',
    name: 'NRA 2x12 Classic Open Back',
    imageUrl: 'src/assets/2x12.png', // <-- Replace with actual image path
    shortDescription: 'Lightweight and resonant open-back design.',
    detailedDescription: 'Perfect for achieving airy clean tones and classic rock crunch. The open-back construction provides wide sound dispersion, ideal for smaller venues and studio use. Built from solid pine for resonance.',
    keyFeatures: [
      '2x12" Speaker Configuration',
      'Open Back Design',
      'Solid Pine Construction',
      'Choice of Tolex/Grill Cloth',
      'Premium Wiring & Jack',
    ],
    specs: {
      Speaker: 'Celestion G12M Greenback (or customer choice)',
      Impedance: '8 or 16 Ohms',
      Wood: 'Solid Pine',
      Dimensions: '20" x 18" x 10"',
      Weight: 'Approx. 28 lbs',
    },
    price: '$599 (unloaded)',
  },
  {
    id: 'nra-cab-212-cb',
    name: 'NRA 4x12 Dominator Closed Back',
    imageUrl: 'src/assets/4x12.png', // <-- Replace with actual image path
    shortDescription: 'Punchy and focused closed-back 2x12 cabinet.',
    detailedDescription: 'Delivers tight low-end and focused projection, great for higher gain styles and capturing powerful tones. Constructed from void-free Baltic Birch ply for durability and focused sound.',
    keyFeatures: [
      '4x12" Speaker Configuration (Diagonal or Vertical)',
      'Closed Back, Ported Option Available',
      'Baltic Birch Plywood Construction',
      'Recessed Handles & Metal Corners',
      'Choice of Tolex/Grill Cloth',
    ],
    specs: {
      Speaker: 'Celestion Vintage 30 Quad-set (or customer choice)',
      Impedance: '8 Ohms (Stereo/Mono options)',
      Wood: 'Baltic Birch Plywood',
      Dimensions: '28" x 20" x 14"',
      Weight: 'Approx. 55 lbs',
    },
    price: '$849 (unloaded)',
  },
  // Add more cabinet objects as needed
];
// --- End of Sample Data ---


function SpeakerCabinetsPage(): JSX.Element {
  return (
    <div className="speaker-cabinets-page">
      <header className="page-header">
         <h1>Nooey Reese Amplification - Speaker Cabinets</h1>
         <p>Handcrafted cabinets built for tone, durability, and style.</p>
      </header>

      {cabinetData.length > 0 ? (
        <div className="cabinets-grid"> {/* Use a specific class */}
          {cabinetData.map((cab) => (
            <SpeakerCabinetCard key={cab.id} cabinet={cab} />
          ))}
        </div>
      ) : (
        <p>Speaker cabinet details coming soon. Please check back later!</p>
      )}
    </div>
  );
}

export default SpeakerCabinetsPage;