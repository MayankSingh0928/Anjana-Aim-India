export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  {
    label: "Contact",
    href: "/#contact",
    children: [
      { label: "FAQ", href: "/#faq" },
      { label: "Privacy Policy", href: "/#privacy-policy" },
    ],
  },
];

export const stats = [
  { value: "Quality", label: "Services" },
  { value: "Skilled", label: "Workforce" },
  { value: "Timely", label: "Delivery" },
  { value: "Multi-Sector", label: "Expertise" },
];

export const services = [
  {
    icon: "construction",
    title: "Construction",
    description:
      "End-to-end construction solutions for commercial, industrial, and development projects.",
  },
  {
    icon: "steel",
    title: "Rod Supply",
    description:
      "Reliable rod and steel material supply for structural and infrastructure needs.",
  },
  {
    icon: "land",
    title: "Land Development",
    description:
      "Professional land preparation and development solutions for future-ready projects.",
  },
  {
    icon: "wind",
    title: "Wind Project",
    description:
      "Support services and project execution assistance for wind energy development.",
  },
  {
    icon: "solar",
    title: "Solar Project",
    description:
      "Renewable energy support and implementation for solar infrastructure projects.",
  },
  {
    icon: "labor",
    title: "Labor Contractor",
    description:
      "Skilled and dependable workforce solutions for industrial and project requirements.",
  },
];

export const whyChooseUs = [
  {
    title: "Experienced Project Support",
    description:
      "We align manpower, materials, and site coordination to keep project execution dependable.",
  },
  {
    title: "Quality-Focused Execution",
    description:
      "Every engagement is approached with disciplined standards, practical oversight, and care for durability.",
  },
  {
    title: "Skilled Labor & Resource Management",
    description:
      "We combine capable teams with responsive supply support to maintain momentum on site.",
  },
  {
    title: "Reliable Delivery",
    description:
      "Our operating approach prioritizes clear commitments, timely response, and measurable progress.",
  },
  {
    title: "Multi-Industry Capability",
    description:
      "Construction, infrastructure, land development, and renewable support under one business umbrella.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We work as a practical business partner, adapting solutions to project requirements and stakeholder goals.",
  },
];

export const projects = [
  {
    title: "Integrated Infrastructure Development",
    category: "Infrastructure Development",
    description:
      "Coordinated groundwork, labor deployment, and structural supply support for future-ready infrastructure sites.",
  },
  {
    title: "Commercial Construction Support",
    category: "Construction Support",
    description:
      "Execution assistance for commercial builds with a focus on site readiness, workforce availability, and materials reliability.",
  },
  {
    title: "Renewable Energy Site Assistance",
    category: "Renewable Energy Projects",
    description:
      "On-ground support for solar and wind project activities requiring disciplined coordination and dependable teams.",
  },
  {
    title: "Land Preparation & Development Work",
    category: "Land Development Work",
    description:
      "Structured land development support designed to prepare plots and sites for large-scale project use.",
  },
];

export const contactInfo = [
  {
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    label: "Email",
    value: "info@anjanaaimindia.com",
    href: "mailto:info@anjanaaimindia.com",
  },
  {
    label: "Address",
    value:
      "Nahargarh Road, Near Primary School, Maliya Kherkheda, Mandsaur, Madhya Pradesh 458895",
    href: "https://maps.google.com/?q=Maliya%20Kherkheda%20Mandsaur%20Madhya%20Pradesh%20458895",
  },
];

export const footerServices = services.map((service) => service.title);

export const companyProfileDetails = [
  { label: "GSTN", value: "23BUSPA3622H3ZT" },
  { label: "Building No/Flat No", value: "0" },
  { label: "Road / Street", value: "Nahargarh Road" },
  { label: "Nearby Landmark", value: "Near Primary School" },
  { label: "Locality / Sub Locality", value: "Maliya Kherkheda" },
  { label: "District", value: "Mandsaur" },
  { label: "State", value: "Madhya Pradesh" },
  { label: "Pincode", value: "458895" },
];

export const processSteps = [
  {
    step: "01",
    title: "Identify Opportunities",
    description:
      "Explore premium land parcels for industrial, commercial, and renewable energy projects tailored to your specific growth goals.",
  },
  {
    step: "02",
    title: "Market Insight",
    description:
      "Leverage our expertise in identifying high-growth locations with strong investment potential and connectivity.",
  },
  {
    step: "03",
    title: "Due Diligence",
    description:
      "Benefit from comprehensive title verification and compliance management to ensure a secure acquisition.",
  },
];

export const infrastructureStats = [
  { value: "1200+", label: "Residential Works" },
  { value: "600+", label: "Industrial Works" },
  { value: "6+", label: "Construction Works" },
];

export const coverageStats = [
  {
    title: "Madhya Pradesh",
    value: "33+ Projects",
    image: "/assets/state-madhya-pradesh.webp",
    alt: "Madhya Pradesh coverage map",
  },
  {
    title: "Chhattisgarh",
    value: "22+ Projects",
    image: "/assets/state-chhattisgarh.webp",
    alt: "Chhattisgarh coverage map",
  },
  {
    title: "Maharashtra",
    value: "12+ Projects",
    image: "/assets/state-maharashtra.webp",
    alt: "Maharashtra coverage map",
  },
  {
    title: "Pan India",
    value: "5+ Projects",
    image: "/assets/state-pan-india.webp",
    alt: "Pan India coverage map",
  },
];
