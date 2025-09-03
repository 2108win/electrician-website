import { companyDetails } from "@/lib/constants";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// trong JSX return của RootLayout:
<Script id="ld-localbusiness" type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Electrician"],
    name: companyDetails.name,
    url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    email: companyDetails.email,
    telephone: companyDetails.phone,
    image: `${process.env.NEXT_PUBLIC_BASE_URL}/og/buem-og.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: companyDetails.state,
      addressRegion: "TR",
      addressCountry: "TR",
    },
    areaServed: [
      { "@type": "City", name: "Sultanbeyli" },
      { "@type": "City", name: "Kurtköy" },
      { "@type": "City", name: "Pendik" },
      { "@type": "City", name: "İstanbul Anadolu Yakası" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      // more social media: "https://facebook.com/...", "https://instagram.com/..."
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Elektrik Hizmetleri",
      itemListElement: [
        { "@type": "Offer", name: "Acil Elektrik Arıza 7/24" },
        { "@type": "Offer", name: "Elektrik Tesisat Tamiri" },
        { "@type": "Offer", name: "Bakım ve Onarım" },
      ],
    },
  })}
</Script>;
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  ),
  applicationName: companyDetails.name,
  title: {
    default: `${companyDetails.name} | İstanbul Anadolu Yakası 7/24 Acil Elektrikçi`,
    template: `%s | ${companyDetails.name}`,
  },
  description:
    "Sultanbeyli, Kurtköy, Pendik ve tüm İstanbul Anadolu Yakası’nda 7/24 acil elektrik arıza, bakım ve onarım hizmetleri. Hızlı, güvenilir ve profesyonel elektrikçi.",
  keywords: [
    "elektrikçi İstanbul",
    "Sultanbeyli elektrikçi",
    "Pendik elektrikçi",
    "Kurtköy elektrikçi",
    "acil elektrikçi 7/24",
    "elektrik arıza servisi",
    "elektrik tesisat tamiri",
    "İstanbul Anadolu Yakası elektrikçi",
  ],
  authors: [
    { name: companyDetails.name, url: process.env.NEXT_PUBLIC_BASE_URL },
  ],
  creator: companyDetails.name,
  publisher: companyDetails.name,
  category: "Local Services",
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: companyDetails.name,
    title: `İstanbul Anadolu Yakası 7/24 Acil Elektrikçi | ${companyDetails.name}`,
    description:
      "Sultanbeyli, Kurtköy, Pendik ve tüm Anadolu Yakası’nda profesyonel elektrik hizmetleri. 7/24 acil destek.",
    images: [
      {
        url: "/og/buem-og.jpg", // đặt ảnh thật trong public/og/
        width: 1200,
        height: 630,
        alt: `${companyDetails.name} - 7/24 Acil Elektrikçi`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: companyDetails.tag, // nếu chưa có thì giữ nguyên hoặc xoá
    creator: companyDetails.tag,
    title: `${companyDetails.name} | 7/24 Acil Elektrikçi`,
    description:
      "İstanbul Anadolu Yakası’nda hızlı ve güvenilir elektrik hizmetleri.",
    images: ["/og/buem-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/icons/site.webmanifest",
  // verification: {
  //   google: "GOOGLE_SITE_VERIFICATION_TOKEN", // thay bằng token GSC
  // },
  referrer: "origin-when-cross-origin",
  classification: "Electrician, LocalBusiness, Home Services",
  other: {
    "theme-color": "#FF6900",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning data-lt-installed lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
