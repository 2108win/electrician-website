/**
 * ==========================================
 * GLOBAL COMPANY CONFIGURATION
 * ==========================================
 * 
 * This file contains all company/business information in a centralized location.
 * All components (Header, Footer, Contact, SEO/meta, etc.) should import from this 
 * configuration file to display company information consistently across the website.
 * 
 * The configuration is organized into logical sections for easy maintenance:
 * - Basic Company Information
 * - Contact Information  
 * - Business Hours & Availability
 * - Social Media Links
 * - Map Integration
 * - SEO & Metadata
 * - Search Engine Verification
 * 
 * IMPORTANT: All values are currently set to TODO placeholders. 
 * Update these with your actual business information.
 * 
 * @author ElectricPro Development Team
 * @version 1.0.0
 * @since 2025-01-02
 */

// ==========================================
// TYPE DEFINITIONS
// ==========================================

/**
 * Business hours for a specific day
 */
export interface BusinessHours {
  /** Day of the week */
  day: string;
  /** Opening time in HH:MM format (24-hour) */
  open: string;
  /** Closing time in HH:MM format (24-hour) */
  close: string;
  /** Whether the business is closed on this day */
  closed?: boolean;
}

/**
 * Social media platform information
 */
export interface SocialLink {
  /** Platform name (e.g., "Facebook", "Twitter", "LinkedIn") */
  platform: string;
  /** Full URL to the social media profile */
  url: string;
  /** Display handle/username (optional) */
  handle?: string;
  /** Whether this link should be displayed publicly */
  enabled: boolean;
}

/**
 * Complete address information
 */
export interface Address {
  /** Street address line 1 */
  street: string;
  /** Street address line 2 (optional) */
  street2?: string;
  /** City name */
  city: string;
  /** State/Province/Region */
  region: string;
  /** Postal/ZIP code */
  postalCode: string;
  /** Country */
  country: string;
  /** Full formatted address string */
  formatted: string;
}

/**
 * SEO metadata configuration
 */
export interface SEOConfig {
  /** Primary page title */
  title: string;
  /** Meta description */
  description: string;
  /** SEO keywords array */
  keywords: string[];
  /** Canonical URL */
  canonicalUrl: string;
  /** Open Graph image URL */
  ogImage: string;
  /** Twitter card type */
  twitterCard: "summary" | "summary_large_image";
  /** Additional meta tags */
  additionalTags: Record<string, string>;
}

/**
 * Search engine verification codes
 */
export interface SearchEngineVerification {
  /** Google Search Console verification code */
  google: string;
  /** Bing Webmaster Tools verification code */
  bing: string;
  /** Yandex Webmaster verification code */
  yandex: string;
  /** Yahoo Site Explorer verification code */
  yahoo: string;
}

/**
 * Map integration configuration
 */
export interface MapConfig {
  /** Google Maps embed URL */
  embedUrl: string;
  /** Latitude coordinate */
  latitude: string;
  /** Longitude coordinate */
  longitude: string;
  /** Zoom level for the map */
  zoomLevel: number;
  /** Map type (roadmap, satellite, hybrid, terrain) */
  mapType: "roadmap" | "satellite" | "hybrid" | "terrain";
}

/**
 * Main company configuration interface
 */
export interface CompanyConfig {
  // Basic Information
  basic: {
    /** Company/Business name */
    name: string;
    /** Company slogan/tagline */
    slogan: string;
    /** Detailed company description */
    description: string;
    /** Year the company was established */
    establishedYear: number;
    /** Primary service offering */
    primaryService: string;
    /** Copyright notice */
    copyright: string;
  };

  // Contact Information
  contact: {
    /** Primary phone number */
    phone: string;
    /** Alternative/Emergency phone number */
    phoneSecondary?: string;
    /** Primary email address */
    email: string;
    /** Support email address */
    emailSupport?: string;
    /** Complete business address */
    address: Address;
  };

  // Business Operations
  operations: {
    /** Regular business hours */
    businessHours: BusinessHours[];
    /** Emergency service availability */
    emergencyService: {
      available: boolean;
      hours: string;
      phone: string;
    };
    /** Service area description */
    serviceArea: string;
    /** License information */
    licensing: {
      licensed: boolean;
      licenseNumber?: string;
      insuranceInfo?: string;
    };
  };

  // Digital Presence
  digital: {
    /** Website URL */
    website: string;
    /** Social media links */
    socialMedia: SocialLink[];
    /** Map integration settings */
    map: MapConfig;
  };

  // SEO & Marketing
  seo: SEOConfig;

  // Third-party Integrations
  integrations: {
    /** Search engine verification codes */
    searchEngineVerification: SearchEngineVerification;
    /** Google Analytics tracking ID */
    googleAnalyticsId?: string;
    /** Facebook Pixel ID */
    facebookPixelId?: string;
  };
}

// ==========================================
// COMPANY CONFIGURATION
// ==========================================

/**
 * Main company configuration object
 * 
 * 🚨 IMPORTANT: All values below are TODO placeholders! 
 * Replace them with your actual business information.
 */
export const companyConfig: CompanyConfig = {
  // ==========================================
  // BASIC COMPANY INFORMATION
  // ==========================================
  basic: {
    /** 
     * TODO: Replace with your actual company name
     * This appears in the logo, page titles, and throughout the site
     */
    name: "TODO: Your Electrical Company Name",

    /** 
     * TODO: Add your company slogan or tagline
     * This appears in hero sections and marketing materials
     */
    slogan: "TODO: Your Company Slogan - e.g., 'Powering Your Future'",

    /** 
     * TODO: Write a comprehensive description of your business
     * This is used for SEO, about pages, and service descriptions
     */
    description: "TODO: Your company description - Provide a detailed description of your electrical services, specialties, and what makes your business unique. Include service areas like residential, commercial, industrial electrical work.",

    /** 
     * TODO: Enter the year your company was established
     * Used in about sections and credibility building
     */
    establishedYear: 2020, // TODO: Replace with actual year

    /** 
     * TODO: Define your primary service offering
     * This appears in headers and call-to-action sections
     */
    primaryService: "TODO: Primary Service - e.g., '24/7 Emergency Electrical Services'",

    /** 
     * TODO: Update copyright notice
     * Appears in footer and legal pages
     */
    copyright: "TODO: © 2025 Your Company Name. All Rights Reserved.",
  },

  // ==========================================
  // CONTACT INFORMATION
  // ==========================================
  contact: {
    /** 
     * TODO: Add your primary business phone number
     * Format: "+1 (XXX) XXX-XXXX" for US numbers
     */
    phone: "TODO: +1 (XXX) XXX-XXXX",

    /** 
     * TODO: Add emergency or secondary phone number (optional)
     * Used for after-hours emergencies
     */
    phoneSecondary: "TODO: +1 (XXX) XXX-XXXX", // Optional

    /** 
     * TODO: Add your primary business email
     * Used for contact forms and general inquiries
     */
    email: "TODO: info@yourcompany.com",

    /** 
     * TODO: Add support email address (optional)
     * Used for customer support inquiries
     */
    emailSupport: "TODO: support@yourcompany.com", // Optional

    /** 
     * TODO: Complete your business address information
     * Used for contact pages, maps, and local SEO
     */
    address: {
      /** TODO: Street address */
      street: "TODO: 123 Your Street Address",
      
      /** TODO: Suite/Unit number (optional) */
      street2: "TODO: Suite 100", // Optional
      
      /** TODO: City name */
      city: "TODO: Your City",
      
      /** TODO: State/Province */
      region: "TODO: State/Province",
      
      /** TODO: ZIP/Postal code */
      postalCode: "TODO: 12345",
      
      /** TODO: Country */
      country: "TODO: United States",
      
      /** TODO: Complete formatted address */
      formatted: "TODO: 123 Your Street Address, Suite 100, Your City, State 12345, United States",
    },
  },

  // ==========================================
  // BUSINESS OPERATIONS
  // ==========================================
  operations: {
    /** 
     * TODO: Set your actual business hours
     * Update open/close times and closed days as needed
     */
    businessHours: [
      { day: "Monday", open: "08:00", close: "17:00" },
      { day: "Tuesday", open: "08:00", close: "17:00" },
      { day: "Wednesday", open: "08:00", close: "17:00" },
      { day: "Thursday", open: "08:00", close: "17:00" },
      { day: "Friday", open: "08:00", close: "17:00" },
      { day: "Saturday", open: "09:00", close: "15:00" }, // TODO: Adjust weekend hours
      { day: "Sunday", open: "00:00", close: "00:00", closed: true }, // TODO: Set if open on Sundays
    ],

    /** 
     * TODO: Configure emergency service settings
     */
    emergencyService: {
      /** TODO: Set whether you offer 24/7 emergency service */
      available: true, // TODO: Set to false if no emergency service
      
      /** TODO: Describe emergency service hours */
      hours: "TODO: 24/7 Emergency Service Available",
      
      /** TODO: Emergency contact phone number */
      phone: "TODO: +1 (XXX) XXX-XXXX",
    },

    /** 
     * TODO: Describe your service area
     * Include cities, regions, or radius you serve
     */
    serviceArea: "TODO: Service area description - e.g., 'Serving Greater Metropolitan Area and surrounding communities within 50 miles'",

    /** 
     * TODO: Update licensing and insurance information
     */
    licensing: {
      /** TODO: Set to true if licensed */
      licensed: true, // TODO: Set to false if not applicable
      
      /** TODO: Add license number if applicable */
      licenseNumber: "TODO: License #12345", // Optional
      
      /** TODO: Add insurance information */
      insuranceInfo: "TODO: Fully Licensed, Bonded & Insured", // Optional
    },
  },

  // ==========================================
  // DIGITAL PRESENCE
  // ==========================================
  digital: {
    /** 
     * TODO: Add your website URL
     */
    website: "TODO: https://yourwebsite.com",

    /** 
     * TODO: Configure your social media links
     * Set enabled: false for platforms you don't use
     */
    socialMedia: [
      {
        platform: "Facebook",
        url: "TODO: https://facebook.com/yourcompany",
        handle: "TODO: @yourcompany", // Optional
        enabled: true, // TODO: Set to false if not using Facebook
      },
      {
        platform: "Instagram", 
        url: "TODO: https://instagram.com/yourcompany",
        handle: "TODO: @yourcompany", // Optional
        enabled: true, // TODO: Set to false if not using Instagram
      },
      {
        platform: "LinkedIn",
        url: "TODO: https://linkedin.com/company/yourcompany",
        handle: "TODO: @yourcompany", // Optional
        enabled: true, // TODO: Set to false if not using LinkedIn
      },
      {
        platform: "Twitter",
        url: "TODO: https://twitter.com/yourcompany", 
        handle: "TODO: @yourcompany", // Optional
        enabled: false, // TODO: Set to true if using Twitter/X
      },
      {
        platform: "YouTube",
        url: "TODO: https://youtube.com/@yourcompany",
        handle: "TODO: @yourcompany", // Optional
        enabled: false, // TODO: Set to true if using YouTube
      },
    ],

    /** 
     * TODO: Configure Google Maps integration
     * Get embed URL from Google Maps -> Share -> Embed a map
     */
    map: {
      /** TODO: Replace with your Google Maps embed URL */
      embedUrl: "TODO: https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE",
      
      /** TODO: Add your business latitude */
      latitude: "TODO: 40.7128", // Example: New York City
      
      /** TODO: Add your business longitude */
      longitude: "TODO: -74.0060", // Example: New York City
      
      /** TODO: Set preferred zoom level (1-20) */
      zoomLevel: 15,
      
      /** TODO: Choose map type */
      mapType: "roadmap", // Options: "roadmap", "satellite", "hybrid", "terrain"
    },
  },

  // ==========================================
  // SEO & METADATA
  // ==========================================
  seo: {
    /** 
     * TODO: Optimize your page title for search engines
     * Keep under 60 characters for best results
     */
    title: "TODO: Professional Electrician Services | Your Company Name",

    /** 
     * TODO: Write compelling meta description
     * Keep between 150-160 characters for best results
     */
    description: "TODO: Professional electrical services for residential & commercial. Licensed electricians available 24/7 for repairs, installations & emergency service. Call today!",

    /** 
     * TODO: Add relevant keywords for your business
     * Focus on services and location-based keywords
     */
    keywords: [
      "TODO: electrician",
      "TODO: electrical services", 
      "TODO: emergency electrician",
      "TODO: electrical repair",
      "TODO: electrical installation",
      "TODO: licensed electrician",
      "TODO: commercial electrician",
      "TODO: residential electrician",
      "TODO: your city electrician", // TODO: Replace with your city
      "TODO: electrical contractor",
      "TODO: panel upgrade",
      "TODO: wiring installation",
      "TODO: lighting installation",
      "TODO: electrical maintenance",
      "TODO: 24/7 electrical service",
    ],

    /** 
     * TODO: Set your canonical URL
     */
    canonicalUrl: "TODO: https://yourwebsite.com",

    /** 
     * TODO: Add Open Graph image URL
     * Recommended size: 1200x630 pixels
     */
    ogImage: "TODO: https://yourwebsite.com/og-image.jpg",

    /** 
     * TODO: Choose Twitter card type
     */
    twitterCard: "summary_large_image",

    /** 
     * TODO: Add any additional meta tags
     */
    additionalTags: {
      "geo.region": "TODO: US-STATE", // Example: "US-CA" for California
      "geo.placename": "TODO: Your City",
      "geo.position": "TODO: LAT;LONG", // Example: "40.7128;-74.0060"
      "ICBM": "TODO: LAT, LONG", // Example: "40.7128, -74.0060"
    },
  },

  // ==========================================
  // THIRD-PARTY INTEGRATIONS
  // ==========================================
  integrations: {
    /** 
     * TODO: Add search engine verification codes
     * Get these from Google Search Console, Bing Webmaster Tools, etc.
     */
    searchEngineVerification: {
      /** TODO: Google Search Console verification code */
      google: "TODO: your-google-verification-code",
      
      /** TODO: Bing Webmaster Tools verification code */
      bing: "TODO: your-bing-verification-code",
      
      /** TODO: Yandex Webmaster verification code */
      yandex: "TODO: your-yandex-verification-code",
      
      /** TODO: Yahoo Site Explorer verification code */
      yahoo: "TODO: your-yahoo-verification-code",
    },

    /** 
     * TODO: Add Google Analytics tracking ID (optional)
     * Format: "G-XXXXXXXXXX" for GA4
     */
    googleAnalyticsId: "TODO: G-XXXXXXXXXX", // Optional

    /** 
     * TODO: Add Facebook Pixel ID (optional)
     * Used for Facebook advertising and analytics
     */
    facebookPixelId: "TODO: 1234567890123456", // Optional
  },
};

// ==========================================
// CONVENIENCE EXPORTS
// ==========================================

/**
 * Quick access to commonly used company information
 * These can be imported directly for convenience
 */

/** Company name - most commonly used field */
export const companyName = companyConfig.basic.name;

/** Primary phone number - for call-to-action buttons */
export const companyPhone = companyConfig.contact.phone;

/** Primary email - for contact forms */
export const companyEmail = companyConfig.contact.email;

/** Formatted address - for contact pages */
export const companyAddress = companyConfig.contact.address.formatted;

/** Business hours - for contact/footer display */
export const companyHours = companyConfig.operations.businessHours;

/** Social media links - for footer/header display */
export const companySocialMedia = companyConfig.digital.socialMedia.filter(link => link.enabled);

/** Emergency service info - for call-to-action sections */
export const emergencyService = companyConfig.operations.emergencyService;

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Get business hours for a specific day
 * @param day - Day of the week (e.g., "Monday")
 * @returns BusinessHours object or null if not found
 */
export function getBusinessHoursForDay(day: string): BusinessHours | null {
  return companyConfig.operations.businessHours.find(hours => 
    hours.day.toLowerCase() === day.toLowerCase()
  ) || null;
}

/**
 * Check if the business is currently open
 * @returns boolean indicating if business is open
 */
export function isBusinessOpen(): boolean {
  const now = new Date();
  const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
  const currentTime = now.toTimeString().slice(0, 5); // HH:MM format
  
  const todayHours = getBusinessHoursForDay(currentDay);
  if (!todayHours || todayHours.closed) {
    return false;
  }
  
  return currentTime >= todayHours.open && currentTime <= todayHours.close;
}

/**
 * Get enabled social media platforms
 * @returns Array of enabled social media links
 */
export function getEnabledSocialMedia(): SocialLink[] {
  return companyConfig.digital.socialMedia.filter(link => link.enabled);
}

/**
 * Format phone number for display
 * @param phone - Raw phone number
 * @returns Formatted phone number
 */
export function formatPhoneNumber(phone: string): string {
  // Remove any existing formatting
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as (XXX) XXX-XXXX for US numbers
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  
  // Return original if not a standard US number
  return phone;
}

/**
 * Generate schema.org structured data for the business
 * @returns JSON-LD structured data object
 */
export function generateStructuredData() {
  const config = companyConfig;
  
  return {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    name: config.basic.name,
    description: config.basic.description,
    url: config.digital.website,
    logo: `${config.digital.website}/logo.png`,
    image: config.seo.ogImage,
    telephone: config.contact.phone,
    email: config.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.contact.address.street,
      addressLocality: config.contact.address.city,
      addressRegion: config.contact.address.region,
      postalCode: config.contact.address.postalCode,
      addressCountry: config.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: config.digital.map.latitude,
      longitude: config.digital.map.longitude,
    },
    openingHours: config.operations.businessHours
      .filter(hours => !hours.closed)
      .map(hours => `${hours.day.slice(0, 2)} ${hours.open}-${hours.close}`),
    serviceArea: config.operations.serviceArea,
    sameAs: getEnabledSocialMedia().map(social => social.url),
  };
}

// Export the main configuration as default
export default companyConfig;