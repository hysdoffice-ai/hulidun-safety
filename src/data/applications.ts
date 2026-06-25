export type Application = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  typicalHazards: string[];
  recommendedProducts: string[];
  recommendedFilters: string[];
  buyerTypes: string[];
  disclaimer: string;
};

const disclaimer =
  "Product selection should be based on workplace hazards, local regulations and professional safety assessment. Please contact our team for technical documents and product compatibility information.";

export const applications: Application[] = [
  {
    id: "app-chemical-industry",
    slug: "chemical-industry",
    name: "Chemical Industry",
    summary: "Respiratory protection planning for chemical handling, blending, transfer and maintenance operations.",
    typicalHazards: ["Organic vapor", "Acid gas", "Splash risk", "Emergency escape hazards"],
    recommendedProducts: ["MF14 Full Face Gas Mask", "MF19 Full Face Respirator", "B2KP100 Filter Canister", "Supplied-Air Respirator System"],
    recommendedFilters: ["Organic vapor cartridge", "Acid gas cartridge", "Multi-gas canister"],
    buyerTypes: ["Chemical plants", "Safety distributors", "Maintenance contractors"],
    disclaimer
  },
  {
    id: "app-painting-coating",
    slug: "painting-coating",
    name: "Painting & Coating",
    summary: "Reusable respirator and filter kits for spray painting, coating, surface finishing and booth maintenance.",
    typicalHazards: ["Organic vapor", "Paint mist", "Particles", "Solvent odor"],
    recommendedProducts: ["CF6800 Full Face Respirator", "CF6200 Half Face Respirator", "7502 Dust Half Mask", "Supplied-Air Respirator System"],
    recommendedFilters: ["Organic vapor cartridge", "Paint mist pre-filter", "Particle pad"],
    buyerTypes: ["Paint shops", "Automotive refinishers", "Coating distributors"],
    disclaimer
  },
  {
    id: "app-agriculture-pesticide-spraying",
    slug: "agriculture-pesticide-spraying",
    name: "Agriculture & Pesticide Spraying",
    summary: "Respiratory and face protection kits for spraying, mixing and cleanup tasks in agriculture.",
    typicalHazards: ["Pesticide aerosol", "Organic vapor", "Dust", "Eye exposure"],
    recommendedProducts: ["CF6800 Full Face Respirator", "CF6200 Half Face Respirator", "MF19 Full Face Respirator"],
    recommendedFilters: ["Organic vapor cartridge", "Particle pre-filter", "Multi-gas cartridge"],
    buyerTypes: ["Agriculture distributors", "Farm supply chains", "PPE wholesalers"],
    disclaimer
  },
  {
    id: "app-mining-dust-protection",
    slug: "mining-dust-protection",
    name: "Mining & Dust Protection",
    summary: "Particle and dust protection options for mining, crushing, screening and heavy-duty maintenance.",
    typicalHazards: ["Dust", "Particles", "Equipment maintenance exposure"],
    recommendedProducts: ["7502 Dust Half Mask", "3300 Dust Half Mask", "CF3200 Half Face Respirator"],
    recommendedFilters: ["Dust filter", "Particle pad", "Pre-filter"],
    buyerTypes: ["Mining operators", "Industrial distributors", "Contractors"],
    disclaimer
  },
  {
    id: "app-firefighting-emergency-rescue",
    slug: "firefighting-emergency-rescue",
    name: "Firefighting & Emergency Rescue",
    summary: "Emergency response and escape kits for rescue teams, industrial sites and safety stock programs.",
    typicalHazards: ["Smoke", "Unknown gases", "Emergency escape", "Debris particles"],
    recommendedProducts: ["MF14 Full Face Gas Mask", "B2KP100 Filter Canister", "Emergency & Rescue Kits"],
    recommendedFilters: ["Emergency canister", "Particle filter", "Multi-gas canister"],
    buyerTypes: ["Emergency teams", "Industrial safety managers", "PPE distributors"],
    disclaimer
  },
  {
    id: "app-laboratory-protection",
    slug: "laboratory-protection",
    name: "Laboratory Protection",
    summary: "Protection options for controlled lab handling, spill response and technical safety procedures.",
    typicalHazards: ["Chemical vapor", "Particles", "Splash", "Biohazard procedures"],
    recommendedProducts: ["MF19 Full Face Respirator", "CF6800 Full Face Respirator", "Protective Gloves & Goggles"],
    recommendedFilters: ["Organic vapor cartridge", "Particle filter", "Acid gas cartridge"],
    buyerTypes: ["Laboratories", "Universities", "Research procurement teams"],
    disclaimer
  },
  {
    id: "app-construction-demolition",
    slug: "construction-demolition",
    name: "Construction & Demolition",
    summary: "Dust and particle protection options for renovation, demolition, grinding and material handling.",
    typicalHazards: ["Dust", "Silica-related hazards", "Paint mist", "Debris"],
    recommendedProducts: ["7502 Dust Half Mask", "3300 Dust Half Mask", "CF3200 Half Face Respirator"],
    recommendedFilters: ["Particle filter", "Dust pre-filter", "Paint mist pre-filter"],
    buyerTypes: ["Construction suppliers", "Contractors", "Tool and safety distributors"],
    disclaimer
  },
  {
    id: "app-industrial-maintenance",
    slug: "industrial-maintenance",
    name: "Industrial Maintenance",
    summary: "Reusable respirator kits for shutdowns, repair teams, plant maintenance and safety inventory programs.",
    typicalHazards: ["Dust", "Organic vapor", "Acid gas", "Confined work concerns"],
    recommendedProducts: ["MF14 Full Face Gas Mask", "CF6200 Half Face Respirator", "Supplied-Air Respirator System", "B2KP100 Filter Canister"],
    recommendedFilters: ["Multi-gas cartridge", "Organic vapor cartridge", "Dust filter"],
    buyerTypes: ["Factories", "Maintenance contractors", "Safety distributors"],
    disclaimer
  }
];
