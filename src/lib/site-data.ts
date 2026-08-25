import {
  Layout,
  Rocket,
  ShoppingBag,
  Paintbrush,
  Gauge,
  LifeBuoy,
  Smartphone,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

import workRestaurant from "@/assets/work-restaurant.png";
import workSalon from "@/assets/work-salon.png";
import workGym from "@/assets/work-gym.png";
import workServices from "@/assets/work-services.png";
import workConsultant from "@/assets/work-consultant.png";
import workEcommerce from "@/assets/work-services.png";

export const SITE = {
  name: "VebUp",
  tagline: "Your Digital Partner for Business Growth.",
  email: "info@vebup.info",
  domain: "vebup.in",
  description:
    "We help businesses build a stronger online presence with modern websites and digital solutions designed to reach more customers, generate opportunities and support long- term growth.",
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "business-websites",
    title: "Business Websites",
    description:
      "Conversion-focused websites that establish your business online and turn visitors into enquiries.",
    icon: Layout,
    points: [
      "Custom design built around your business and services",
      "Clear structure that builds trust and answers customer questions",
      "Contact, enquiry and lead flows designed to convert",
    ],
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    description:
      "Focused landing pages built to capture leads and drive specific business goals.",
    icon: Rocket,
    points: [
      "Single-goal layout focused on conversion",
      "Optimised for campaigns, ads, products and services",
      "Lead capture and tracking to measure performance",
    ],
  },
  {
    slug: "ecommerce",
    title: "E-commerce Websites",
    description:
      "Complete online stores designed to showcase products and help you sell online.",
    icon: ShoppingBag,
    points: [
      "Clean product and category experiences",
      "Smooth cart, checkout and payment flows",
      "Payment, shipping and essential business integrations",
    ],
  },
  {
    slug: "redesign",
    title: "Website Redesign",
    description:
      "Transform an outdated website into a modern, clear and conversion-focused experience.",
    icon: Paintbrush,
    points: [
      "Modern design aligned with your brand",
      "Improved structure and customer journey",
      "Better mobile experience, speed and usability",
    ],
  },
  {
    slug: "seo-performance",
    title: "SEO & Online Visibility",
    description:
      "Improve your website's visibility, performance and ability to reach the right customers.",
    icon: Gauge,
    points: [
      "Faster loading and improved Core Web Vitals",
      "On-page SEO, metadata and technical optimisation",
      "Better structure to help customers find your business",
    ],
  },
  {
    slug: "maintenance",
    title: "Growth & Ongoing Support",
    description:
      "Continuous improvements and technical support to help your business grow online.",
    icon: LifeBuoy,
    points: [
      "Website updates and ongoing improvements",
      "Security, performance and technical maintenance",
      "New features and integrations as your business grows",
    ],
  },
];

export const trustPoints = [
  {
    title: "Fast & Reliable",
    description: "Optimised for speed, performance and a smooth user experience.",
    icon: Zap,
  },
  {
    title: "Built for Mobile",
    description: "Designed to work seamlessly on the devices your customers use most.",
    icon: Smartphone,
  },
  {
    title: "Built for Visibility",
    description: "SEO-friendly foundations that help your business get discovered online.",
    icon: Search,
  },
  {
    title: "Secure & Trusted",
    description: "Secure forms, safe integrations and reliable web technologies.",
    icon: ShieldCheck,
  },
  {
    title: "Designed to Build Trust",
    description: "Modern, professional design that makes a strong first impression.",
    icon: Sparkles,
  },
  {
    title: "Built to Grow",
    description: "Flexible solutions that can evolve as your business needs change.",
    icon: Wrench,
  },
];

export const whyPoints = [
  {
    title: "Built Around Your Business",
    description:
      "Every website and solution is planned around your goals, customers and the way your business works.",
  },
  {
    title: "Designed to Convert",
    description:
      "Clear messaging and calls to action help turn visitors into enquiries and potential customers.",
  },
  {
    title: "Mobile-First Experience",
    description:
      "Your online presence is built to work seamlessly on the devices your customers use most.",
  },
  {
    title: "Fast & Reliable",
    description: "Optimised performance and clean development for a faster, smoother user experience.",
  },
  {
    title: "Built for Visibility",
    description:
      "SEO-friendly structure and technical foundations help your business become easier to discover online.",
  },
  {
    title: "Ready to Grow",
    description:
      "Your website can evolve with new services, features and integrations as your business grows.",
  },
  {
    title: "Clear Communication",
    description:
      "Simple updates, clear timelines and straightforward communication throughout the project.",
  },
  {
    title: "Support Beyond Launch",
    description:
      "We stay available for updates, improvements and ongoing support after your website goes live.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We learn about your business, goals, and audience.",
  },
  {
    number: "02",
    title: "Design",
    description: "We create a clear, modern design built around your brand.",
  },
  {
    number: "03",
    title: "Build",
    description: "We turn the approved design into a fast, responsive website.",
  },
  { number: "04", title: "Launch", description: "After testing everything, we launch your website with confidence." },
  {
    number: "05",
    title: "Grow",
    description: "We help you improve, update, and grow your online presence.",
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  visit: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "saffron-table",
    name: "Saffron Table",
    category: "Restaurant",
    description: "A menu-led restaurant site with table enquiries, gallery and location details built for hungry mobile visitors.",
    image: workRestaurant,
    visit: "https://vebup-demo-resturent.vercel.app/",
    tags: ["Menu", "Reservations", "Local SEO"],
  },
  {
    slug: "luxe-studio",
    name: "Luxe Hair Studio",
    category: "Salon",
    description: "A calm, editorial salon concept with a service price list and an appointment request flow.",
    image: workSalon,
    visit: "https://vebup-demo-beauty.vercel.app/",
    tags: ["Booking flow", "Price list", "Gallery"],
  },
  {
    slug: "ironline-fitness",
    name: "Ironline Fitness",
    category: "Gym",
    description: "A high-energy gym concept featuring class timetables, membership plans and trial sign-ups.",
    image: workGym,
    visit: "https://vebup-demos.vercel.app/",
    tags: ["Timetable", "Memberships", "Lead capture"],
  },
  {
    slug: "aquafix-services",
    name: "AquaFix Home Services",
    category: "Local Service",
    description: "A trust-first local services site with service areas, quick-quote form and click-to-call throughout.",
    image: workServices,
    visit: "https://vebup-demo-electronic.vercel.app/",
    tags: ["Quote form", "Service areas", "Click to call"],
  },
  {
    slug: "meera-advisory",
    name: "Meera Advisory",
    category: "Consultant",
    description: "A refined personal brand site for a consultant, with credentials, case notes and a discovery call CTA.",
    image: workConsultant,
    visit: "https://vebup-demo-medical.vercel.app/",
    tags: ["Personal brand", "Case notes", "Calendar CTA"],
  },
  {
    slug: "northline-store",
    name: "Northline Store",
    category: "E-commerce",
    description: "A minimal online store concept with product filtering, a fast cart and a mobile-optimised checkout.",
    image: workEcommerce,
    visit: "https://vebup-demo-electronic.vercel.app/",
    tags: ["Catalogue", "Cart", "Checkout"],
  },
];

export type Plan = {
  name: string;
  audience: string;
  price: string;
  priceNote: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    audience: "For businesses getting online.",
    price: "₹2,499",
    priceNote: "Starting at",
    features: [
      "Up to 3 pages",
      "Mobile-responsive design",
      "Contact & enquiry form",
      "Basic SEO setup",
      "Fast-loading website",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    audience: "For businesses ready to grow.",
    price: "₹5,499",
    priceNote: "Starting at",
    features: [
      "Up to 7 pages",
      "Custom design",
      "Lead-focused enquiry flows",
      "SEO setup",
      "Analytics integration",
      "Performance optimisation",
    ],
    cta: "Choose Growth",
    popular: true,
  },
  {
    name: "Premium",
    audience: "For businesses needing a complete solution.",
    price: "₹9,999",
    priceNote: "Starting at",
    features: [
      "Custom website solution",
      "Advanced functionality",
      "CMS & integrations",
      "Advanced SEO setup",
      "Conversion-focused experience",
      "Priority support",
    ],
    cta: "Let's Talk",
  },
];

export const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most small business websites take two to four weeks from kickoff to launch. Landing pages are usually ready in about a week, while e-commerce and custom builds take longer depending on scope. The biggest factor is how quickly content and feedback come back to us.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Our packages start at ₹7,999 for a compact business website and ₹14,999 for a larger, growth-focused build. Custom projects are quoted after a short discovery call, because the final price depends on pages, features and integrations.",
  },
  {
    question: "Do you provide domain and hosting?",
    answer:
      "We help you choose and set up a domain and reliable hosting, and we handle the technical configuration. Domain and hosting fees are billed by those providers directly, so you always own and control your accounts.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Yes. Every site we build is designed mobile-first and tested across phones, tablets, laptops and large screens before launch.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We audit your current site, keep what already works, modernise the design and structure, and set up redirects so your existing search visibility is protected.",
  },
  {
    question: "Do you provide SEO?",
    answer:
      "Every build includes technical SEO foundations: clean markup, metadata, fast loading, sitemaps and structured data. Ongoing content and keyword work is available as a separate engagement.",
  },
  {
    question: "Can I update the website later?",
    answer:
      "Yes. We can connect an easy-to-use content editor so you can update text, images and pages yourself, and we hand over a short walkthrough at launch.",
  },
  {
    question: "Do you provide maintenance and support?",
    answer:
      "We offer monthly maintenance covering updates, security checks, backups, small design changes and technical support. You can also reach us for one-off fixes after launch.",
  },
];

export const serviceOptions = [
  "Business Website",
  "Landing Page",
  "E-commerce",
  "Redesign",
  "SEO",
  "Maintenance",
  "Other",
];

export const budgetOptions = [
  "Under ₹10,000",
  "₹10,000–₹25,000",
  "₹25,000–₹50,000",
  "₹50,000+",
  "Not Sure",
];
