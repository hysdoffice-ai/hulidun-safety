export type IndustryLanding = {
  slug: string;
  keyword: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  summary: string;
  buyerIntent: string[];
  recommendedCategories: string[];
  recommendedProductSlugs: string[];
  applications: string[];
  hazards: string[];
  procurementNotes: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const industryLandings: IndustryLanding[] = [
  {
    slug: "full-face-respirator-manufacturer",
    keyword: "Full Face Respirator Manufacturer",
    title: "Full Face Respirator Manufacturer for Industrial PPE Buyers",
    metaDescription:
      "Source full face respirators from Hulidun Safety for chemical handling, painting, emergency response, distributor supply and OEM packaging programs.",
    eyebrow: "Full Face Respirators",
    summary:
      "Hulidun Safety supplies reusable full face respirators for distributors, wholesalers, project buyers and OEM/ODM customers who need eye, face and respiratory coverage in hazardous workplaces.",
    buyerIntent: ["Factory supplier", "Bulk respirator orders", "OEM/ODM packaging", "Filter compatibility review"],
    recommendedCategories: ["Full Face Respirators", "Filters & Cartridges", "Supplied-Air & SCBA Systems"],
    recommendedProductSlugs: ["mf14-full-face-respirator", "mf19-full-face-respirator", "cf6800-full-face-respirator"],
    applications: ["Chemical handling", "Painting and coating", "Emergency response", "Industrial maintenance"],
    hazards: ["Organic vapor", "Acid gas", "Paint mist", "Dust and particles"],
    procurementNotes: [
      "Confirm facepiece material, lens style, connector type and compatible cartridge system before ordering.",
      "MOQ, sample availability and private-label packaging can be confirmed by model and destination market.",
      "Technical documents, product photos and packing information are available for distributor catalog preparation."
    ],
    faqs: [
      {
        question: "Can Hulidun Safety supply full face respirators for wholesale orders?",
        answer:
          "Yes. Hulidun Safety supports distributors, wholesalers and project buyers with bulk full face respirator supply, carton packing and technical document support."
      },
      {
        question: "Can full face respirators be customized with OEM branding?",
        answer:
          "Logo, color box, instruction manual and outer carton customization are available. Final options depend on the model, order quantity and target market."
      },
      {
        question: "How should buyers choose compatible filters?",
        answer:
          "Filter selection should be based on workplace hazards, exposure levels and local regulations. Hulidun Safety can help review the intended application and compatible filter options."
      }
    ]
  },
  {
    slug: "gas-mask-manufacturer",
    keyword: "Gas Mask Manufacturer",
    title: "Gas Mask Manufacturer for Chemical and Emergency Protection",
    metaDescription:
      "Hulidun Safety manufactures gas mask and respirator options for chemical protection, emergency preparedness, industrial maintenance and distributor programs.",
    eyebrow: "Gas Masks",
    summary:
      "For buyers sourcing gas masks, Hulidun Safety offers reusable respirator platforms, filter canister options and emergency PPE support for chemical, industrial and preparedness channels.",
    buyerIntent: ["Gas mask supplier", "Chemical protection sourcing", "Emergency PPE kits", "Distributor catalog products"],
    recommendedCategories: ["Full Face Respirators", "Filters & Cartridges", "Accessories & Emergency PPE"],
    recommendedProductSlugs: ["mf14-full-face-respirator", "no-3-filter-canister-filter-canister-series", "tzl30-fire-escape-smoke-hood"],
    applications: ["Chemical storage", "Emergency preparedness", "Industrial safety stock", "Civil protection supply"],
    hazards: ["Chemical vapor", "Smoke", "Acid gas", "Particulate contamination"],
    procurementNotes: [
      "Define whether the project requires reusable gas masks, emergency escape hoods or complete PPE kits.",
      "Confirm compatible canister type, packaging language and required technical files before production.",
      "For regulated markets, request test reports and compliance documents during quotation."
    ],
    faqs: [
      {
        question: "What is the difference between a gas mask and a full face respirator?",
        answer:
          "Many buyers use both terms. In procurement, it is important to define the facepiece, filter or canister type, intended hazard and required documents."
      },
      {
        question: "Can gas masks be supplied with filter canisters?",
        answer:
          "Yes. Hulidun Safety can discuss compatible filter canisters, cartridge options and kit packaging for selected respirator models."
      },
      {
        question: "Do you support emergency preparedness orders?",
        answer:
          "Yes. Hulidun Safety supplies respirators, fire escape smoke hoods, bags and related PPE items for emergency stock and distributor programs."
      }
    ]
  },
  {
    slug: "respirator-filter-cartridge-manufacturer",
    keyword: "Respirator Filter Cartridge Manufacturer",
    title: "Respirator Filter Cartridge Manufacturer and Canister Supplier",
    metaDescription:
      "Source respirator filter cartridges, canisters and particulate filter pads for reusable full face and half face respirator programs.",
    eyebrow: "Filters & Cartridges",
    summary:
      "Hulidun Safety supplies respirator cartridges, filter canisters and particle filter pads for replenishment programs, distributor stock and PPE kit assembly.",
    buyerIntent: ["Replacement cartridge supply", "Canister sourcing", "Distributor replenishment", "Filter matching support"],
    recommendedCategories: ["Filters & Cartridges", "Full Face Respirators", "Half Face Respirators"],
    recommendedProductSlugs: [
      "a2b2e2k2kp100-combined-filter-canister",
      "filter-cartridge-no-1-no-4-no-7-filter-cartridge",
      "2091-2097-pink-particulate-filter-pad"
    ],
    applications: ["Chemical handling", "Painting and coating", "Pesticide spraying", "Industrial maintenance"],
    hazards: ["Organic vapor", "Acid gas", "Inorganic gas", "Dust and particles"],
    procurementNotes: [
      "Confirm the respirator model and connector system before selecting cartridges or canisters.",
      "Color labels, hazard descriptions and packing formats can be discussed for distributor orders.",
      "Replacement filter programs should define reorder quantities and carton requirements in advance."
    ],
    faqs: [
      {
        question: "Can Hulidun Safety help match cartridges to respirators?",
        answer:
          "Yes. Share the respirator model, hazard type and application, and Hulidun Safety can review compatible filter or canister options."
      },
      {
        question: "Are filter cartridges available for bulk replenishment?",
        answer:
          "Yes. Filter cartridges and canisters can be supplied for distributor replenishment, PPE kits and project safety stock."
      },
      {
        question: "Can cartridge packaging be customized?",
        answer:
          "Packing labels, color boxes, carton marks and kit packaging can be discussed according to order quantity and target market needs."
      }
    ]
  },
  {
    slug: "chemical-respirator-industrial-use",
    keyword: "Chemical Respirator for Industrial Use",
    title: "Chemical Respirator Solutions for Industrial Workplaces",
    metaDescription:
      "Find reusable chemical respirators, full face masks, half masks and filter options for chemical handling, cleaning and industrial maintenance.",
    eyebrow: "Chemical Protection",
    summary:
      "Chemical workplaces often require a combination of respirator facepiece, compatible cartridge, eye protection and chemical protective clothing. Hulidun Safety helps buyers build practical procurement packages.",
    buyerIntent: ["Chemical respirator sourcing", "PPE kit configuration", "Project quotation", "Technical document request"],
    recommendedCategories: ["Full Face Respirators", "Filters & Cartridges", "Chemical Protective Clothing"],
    recommendedProductSlugs: ["mf14-full-face-respirator", "a2b2e2k2kp100-combined-filter-canister", "fff02-chemical-protective-suit"],
    applications: ["Chemical handling", "Industrial cleaning", "Waste handling", "Factory maintenance"],
    hazards: ["Organic vapor", "Acid gas", "Chemical splash", "Contaminated dust"],
    procurementNotes: [
      "Chemical respirator selection must consider the exact substance, concentration and exposure duration.",
      "Full face respirators may be preferred where eye irritation or splash risk is present.",
      "Buyers can request respirator, filter and chemical clothing combinations for one-stop procurement."
    ],
    faqs: [
      {
        question: "Which respirator is suitable for chemical work?",
        answer:
          "The suitable respirator depends on the chemical hazard, exposure level and local safety rules. Hulidun Safety can help narrow options after reviewing the application."
      },
      {
        question: "Do chemical respirators require specific filters?",
        answer:
          "Yes. Chemical applications require compatible cartridges or canisters selected according to the hazard type, such as organic vapor or acid gas."
      },
      {
        question: "Can chemical protective clothing be ordered with respirators?",
        answer:
          "Yes. Hulidun Safety supplies respirators, filters, chemical protective suits, gloves and accessories for combined PPE procurement."
      }
    ]
  },
  {
    slug: "respiratory-protection-painting",
    keyword: "Respiratory Protection for Painting",
    title: "Respiratory Protection for Painting and Coating Buyers",
    metaDescription:
      "Respirator and filter options for painting, coating, spray work, paint mist and organic vapor protection for distributors and project buyers.",
    eyebrow: "Painting & Coating",
    summary:
      "Painting and coating buyers often need reusable half masks, full face respirators, organic vapor cartridges and pre-filter options for paint mist control.",
    buyerIntent: ["Painting respirator sourcing", "Paint mist pre-filter", "Organic vapor cartridge", "Distributor kits"],
    recommendedCategories: ["Half Face Respirators", "Full Face Respirators", "Filters & Cartridges"],
    recommendedProductSlugs: ["cf6200-half-face-respirator", "cf6800-full-face-respirator", "filter-cartridge-no-1-no-4-no-7-filter-cartridge"],
    applications: ["Spray painting", "Industrial coating", "Automotive refinishing", "Surface treatment"],
    hazards: ["Organic vapor", "Paint mist", "Solvent odor", "Fine particles"],
    procurementNotes: [
      "Half masks are common for routine painting; full face respirators may be considered where eye protection is also needed.",
      "Organic vapor cartridges and particle pre-filters are often reviewed together for painting applications.",
      "Distributor kits can combine masks, cartridges, pre-filters and replacement parts."
    ],
    faqs: [
      {
        question: "What respirator is commonly used for painting?",
        answer:
          "Reusable half face respirators and full face respirators are commonly considered, with compatible organic vapor cartridges and paint mist pre-filters."
      },
      {
        question: "Can Hulidun Safety supply painting respirator kits?",
        answer:
          "Yes. Respirator kits can be discussed with selected masks, cartridges, pre-filters, bags and private-label packaging."
      },
      {
        question: "Should painting buyers choose full face or half face respirators?",
        answer:
          "The choice depends on eye protection needs, comfort, workplace policy and exposure. Full face respirators provide eye and face coverage, while half masks are lighter for routine tasks."
      }
    ]
  },
  {
    slug: "respirator-pesticide-spraying",
    keyword: "Respirator for Pesticide Spraying",
    title: "Respirator Options for Pesticide Spraying and Agriculture",
    metaDescription:
      "Reusable respirators, cartridges and filter options for pesticide spraying, agriculture PPE distributors and farm safety procurement.",
    eyebrow: "Agriculture PPE",
    summary:
      "Agriculture and pesticide spraying buyers need respirator options that can be matched with suitable cartridges, comfortable straps and distributor-friendly replacement filter supply.",
    buyerIntent: ["Pesticide respirator sourcing", "Agriculture PPE", "Replacement filters", "Wholesale respirator kits"],
    recommendedCategories: ["Half Face Respirators", "Full Face Respirators", "Filters & Cartridges"],
    recommendedProductSlugs: ["cf7502-half-face-respirator", "cf6200-half-face-respirator", "a1b1e1k1-filter-cartridge"],
    applications: ["Pesticide spraying", "Agriculture chemical handling", "Greenhouse work", "Farm maintenance"],
    hazards: ["Pesticide aerosol", "Organic vapor", "Dust and particles", "Chemical odor"],
    procurementNotes: [
      "Buyers should define the chemical type and required filter class before placing pesticide respirator orders.",
      "Comfort, strap adjustment and replacement cartridge supply matter for seasonal agriculture users.",
      "Packaging can be prepared for farm supply stores, distributor shelves or project delivery."
    ],
    faqs: [
      {
        question: "Can respirators be used for pesticide spraying?",
        answer:
          "Respirators may be used when matched with appropriate filters and workplace requirements. Buyers should follow pesticide labels and local safety rules."
      },
      {
        question: "Which is better for pesticide spraying, half mask or full face?",
        answer:
          "Half masks are lighter, while full face respirators add eye and face coverage. The better option depends on exposure risk and user requirements."
      },
      {
        question: "Can agriculture distributors order private-label respirators?",
        answer:
          "Yes. Hulidun Safety supports logo, color box, instruction manual and carton customization for qualified orders."
      }
    ]
  },
  {
    slug: "supplied-air-respirator-system",
    keyword: "Supplied Air Respirator System",
    title: "Supplied-Air Respirator System Configuration Support",
    metaDescription:
      "Discuss supplied-air respirator systems, breathing air hose options, facepiece configurations and project-based respiratory protection procurement.",
    eyebrow: "Supplied-Air Systems",
    summary:
      "Supplied-air and SCBA procurement is usually project-specific. Hulidun Safety helps buyers review facepiece, hose, cylinder and accessory requirements before quotation.",
    buyerIntent: ["Supplied-air respirator system", "Project PPE sourcing", "SCBA quotation", "Component configuration"],
    recommendedCategories: ["Supplied-Air & SCBA Systems", "Full Face Respirators", "Accessories & Emergency PPE"],
    recommendedProductSlugs: [
      "breathing-air-hose-black-white-breathing-air-hose",
      "positive-pressure-scba-positive-pressure-air-breathing-apparatus",
      "standard-scba-standard-air-breathing-apparatus"
    ],
    applications: ["Emergency rescue", "Confined-space support", "Industrial maintenance", "Fire safety preparation"],
    hazards: ["High exposure tasks", "Smoke", "Oxygen-deficient environments", "Project-specific respiratory hazards"],
    procurementNotes: [
      "Supplied-air system inquiries should include working environment, usage duration and component requirements.",
      "Project buyers can request a component list, packing plan and technical document review.",
      "SCBA and supplied-air products should be selected according to professional safety assessment."
    ],
    faqs: [
      {
        question: "What information is needed for a supplied-air respirator quotation?",
        answer:
          "Share the application, usage scenario, required components, quantity, target market and any required documents."
      },
      {
        question: "Can Hulidun Safety supply SCBA-related products?",
        answer:
          "Yes. Hulidun Safety lists supplied-air and SCBA system products and can discuss project-based requirements."
      },
      {
        question: "Are supplied-air systems suitable for all hazards?",
        answer:
          "No. Suitability depends on hazard assessment, oxygen level, exposure conditions and local regulations. Professional review is required."
      }
    ]
  },
  {
    slug: "fire-escape-smoke-hood-supplier",
    keyword: "Fire Escape Smoke Hood Supplier",
    title: "Fire Escape Smoke Hood Supplier for Emergency PPE Programs",
    metaDescription:
      "Source fire escape smoke hoods and emergency PPE accessories for safety stock, distributor supply, evacuation kits and preparedness projects.",
    eyebrow: "Emergency PPE",
    summary:
      "Fire escape smoke hoods are often sourced for emergency preparedness, facility evacuation kits, distributor stock and public safety programs.",
    buyerIntent: ["Smoke hood supplier", "Emergency PPE wholesale", "Evacuation kit sourcing", "Distributor stock"],
    recommendedCategories: ["Accessories & Emergency PPE", "Full Face Respirators", "Supplied-Air & SCBA Systems"],
    recommendedProductSlugs: ["tzl30-fire-escape-smoke-hood", "fire-safety-goggles-fire-safety-goggles", "standard-scba-standard-air-breathing-apparatus"],
    applications: ["Emergency escape", "Fire safety stock", "Building evacuation kits", "Distributor emergency PPE programs"],
    hazards: ["Smoke", "Emergency exposure", "Irritating particles", "Evacuation risk"],
    procurementNotes: [
      "Define target users, shelf display needs, packaging language and required emergency instructions.",
      "Smoke hoods can be discussed as standalone products or as part of emergency PPE bundles.",
      "Buyers should confirm local compliance needs before public safety or regulated-market distribution."
    ],
    faqs: [
      {
        question: "Can fire escape smoke hoods be ordered for distributor stock?",
        answer:
          "Yes. Hulidun Safety can discuss smoke hood supply, carton packing, instructions and emergency PPE bundle options."
      },
      {
        question: "Are smoke hoods the same as industrial respirators?",
        answer:
          "No. Smoke hoods are typically intended for emergency escape, while industrial respirators are selected for specific workplace hazards and repeated use."
      },
      {
        question: "Can emergency PPE packaging be customized?",
        answer:
          "Packaging, carton marks and instruction materials can be discussed according to order quantity and destination market requirements."
      }
    ]
  }
];
