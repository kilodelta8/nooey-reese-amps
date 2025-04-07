// src/types/speakerCabinet.ts
export interface SpeakerCabinet {
    id: string; // Unique identifier (e.g., 'nra-cab-112-open')
    name: string; // Cabinet model name (e.g., "NRA 1x12 Classic Open Back")
    imageUrl: string; // Path to the cabinet image
    shortDescription: string; // A brief tagline or summary
    detailedDescription: string; // Longer description of the cabinet's construction and sound
    keyFeatures: string[]; // List of key selling points (speaker, wood, dimensions etc.)
    // Optional fields:
    specs?: Record<string, string>; // e.g., { Speaker: 'Celestion G12M Greenback', Impedance: '8 Ohms', Wood: 'Baltic Birch Ply', Dimensions: '...', Weight: '...' }
    price?: string; // e.g., '$699'
  }