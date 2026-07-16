export const companyName = "Shanxi Hongyu Times Technology Co., Ltd.";

export const brandName = "Hulidun Safety";

export const brandLogo = "/images/brand/logo.webp";

export const brandSlogan = "Protecting Every Breath in Hazardous Workplaces.";

export const companyAddress =
  "Taiyuan, Shanxi, China.";

export const contactEmail = "hysd.office@gmail.com";

export const contactWhatsApp = "+86 15392617720";

export const contactPerson = "Vincent";

export const whatsappPhone = "8615392617720";

export const whatsappMessage =
  "Hello Hulidun Safety, I would like to request a quote for respiratory protection or chemical safety PPE. Please share product details, MOQ and delivery options.";

export function makeWhatsAppUrl(message = whatsappMessage) {
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = makeWhatsAppUrl();

export const brandRelation =
  "Hulidun Safety is a registered brand of Shanxi Hongyu Times Technology Co., Ltd.";

export const companyPositioning =
  "A self-owned factory supplier of industrial respiratory protection and chemical safety PPE solutions in China.";

export const companyIntro =
  "Established in 2019, Shanxi Hongyu Times Technology Co., Ltd. operates a self-owned factory in Taiyuan, Shanxi, China. Hulidun Safety supplies industrial respiratory protection, chemical safety protection and emergency PPE solutions for distributors, local industrial and mining companies, project buyers and OEM/ODM customers.";

export const hulidunStatement =
  "Hulidun Safety, the company's registered PPE brand, focuses on protecting workers in respiratory and chemical safety environments.";

export const companyStrengths = [
  "Self-owned 2,500 m2 factory with 120 employees and monthly capacity up to 100,000 pieces.",
  "Complete PPE product range covering respirators, cartridges, filters, supplied-air systems and chemical protective products.",
  "OEM/ODM support for logo, color box, instruction manual and outer carton customization."
];

export const companyFacts = [
  { label: "Established", value: "2019" },
  { label: "Employees", value: "120" },
  { label: "Factory Area", value: "2,500 m2" },
  { label: "Monthly Capacity", value: "100,000 pcs" },
  { label: "Annual Capacity", value: "1,200,000 pcs" },
  { label: "Factory Type", value: "Self-owned factory" }
];

export const exportMarkets = ["Southeast Asia", "Europe"];

export const buyerTypes = ["Local industrial and mining companies", "Local distributors"];

export const tradeHighlights = [
  { label: "MOQ", value: "200 pcs", description: "Standard reference MOQ; final MOQ depends on model and packaging." },
  { label: "Stock Lead Time", value: "5-7 days", description: "For products with available stock after order confirmation." },
  { label: "Custom Lead Time", value: "10-15 days", description: "For logo, color box, private label or carton mark customization." },
  { label: "OEM/ODM", value: "Available", description: "Logo, color box, instruction manual and outer carton customization." }
];

export const complianceNotice =
  "Product selection should be based on workplace hazards, local regulations and professional safety assessment. Please contact our team for technical documents and product compatibility information.";

export const certificationNotice =
  "Certification documents available upon request. Compliance information depends on target market requirements. Please contact us for product test reports and technical documents.";
