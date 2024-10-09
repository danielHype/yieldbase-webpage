import React from "react";
import { Footer } from "@/components/footer";
import { FooterCTA } from "@/components/footer-cta";
import { Header } from "@/components/header";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import "@/styles/ui.globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Provider } from "./provider";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "YieldBase | Smart Cashflow Solutions",
    template: "%s | YieldBase",
  },
  description:
    "Erleben Sie unübertroffenen Schutz und Präsentation für Ihre Produkte mit unseren umweltfreundlichen, maßgeschneiderten Kartons. Wählen Sie uns für zuverlässige Verpackungslösungen, die Ihre Marke aufwerten und die Umwelt schonen.",
  openGraph: {
    title: "YieldBase | Smart Cashflow Solutions",
    description:
      "Unlock your business's cashflow potential with innovative yield solutions. Our automated financial strategies help Southeast Asian businesses, starting in Bali, Indonesia, turn daily cashflow into extra income effortlessly. Experience seamless liquidity management and maximize your returns with our smart, hassle-free services.",
    url: baseUrl,
    siteName:
      "Unlock your business's cashflow potential with innovative yield solutions. Our automated financial strategies help Southeast Asian businesses, starting in Bali, Indonesia, turn daily cashflow into extra income effortlessly. Experience seamless liquidity management and maximize your returns with our smart, hassle-free services.",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)" },
    { media: "(prefers-color-scheme: dark)" },
  ],
};

function Layout({ children }: { children: ReactElement }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${GeistSans.variable} ${GeistMono.variable}`,
          "bg-[#F6F6F3] dark:bg-[#0C0C0C] overflow-x-hidden"
        )}
      >
        <Provider>
          <Header />
          <main className="container mx-auto px-4 overflow-hidden md:overflow-visible">
            {children}
          </main>
          <FooterCTA />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
export default Layout;
