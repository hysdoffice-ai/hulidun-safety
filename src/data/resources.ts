export type Resource = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  metaDescription: string;
  questions: {
    question: string;
    answer: string;
  }[];
  sections: {
    heading: string;
    body: string;
  }[];
  relatedProductCategories: string[];
};

export const resources: Resource[] = [
  {
    id: "res-choose-gas-mask-chemical-work",
    slug: "how-to-choose-the-right-gas-mask-for-chemical-work",
    title: "How to Choose the Right Gas Mask for Chemical Work",
    excerpt: "A practical guide to matching mask type, filter configuration and workplace assessment for chemical handling tasks.",
    category: "Buyer Guide",
    readTime: "6 min read",
    metaDescription: "Learn how B2B buyers can choose gas masks and respirator filters for chemical handling, painting, emergency response and industrial safety programs.",
    questions: [
      {
        question: "What should buyers confirm before choosing a gas mask for chemical work?",
        answer: "Buyers should confirm the hazardous substance, exposure level, oxygen conditions, required eye and face protection, local regulations and compatible filter type before selecting a gas mask."
      },
      {
        question: "Is a full face respirator always required for chemical handling?",
        answer: "A full face respirator is often preferred when eye and face protection are needed, but final selection depends on workplace hazard assessment and applicable safety requirements."
      }
    ],
    sections: [
      {
        heading: "Start with the hazard, not the mask model",
        body: "A gas mask or reusable respirator should be selected after the buyer identifies the chemicals, concentration range, work duration and whether splash, vapor, mist or particles are present. This avoids choosing a facepiece that looks correct but is paired with the wrong filter."
      },
      {
        heading: "Match the facepiece to the work environment",
        body: "Full face respirators provide eye, face and respiratory coverage for demanding chemical tasks. Half masks can be suitable for lower-risk applications when separate eye protection is used. Supplied-air or SCBA systems may be needed for higher exposure, confined-space or oxygen-deficient conditions."
      },
      {
        heading: "Ask suppliers for compatibility and documents",
        body: "For distributor and project procurement, request product photos, compatible cartridge options, packing details, technical documents and confirmation of OEM or private-label support before placing bulk orders."
      }
    ],
    relatedProductCategories: ["Full Face Respirators", "Filters & Cartridges", "Supplied-Air & SCBA Systems"]
  },
  {
    id: "res-full-face-vs-half-mask",
    slug: "full-face-respirator-vs-half-mask",
    title: "Full Face Respirator vs Half Mask",
    excerpt: "Compare coverage, applications and buyer considerations when selecting reusable full-face or half-face respirators.",
    category: "Product Education",
    readTime: "5 min read",
    metaDescription: "Compare full face respirators and half masks for industrial buyers sourcing reusable respiratory protection from a China PPE manufacturer.",
    questions: [
      {
        question: "What is the main difference between a full face respirator and a half mask?",
        answer: "A full face respirator covers the eyes, face and respiratory tract, while a half mask covers the nose and mouth and usually needs separate goggles or a face shield."
      },
      {
        question: "Which respirator type is better for painting and chemical work?",
        answer: "Full face respirators are often selected when eye exposure or splash risk exists; half masks are commonly used for routine painting, spraying and maintenance when paired with suitable filters and eye protection."
      }
    ],
    sections: [
      {
        heading: "Coverage and protection scope",
        body: "Full face respirators provide integrated eye and face coverage, making them useful for chemical handling, emergency preparation and tasks with irritating vapors or splash risk. Half masks are lighter and can be easier to wear for routine work."
      },
      {
        heading: "Buyer considerations",
        body: "Distributors should compare fit, material, filter interface, spare part availability, packaging and instruction manual options. For OEM orders, confirm logo placement, color box design, carton marks and available product documents."
      },
      {
        heading: "Common procurement approach",
        body: "Many industrial buyers keep both types in their catalog: full face respirators for higher-risk jobs and half masks for broader everyday use. Filter compatibility and local safety rules remain the deciding factors."
      }
    ],
    relatedProductCategories: ["Full Face Respirators", "Half Face Respirators", "Filters & Cartridges"]
  },
  {
    id: "res-select-filter-cartridges",
    slug: "how-to-select-respirator-filter-cartridges",
    title: "How to Select Respirator Filter Cartridges",
    excerpt: "Understand why filter choice depends on hazard type, exposure conditions, compatibility and local requirements.",
    category: "Filter Selection",
    readTime: "7 min read",
    metaDescription: "A buyer guide to selecting respirator filter cartridges for organic vapor, acid gas, particles and industrial replacement programs.",
    questions: [
      {
        question: "How do buyers choose the right respirator cartridge?",
        answer: "Buyers choose respirator cartridges by matching the filter type to the identified hazard, facepiece compatibility, exposure conditions and local safety rules."
      },
      {
        question: "Can one filter cartridge protect against every hazard?",
        answer: "No. Cartridge performance depends on the target gas, vapor or particle hazard, so buyers should confirm the correct filter configuration before use."
      }
    ],
    sections: [
      {
        heading: "Identify the contaminant class",
        body: "Filter cartridges may target organic vapor, acid gas, inorganic gas, ammonia, particles or combined hazards. The exact workplace contaminant determines the cartridge family and any pre-filter requirement."
      },
      {
        heading: "Check facepiece compatibility",
        body: "A cartridge must fit the selected respirator interface. When sourcing from a supplier, ask for compatible mask models, connection type, cartridge photos and sample confirmation before large orders."
      },
      {
        heading: "Plan replacement and stock",
        body: "Distributors should prepare replenishment stock for common cartridges, pre-filters and retainers. Replacement frequency depends on exposure, work time, storage and the user's safety program."
      }
    ],
    relatedProductCategories: ["Filters & Cartridges", "Full Face Respirators", "Half Face Respirators"]
  },
  {
    id: "res-painting-coating-protection",
    slug: "respiratory-protection-for-painting-and-coating",
    title: "Respiratory Protection for Painting and Coating",
    excerpt: "Key considerations for organic vapor, paint mist and particle protection in spray painting and coating environments.",
    category: "Application Guide",
    readTime: "6 min read",
    metaDescription: "Industrial painting respirator selection guide covering full face masks, half masks, organic vapor cartridges and paint mist pre-filters.",
    questions: [
      {
        question: "What respirator products are commonly used for painting and coating?",
        answer: "Reusable half masks, full face respirators, organic vapor cartridges and particle pre-filters are commonly considered for painting and coating tasks."
      },
      {
        question: "Why are pre-filters used in painting applications?",
        answer: "Pre-filters help capture paint mist and particles before they reach the main cartridge, supporting cleaner airflow and cartridge management."
      }
    ],
    sections: [
      {
        heading: "Common painting hazards",
        body: "Spray painting and coating work can involve organic vapor, paint mist and airborne particles. Buyers should review the coating material and safety data before selecting mask and filter combinations."
      },
      {
        heading: "Facepiece selection",
        body: "Half masks are common for routine painting when separate goggles are used. Full face respirators may be preferred when eye irritation, overspray or face coverage is a concern."
      },
      {
        heading: "Distributor kit planning",
        body: "A practical painting kit can include reusable respirators, organic vapor cartridges, particle pre-filters, retainers, storage bags and replacement parts packed for retail or project distribution."
      }
    ],
    relatedProductCategories: ["Half Face Respirators", "Full Face Respirators", "Filters & Cartridges"]
  },
  {
    id: "res-pesticide-spraying-protection",
    slug: "respiratory-protection-for-pesticide-spraying",
    title: "Respiratory Protection for Pesticide Spraying",
    excerpt: "How agriculture buyers can think about respirator coverage, cartridge pairing and protective accessories.",
    category: "Application Guide",
    readTime: "5 min read",
    metaDescription: "Guide for agriculture and distributor buyers selecting reusable respirators, filters and accessories for pesticide spraying applications.",
    questions: [
      {
        question: "What should agriculture buyers consider for pesticide spraying respirators?",
        answer: "They should consider pesticide label requirements, vapor or aerosol hazards, eye protection needs, filter compatibility and cleaning or storage procedures."
      },
      {
        question: "Are half masks suitable for pesticide spraying?",
        answer: "Half masks may be suitable for some tasks when matched with proper cartridges and eye protection, but the pesticide label and local regulations should guide final selection."
      }
    ],
    sections: [
      {
        heading: "Use the pesticide label as a starting point",
        body: "Pesticide labels and local rules may specify respiratory protection requirements. Buyers should use those requirements before comparing mask style, material and packaging options."
      },
      {
        heading: "Pair respirators with accessories",
        body: "Pesticide programs often need goggles, protective clothing, gloves, storage bags and replacement cartridges. Complete kits can help distributors serve agricultural buyers more efficiently."
      },
      {
        heading: "Ask for cleaning and storage guidance",
        body: "Reusable respirators should be cleaned, inspected and stored away from contamination. Suppliers can provide product documents, packaging options and distributor catalog material."
      }
    ],
    relatedProductCategories: ["Half Face Respirators", "Filters & Cartridges", "Chemical Protective Clothing"]
  },
  {
    id: "res-supplied-air-system",
    slug: "what-is-a-supplied-air-respirator-system",
    title: "What Is a Supplied-Air Respirator System?",
    excerpt: "A buyer-oriented introduction to supplied-air system components, use scenarios and configuration questions.",
    category: "Solution Guide",
    readTime: "6 min read",
    metaDescription: "Understand supplied-air respirator systems, SCBA components and project questions for industrial respiratory protection procurement.",
    questions: [
      {
        question: "What is a supplied-air respirator system?",
        answer: "A supplied-air respirator system provides breathable air from a remote source or system configuration instead of relying only on air-purifying cartridges."
      },
      {
        question: "When should buyers consider supplied-air or SCBA systems?",
        answer: "They may be considered for rescue, confined-space support, high exposure tasks or environments where air-purifying respirators are not appropriate."
      }
    ],
    sections: [
      {
        heading: "System components",
        body: "A supplied-air or SCBA configuration can involve a facepiece, hose, regulator, cylinder or other project-specific components. The exact system depends on application and safety requirements."
      },
      {
        heading: "Project review questions",
        body: "Before quotation, buyers should share the application, expected work duration, user quantity, target market and required documentation so the supplier can discuss a suitable configuration."
      },
      {
        heading: "Procurement documentation",
        body: "For project supply, ask for component lists, product photos, packing details, test reports where available and clear confirmation of what is included in each set."
      }
    ],
    relatedProductCategories: ["Supplied-Air & SCBA Systems", "Full Face Respirators", "Accessories & Emergency PPE"]
  },
  {
    id: "res-store-maintain-respirators",
    slug: "how-to-store-and-maintain-reusable-respirators",
    title: "How to Store and Maintain Reusable Respirators",
    excerpt: "Basic storage, cleaning and replacement planning topics for reusable respirator programs.",
    category: "Maintenance",
    readTime: "4 min read",
    metaDescription: "Maintenance guide for reusable respirators covering cleaning, inspection, storage bags, replacement filters and distributor after-sales support.",
    questions: [
      {
        question: "How should reusable respirators be stored?",
        answer: "Reusable respirators should be cleaned, dried and stored in a clean bag or container away from dust, chemicals, sunlight and physical damage."
      },
      {
        question: "What parts should be inspected before reuse?",
        answer: "Users should inspect the facepiece, straps, valves, lens, gaskets and filter connection points before reuse."
      }
    ],
    sections: [
      {
        heading: "Clean and inspect after use",
        body: "Reusable respirators should be checked for damaged straps, deformed seals, dirty valves and worn connection points. Cleaning procedures should follow the user's safety program and product instructions."
      },
      {
        heading: "Store away from contamination",
        body: "Storage bags and cases help keep respirators away from dust, chemical residue and transport damage. This is especially useful for distributors selling respirator kits."
      },
      {
        heading: "Plan replacement parts",
        body: "A complete reusable respirator program needs replacement cartridges, pre-filters, retainers and spare parts. Buyers should confirm availability and lead time with the supplier."
      }
    ],
    relatedProductCategories: ["Accessories & Emergency PPE", "Filters & Cartridges", "Half Face Respirators"]
  }
];
