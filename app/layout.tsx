import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { FloatingAssistant } from "@/components/FloatingAssistant";
import { Header } from "@/components/Header";
import { siteData } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteData.url),
  title: {
    default: `${siteData.name} | ${siteData.title}`,
    template: `%s | ${siteData.name}`
  },
  description: siteData.description,
  openGraph: {
    title: `${siteData.name} | ${siteData.title}`,
    description: siteData.description,
    url: siteData.url,
    siteName: siteData.name,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.name} | ${siteData.title}`,
    description: siteData.description
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="relative overflow-x-hidden">
          <Header />
          <main className="pt-[84px] md:pt-[92px]">{children}</main>
          <FloatingAssistant />
          <Footer />
        </div>
      </body>
    </html>
  );
}
