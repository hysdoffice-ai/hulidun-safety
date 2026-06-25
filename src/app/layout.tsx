import type { Metadata } from "next";
import "./globals.css";
import { FloatingWhatsAppButton } from "@/components/common/WhatsAppButton";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: {
    default: "Hulidun Safety | Industrial Respiratory Protection & Chemical Safety PPE",
    template: "%s | Hulidun Safety"
  },
  description:
    "China-based supplier of full face respirators, half masks, filter cartridges, supplied-air systems, chemical protective suits and emergency PPE for global B2B buyers.",
  keywords: [
    "industrial respirator supplier",
    "full face respirator manufacturer",
    "half face respirator",
    "respirator cartridges",
    "chemical protective suit",
    "China PPE supplier",
    "OEM ODM PPE"
  ],
  metadataBase: new URL("https://hulidunsafety.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
