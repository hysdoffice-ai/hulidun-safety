export type Resource = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
};

export const resources: Resource[] = [
  {
    id: "res-choose-gas-mask-chemical-work",
    slug: "how-to-choose-the-right-gas-mask-for-chemical-work",
    title: "How to Choose the Right Gas Mask for Chemical Work",
    excerpt: "A practical guide to matching mask type, filter configuration and workplace assessment for chemical handling tasks.",
    category: "Buyer Guide",
    readTime: "6 min read"
  },
  {
    id: "res-full-face-vs-half-mask",
    slug: "full-face-respirator-vs-half-mask",
    title: "Full Face Respirator vs Half Mask",
    excerpt: "Compare coverage, applications and buyer considerations when selecting reusable full-face or half-face respirators.",
    category: "Product Education",
    readTime: "5 min read"
  },
  {
    id: "res-select-filter-cartridges",
    slug: "how-to-select-respirator-filter-cartridges",
    title: "How to Select Respirator Filter Cartridges",
    excerpt: "Understand why filter choice depends on hazard type, exposure conditions, compatibility and local requirements.",
    category: "Filter Selection",
    readTime: "7 min read"
  },
  {
    id: "res-painting-coating-protection",
    slug: "respiratory-protection-for-painting-and-coating",
    title: "Respiratory Protection for Painting and Coating",
    excerpt: "Key considerations for organic vapor, paint mist and particle protection in spray painting and coating environments.",
    category: "Application Guide",
    readTime: "6 min read"
  },
  {
    id: "res-pesticide-spraying-protection",
    slug: "respiratory-protection-for-pesticide-spraying",
    title: "Respiratory Protection for Pesticide Spraying",
    excerpt: "How agriculture buyers can think about respirator coverage, cartridge pairing and protective accessories.",
    category: "Application Guide",
    readTime: "5 min read"
  },
  {
    id: "res-supplied-air-system",
    slug: "what-is-a-supplied-air-respirator-system",
    title: "What Is a Supplied-Air Respirator System?",
    excerpt: "A buyer-oriented introduction to supplied-air system components, use scenarios and configuration questions.",
    category: "Solution Guide",
    readTime: "6 min read"
  },
  {
    id: "res-store-maintain-respirators",
    slug: "how-to-store-and-maintain-reusable-respirators",
    title: "How to Store and Maintain Reusable Respirators",
    excerpt: "Basic storage, cleaning and replacement planning topics for reusable respirator programs.",
    category: "Maintenance",
    readTime: "4 min read"
  }
];
