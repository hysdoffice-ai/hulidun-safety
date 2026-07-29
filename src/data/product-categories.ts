export type ProductCategoryLanding = {
  slug: string;
  category: string;
  title: string;
  eyebrow: string;
  description: string;
  metaDescription: string;
  buyerAnswer: string;
  selectionSteps: string[];
  comparisonRows: {
    criterion: string;
    buyerCheck: string;
    rfqInput: string;
  }[];
  buyerQuestions: { question: string; answer: string }[];
};

export const productCategoryLandings: ProductCategoryLanding[] = [
  {
    slug: "full-face-respirators",
    category: "Full Face Respirators",
    title: "Full Face Respirators for Industrial B2B Procurement",
    eyebrow: "Full Face Respirator Manufacturer",
    description:
      "Compare reusable full face respirator platforms for chemical handling, painting, industrial maintenance and emergency preparation.",
    metaDescription:
      "Source full face respirators from Hulidun Safety. Compare models, connector options, compatible filters, OEM packaging and B2B procurement support.",
    buyerAnswer:
      "Hulidun Safety supplies silicone and TPE full face respirator models for distributors, project buyers and OEM programs. Buyers should confirm the facepiece material, connector type, compatible filter, target-market documentation and application before ordering.",
    selectionSteps: [
      "Identify the workplace contaminant, exposure conditions and required eye or face coverage.",
      "Confirm the mask connector and compatible cartridge, canister or supplied-air configuration.",
      "Request model-specific materials, packing details and available technical documents.",
      "Confirm quantity, target market, logo, color box and instruction-manual requirements."
    ],
    comparisonRows: [
      {
        criterion: "Facepiece material",
        buyerCheck: "Confirm silicone, TPE or the exact quoted material rather than relying on appearance.",
        rfqInput: "Required material and expected use duration"
      },
      {
        criterion: "Filter interface",
        buyerCheck: "Match the facepiece connector to the exact cartridge, canister or supplied-air component.",
        rfqInput: "Connector type, filter model and hazard"
      },
      {
        criterion: "Lens and harness",
        buyerCheck: "Review lens material, field of view, head-harness design and available replacement parts.",
        rfqInput: "Lens, harness and spare-part requirements"
      },
      {
        criterion: "Market documents",
        buyerCheck: "Verify that available reports and instructions identify the quoted model and configuration.",
        rfqInput: "Destination market and required documents"
      },
      {
        criterion: "OEM packaging",
        buyerCheck: "Approve product marking, label, manual, color box and carton artwork before production.",
        rfqInput: "Logo files, languages, pack contents and carton marks"
      }
    ],
    buyerQuestions: [
      {
        question: "What should a buyer compare between full face respirator models?",
        answer:
          "Compare facepiece material, lens design, head harness, connector interface, compatible filters, spare-part availability, packaging and available technical documents."
      },
      {
        question: "Can Hulidun Safety supply private-label full face respirators?",
        answer:
          "Logo, label, color box, instruction manual and outer-carton options can be discussed according to the exact model, quantity and target market."
      }
    ]
  },
  {
    slug: "half-face-respirators",
    category: "Half Face Respirators",
    title: "Half Face Respirators for Painting, Spraying and Maintenance",
    eyebrow: "Half Face Respirator Supplier",
    description:
      "Review reusable half-mask platforms, cartridge pairing and B2B packing options for industrial distribution and project purchasing.",
    metaDescription:
      "Compare reusable half face respirators for painting, spraying, construction and maintenance, with cartridge matching and OEM packaging support.",
    buyerAnswer:
      "Reusable half face respirators are commonly sourced for painting, spraying, construction and maintenance programs. Final selection depends on the identified hazard, cartridge compatibility, eye-protection requirement and local safety rules.",
    selectionSteps: [
      "Check whether the work requires separate goggles or additional face protection.",
      "Match the half mask to a compatible cartridge, particulate filter or pre-filter.",
      "Review cleaning, replacement-part and storage requirements for the buyer program.",
      "Confirm mask-only, mask-and-filter kit or private-label packing requirements."
    ],
    comparisonRows: [
      {
        criterion: "Facepiece and size",
        buyerCheck: "Confirm the quoted facepiece material, available sizes and seal design.",
        rfqInput: "Material, sizes and workforce sample quantity"
      },
      {
        criterion: "Eye protection",
        buyerCheck: "Determine whether separate goggles or a face shield are required for the task.",
        rfqInput: "Splash, impact and eye-irritation conditions"
      },
      {
        criterion: "Cartridge interface",
        buyerCheck: "Verify the exact mask, cartridge, pre-filter and retainer as one compatible system.",
        rfqInput: "Hazard, cartridge code and kit contents"
      },
      {
        criterion: "Fit testing",
        buyerCheck: "Use production-representative samples in the employer's applicable fit-testing process.",
        rfqInput: "Required sizes and sample delivery destination"
      },
      {
        criterion: "Replenishment",
        buyerCheck: "Confirm replacement-filter availability, shelf life, storage and carton quantities.",
        rfqInput: "Annual demand and preferred replenishment pack"
      }
    ],
    buyerQuestions: [
      {
        question: "When do buyers choose a half face respirator instead of a full face model?",
        answer:
          "Half masks may suit routine work where separate eye protection is acceptable. A workplace assessment and applicable rules should determine the final protection configuration."
      },
      {
        question: "Can half masks and cartridges be packed as a distributor kit?",
        answer:
          "Mask-and-filter kits, color boxes, labels, manuals and carton marks can be discussed after confirming the compatible components and order quantity."
      }
    ]
  },
  {
    slug: "respirator-filters-cartridges",
    category: "Filters & Cartridges",
    title: "Respirator Filters, Cartridges and Canisters",
    eyebrow: "Respirator Filter Cartridge Supplier",
    description:
      "Compare replacement cartridges, particulate filters and canisters for compatible reusable respirator systems and distributor stock programs.",
    metaDescription:
      "Source respirator cartridges, particulate filters and filter canisters. Confirm hazard class, mask compatibility, packing and technical documents.",
    buyerAnswer:
      "Respirator filters must be selected for the identified contaminant and a compatible facepiece interface. Model names alone are not sufficient: buyers should request hazard labeling, connector confirmation, storage information and applicable technical documents.",
    selectionSteps: [
      "Identify whether the requirement involves vapor, gas, particles or a combined hazard.",
      "Confirm the exact facepiece model and connector interface before sampling or bulk orders.",
      "Review labeling, shelf-life, storage and replacement-program requirements.",
      "Confirm pair pack, vacuum pack, retail box or bulk replenishment packaging."
    ],
    comparisonRows: [
      {
        criterion: "Contaminant class",
        buyerCheck: "Identify particles, gases, vapors or combined hazards before comparing filter labels.",
        rfqInput: "Substance, physical form and expected exposure"
      },
      {
        criterion: "Facepiece compatibility",
        buyerCheck: "Confirm the connector on the exact filter and facepiece; model shorthand is not enough.",
        rfqInput: "Existing mask model, connector and photos"
      },
      {
        criterion: "Capacity and limits",
        buyerCheck: "Review the documented filter class, use limitations and target-market requirements.",
        rfqInput: "Required class, standard and destination market"
      },
      {
        criterion: "Change schedule",
        buyerCheck: "Plan replacement using an ESLI or objective data for the actual workplace conditions.",
        rfqInput: "Work duration, concentration, humidity and temperature"
      },
      {
        criterion: "Storage and packing",
        buyerCheck: "Confirm shelf life, sealed packaging, lot identification and storage instructions.",
        rfqInput: "Pack format, annual volume and delivery schedule"
      }
    ],
    buyerQuestions: [
      {
        question: "Can one respirator cartridge be used for every workplace hazard?",
        answer:
          "No. Filter performance depends on the contaminant, exposure conditions, facepiece compatibility and applicable safety requirements."
      },
      {
        question: "What information should a buyer send for filter matching?",
        answer:
          "Send the contaminant or hazard, existing mask model, connector type, target market, quantity, packaging needs and required documents."
      }
    ]
  }
];

export const getProductCategoryLanding = (slug: string) =>
  productCategoryLandings.find((landing) => landing.slug === slug);
