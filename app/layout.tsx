import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Professional Electrician Services | 24/7 Emergency Electrical Repair",
    template: "%s | ElectricPro - Licensed Electricians",
  },
  description:
    "Professional electrician services for residential, commercial & industrial. Licensed electricians available 24/7 for emergency repairs, installations, panel upgrades & electrical maintenance. Free estimates, 100% satisfaction guaranteed.",
  keywords: [
    "electrician",
    "electrical services",
    "emergency electrician",
    "electrical repair",
    "electrical installation",
    "panel upgrade",
    "circuit breaker",
    "wiring",
    "electrical contractor",
    "licensed electrician",
    "residential electrician",
    "commercial electrician",
    "electrical maintenance",
    "electrical inspection",
    "24/7 electrician",
    "emergency electrical service",
    "electrical troubleshooting",
    "generator installation",
    "lighting installation",
    "electrical safety",
  ],
  authors: [{ name: "ElectricPro Team" }],
  creator: "ElectricPro",
  publisher: "ElectricPro",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://electricpro.com",
    siteName: "ElectricPro - Professional Electrician Services",
    title:
      "Professional Electrician Services | 24/7 Emergency Electrical Repair",
    description:
      "Licensed electricians available 24/7 for emergency repairs, installations, panel upgrades & electrical maintenance. Free estimates, 100% satisfaction guaranteed.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ElectricPro - Professional Electrician Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@electricpro",
    creator: "@electricpro",
    title:
      "Professional Electrician Services | 24/7 Emergency Electrical Repair",
    description:
      "Licensed electricians available 24/7 for emergency repairs, installations, panel upgrades & electrical maintenance. Free estimates, 100% satisfaction guaranteed.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      bing: "your-bing-verification-code",
    },
  },
  category: "Professional Services",
  classification: "Business",
  alternates: {
    canonical: "https://electricpro.com",
  },
  other: {
    "geo.region": "US-VA",
    "geo.placename": "Manassas",
    "geo.position": "38.7509;-77.4753",
    ICBM: "38.7509, -77.4753",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ElectricianBusiness",
    name: "ElectricPro - Professional Electrical Services",
    image: "https://electricpro.com/logo.png",
    description:
      "Professional electrical services including wiring, electrical repairs, panel upgrades, and emergency electrical work. Licensed and insured electricians serving residential and commercial clients.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Electric Avenue",
      addressLocality: "Manassas",
      addressRegion: "VA",
      postalCode: "20109",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.7509",
      longitude: "-77.4753",
    },
    telephone: "+1 (555) 123-4567",
    email: "contact@electricpro.com",
    url: "https://electricpro.com",
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-17:00"],
    serviceArea: {
      "@type": "Place",
      name: "Manassas, VA and surrounding areas",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electrical Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Residential Electrical",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Home Wiring",
                description:
                  "Complete home electrical wiring and rewiring services",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Electrical Panel Upgrade",
                description:
                  "Electrical panel installation and upgrade services",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Commercial Electrical",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial Wiring",
                description:
                  "Commercial electrical installation and maintenance",
              },
            },
          ],
        },
      ],
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://facebook.com/electricpro",
      "https://instagram.com/electricpro",
      "https://linkedin.com/company/electricpro",
    ],
  };

  return (
    <html suppressHydrationWarning data-lt-installed lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
