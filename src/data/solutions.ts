export type Solution = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  includedProducts: string[];
  suitableFor: string[];
  buyerTypes: string[];
  cta: string;
};

export const solutions: Solution[] = [
  {
    id: "sol-chemical-handling-kit",
    slug: "chemical-handling-protection-kit",
    name: "Chemical Handling Protection Kit",
    summary: "A configurable kit for chemical transfer, blending, cleanup and maintenance tasks.",
    includedProducts: ["Full face respirator", "Chemical filter canister", "Chemical protective clothing", "Protective gloves and goggles"],
    suitableFor: ["Chemical handling", "Industrial maintenance", "Emergency preparation"],
    buyerTypes: ["Chemical plants", "PPE distributors", "Maintenance contractors"],
    cta: "Request Chemical Kit"
  },
  {
    id: "sol-painting-respiratory-kit",
    slug: "painting-respiratory-protection-kit",
    name: "Painting Respiratory Protection Kit",
    summary: "Respirator and filter package for spray painting, coating and surface finishing programs.",
    includedProducts: ["Full face or half face respirator", "Organic vapor cartridges", "Paint mist pre-filters", "Replacement accessories"],
    suitableFor: ["Spray painting", "Coating", "Surface preparation"],
    buyerTypes: ["Paint shops", "Automotive refinishers", "Coating distributors"],
    cta: "Request Painting Kit"
  },
  {
    id: "sol-agriculture-spraying-kit",
    slug: "agriculture-spraying-kit",
    name: "Agriculture Spraying Kit",
    summary: "Respirator and accessory kit for pesticide mixing, spraying and equipment cleanup.",
    includedProducts: ["Half face or full face respirator", "Compatible cartridges", "Particle pre-filters", "Protective gloves"],
    suitableFor: ["Pesticide spraying", "Agriculture cleanup", "Farm supply programs"],
    buyerTypes: ["Farm supply chains", "Agriculture distributors", "PPE wholesalers"],
    cta: "Request Agriculture Kit"
  },
  {
    id: "sol-emergency-escape-kit",
    slug: "emergency-escape-kit",
    name: "Emergency Escape Kit",
    summary: "Prepared response bundle for industrial emergency readiness and escape planning.",
    includedProducts: ["Emergency mask", "Filter canister", "Carry bag", "Instruction sheet"],
    suitableFor: ["Emergency escape", "Industrial safety stock", "Rescue readiness"],
    buyerTypes: ["Factories", "Rescue teams", "Safety stock managers"],
    cta: "Request Emergency Kit"
  },
  {
    id: "sol-supplied-air-working-kit",
    slug: "supplied-air-working-kit",
    name: "Supplied-Air Working Kit",
    summary: "Supplied-air system configuration for selected high-exposure industrial tasks.",
    includedProducts: ["Facepiece", "Air hose", "Belt components", "System configuration sheet"],
    suitableFor: ["Selected chemical work", "Painting", "Industrial maintenance"],
    buyerTypes: ["Contractors", "Industrial plants", "Professional safety buyers"],
    cta: "Request Supplied-Air Kit"
  },
  {
    id: "sol-distributor-starter-kit",
    slug: "distributor-starter-kit",
    name: "Distributor Starter Kit",
    summary: "Mixed product starter package for safety distributors launching or expanding respiratory protection catalogs.",
    includedProducts: ["Mixed respirator models", "Filter samples", "Catalog assets", "Packaging options"],
    suitableFor: ["PPE catalog launch", "Market testing", "Private label programs"],
    buyerTypes: ["Importers", "Wholesalers", "Online safety retailers"],
    cta: "Build Starter Kit"
  }
];
