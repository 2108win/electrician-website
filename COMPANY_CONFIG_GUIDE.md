# Company Configuration Guide

## Overview

The `lib/companyConfig.ts` file contains all your business information in one centralized location. This makes it easy to update your company details and have them automatically appear throughout your website.

## Quick Start

1. **Open the file**: `lib/companyConfig.ts`
2. **Find sections marked with "TODO"**: These are placeholders you need to replace
3. **Update with your information**: Replace TODO placeholders with your actual business details
4. **Save the file**: Changes will automatically appear on your website

## Important Sections to Update

### 1. Basic Company Information
- Company name (appears in logo and titles)
- Slogan/tagline
- Business description
- Year established

### 2. Contact Information
- Phone numbers (primary and emergency)
- Email addresses
- Complete business address

### 3. Business Hours
- Regular operating hours for each day
- Emergency service availability
- Service area coverage

### 4. Social Media
- Enable/disable platforms you use
- Add your actual social media URLs
- Update usernames/handles

### 5. Map Integration
- Get Google Maps embed code
- Add your exact coordinates
- Choose map display preferences

### 6. SEO Settings
- Optimize page titles and descriptions
- Add relevant keywords for your area
- Set up search engine verification

## Usage Examples

Components can import from this configuration like this:

```typescript
// Import the full configuration
import { companyConfig } from '@/lib/companyConfig';

// Or import specific convenience exports
import { companyName, companyPhone, companyEmail } from '@/lib/companyConfig';

// Use in your components
<h1>{companyName}</h1>
<a href={`tel:${companyPhone}`}>{companyPhone}</a>
```

## Utility Functions

The configuration includes helpful utility functions:

- `isBusinessOpen()` - Check if currently open
- `getBusinessHoursForDay(day)` - Get hours for specific day
- `getEnabledSocialMedia()` - Get active social media links
- `generateStructuredData()` - Create SEO structured data

## Tips for SEO

1. **Keywords**: Focus on your services + location (e.g., "electrician [your city]")
2. **Description**: Keep meta descriptions under 160 characters
3. **Title**: Keep page titles under 60 characters
4. **Address**: Use exact address for local SEO
5. **Verification**: Add verification codes from Google Search Console

## Getting Help

- All fields are documented with comments
- TODO placeholders show exactly what to replace
- Keep the file structure intact - only change the values
- Test your website after making changes

## Need Verification Codes?

1. **Google**: [Google Search Console](https://search.google.com/search-console)
2. **Bing**: [Bing Webmaster Tools](https://www.bing.com/webmasters)
3. **Facebook Pixel**: [Facebook Business Manager](https://business.facebook.com)
4. **Google Analytics**: [Google Analytics](https://analytics.google.com)