/**
 * Global Company Configuration
 * 
 * This file contains all customizable business/personal content for the website.
 * Update the placeholder values below with your actual business information.
 * 
 * All fields marked with "TODO:" need to be updated with real business data.
 */

// ========================================
// COMPANY BASIC INFORMATION
// ========================================

export const companyConfig = {
  // TODO: Replace with your actual company name
  name: "TODO: Your Company Name",
  
  // TODO: Replace with your company slogan/tagline
  slogan: "TODO: Your Company Slogan or Tagline",
  
  // TODO: Replace with a brief description of your business
  shortDescription: "TODO: Brief description of your electrical services business",
  
  // TODO: Replace with a detailed description of your company
  fullDescription: "TODO: Detailed description of your electrical contractor business, services offered, years of experience, specializations, and what makes you unique in the market.",
  
  // TODO: Replace with your main service offering
  mainService: "TODO: Your primary service (e.g., 24/7 Emergency Electrical Service)",
  
  // TODO: Replace with your company's founding year
  establishedYear: "TODO: YYYY",
  
  // TODO: Replace with your license number
  licenseNumber: "TODO: Your electrical contractor license number",
  
  // TODO: Replace with your insurance information
  insurance: "TODO: Your insurance details (Licensed & Insured)",
} as const;

// ========================================
// CONTACT INFORMATION
// ========================================

export const contactInfo = {
  // TODO: Replace with your actual phone number (format: +1 (XXX) XXX-XXXX)
  phone: "TODO: +1 (XXX) XXX-XXXX",
  
  // TODO: Replace with your actual email address
  email: "TODO: your-email@yourdomain.com",
  
  // TODO: Replace with your emergency/secondary phone number
  emergencyPhone: "TODO: +1 (XXX) XXX-XXXX",
  
  // TODO: Replace with your business fax number (if applicable)
  fax: "TODO: +1 (XXX) XXX-XXXX (or remove if not applicable)",
} as const;

// ========================================
// BUSINESS ADDRESS & LOCATION
// ========================================

export const businessLocation = {
  // TODO: Replace with your actual street address
  streetAddress: "TODO: Your Street Address",
  
  // TODO: Replace with your city
  city: "TODO: Your City",
  
  // TODO: Replace with your state/region/province
  region: "TODO: Your State/Region",
  
  // TODO: Replace with your postal/zip code
  postalCode: "TODO: Your Postal Code",
  
  // TODO: Replace with your country
  country: "TODO: Your Country",
  
  // TODO: Replace with your service area description
  serviceArea: "TODO: Description of your service area (e.g., 'Manassas, VA and surrounding areas')",
  
  // Geographic coordinates for maps and local SEO
  // TODO: Replace with your actual latitude and longitude
  coordinates: {
    latitude: "TODO: XX.XXXX", // Example: "38.7509"
    longitude: "TODO: -XX.XXXX", // Example: "-77.4753"
  },
  
  // TODO: Replace with your timezone
  timezone: "TODO: Your timezone (e.g., America/New_York)",
} as const;

// ========================================
// BUSINESS HOURS
// ========================================

export const businessHours = {
  // TODO: Update with your actual business hours
  display: "TODO: Mon-Fri 08:00 AM - 05:00 PM, Sat 09:00 AM - 02:00 PM",
  
  // Structured format for schema.org
  // TODO: Update with your actual hours in this format
  structured: [
    "TODO: Mo-Fr 08:00-17:00", // Monday to Friday
    "TODO: Sa 09:00-14:00",    // Saturday (or remove if closed)
    // "Su closed" // Sunday (add if you work Sundays)
  ],
  
  // Emergency service availability
  // TODO: Update based on your emergency service availability
  emergency24_7: true, // Set to false if you don't offer 24/7 emergency service
  emergencyNote: "TODO: 24/7 Emergency Service Available", // Or your emergency service description
} as const;

// ========================================
// SOCIAL MEDIA & ONLINE PRESENCE
// ========================================

export const socialMedia = {
  // TODO: Replace with your actual social media URLs (or set to null if not used)
  facebook: "TODO: https://facebook.com/your-business-page",
  instagram: "TODO: https://instagram.com/your-business-handle",
  twitter: "TODO: https://twitter.com/your-business-handle",
  linkedin: "TODO: https://linkedin.com/company/your-business",
  youtube: "TODO: https://youtube.com/channel/your-channel",
  googleMyBusiness: "TODO: https://maps.google.com/your-business-listing",
  
  // Social media handles (without @ symbol)
  // TODO: Replace with your actual social media handles
  handles: {
    facebook: "TODO: your-business-page",
    instagram: "TODO: your-business-handle", 
    twitter: "TODO: your-business-handle",
    linkedin: "TODO: your-business",
    youtube: "TODO: your-channel",
  },
} as const;

// ========================================
// GOOGLE MAPS INTEGRATION
// ========================================

export const mapsConfig = {
  // TODO: Replace with your Google Maps embed URL
  // Get this from Google Maps: Share > Embed a map > Copy HTML
  embedUrl: "TODO: https://www.google.com/maps/embed?pb=your-embed-code-here",
  
  // TODO: Replace with direct Google Maps link to your business
  directUrl: "TODO: https://maps.google.com/maps?q=Your+Business+Name+Address",
  
  // TODO: Replace with your Google My Business place ID (optional, for advanced features)
  placeId: "TODO: Your Google Place ID (optional)",
} as const;

// ========================================
// SEO & METADATA CONFIGURATION
// ========================================

export const seoConfig = {
  // Primary SEO content
  // TODO: Replace with your optimized title
  title: "TODO: Your Business Name | Professional Electrical Services | Your City, State",
  
  // TODO: Replace with your meta description (150-160 characters)
  metaDescription: "TODO: Professional electrical services in Your City. Licensed electricians available 24/7 for emergency repairs, installations, and maintenance. Free estimates!",
  
  // TODO: Add your relevant keywords (comma-separated)
  keywords: [
    "TODO: electrician",
    "TODO: electrical services", 
    "TODO: your city electrician",
    "TODO: emergency electrician",
    "TODO: electrical repair",
    "TODO: electrical installation",
    "TODO: panel upgrade",
    "TODO: circuit breaker",
    "TODO: wiring",
    "TODO: electrical contractor",
    "TODO: licensed electrician",
    "TODO: residential electrician",
    "TODO: commercial electrician",
    "TODO: electrical maintenance",
    "TODO: electrical inspection",
    "TODO: 24/7 electrician",
    "TODO: electrical troubleshooting",
    "TODO: generator installation",
    "TODO: lighting installation",
    "TODO: electrical safety",
  ],
  
  // Open Graph (Facebook/LinkedIn) settings
  openGraph: {
    // TODO: Replace with your website URL
    url: "TODO: https://your-website.com",
    // TODO: Replace with your business name for social sharing
    siteName: "TODO: Your Business Name - Professional Electrical Services",
    // TODO: Replace with path to your Open Graph image (1200x630px recommended)
    image: "TODO: /og-image.jpg",
    // TODO: Replace with your Open Graph image alt text
    imageAlt: "TODO: Your Business Name - Professional Electrical Services",
  },
  
  // Twitter Card settings
  twitter: {
    // TODO: Replace with your Twitter handle (with @)
    site: "TODO: @your-twitter-handle",
    // TODO: Replace with your Twitter handle (with @)
    creator: "TODO: @your-twitter-handle",
  },
  
  // Search engine verification codes
  // TODO: Replace with your actual verification codes from Google, Bing, etc.
  verification: {
    google: "TODO: your-google-verification-code",
    bing: "TODO: your-bing-verification-code",
    yandex: "TODO: your-yandex-verification-code",
    yahoo: "TODO: your-yahoo-verification-code",
  },
  
  // Geographic SEO
  geo: {
    // TODO: Replace with your region code (e.g., "US-VA" for Virginia, USA)
    region: "TODO: US-ST", 
    // TODO: Replace with your city name
    placename: "TODO: Your City",
    // TODO: Replace with your coordinates (same as businessLocation.coordinates)
    position: "TODO: XX.XXXX;-XX.XXXX",
    // TODO: Replace with ICBM coordinates (same format as position)
    icbm: "TODO: XX.XXXX, -XX.XXXX",
  },
} as const;

// ========================================
// STRUCTURED DATA (Schema.org)
// ========================================

export const structuredData = {
  // Business information for search engines
  business: {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor", // or "LocalBusiness" for broader classification
    
    // TODO: Replace with your business name
    name: "TODO: Your Business Name - Professional Electrical Services",
    
    // TODO: Replace with your logo URL
    image: "TODO: https://your-website.com/logo.png",
    
    // TODO: Replace with detailed business description
    description: "TODO: Professional electrical services including wiring, electrical repairs, panel upgrades, and emergency electrical work. Licensed and insured electricians serving residential and commercial clients in Your City and surrounding areas.",
    
    // Address information
    address: {
      "@type": "PostalAddress",
      // TODO: Replace with your actual address details
      streetAddress: "TODO: Your Street Address",
      addressLocality: "TODO: Your City", 
      addressRegion: "TODO: Your State",
      postalCode: "TODO: Your Postal Code",
      addressCountry: "TODO: US",
    },
    
    // Geographic coordinates
    geo: {
      "@type": "GeoCoordinates",
      // TODO: Replace with your actual coordinates
      latitude: "TODO: XX.XXXX",
      longitude: "TODO: -XX.XXXX", 
    },
    
    // Contact information
    // TODO: Replace with your actual contact details
    telephone: "TODO: +1 (XXX) XXX-XXXX",
    email: "TODO: your-email@yourdomain.com",
    url: "TODO: https://your-website.com",
    
    // Business hours for search engines
    // TODO: Update with your actual hours
    openingHours: [
      "TODO: Mo-Fr 08:00-17:00",
      "TODO: Sa 09:00-14:00"
    ],
    
    // Service area
    serviceArea: {
      "@type": "Place",
      // TODO: Replace with your service area
      name: "TODO: Your City, State and surrounding areas",
    },
    
    // Price range ($, $$, $$$, or $$$$)
    // TODO: Update based on your pricing level
    priceRange: "TODO: $$",
    
    // Customer ratings (update with real data or remove)
    // TODO: Update with actual review data or remove this section
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "TODO: 4.8", // Average rating
      reviewCount: "TODO: 127",  // Number of reviews
      bestRating: "5",
      worstRating: "1",
    },
    
    // Social media profiles
    // TODO: Replace with your actual social media URLs
    sameAs: [
      "TODO: https://facebook.com/your-business-page",
      "TODO: https://instagram.com/your-business-handle", 
      "TODO: https://linkedin.com/company/your-business",
    ],
  },
  
  // Service offerings for search engines
  services: {
    "@context": "https://schema.org",
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
              description: "TODO: Complete home electrical wiring and rewiring services",
            },
          },
          {
            "@type": "Offer", 
            itemOffered: {
              "@type": "Service",
              name: "Electrical Panel Upgrade",
              description: "TODO: Electrical panel installation and upgrade services",
            },
          },
          // TODO: Add more residential services as needed
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
              description: "TODO: Commercial electrical installation and maintenance",
            },
          },
          // TODO: Add more commercial services as needed
        ],
      },
      // TODO: Add more service categories as needed (Industrial, Emergency, etc.)
    ],
  },
} as const;

// ========================================
// ADDITIONAL BUSINESS INFORMATION
// ========================================

export const additionalInfo = {
  // TODO: Add your certifications and credentials
  certifications: [
    "TODO: Licensed Electrical Contractor",
    "TODO: Fully Insured", 
    "TODO: Bonded",
    "TODO: Better Business Bureau Accredited",
    // Add more certifications as needed
  ],
  
  // TODO: Add your service specialties
  specialties: [
    "TODO: Residential Electrical",
    "TODO: Commercial Electrical", 
    "TODO: Emergency Repairs",
    "TODO: Panel Upgrades",
    "TODO: Smart Home Installation",
    // Add more specialties as needed
  ],
  
  // TODO: Update payment methods you accept
  paymentMethods: [
    "TODO: Cash",
    "TODO: Check", 
    "TODO: Credit Card",
    "TODO: PayPal",
    "TODO: Financing Available",
    // Add more payment methods as needed
  ],
  
  // TODO: Add any guarantees or warranties you offer
  guarantees: [
    "TODO: 100% Satisfaction Guaranteed",
    "TODO: Free Estimates", 
    "TODO: Upfront Pricing",
    "TODO: 1-Year Warranty on Work",
    // Add more guarantees as needed
  ],
} as const;

// ========================================
// EXPORT ALL CONFIGURATIONS
// ========================================

// Main configuration object that combines all settings
export const globalConfig = {
  company: companyConfig,
  contact: contactInfo,
  location: businessLocation,
  hours: businessHours,
  social: socialMedia,
  maps: mapsConfig,
  seo: seoConfig,
  structuredData: structuredData,
  additional: additionalInfo,
} as const;

// Export individual configurations for granular imports
export default globalConfig;

/**
 * USAGE EXAMPLES:
 * 
 * // Import the entire configuration
 * import globalConfig from '@/lib/companyConfig';
 * 
 * // Import specific sections
 * import { companyConfig, contactInfo, seoConfig } from '@/lib/companyConfig';
 * 
 * // Use in components
 * const companyName = globalConfig.company.name;
 * const phone = globalConfig.contact.phone;
 * const address = `${globalConfig.location.streetAddress}, ${globalConfig.location.city}`;
 * 
 * // Use for SEO metadata
 * export const metadata = {
 *   title: globalConfig.seo.title,
 *   description: globalConfig.seo.metaDescription,
 *   keywords: globalConfig.seo.keywords,
 * };
 */