# Industrial Respiratory Protection Website

English B2B independent website for an industrial respiratory protection and emergency safety solutions manufacturer.

Built with:

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Local TypeScript data files under `src/data`

## How to Start

Install dependencies:

```bash
npm install
```

Or, if you prefer pnpm:

```bash
pnpm install
```

Start the development server:

```bash
npm run dev
```

Or:

```bash
pnpm dev
```

Open:

```text
http://127.0.0.1:3000
```

Build for production:

```bash
npm run build
```

Or:

```bash
pnpm build
```

Start production server after build:

```bash
npm start
```

Or:

```bash
pnpm start
```

## Project Structure

```text
src/app                 Next.js routes and pages
src/components/common   Shared UI components
src/components/layout   Header, Footer, MobileNav
src/components/home     Homepage sections
src/components/products Product cards, filters, specs, CTA
src/components/applications Application cards and recommendation blocks
src/data                Local TypeScript data files
src/lib                 Utilities
public/images           Placeholder image path target
```

## How to Add a Product

Edit:

```text
src/data/products.ts
```

Add a new object to the `products` array using the `Product` type:

```ts
{
  id: "prod-new-model",
  slug: "new-model-respirator",
  model: "NEW MODEL",
  name: "New Respirator",
  category: "Full Face Respirators",
  shortDescription: "Short product summary.",
  longDescription: "Long product description.",
  keyFeatures: ["Feature one", "Feature two"],
  applications: ["Chemical handling"],
  hazards: ["Organic vapor"],
  compatibleFilters: ["Organic vapor cartridge"],
  materials: ["To be confirmed"],
  specifications: [
    { label: "Mask type", value: "To be confirmed" }
  ],
  oemOptions: ["Logo printing"],
  documents: ["Product data sheet"],
  image: "/images/products/mf14.jpg",
  gallery: ["/images/products/mf14.jpg"],
  featured: false
}
```

The product detail page is generated automatically at:

```text
/products/new-model-respirator
```

Do not add unconfirmed certification claims. Use:

```text
Available upon request
To be confirmed
Depends on configuration
```

## How to Add an Application Scenario

Edit:

```text
src/data/applications.ts
```

Add a new object to the `applications` array:

```ts
{
  id: "app-new-application",
  slug: "new-application",
  name: "New Application",
  summary: "Short application summary.",
  typicalHazards: ["Dust", "Organic vapor"],
  recommendedProducts: ["MF14 Full Face Gas Mask"],
  recommendedFilters: ["Organic vapor cartridge"],
  buyerTypes: ["Safety distributors"],
  disclaimer
}
```

The application detail page is generated automatically at:

```text
/applications/new-application
```

## How to Replace Images

Current placeholder paths are stored in data files, mainly:

```text
src/data/products.ts
src/data/quality.ts
```

Expected placeholder paths:

```text
/images/products/mf14.jpg
/images/products/mf19.jpg
/images/products/cf6800.jpg
/images/products/7502.jpg
/images/products/3300.jpg
/images/factory/quality-control.jpg
```

Place real files under:

```text
public/images/products
public/images/factory
```

If an image does not exist, the current UI still renders gradient and grid placeholder cards, so the site will not break.

## How to Connect the RFQ Form

The RFQ form component is:

```text
src/components/common/RFQForm.tsx
```

The reserved API route is:

```text
src/app/api/rfq/route.ts
```

Current behavior:

- Validates required fields in the browser.
- Logs submitted data to `console.log`.
- Shows success message after submit.

To connect email, CRM, database or CMS workflow, update `src/app/api/rfq/route.ts` and then replace the console-only form submission with a `fetch("/api/rfq", { method: "POST", ... })` request.

RFQ fields:

```text
name
company
country
email
whatsapp
productInterested
applicationIndustry
hazardType
quantity
needOemPackaging
targetMarket
message
```

Required fields:

```text
name
email
country
productInterested
message
```

## SEO Metadata

Important route metadata is defined directly in page files:

```text
src/app/page.tsx
src/app/products/page.tsx
src/app/oem-private-label/page.tsx
src/app/quality/page.tsx
src/app/contact/page.tsx
```

Dynamic product and application pages generate metadata from `src/data`.

## Compliance Notes

Respiratory protection content uses the following disclaimer:

```text
Product selection should be based on workplace hazards, local regulations and professional safety assessment. Please contact our team for technical documents and product compatibility information.
```

Do not add unverified approval or certification claims for any market or standard.

Use only:

```text
Certification documents available upon request.
Compliance information depends on target market requirements.
Please contact us for product test reports and technical documents.
```
