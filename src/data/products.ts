export type Product = {
  id: string;
  slug: string;
  model: string;
  name: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  keyFeatures: string[];
  applications: string[];
  hazards: string[];
  compatibleFilters: string[];
  materials: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  oemOptions: string[];
  documents: string[];
  image: string;
  gallery: string[];
  featured: boolean;
};

type ProductSeed = {
  model: string;
  name: string;
  category: string;
  image: string;
  detail?: string;
  slug?: string;
  featured?: boolean;
  applications?: string[];
  hazards?: string[];
  compatibleFilters?: string[];
};

const baseByCategory: Record<
  string,
  Pick<Product, "keyFeatures" | "applications" | "hazards" | "compatibleFilters" | "materials">
> = {
  "Full Face Respirators": {
    keyFeatures: [
      "Full-face coverage for eyes, face and respiratory tract",
      "Reusable respirator platform for industrial safety programs",
      "Adjustable head harness for distributor-ready configurations",
      "Compatible with selected cartridges, canisters or supplied-air accessories",
      "OEM/ODM packaging and documentation support"
    ],
    applications: ["Chemical handling", "Painting & coating", "Industrial maintenance", "Emergency preparedness"],
    hazards: ["Organic vapor", "Acid gas", "Paint mist", "Dust & particles"],
    compatibleFilters: ["Organic vapor cartridge", "Acid gas cartridge", "Particle pre-filter", "Multi-gas canister"],
    materials: ["Facepiece material: To be confirmed", "Lens material: To be confirmed", "Harness material: To be confirmed"]
  },
  "Half Face Respirators": {
    keyFeatures: [
      "Reusable half-mask body for routine industrial work",
      "Low-profile design for goggles and face shield compatibility",
      "Replaceable filter and cartridge options",
      "Efficient bulk packing for distributor replenishment",
      "Private-label and kit packaging support"
    ],
    applications: ["Painting", "Agriculture spraying", "Construction", "General maintenance"],
    hazards: ["Dust & particles", "Organic vapor", "Paint mist", "Pesticide aerosol"],
    compatibleFilters: ["Organic vapor cartridge", "Dust filter", "Paint mist pre-filter", "Particle filter pad"],
    materials: ["Facepiece material: To be confirmed", "Strap material: To be confirmed", "Valve material: To be confirmed"]
  },
  "Filters & Cartridges": {
    keyFeatures: [
      "Replacement cartridge and canister options for compatible respirators",
      "Color label and hazard identification support",
      "Stable replenishment supply for distributors",
      "Bulk carton, kit and retail packing options",
      "Technical documents available upon request"
    ],
    applications: ["Respirator replenishment", "Chemical handling", "Painting & coating", "Emergency stock"],
    hazards: ["Organic vapor", "Acid gas", "Inorganic gas", "Dust & particles"],
    compatibleFilters: ["Compatible full-face masks", "Compatible half masks", "Pre-filter holders", "Threaded canister systems"],
    materials: ["Shell material: To be confirmed", "Filter media: Depends on configuration", "Label material: To be confirmed"]
  },
  "Supplied-Air & SCBA Systems": {
    keyFeatures: [
      "System-oriented respiratory protection configuration",
      "Facepiece, hose or cylinder component options",
      "Prepared for project buyers and emergency teams",
      "Component list and technical review support",
      "OEM kit packaging available"
    ],
    applications: ["Emergency rescue", "Confined-space support", "Fire safety", "Industrial maintenance"],
    hazards: ["High exposure tasks", "Oxygen-deficient environments", "Smoke", "Configuration-dependent hazards"],
    compatibleFilters: ["Facepiece configuration", "Air hose system", "Cylinder and regulator components", "Project-specific accessories"],
    materials: ["Facepiece material: To be confirmed", "Hose/cylinder material: Depends on configuration", "Accessory materials: Depends on configuration"]
  },
  "Chemical Protective Clothing": {
    keyFeatures: [
      "Chemical protection garment options for workplace kits",
      "Protective suit, cape and boot-cover configurations",
      "Can be paired with respirators, gloves and goggles",
      "Bulk project supply and emergency stock support",
      "OEM labels, packing and manuals available"
    ],
    applications: ["Chemical handling", "Emergency response", "Hazmat preparation", "Industrial cleaning"],
    hazards: ["Chemical splash", "Liquid contact", "Contaminated dust", "Emergency response hazards"],
    compatibleFilters: ["Full face respirators", "Chemical gloves", "Protective boot covers", "Emergency PPE kits"],
    materials: ["Garment material: To be confirmed", "Seam construction: To be confirmed", "Boot/glove material: Depends on item"]
  },
  "Accessories & Emergency PPE": {
    keyFeatures: [
      "Accessory products for complete PPE procurement",
      "Supports respirator storage, emergency escape and eye protection",
      "Useful for distributor bundles and project safety kits",
      "Mixed carton and custom package support",
      "English product labels and manuals available"
    ],
    applications: ["Emergency escape", "Respirator storage", "Fire safety", "PPE kit assembly"],
    hazards: ["Smoke", "Dust & particles", "Impact risk", "Storage and transport damage"],
    compatibleFilters: ["Respirator bags", "Full face respirators", "Half face respirators", "Emergency kits"],
    materials: ["Main material: To be confirmed", "Accessory material: Depends on item", "Packing material: Available upon request"]
  }
};

const productSeeds: ProductSeed[] = [
  { model: "FNJ05", name: "Full Face Respirator", category: "Full Face Respirators", image: "01_FNJ05.jpg", featured: true, detail: "Standard left-side connector; connector direction can be customized for project or distributor programs." },
  { model: "FNJ05A/FNJ06A", name: "Full Face Respirator", category: "Full Face Respirators", image: "02_FNJ05A_FNJ06A.jpg", detail: "Full face respirator option for painting, chemical handling, dust protection and industrial safety." },
  { model: "FNJ08/MF22", name: "Full Face Respirator", category: "Full Face Respirators", image: "03_FNJ08_MF22.jpg", detail: "Standard left-side connector with optional dual connectors and mesh head harness." },
  { model: "FNJ09/MF21", name: "Full Face Respirator", category: "Full Face Respirators", image: "04_FNJ09_MF21.jpg", detail: "Standard left-side connector with optional dual connectors and mesh head harness." },
  { model: "MF14", name: "Silicone Full Face Respirator", category: "Full Face Respirators", image: "05_MF14.jpg", featured: true, slug: "mf14-full-face-respirator", detail: "Silicone full face mask with ribbed edge for industrial respiratory protection." },
  { model: "MF14 Yellow Edge", name: "TPE Full Face Respirator", category: "Full Face Respirators", image: "06_yellow_edge.jpg", detail: "Yellow-edge TPE full face mask for painting, chemical handling and dust protection." },
  { model: "MF14 Black Edge", name: "TPE Full Face Respirator", category: "Full Face Respirators", image: "07_black_edge.jpg", detail: "Black-edge TPE full face mask for industrial safety and distributor product bundles." },
  { model: "MF15", name: "Dual-Connector Full Face Respirator", category: "Full Face Respirators", image: "08_MF15.jpg", featured: true, detail: "Standard dual-connector mask with left or right connector customization options." },
  { model: "MF19", name: "RD40 Full Face Respirator", category: "Full Face Respirators", image: "09_MF19.jpg", featured: true, slug: "mf19-full-face-respirator", detail: "RD40 threaded full face respirator with dual connector configuration options." },
  { model: "CF-6800", name: "Full Face Respirator", category: "Full Face Respirators", image: "10_CF_6800.jpg", featured: true, slug: "cf6800-full-face-respirator", detail: "6800 style full face mask with grey or black anti-fog lens customization options." },
  { model: "6800A", name: "Full Face Respirator", category: "Full Face Respirators", image: "11_6800A.jpg", detail: "6800A full face mask with anti-fog lens customization options." },
  { model: "CF01", name: "Full Face Respirator", category: "Full Face Respirators", image: "12_CF01.jpg", detail: "Full face respirator option for painting, chemical handling, dust protection and industrial safety." },
  { model: "CF02", name: "Full Face Respirator", category: "Full Face Respirators", image: "13_CF02.jpg", detail: "Standard grey full face mask with color customization options including red and project-specific colors." },
  { model: "TZL30", name: "Fire Escape Smoke Hood", category: "Accessories & Emergency PPE", image: "14_Item_31.jpg", featured: true, detail: "Self-rescue filtering respirator for emergency escape and fire safety stock programs." },
  { model: "CF-6200", name: "Half Face Respirator", category: "Half Face Respirators", image: "15_CF_6200.jpg", featured: true, slug: "cf6200-half-face-respirator", detail: "Reusable half face respirator platform for mask-and-cartridge kits, distributor replenishment and private-label packaging programs." },
  { model: "CF7502", name: "Half Face Respirator", category: "Half Face Respirators", image: "16_CF7502.jpg", featured: true },
  { model: "CF3300 + 3301", name: "Half Face Respirator with Cartridge", category: "Half Face Respirators", image: "17_CF3300_filter_cartridge3301.jpg", featured: true },
  { model: "3200", name: "Half Face Respirator", category: "Half Face Respirators", image: "18_3200.jpg", slug: "3200-half-face-respirator" },
  { model: "Woodland Bag", name: "Woodland Camouflage Respirator Bag", category: "Accessories & Emergency PPE", image: "19_Item_42.jpg" },
  { model: "Green Bag", name: "Green Respirator Bag", category: "Accessories & Emergency PPE", image: "20_Item_43.jpg" },
  { model: "Ink-Pattern Bag", name: "Ink-Pattern Respirator Bag", category: "Accessories & Emergency PPE", image: "21_Item_44.jpg" },
  { model: "Starry Bag", name: "Starry Camouflage Respirator Bag", category: "Accessories & Emergency PPE", image: "22_Item_45.jpg" },
  { model: "Carrying Case", name: "Respirator Carrying Case", category: "Accessories & Emergency PPE", image: "23_Item_46.jpg" },
  { model: "Protective Clothing Bag", name: "Camouflage Protective Clothing Bag", category: "Accessories & Emergency PPE", image: "24_Item_47.jpg" },
  { model: "SWAT-Style Bag", name: "Gas Mask Bag", category: "Accessories & Emergency PPE", image: "25_Item_48.jpg" },
  { model: "Breathing Air Hose", name: "Black/White Breathing Air Hose", category: "Supplied-Air & SCBA Systems", image: "26_black_white.jpg" },
  { model: "No.3 Filter Canister", name: "Filter Canister Series", category: "Filters & Cartridges", image: "27_Item_57.jpg", featured: true },
  { model: "A2B2E2K2KP100", name: "Combined Filter Canister", category: "Filters & Cartridges", image: "28_Item_61.jpg", featured: true, detail: "Combined filter canister for compatible threaded respirator systems; hazard labeling, connector compatibility and target-market documents should be confirmed before ordering." },
  { model: "A2B2E2K2CO2KP100", name: "Full-Protection Filter Canister", category: "Filters & Cartridges", image: "29_Item_62.jpg" },
  { model: "Level 3 Filter Canister", name: "Filter Canister Series", category: "Filters & Cartridges", image: "30_Item_63.jpg" },
  { model: "Filter Cartridge", name: "No.1 / No.4 / No.7 Filter Cartridge", category: "Filters & Cartridges", image: "31_filter_cartridge.jpg", featured: true },
  { model: "A1B1E1K1", name: "Filter Cartridge", category: "Filters & Cartridges", image: "32_Item_69.jpg" },
  { model: "60926", name: "Filter Cartridge", category: "Filters & Cartridges", image: "33_60926_filter_cartridge_aluminum_plastic_vacuum_packaging.jpg" },
  { model: "2091/2097", name: "Pink Particulate Filter Pad", category: "Filters & Cartridges", image: "34_2091_pink_filter_pad.jpg", featured: true },
  { model: "FFF02", name: "Chemical Protective Suit", category: "Chemical Protective Clothing", image: "35_FFF02.jpg", featured: true },
  { model: "Type 82", name: "Chemical Protective Suit", category: "Chemical Protective Clothing", image: "36_82.jpg" },
  { model: "FFY03", name: "Chemical Protective Suit", category: "Chemical Protective Clothing", image: "37_FFY03.jpg", featured: true },
  { model: "FNF003A Jungle", name: "Chemical Protective Suit", category: "Chemical Protective Clothing", image: "38_FNF003A.jpg" },
  { model: "FNF003A Desert", name: "Chemical Protective Suit", category: "Chemical Protective Clothing", image: "39_Item_76.jpg" },
  { model: "Type 04 Light", name: "Light Chemical Protective Suit", category: "Chemical Protective Clothing", image: "40_04.jpg" },
  { model: "Type 04 Heavy", name: "Heavy Chemical Protective Suit", category: "Chemical Protective Clothing", image: "41_04.jpg", featured: true },
  { model: "FDP81", name: "Protective Cape - Green", category: "Chemical Protective Clothing", image: "42_Item_79.jpg" },
  { model: "FDP04", name: "Protective Cape - Black", category: "Chemical Protective Clothing", image: "43_Item_81.jpg" },
  { model: "FXT-81", name: "Protective Boot Covers - Green", category: "Chemical Protective Clothing", image: "44_Item_82.jpg" },
  { model: "FXT-04", name: "Protective Boot Covers - Black", category: "Chemical Protective Clothing", image: "45_Item_83.jpg" },
  { model: "FST-04", name: "Protective Gloves - Green", category: "Chemical Protective Clothing", image: "46_Item_85.jpg", featured: true },
  { model: "Positive Pressure SCBA", name: "Positive Pressure Air Breathing Apparatus", category: "Supplied-Air & SCBA Systems", image: "47_Item_88.jpg", featured: true },
  { model: "Standard SCBA", name: "Standard Air Breathing Apparatus", category: "Supplied-Air & SCBA Systems", image: "48_Item_89.jpg", featured: true },
  { model: "Fire Safety Goggles", name: "Fire Safety Goggles", category: "Accessories & Emergency PPE", image: "49_Item_90.jpg", featured: true }
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\+/g, "plus")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const categorySeoCopy: Record<string, string> = {
  "Full Face Respirators": "for full-face respiratory protection in painting, chemical handling, emergency response and industrial safety programs",
  "Half Face Respirators": "for reusable half-mask programs in painting, agriculture spraying, construction and maintenance work",
  "Filters & Cartridges": "for respirator cartridge replenishment, filter matching and distributor safety stock programs",
  "Supplied-Air & SCBA Systems": "for project-based respiratory protection, rescue preparation and supplied-air configuration discussions",
  "Chemical Protective Clothing": "for chemical handling, emergency response and complete PPE kit procurement",
  "Accessories & Emergency PPE": "for emergency escape, respirator storage, fire safety and complete PPE bundle procurement"
};

function createProduct(seed: ProductSeed): Product {
  const base = baseByCategory[seed.category];
  const modelSlug = slugify(seed.model);
  const productSlug = seed.slug ?? `${modelSlug}-${slugify(seed.name)}`;
  const image = `/images/products/${seed.image.replace(/\.(?:jpe?g|png)$/i, ".webp")}`;

  return {
    id: `prod-${modelSlug}`,
    slug: productSlug,
    model: seed.model,
    name: seed.name,
    category: seed.category,
    shortDescription: seed.detail
      ? `${seed.detail} OEM packing and technical document support are available for B2B review.`
      : `${seed.model} ${seed.name} ${categorySeoCopy[seed.category]}.`,
    longDescription: `${seed.model} ${seed.name} is part of the Hulidun Safety industrial PPE range from Shanxi Hongyu Times Technology Co., Ltd. ${seed.detail ? `${seed.detail} ` : ""}It supports distributors, wholesalers, project buyers and OEM/ODM customers sourcing respiratory protection, chemical protection and emergency safety products. Product selection should be based on workplace hazards, local regulations and professional safety assessment.`,
    keyFeatures: base.keyFeatures,
    applications: seed.applications ?? base.applications,
    hazards: seed.hazards ?? base.hazards,
    compatibleFilters: seed.compatibleFilters ?? base.compatibleFilters,
    materials: base.materials,
    specifications: [
      { label: "Model", value: seed.model },
      { label: "Product category", value: seed.category },
      { label: "MOQ", value: "200 pcs standard reference; confirm by exact model" },
      { label: "Stock lead time", value: "5-7 days for available stock" },
      { label: "Customized lead time", value: "10-15 days for logo, color box or private label orders" },
      { label: "Cooperation", value: "Distributor, wholesale, project supply and OEM/ODM" },
      { label: "Packaging", value: "Bulk pack, color box, instruction manual, outer carton or kit packaging" },
      { label: "Technical documents", value: "Available upon request" }
    ],
    oemOptions: ["Logo customization", "Color box", "Instruction manual", "Outer carton", "Private label", "Distributor catalog assets"],
    documents: ["Product data sheet", "Packing list", "Technical photos", "Test reports available upon request"],
    image,
    gallery: [image],
    featured: seed.featured ?? false
  };
}

export const products: Product[] = productSeeds.map(createProduct);
