import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Business Ranker - Digitální Agentura",
    template: "%s | Business Ranker"
  },
  description: "Moderní digitální agentura specializující se na tvorbu webových stránek, SEO, online marketing a grafický design. Pomáháme firmám růst v online světě.",
  keywords: ["digitální agentura", "tvorba webů", "SEO", "online marketing", "grafický design", "Business Ranker"],
  authors: [{ name: "Business Ranker" }],
  creator: "Business Ranker",
  publisher: "Business Ranker",
  metadataBase: new URL("https://businessranker.cz"),
  alternates: {
    canonical: "/",
    languages: {
      "cs-CZ": "/",
      "en-US": "/en",
      "uk-UA": "/uk"
    }
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://businessranker.cz",
    siteName: "Business Ranker",
    title: "Business Ranker - Digitální Agentura",
    description: "Moderní digitální agentura specializující se na tvorbu webových stránek, SEO, online marketing a grafický design.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Business Ranker - Digitální Agentura"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Ranker - Digitální Agentura",
    description: "Moderní digitální agentura specializující se na tvorbu webových stránek, SEO, online marketing a grafický design.",
    images: ["/images/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${outfit.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="min-h-screen pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
