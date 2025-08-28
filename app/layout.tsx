import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    default:
      "Dịch Vụ Điện Dân Dụng - Thợ Điện Chuyên Nghiệp Tại Manassas, VA | 24/7 Khẩn Cấp",
    template: "%s | ElectricPro - Thợ Điện Có Giấy Phép",
  },
  description:
    "Dịch vụ điện dân dụng chuyên nghiệp tại Manassas, VA. Thợ điện có giấy phép 24/7 khẩn cấp. Sửa chữa điện, lắp đặt điện, nâng cấp tủ điện. Gọi ngay 1 (800) 765-4321!",
  keywords: [
    "dịch vụ điện dân dụng",
    "thợ điện",
    "thợ điện tại Manassas",
    "sửa chữa điện",
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
    "Manassas VA electrician",
    "Virginia electrician",
    "thợ điện Virginia",
    "dịch vụ điện khẩn cấp",
    "sửa chữa điện 24/7",
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
    locale: "vi_VN",
    url: "https://electricpro.com",
    siteName: "ElectricPro - Dịch Vụ Điện Dân Dụng Chuyên Nghiệp",
    title:
      "Dịch Vụ Điện Dân Dụng - Thợ Điện Chuyên Nghiệp Tại Manassas, VA | 24/7",
    description:
      "Thợ điện có giấy phép 24/7 tại Manassas, VA. Dịch vụ điện dân dụng khẩn cấp, sửa chữa điện, lắp đặt điện, nâng cấp tủ điện. Gọi ngay: 1 (800) 765-4321!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ElectricPro - Dịch Vụ Điện Dân Dụng Chuyên Nghiệp Tại Manassas, VA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@electricpro",
    creator: "@electricpro",
    title:
      "Dịch Vụ Điện Dân Dụng - Thợ Điện 24/7 Tại Manassas, VA",
    description:
      "Thợ điện có giấy phép 24/7 tại Manassas, VA. Dịch vụ điện dân dụng khẩn cấp, sửa chữa điện. Gọi ngay: 1 (800) 765-4321!",
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
    "@type": "LocalBusiness",
    "name": "ElectricPro - Dịch Vụ Điện Dân Dụng Chuyên Nghiệp",
    "image": "https://electricpro.com/logo.png",
    "description":
      "Dịch vụ điện dân dụng chuyên nghiệp tại Manassas, VA. Thợ điện có giấy phép cung cấp dịch vụ sửa chữa điện, lắp đặt điện, nâng cấp tủ điện và khẩn cấp 24/7. Professional electrical services including wiring, repairs, panel upgrades.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8494 Signal Hill Road",
      "addressLocality": "Manassas",
      "addressRegion": "VA",
      "postalCode": "20110",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.7509",
      "longitude": "-77.4753",
    },
    "telephone": "+1 (800) 765-4321",
    "url": "https://electricpro.com",
    "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-17:00"],
    "serviceArea": {
      "@type": "Place",
      "name": "Manassas, VA and surrounding areas",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dịch Vụ Điện Dân Dụng",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sửa Chữa Điện Dân Dụng",
            "description":
              "Dịch vụ sửa chữa điện chuyên nghiệp cho nhà ở và văn phòng",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lắp Đặt Hệ Thống Điện",
            "description":
              "Lắp đặt và nâng cấp hệ thống điện an toàn, đúng tiêu chuẩn",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dịch Vụ Điện Khẩn Cấp 24/7",
            "description":
              "Thợ điện có mặt ngay khi khẩn cấp, phục vụ 24/7",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nâng Cấp Tủ Điện",
            "description":
              "Nâng cấp và thay thế tủ điện cũ, đảm bảo an toàn",
          },
        },
      ],
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1",
    },
    "sameAs": [
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
        className="antialiased"
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
