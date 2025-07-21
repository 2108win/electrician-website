import { AirVent, Cctv, Cpu, Heater, Lightbulb } from "lucide-react";
import { NavType, ServiceType } from "./types";

export const navigation: NavType[] = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export const serviceList: ServiceType[] = [
  {
    name: "Electrical Service",
    description:
      "We provide complete electrical design and installation services.",
    icon: Lightbulb,
    image: "/images/cctv.jpg",
  },
  {
    name: "Heating Service",
    description:
      "We offer energy efficient electric heat products and installations.",
    icon: Heater,
    image: "/images/air.jpg",
  },
  {
    name: "Air Conditioning",
    description:
      "Our installation services ensure that you get the right air conditioner.",
    icon: AirVent,
    image: "/images/air.jpg",
  },
  {
    name: "Security Systems",
    description: "You can view events over a monitor in our home.",
    icon: Cctv,
    image: "/images/cctv.jpg",
  },
  {
    name: "Panels Changes",
    description: "Electrical panels are the heart of your electrical system.",
    icon: Cpu,
    image: "/images/air.jpg",
  },
];

export const heroSlider = [
  {
    title: "Keeping You Wired",
    description: "We're the Current Specialist",
    image: "/images/mainslide-01.jpg",
  },
  {
    title: "Making Our Clients Happier",
    description: "Best Services for Your Family",
    image: "/images/mainslide-02.jpg",
  },
  {
    title: "We Can Light Everything",
    description: "Nothing is Impossible for Us",
    image: "/images/mainslide-03.jpg",
  },
];

export const services = {
  title: "24/7 Electrician Services – Safe and Efficient",
  titleDescription: "We are a Full Service Electrical Contractor",
  items: serviceList,
};

export const projects = [
  {
    id: 1,
    title: "Modern Office Lighting",
    category: "Offices",
    image: "/images/mainslide-01.jpg",
    description:
      "Complete electrical installation for a 500-person office building",
  },
  {
    id: 2,
    title: "Residential Rewiring",
    category: "Residences",
    image: "/images/mainslide-02.jpg",
    description: "Full home electrical upgrade with smart home integration",
  },
  {
    id: 3,
    title: "Industrial Power Systems",
    category: "Industrial Objects",
    image: "/images/mainslide-03.jpg",
    description: "High-voltage electrical systems for manufacturing facility",
  },
  {
    id: 4,
    title: "Retail Store Installation",
    category: "Retail Objects",
    image: "/images/air.jpg",
    description: "Custom lighting and electrical setup for retail chain",
  },
  {
    id: 5,
    title: "Emergency Generator Installation",
    category: "Residences",
    image: "/images/cctv.jpg",
    description: "Backup power solution for residential complex",
  },
  {
    id: 6,
    title: "Data Center Electrical",
    category: "Industrial Objects",
    image: "/images/cta-bg.jpg",
    description: "Critical power infrastructure for data center",
  },
  {
    id: 7,
    title: "Restaurant Kitchen Setup",
    category: "Retail Objects",
    image: "/images/cta-bg.jpg",
    description: "Commercial kitchen electrical installation",
  },
  {
    id: 8,
    title: "Smart Home Automation",
    category: "Residences",
    image: "/images/cta-bg.jpg",
    description: "Complete smart home electrical integration",
  },
];

export const reviewList = [
  {
    title: "What Our Clients Say",
    main: "Professional, Reliable & Cost Effective",
    description:
      "We've been using your company and from the very beginning found him and his team to be extremely professional and knowledgeable . We wouldn't have any hesitation in recommending their services.",
    client: "Teresa and Kevin K.",
    image: "/images/review-avatar.jpg",
  },
  {
    title: "What Our Clients Say",
    main: "Professional, Reliable & Cost Effective",
    description:
      "We have been using your company for the past 5 years and have always found them to be very professional and reliable. Their team is knowledgeable and always provides excellent service.",
    client: "John and Sarah D.",
    image: "/images/review-avatar.jpg",
  },
  {
    title: "What Our Clients Say",
    main: "Professional, Reliable & Cost Effective",
    description:
      "Your company has been a pleasure to work with. They are always on time, professional, and provide high-quality work. We highly recommend their services to anyone in need of electrical work.",
    client: "Michael and Lisa S.",
    image: "/images/review-avatar.jpg",
  },
];

export const reviews = {
  title: "Our Statistics",
  titleDescription: "Some Important Facts",
  statistics: [
    { value: "5000+", label: "Residential Projects" },
    { value: "1500+", label: "Commercial Projects" },
    { value: "1000+", label: "Industrial Projects" },
  ],
  reviewList: reviewList,
};
export const callToAction = {
  telephone: "+1 (800) your-number",
};

export const companyDetails = {
  name: "ElectricPro",
  address: "8494 Signal Hill Road",
  city: "Manassas",
  state: "VA",
  zip: "20110",
  email: "info@electricpro.com",
  phone: "+1 (800) your-number",
  hours: "Mon-Fri 08:00 AM - 05:00 PM",
  description:
    "ElectricPro is a leading electrical contractor specializing in residential, commercial, and industrial projects. We are committed to providing safe, efficient, and cost-effective electrical solutions tailored to our clients' needs.",
  mainService: "24/7 Emergency Service",
  copyright: "© 2025 ElectricPro Electrical Services. All Rights Reserved.",
};
