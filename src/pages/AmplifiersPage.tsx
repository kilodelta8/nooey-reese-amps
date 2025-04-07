// src/pages/AmplifiersPage.tsx
import { JSX } from 'react';
import AmplifierCard from '../components/AmplifierCard'; // Adjust path if needed
import { Amplifier } from '../types/amplifier'; // Adjust path if needed
import '../css/AmplifiersPage.css'; // For styling the overall page layout

// --- Sample Data (Replace with your actual amplifier data) ---
// Ideally, import this from a separate file (e.g., src/data/amplifiers.ts)
const amplifierData: Amplifier[] = [
  {
    id: 'nra-november-25',
    name: 'NRA November 25',
    imageUrl: 'src/assets/amplifier.png', // <-- Replace with actual image path
    shortDescription: 'Punchy low-wattage head with versatile gain stages.',
    detailedDescription: 'The November 25 delivers rich harmonic content and dynamic touch sensitivity, perfect for studio work and small gigs. From chimey cleans to saturated roar, it covers impressive ground.',
    keyFeatures: [
      '25 Watts Class A/B',
      'Hand-wired Turret Board Construction',
      'Gain, Treble, Mid, Bass, Master Volume Controls',
      'Selectable Voicing Switch (Classic/Modern)',
      'Premium Capacitors and Resistors',
    ],
    specs: {
        Power: '15W',
        Tubes: '4x EL84, 3x 12AX7, 1x 5ar4',
        Outputs: '4, 8, 16 Ohm Speaker Jacks',
        Dimensions: '24.5" x 11.5" x 9.5"',
        Weight: '25 lbs',
    },
    price: '$1,999',
    soundClipUrl: 'https://example.com/soundclip1', // <-- Optional: Replace link
  },
  {
    id: 'nra-fatface-50',
    name: 'NRA FatFace 50',
    imageUrl: 'src/assets/amplifier.png', // <-- Replace with actual image path
    shortDescription: 'Classic American clean tones with lush tube reverb.',
    detailedDescription: 'Inspired by mid-60s circuits, the ToneKing 45 offers sparkling cleans, warm breakup, and a deep, dimensional reverb. The ideal platform for pedals and capturing timeless sounds.',
    keyFeatures: [
      '50 Watts Class A/B',
      'Point-to-Point Wiring',
      'Volume, Treble, Bass Controls',
      'Tube-Driven Spring Reverb',
      'Solid Birch Cabinet',
    ],
     specs: {
        Power: '50W',
        Tubes: '2x 6L6GC, 2x 12AX7, 1x 12AY7',
        Outputs: '4, 8 Ohm Speaker Jacks',
        Dimensions: '24.5" x 11.5" x 9.5"',
        Weight: '38 lbs',
    },
     price: '$2,199',
  },
  // Add more amplifier objects as needed
];
// --- End of Sample Data ---


function AmplifiersPage(): JSX.Element {
  return (
    <div className="amplifiers-page">
      <header className="page-header">
         <h1>Nooey Reese Amplification - Our Amplifiers</h1>
         <p>Handcrafted vacuum tube amplifiers built with passion for tone.</p>
      </header>

      {amplifierData.length > 0 ? (
        <div className="amplifiers-grid">
          {amplifierData.map((amp) => (
            <AmplifierCard key={amp.id} amplifier={amp} />
          ))}
        </div>
      ) : (
        <p>Amplifier details coming soon. Please check back later!</p>
      )}
    </div>
  );
}

export default AmplifiersPage;