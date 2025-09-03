# BUEM Elektrik - Professional Electrical Services Website

A modern, responsive, and SEO-optimized website for BUEM Elektrik, a professional electrical contractor serving Istanbul's Anatolian side. Built with Next.js 15, TypeScript, and Tailwind CSS for optimal performance and user experience.

## 🌟 Overview

BUEM Elektrik website showcases professional electrical services with a focus on emergency 24/7 availability, residential and commercial electrical solutions, and superior customer service. The site features a clean, modern design optimized for lead generation and mobile responsiveness.

## ✨ Key Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations
- **📱 Fully Responsive**: Mobile-first approach ensuring perfect display on all devices
- **🚀 Performance Optimized**: Fast loading times with Next.js 15 optimizations
- **🔍 SEO Ready**: Comprehensive meta tags, structured data, and Turkish language support
- **♿ Accessible**: WCAG compliant components for better accessibility
- **📊 Analytics Ready**: Google Analytics integration for business insights
- **🎯 Lead Generation**: Optimized contact forms and call-to-action buttons

## 🏗️ Architecture

### Tech Stack

- **Framework**: Next.js 15.4.1 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for responsive design
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React icon library
- **Fonts**: Geist Sans & Geist Mono
- **Form Handling**: React Hook Form with Zod validation
- **Carousel**: Embla Carousel for smooth interactions

### Project Structure

```
├── app/                    # Next.js App Router pages
├── components/             # Reusable React components
│   ├── ui/                # shadcn/ui base components
│   ├── custom/            # Custom component implementations
│   └── *.tsx              # Page section components
├── lib/                   # Utility functions and constants
├── public/                # Static assets (images, icons)
└── styles/                # Global CSS and configurations
```

## 🎯 Business Sections

1. **🏠 Hero Section**: Emergency contact and service request form
2. **ℹ️ About Us**: Company introduction with statistics and expertise
3. **🔧 Services**: Comprehensive electrical service offerings
4. **📸 Gallery**: Project portfolio with category filtering
5. **⭐ Reviews**: Customer testimonials and company statistics
6. **❓ FAQ**: Common questions about electrical services
7. **📞 Contact**: Contact form with business information
8. **📰 Footer**: Newsletter signup and additional resources

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**:

   ```bash
   git clone [repository-url]
   cd electrician-website
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your configuration.

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3001](http://localhost:3001)

## 📋 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint code analysis
npm run type-check   # Run TypeScript type checking
```

## 🎨 Customization

### Company Information

Update company details in `/lib/constants.ts`:

- Company name and contact information
- Service areas and specializations
- Business hours and emergency contact
- Social media links

### Styling

- **Colors**: Modify theme colors in `tailwind.config.js`
- **Components**: Customize component styles in respective files
- **Typography**: Update font configurations in `app/layout.tsx`

### Content

- **Images**: Replace images in `/public/images/` directory
- **Copy**: Update text content in component files
- **Services**: Modify service offerings in constants file

## 🌍 Localization

The website is primarily in Turkish, serving the Istanbul market:

- Turkish language content throughout
- Local business schema markup
- Istanbul area service coverage
- Turkish phone number formatting

## 📊 SEO Features

- **Structured Data**: LocalBusiness and Electrician schema
- **Meta Tags**: Comprehensive Open Graph and Twitter Cards
- **Sitemap**: Auto-generated sitemap for search engines
- **Performance**: Optimized Core Web Vitals scores
- **Mobile-First**: Google Mobile-Friendly design

## 🔧 Component Architecture

### Key Components

- **`CallButton`**: Emergency contact functionality
- **`Gallery`**: Interactive project showcase
- **`Reviews`**: Customer testimonial carousel
- **`ContactForm`**: Lead generation form
- **`SectionHeader`**: Consistent section styling

### UI Components

Built on shadcn/ui foundation:

- Buttons, Cards, Carousel
- Form inputs and validation
- Modal and Dialog components
- Navigation and Menu systems

## 📱 Responsive Design

Optimized breakpoints:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

## 🚀 Performance

- **Core Web Vitals** optimized
- **Image Optimization** with Next.js Image component
- **Code Splitting** for faster initial loads
- **Caching Strategy** for static assets
- **Bundle Analysis** for size optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software developed for BUEM Elektrik. All rights reserved.

## 📞 Support

For technical support or business inquiries:

- **Email**: info@buemelektrik.com
- **Phone**: [Company Phone Number]
- **Website**: [Company Website]

---

**Built with ❤️ for BUEM Elektrik using modern web technologies**

\*Empowering electrical services through digital
