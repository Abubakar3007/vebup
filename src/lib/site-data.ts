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

import workRestaurant from "@/assets/work-restaurant.jpg";
import workSalon from "@/assets/work-salon.jpg";
import workGym from "@/assets/work-gym.jpg";
import workServices from "@/assets/work-services.jpg";
import workConsultant from "@/assets/work-consultant.jpg";
import workEcommerce from "@/assets/work-ecommerce.jpg";

export const SITE = {
  name: "VebUp",
  tagline: "We Build. You Grow.",
  email: "info@vebup.info",
  domain: "vebup.in",
  description:
    "VebUp helps small businesses build a professional online presence through modern website design and development.",
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
    description: "Professional websites designed specifically for your business.",
    icon: Layout,
    points: [
      "Custom design built around your services",
      "Clear structure that answers customer questions",
      "Contact and enquiry flows that actually convert",
    ],
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    description: "High-converting landing pages for campaigns, products and services.",
    icon: Rocket,
    points: [
      "Single-goal layout focused on one action",
      "Fast loading for paid traffic",
      "Built-in tracking for campaign performance",
    ],
  },
  {
    slug: "ecommerce",
    title: "E-commerce Websites",
    description: "Modern online stores that are easy to use and designed to convert.",
    icon: ShoppingBag,
    points: [
      "Clean product and category pages",
      "Smooth cart and checkout experience",
      "Payment and shipping integrations",
    ],
  },
  {
    slug: "redesign",
    title: "Website Redesign",
    description: "Transform outdated websites into modern digital experiences.",
    icon: Paintbrush,
    points: [
      "Modern visual identity and layout",
      "Content restructured for clarity",
      "Existing rankings preserved with redirects",
    ],
  },
  {
    slug: "seo-performance",
    title: "SEO & Performance",
    description: "Technical optimization for better visibility and faster websites.",
    icon: Gauge,
    points: [
      "Core Web Vitals and speed tuning",
      "On-page SEO, metadata and schema",
      "Image, script and asset optimisation",
    ],
  },
  {
    slug: "maintenance",
    title: "Maintenance & Support",
    description: "Ongoing updates, improvements, security and technical support.",
    icon: LifeBuoy,
    points: [
      "Content updates and small design changes",
      "Security patches and uptime checks",
      "Monthly improvements as you grow",
    ],
  },
];

export const trustPoints = [
  { title: "Fast websites", description: "Optimised builds that load in a blink.", icon: Zap },
  {
    title: "Mobile responsive",
    description: "Designed for phones first, not squeezed later.",
    icon: Smartphone,
  },
  { title: "SEO ready", description: "Clean structure search engines understand.", icon: Search },
  { title: "Secure", description: "HTTPS, hardened forms and safe integrations.", icon: ShieldCheck },
  { title: "Modern design", description: "Premium visuals that build instant trust.", icon: Sparkles },
  { title: "Easy to maintain", description: "Update content without touching code.", icon: Wrench },
];

export const whyPoints = [
  {
    title: "Custom design",
    description: "No recycled templates — every layout is designed around your business.",
  },
  {
    title: "Mobile-first development",
    description: "Most local customers arrive on a phone, so that is where we start.",
  },
  {
    title: "Fast performance",
    description: "Lean code, optimised images and quick first paint on real networks.",
  },
  {
    title: "SEO-friendly structure",
    description: "Semantic markup, metadata and sitemaps set up from day one.",
  },
  {
    title: "Conversion-focused layouts",
    description: "Clear calls to action so visitors know exactly what to do next.",
  },
  {
    title: "Clear communication",
    description: "Plain language updates, fixed checkpoints and no technical jargon.",
  },
  {
    title: "Affordable for small businesses",
    description: "Packages scoped so growing businesses can start without overspending.",
  },
  {
    title: "Post-launch support",
    description: "We stay available after launch for fixes, tweaks and improvements.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We understand your business, customers and goals.",
  },
  {
    number: "02",
    title: "Design",
    description: "We create a clean and professional website experience.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop a fast, responsive and reliable website.",
  },
  { number: "04", title: "Launch", description: "We test everything and launch your website." },
  {
    number: "05",
    title: "Grow",
    description: "We help you improve and maintain your online presence.",
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "saffron-table",
    name: "Saffron Table",
    category: "Restaurant",
    description:
      "A menu-led restaurant site with table enquiries, gallery and location details built for hungry mobile visitors.",
    image: workRestaurant,
    tags: ["Menu", "Reservations", "Local SEO"],
  },
  {
    slug: "luxe-studio",
    name: "Luxe Hair Studio",
    category: "Salon",
    description:
      "A calm, editorial salon concept with a service price list and an appointment request flow.",
    image: workSalon,
    tags: ["Booking flow", "Price list", "Gallery"],
  },
  {
    slug: "ironline-fitness",
    name: "Ironline Fitness",
    category: "Gym",
    description:
      "A high-energy gym concept featuring class timetables, membership plans and trial sign-ups.",
    image: workGym,
    tags: ["Timetable", "Memberships", "Lead capture"],
  },
  {
    slug: "aquafix-services",
    name: "AquaFix Home Services",
    category: "Local Service",
    description:
      "A trust-first local services site with service areas, quick-quote form and click-to-call throughout.",
    image: workServices,
    tags: ["Quote form", "Service areas", "Click to call"],
  },
  {
    slug: "meera-advisory",
    name: "Meera Advisory",
    category: "Consultant",
    description:
      "A refined personal brand site for a consultant, with credentials, case notes and a discovery call CTA.",
    image: workConsultant,
    tags: ["Personal brand", "Case notes", "Calendar CTA"],
  },
  {
    slug: "northline-store",
    name: "Northline Store",
    category: "E-commerce",
    description:
      "A minimal online store concept with product filtering, a fast cart and a mobile-optimised checkout.",
    image: workEcommerce,
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
    price: "₹7,999",
    priceNote: "Starting at",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "Basic SEO",
      "Fast performance",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    audience: "For businesses ready to grow.",
    price: "₹14,999",
    priceNote: "Starting at",
    features: [
      "Up to 10 pages",
      "Custom UI/UX",
      "Advanced animations",
      "SEO setup",
      "Analytics",
      "Conversion-focused design",
    ],
    cta: "Choose Growth",
    popular: true,
  },
  {
    name: "Premium",
    audience: "For businesses needing a custom solution.",
    price: "Let's Talk",
    priceNote: "Custom scope",
    features: [
      "Custom website",
      "Advanced functionality",
      "CMS / integrations",
      "Advanced SEO",
      "Performance optimization",
      "Priority support",
    ],
    cta: "Contact Us",
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
