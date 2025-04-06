// src/types/amplifier.ts
export interface Amplifier {
    id: string; // Unique identifier (e.g., 'nra-model-one')
    name: string; // Amplifier model name (e.g., "The ToneMaster 50")
    imageUrl: string; // Path to the amplifier image
    shortDescription: string; // A brief tagline or summary
    detailedDescription: string; // Longer description of the amp's sound and features
    keyFeatures: string[]; // List of key selling points or specs
    // Optional fields:
    specs?: Record<string, string>; // e.g., { Power: '50W', Tubes: '2x EL34, 3x 12AX7' }
    soundClipUrl?: string; // Link to a sound demo
    price?: string; // e.g., '$1,999' (display purpose)
  }