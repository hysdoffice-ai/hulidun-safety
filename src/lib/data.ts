import {
  AlertTriangle,
  Beaker,
  Boxes,
  BriefcaseBusiness,
  ClipboardCheck,
  Factory,
  FileText,
  Flame,
  Gauge,
  Gem,
  Hammer,
  HardHat,
  PackageCheck,
  Paintbrush,
  Radiation,
  ShieldCheck,
  SprayCan,
  Wind
} from "lucide-react";

export const complianceNotice =
  "Product selection should be based on workplace hazards, local regulations and professional safety assessment. Please contact our team for technical documents and product compatibility information.";

export const certificationNotice =
  "Certification documents available upon request. Compliance information depends on target market requirements. Please contact us for product test reports and technical documents.";

export const productCategories = [
  "Full Face Respirators",
  "Half Face Respirators",
  "Filters & Cartridges",
  "Supplied-Air Systems",
  "Protective Clothing",
  "Emergency Kits"
] as const;

export type ProductCategory = (typeof productCategories)[number];

export type Product = {
  slug: string;
  model: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  sellingPoint: string;
  applications: string[];
  compatibleFilters: string[];
  features: string[];
  specs: Record<string, string>;
  oemOptions: string[];
  documents: string[];
  faqs: { q: string; a: string }[];
};

export const products: Product[] = [
  {
    slug: "mf14-full-face-gas-mask",
    model: "MF14",
    name: "Full Face Gas Mask",
    category: "Full Face Respirators",
    shortDescription: "Full-face respiratory protection platform for chemical handling and emergency readiness.",
    sellingPoint: "A durable full-face mask designed for broad industrial protection programs and distributor portfolios.",
    applications: ["Chemical handling", "Industrial maintenance", "Emergency escape", "Laboratory protection"],
    compatibleFilters: ["B2KP100 Filter Canister", "Organic vapor cartridge", "Acid gas cartridge", "Particle pre-filter"],
    features: ["Panoramic lens field of view", "Full-face sealing interface", "Adjustable head harness", "Replaceable filter connection", "Reusable body for planned maintenance"],
    specs: {
      "Mask type": "Reusable full face respirator",
      "Face seal": "Soft sealing interface",
      "Lens": "Wide-view protective lens",
      "Filter connection": "Threaded canister or compatible cartridge system",
      "Use case": "Industrial respiratory protection after safety assessment"
    },
    oemOptions: ["Logo mark on mask body", "Retail box design", "English manual", "Distributor bundle packaging"],
    documents: ["Product data sheet", "User instruction file", "Packing list", "Test reports available upon request"],
    faqs: [
      { q: "Can this model be sold under a private label?", a: "Yes. Logo, packaging and manual customization can be discussed based on order quantity." },
      { q: "How should buyers choose filters?", a: "Filter selection depends on workplace hazards, exposure levels, local rules and professional safety assessment." }
    ]
  },
  {
    slug: "mf19-full-face-respirator",
    model: "MF19",
    name: "Full Face Respirator",
    category: "Full Face Respirators",
    shortDescription: "Industrial full-face respirator for chemical vapor, paint mist and maintenance tasks.",
    sellingPoint: "Built for buyers who need a professional full-face option with flexible filter pairing.",
    applications: ["Painting & coating", "Chemical industry", "Construction", "Maintenance"],
    compatibleFilters: ["Organic vapor cartridge", "Multi-gas cartridge", "P100 particle filter", "B2KP100 Filter Canister"],
    features: ["Balanced head strap design", "Large visual window", "Replaceable valve parts", "Filter compatibility options", "OEM-ready packaging"],
    specs: {
      "Mask type": "Reusable full face respirator",
      "Harness": "Adjustable multi-point harness",
      "Lens coverage": "Full-face eye and respiratory coverage",
      "Suggested industries": "Painting, chemical handling, industrial maintenance",
      "Documentation": "Technical documents available upon request"
    },
    oemOptions: ["Custom color discussion", "Logo printing", "Filter label customization", "Mixed carton support"],
    documents: ["Technical sheet", "Instruction manual", "Filter compatibility note", "Compliance information by target market"],
    faqs: [
      { q: "Is this suitable for all chemical environments?", a: "No. Suitability depends on hazard type, concentration, oxygen level and local regulations." },
      { q: "Can it be supplied with filters?", a: "Yes. Complete mask and filter kits can be configured for target applications." }
    ]
  },
  {
    slug: "cf6800-full-face-respirator",
    model: "CF6800",
    name: "Full Face Respirator",
    category: "Full Face Respirators",
    shortDescription: "Full-face reusable respirator for painting, chemical and general industrial protection programs.",
    sellingPoint: "A practical full-face respirator platform for distributors building complete safety catalogs.",
    applications: ["Painting & coating", "Agriculture spraying", "Chemical handling", "Dust control"],
    compatibleFilters: ["Organic vapor cartridge", "Acid gas cartridge", "Dust filter", "Paint mist pre-filter"],
    features: ["Wide-view lens", "Reusable mask body", "Comfort-oriented face seal", "Replaceable cartridges", "Starter kit configuration"],
    specs: {
      "Mask type": "Full face respirator",
      "Coverage": "Eyes, face and respiratory tract",
      "Compatible media": "Configured by selected cartridges and filters",
      "Packaging": "Single unit or kit package",
      "Support": "OEM and distributor catalog support"
    },
    oemOptions: ["Private label", "Color box", "Manual localization", "Barcode label support"],
    documents: ["Product brochure", "User guide", "Packing inspection record", "Documents available upon request"],
    faqs: [
      { q: "Can the CF6800 be included in a painting kit?", a: "Yes. It can be paired with organic vapor cartridges and paint mist pre-filters after hazard review." },
      { q: "Do you provide samples?", a: "Sample requests can be reviewed based on target market and project details." }
    ]
  },
  {
    slug: "cf6200-half-face-respirator",
    model: "CF6200",
    name: "Half Face Respirator",
    category: "Half Face Respirators",
    shortDescription: "Compact reusable half mask for spray painting, pesticide work and industrial maintenance.",
    sellingPoint: "A flexible half-face platform for buyers who need economical reusable respiratory protection.",
    applications: ["Painting", "Agriculture spraying", "Maintenance", "Construction"],
    compatibleFilters: ["Organic vapor cartridge", "Dust filter", "Paint mist pre-filter"],
    features: ["Low-profile facepiece", "Adjustable straps", "Twin-filter balance", "Replaceable filters", "Bulk order friendly"],
    specs: {
      "Mask type": "Reusable half face respirator",
      "Coverage": "Nose and mouth",
      "Filter style": "Twin cartridge configuration",
      "Applications": "Painting, spraying and maintenance after assessment",
      "Order support": "Mixed model order support"
    },
    oemOptions: ["Logo label", "Blister or box package", "English manual", "Distributor starter kit"],
    documents: ["Data sheet", "Filter matching guide", "Instruction file", "Packing list"],
    faqs: [
      { q: "When should a full-face respirator be chosen instead?", a: "Choose full-face coverage when eye and face protection are required by the hazard assessment." },
      { q: "Can filters be packed together?", a: "Yes. Kit packaging can be arranged for distributor or retail needs." }
    ]
  },
  {
    slug: "cf3200-half-face-respirator",
    model: "CF3200",
    name: "Half Face Respirator",
    category: "Half Face Respirators",
    shortDescription: "Reusable half mask for particle, mist and selected vapor applications with compatible filters.",
    sellingPoint: "A simple, scalable half-mask option for industrial buyers and safety distributors.",
    applications: ["Dust work", "Painting support", "Agriculture", "General maintenance"],
    compatibleFilters: ["Particle filter", "Organic vapor cartridge", "Pre-filter pad"],
    features: ["Reusable facepiece", "Comfort strap system", "Compatible filter sets", "Efficient bulk packing", "OEM packaging ready"],
    specs: {
      "Mask type": "Half face respirator",
      "Fit": "Adjustable head strap",
      "Primary use": "Particle and selected vapor protection when properly configured",
      "Packaging": "Bulk, box or kit",
      "Documents": "Available upon request"
    },
    oemOptions: ["Private label carton", "Retail card", "Manual insert", "Custom kit combinations"],
    documents: ["Product sheet", "Maintenance guide", "Filter compatibility sheet", "Technical documents available upon request"],
    faqs: [
      { q: "Is it disposable?", a: "No. It is a reusable mask body used with replaceable filters." },
      { q: "Can it be used for pesticide spraying?", a: "It may be configured for pesticide spraying only after matching filters to the hazard and local requirements." }
    ]
  },
  {
    slug: "7502-dust-half-mask",
    model: "7502",
    name: "Dust Half Mask",
    category: "Half Face Respirators",
    shortDescription: "Reusable dust and mist half mask for construction, coating preparation and industrial maintenance.",
    sellingPoint: "A comfortable half-face option for dust-heavy work where replaceable filter systems are preferred.",
    applications: ["Construction", "Grinding", "Painting preparation", "Maintenance"],
    compatibleFilters: ["Dust filter", "Particle pad", "Paint mist pre-filter"],
    features: ["Soft face seal", "Stable head straps", "Replaceable filter holders", "Lightweight body", "Distributor pack support"],
    specs: {
      "Mask type": "Dust half mask",
      "Coverage": "Nose and mouth",
      "Target hazard": "Dust, particles and mist with proper filters",
      "Fit support": "Adjustable straps",
      "Documentation": "Instruction files available"
    },
    oemOptions: ["Logo label", "Custom bag or box", "Multi-language manual discussion", "Mixed order support"],
    documents: ["Instruction file", "Product data sheet", "Packaging specification", "Documents available upon request"],
    faqs: [
      { q: "Can it replace full respiratory protection planning?", a: "No. It is one component in a respiratory protection program and should be selected professionally." },
      { q: "Is OEM packaging available?", a: "Yes. Packaging can be customized for distributor programs." }
    ]
  },
  {
    slug: "3300-dust-half-mask",
    model: "3300",
    name: "Dust Half Mask",
    category: "Half Face Respirators",
    shortDescription: "Economical dust half mask for particle control and maintenance teams.",
    sellingPoint: "A practical half mask for starter kits, bulk supply and general dust protection categories.",
    applications: ["Dust control", "Warehouse maintenance", "Construction", "Light industrial work"],
    compatibleFilters: ["Particle filter", "Dust pad", "Pre-filter"],
    features: ["Compact reusable body", "Replaceable particle filters", "Easy packing", "Simple maintenance", "Bulk supply ready"],
    specs: {
      "Mask type": "Reusable dust half mask",
      "Main use": "Dust and particle work after workplace assessment",
      "Filter": "Replaceable particle filter options",
      "Packing": "Bulk or retail",
      "Support": "OEM carton and label"
    },
    oemOptions: ["Private label", "Retail label", "Bulk carton", "Distributor kit"],
    documents: ["Data sheet", "User instruction", "Filter guide", "Packing list"],
    faqs: [
      { q: "Who is this model for?", a: "It suits distributors and industrial buyers needing economical reusable dust-mask options." },
      { q: "Can you recommend filters?", a: "Yes. Share your hazard and application details for a configuration suggestion." }
    ]
  },
  {
    slug: "b2kp100-filter-canister",
    model: "B2KP100",
    name: "Filter Canister",
    category: "Filters & Cartridges",
    shortDescription: "Filter canister option for compatible full-face respirator platforms and hazard-specific configurations.",
    sellingPoint: "A core filter component for building chemical, particle and multi-hazard respiratory kits.",
    applications: ["Chemical handling", "Emergency readiness", "Industrial maintenance", "Laboratory protection"],
    compatibleFilters: ["Compatible full-face masks", "Threaded canister systems", "Pre-filter accessories"],
    features: ["Canister format", "Hazard label customization", "Kit-friendly packaging", "Batch traceability support", "Technical documents on request"],
    specs: {
      "Filter type": "Canister filter",
      "Configuration": "Hazard-specific media configuration by order",
      "Compatibility": "Must be checked with mask model",
      "Label": "Filter label customization available",
      "Notice": "Selection depends on workplace hazards and local rules"
    },
    oemOptions: ["Custom label", "Color coding support", "Box design", "Distributor catalog assets"],
    documents: ["Filter data sheet", "Compatibility information", "Packing specification", "Technical documents available upon request"],
    faqs: [
      { q: "Can filter color bands be customized?", a: "Label and packaging customization can be discussed; regulatory color use depends on target markets." },
      { q: "How do I choose the right canister?", a: "Send the chemical or hazard details, workplace process and target market for review." }
    ]
  },
  {
    slug: "supplied-air-respirator-system",
    model: "SAR System",
    name: "Supplied-Air Respirator System",
    category: "Supplied-Air Systems",
    shortDescription: "Supplied-air working kit for selected industrial tasks requiring remote clean-air supply configuration.",
    sellingPoint: "A solution-oriented supplied-air system for work scenarios where cartridge respirators may not be suitable.",
    applications: ["Confined-space support", "Painting", "Chemical handling", "Industrial maintenance"],
    compatibleFilters: ["Air hose system", "Facepiece configuration", "Belt and regulator components"],
    features: ["System kit configuration", "Facepiece and hose options", "Distributor documentation support", "Application-based setup", "OEM starter kit option"],
    specs: {
      "System type": "Supplied-air respirator kit",
      "Components": "Facepiece, hose and air supply accessories by configuration",
      "Use case": "Selected industrial tasks after professional assessment",
      "Buyer": "Distributors, contractors and industrial safety buyers",
      "Documents": "Technical documents available upon request"
    },
    oemOptions: ["Kit packaging", "English manuals", "Distributor catalog", "Custom component bundle"],
    documents: ["System configuration sheet", "User instruction", "Component list", "Documents available upon request"],
    faqs: [
      { q: "Is a supplied-air system always required?", a: "No. It depends on hazards, oxygen levels, process conditions and professional safety assessment." },
      { q: "Can you configure a complete kit?", a: "Yes. Share the application and working distance to discuss a suitable kit layout." }
    ]
  },
  {
    slug: "chemical-protective-clothing",
    model: "CPC Kit",
    name: "Chemical Protective Clothing",
    category: "Protective Clothing",
    shortDescription: "Chemical protective clothing option for splash protection and industrial safety kit programs.",
    sellingPoint: "A complementary protective gear category for buyers sourcing complete hazardous workplace kits.",
    applications: ["Chemical handling", "Laboratory protection", "Industrial maintenance", "Emergency cleanup"],
    compatibleFilters: ["Used together with selected respirators and filters", "Gloves and goggles kit components"],
    features: ["Protective suit configuration", "Kit packaging support", "Glove and goggle pairing", "Bulk order support", "Application-based recommendation"],
    specs: {
      "Product type": "Chemical protective clothing",
      "Configuration": "Suit, gloves and goggles by RFQ",
      "Use case": "Splash and contamination control after professional assessment",
      "Packaging": "Bulk or kit package",
      "Documents": "Technical documents available upon request"
    },
    oemOptions: ["Private label packaging", "Size label support", "English instruction sheet", "Distributor bundle"],
    documents: ["Product sheet", "Packing list", "Technical documents available upon request"],
    faqs: [
      { q: "Can it be bundled with respirators?", a: "Yes. Protective clothing can be configured with respirators, filters, gloves and goggles." },
      { q: "How should buyers choose clothing type?", a: "Selection depends on chemical hazards, splash risk, task duration and local safety rules." }
    ]
  },
  {
    slug: "emergency-rescue-kit",
    model: "ERK",
    name: "Emergency & Rescue Kit",
    category: "Emergency Kits",
    shortDescription: "Emergency protection bundle for escape planning, rescue readiness and industrial safety stock.",
    sellingPoint: "A configurable emergency kit concept for factories, distributors and response teams.",
    applications: ["Emergency escape", "Rescue preparation", "Industrial safety stock", "Chemical incident response"],
    compatibleFilters: ["Emergency canister", "Particle filter", "Compatible full-face respirator"],
    features: ["Configurable kit contents", "Carry bag option", "Instruction sheet", "Distributor starter bundle", "Packing inspection support"],
    specs: {
      "Kit type": "Emergency and rescue protection kit",
      "Components": "Respirator, filter and accessories by configuration",
      "Use case": "Prepared response planning after risk assessment",
      "Buyer": "Factories, rescue teams and PPE distributors",
      "Documents": "Documents available upon request"
    },
    oemOptions: ["Kit bag logo", "Box design", "English manual", "Mixed model starter kit"],
    documents: ["Kit configuration sheet", "User instruction", "Packing list", "Technical documents available upon request"],
    faqs: [
      { q: "Is one emergency kit suitable for every incident?", a: "No. Emergency kits must match identified hazards, response plans and local regulations." },
      { q: "Can you prepare distributor starter kits?", a: "Yes. We can discuss mixed models, packaging and catalog support." }
    ]
  }
];

export const hazards = [
  { name: "Organic Vapor", color: "bg-vapor", description: "Solvent, coating and selected chemical vapor work." },
  { name: "Acid Gas", color: "bg-acid", description: "Industrial processes requiring hazard-specific filter matching." },
  { name: "Ammonia", color: "bg-ammonia", description: "Fertilizer, refrigeration and selected chemical applications." },
  { name: "Dust & Particles", color: "bg-particle", description: "Grinding, mining, construction and demolition dust." },
  { name: "Paint Mist", color: "bg-orange", description: "Spray booth, coating and surface preparation work." },
  { name: "Multi-Gas Protection", color: "bg-warning", description: "Mixed hazards requiring professional filter selection." }
];

export const applications = [
  {
    slug: "chemical-industry",
    title: "Chemical Industry",
    icon: Beaker,
    summary: "Respiratory protection planning for chemical handling, blending, transfer and maintenance operations.",
    hazards: ["Organic vapor", "Acid gas", "Splash risk", "Emergency escape"],
    solution: "Full-face respirators, compatible cartridges or canisters, chemical protective clothing and emergency kits based on hazard assessment.",
    products: ["MF14", "MF19", "B2KP100", "SAR System"],
    filters: ["Organic vapor cartridge", "Acid gas cartridge", "Multi-gas canister"],
    buyers: ["Chemical plants", "Safety distributors", "Maintenance contractors"]
  },
  {
    slug: "painting-coating",
    title: "Painting & Coating",
    icon: Paintbrush,
    summary: "Reusable respirator and filter kits for spray painting, coating, surface finishing and booth maintenance.",
    hazards: ["Organic vapor", "Paint mist", "Particles", "Solvent odor"],
    solution: "Full-face or half-face respirators with organic vapor cartridges and paint mist pre-filters after assessment.",
    products: ["CF6800", "CF6200", "7502", "SAR System"],
    filters: ["Organic vapor cartridge", "Paint mist pre-filter", "Particle pad"],
    buyers: ["Paint shops", "Automotive refinishers", "Coating distributors"]
  },
  {
    slug: "agriculture-pesticide-spraying",
    title: "Agriculture & Pesticide Spraying",
    icon: SprayCan,
    summary: "Respiratory and face protection kits for spraying, mixing and cleanup tasks in agriculture.",
    hazards: ["Pesticide aerosol", "Organic vapor", "Dust", "Eye exposure"],
    solution: "Full-face or half-face respirators configured with suitable cartridges and pre-filters for target chemicals.",
    products: ["CF6800", "CF6200", "MF19"],
    filters: ["Organic vapor cartridge", "Particle pre-filter", "Multi-gas cartridge"],
    buyers: ["Agri distributors", "Farm supply chains", "PPE wholesalers"]
  },
  {
    slug: "mining-dust-protection",
    title: "Mining & Dust Protection",
    icon: HardHat,
    summary: "Particle and dust protection options for mining, crushing, screening and heavy-duty maintenance.",
    hazards: ["Dust", "Particles", "Equipment maintenance exposure"],
    solution: "Reusable half masks or full-face respirators with particle filter configurations after workplace review.",
    products: ["7502", "3300", "CF3200"],
    filters: ["Dust filter", "Particle pad", "Pre-filter"],
    buyers: ["Mining operators", "Industrial distributors", "Contractors"]
  },
  {
    slug: "firefighting-emergency-rescue",
    title: "Firefighting & Emergency Rescue",
    icon: Flame,
    summary: "Emergency response and escape kits for rescue teams, industrial sites and safety stock programs.",
    hazards: ["Smoke", "Unknown gases", "Emergency escape", "Debris particles"],
    solution: "Emergency kits and selected respirator configurations for prepared response plans; use must follow local rules.",
    products: ["MF14", "B2KP100", "Emergency Kits"],
    filters: ["Emergency canister", "Particle filter", "Multi-gas canister"],
    buyers: ["Emergency teams", "Industrial safety managers", "PPE distributors"]
  },
  {
    slug: "laboratory-biohazard-protection",
    title: "Laboratory & Biohazard Protection",
    icon: Radiation,
    summary: "Protection options for controlled lab handling, spill response and technical safety procedures.",
    hazards: ["Chemical vapor", "Particles", "Splash", "Biohazard procedures"],
    solution: "Full-face protection, gloves, goggles and filter configurations chosen by safety officers and local regulations.",
    products: ["MF19", "CF6800", "Protective Gloves & Goggles"],
    filters: ["Organic vapor cartridge", "Particle filter", "Acid gas cartridge"],
    buyers: ["Labs", "Universities", "Research procurement teams"]
  },
  {
    slug: "construction-demolition",
    title: "Construction & Demolition",
    icon: Hammer,
    summary: "Dust and particle protection options for renovation, demolition, grinding and material handling.",
    hazards: ["Dust", "Silica-related hazards", "Paint mist", "Debris"],
    solution: "Half-face dust masks or full-face respirators where eye and face protection are required by assessment.",
    products: ["7502", "3300", "CF3200"],
    filters: ["Particle filter", "Dust pre-filter", "Paint mist pre-filter"],
    buyers: ["Construction suppliers", "Contractors", "Tool and safety distributors"]
  },
  {
    slug: "industrial-maintenance",
    title: "Industrial Maintenance",
    icon: Gauge,
    summary: "Reusable respirator kits for shutdowns, repair teams, plant maintenance and safety inventory programs.",
    hazards: ["Dust", "Organic vapor", "Acid gas", "Confined work concerns"],
    solution: "Application-specific full-face, half-face or supplied-air kits selected after hazard identification.",
    products: ["MF14", "CF6200", "SAR System", "B2KP100"],
    filters: ["Multi-gas cartridge", "Organic vapor cartridge", "Dust filter"],
    buyers: ["Factories", "Maintenance contractors", "Safety distributors"]
  }
];

export const solutions = [
  { title: "Chemical Handling Protection Kit", scene: "Chemical transfer, blending, cleanup and maintenance", includes: ["Full face respirator", "Chemical filter canister", "Protective clothing", "Gloves and goggles"], buyers: "Chemical plants, PPE distributors, maintenance teams" },
  { title: "Painting Respiratory Protection Kit", scene: "Spray painting, coating and surface finishing", includes: ["Full or half face respirator", "Organic vapor cartridges", "Paint mist pre-filters", "Replacement parts"], buyers: "Paint shops, automotive distributors, coating contractors" },
  { title: "Agriculture Spraying Kit", scene: "Pesticide mixing, spraying and equipment cleanup", includes: ["Half face or full face respirator", "Compatible cartridges", "Protective gloves", "English manual"], buyers: "Farm supply chains, agriculture distributors" },
  { title: "Emergency Escape Kit", scene: "Industrial emergency readiness and escape planning", includes: ["Emergency mask", "Canister", "Carry bag", "Instruction sheet"], buyers: "Factories, rescue teams, safety stock managers" },
  { title: "Supplied-Air Working Kit", scene: "Selected high-exposure industrial tasks requiring remote air supply", includes: ["Facepiece", "Air hose", "Belt components", "System configuration sheet"], buyers: "Contractors, plants, professional safety buyers" },
  { title: "Distributor Starter Kit", scene: "PPE catalog launch and local market sampling", includes: ["Mixed respirator models", "Filter samples", "Catalog assets", "Packaging options"], buyers: "Importers, wholesalers, online safety retailers" }
];

export const resources = [
  "How to Choose the Right Gas Mask for Chemical Work",
  "Full Face Respirator vs Half Mask",
  "How to Select Respirator Filter Cartridges",
  "Respiratory Protection for Painting and Coating",
  "Respiratory Protection for Pesticide Spraying",
  "What Is a Supplied-Air Respirator System?",
  "How to Store and Maintain Reusable Respirators"
];

export const oemCapabilities = [
  "Logo printing",
  "Custom color",
  "Custom packaging",
  "English manual",
  "Filter label customization",
  "Distributor catalog support",
  "Sample development",
  "Bulk production",
  "Retail box design",
  "Mixed order support"
];

export const qualitySteps = [
  "Quality Control & Technical Documentation",
  "Incoming Material Inspection",
  "Production Inspection",
  "Air Tightness Testing",
  "Breathing Resistance Testing",
  "Filter Compatibility Check",
  "Final Packing Inspection",
  "Technical Documents",
  "Compliance Notice"
];

export const matrixCategories = [
  { title: "Full Face Respirators", icon: ShieldCheck, text: "Full coverage mask platforms for chemical, painting and emergency planning." },
  { title: "Half Face Respirators", icon: Wind, text: "Reusable half masks for dust, mist and selected vapor applications." },
  { title: "Filter Cartridges & Canisters", icon: Boxes, text: "Hazard-specific filter components for compatible mask systems." },
  { title: "Supplied-Air Respirators", icon: Gauge, text: "System kits for selected tasks where supplied air is required by assessment." },
  { title: "Chemical Protective Gear", icon: Factory, text: "Protective clothing, gloves and goggles for complete workplace kits." },
  { title: "Emergency Kits", icon: BriefcaseBusiness, text: "Prepared response bundles for escape, rescue and safety inventory." }
];

export const supportItems = [
  "Private label",
  "Custom packaging",
  "Logo printing",
  "English manuals",
  "Mixed order support",
  "Distributor starter kit"
];

export const qualityPreview = [
  { title: "Material inspection", icon: ClipboardCheck },
  { title: "Air tightness test", icon: Wind },
  { title: "Breathing resistance test", icon: Gauge },
  { title: "Filter compatibility", icon: PackageCheck },
  { title: "Technical documents", icon: FileText },
  { title: "Packing inspection", icon: Boxes }
];

export const heroHazards = ["Chemical Vapor", "Dust", "Paint Mist", "Pesticide", "Emergency Escape"];
export const heroProducts = ["Full Face Respirator", "Half Mask", "Filter Cartridge", "Supplied-Air System"];
export const icons = { AlertTriangle, Gem };
