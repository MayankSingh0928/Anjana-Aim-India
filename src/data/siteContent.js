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
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

export const stats = [
  { value: "Founder-Led", label: "Leadership" },
  { value: "Multi-Sector", label: "Ventures" },
  { value: "Project-Ready", label: "Support" },
  { value: "New India", label: "Vision" },
];

export const services = [
  {
    icon: "construction",
    slug: "construction",
    title: "Construction",
    description:
      "End-to-end construction solutions for commercial, industrial, and development projects.",
  },
  {
    icon: "steel",
    slug: "rod-supply",
    title: "Rod Supply",
    description:
      "Reliable rod and steel material supply for structural and infrastructure needs.",
  },
  {
    icon: "land",
    slug: "land-development",
    title: "Land Development",
    description:
      "Professional land preparation and development solutions for future-ready projects.",
  },
  {
    icon: "wind",
    slug: "wind-project",
    title: "Wind Project",
    description:
      "Support services and project execution assistance for wind energy development.",
  },
  {
    icon: "solar",
    slug: "solar-project",
    title: "Solar Project",
    description:
      "Renewable energy support and implementation for solar infrastructure projects.",
  },
  {
    icon: "electric",
    slug: "electric-pole",
    title: "Electric Pole",
    description:
      "Electric pole, transmission, and power infrastructure support for project-ready utility works.",
  },
  {
    icon: "labor",
    slug: "labor-contractor",
    title: "Labor Contractor",
    description:
      "Skilled and dependable workforce solutions for industrial and project requirements.",
  },
];

export const serviceDetails = [
  {
    slug: "construction",
    icon: "construction",
    title: "Construction",
    eyebrow: "Commercial & Infrastructure Execution",
    summary:
      "End-to-end construction solutions for commercial, industrial, and development projects with dependable planning, site coordination, and execution support.",
    detailShowcase: {
      title: "Construction & Industrial Project Support",
      summary:
        "We provide dependable construction support for commercial, industrial, and infrastructure projects, from planning coordination to on-site execution. Our team helps align project requirements, skilled manpower, materials, and supervision so every stage moves with clarity, discipline, and practical accountability.",
      cta: "More Plans",
      image: "/assets/construction1.webp",
      imageAlt: "Industrial construction supervisor reviewing plant infrastructure at night",
      featureImage: "/assets/construction.webp",
      featureAlt: "Construction helmet and project drawings overlooking an urban development site",
    },
    capabilitiesBackground: "/assets/contruct-background.webp",
    highlights: [
      "Commercial and industrial construction support",
      "Project planning and site coordination",
      "Material and workforce alignment",
      "Quality-focused execution practices",
    ],
    process: ["Requirement review", "Resource planning", "Execution support", "Progress coordination"],
  },
  {
    slug: "rod-supply",
    icon: "steel",
    title: "Rod Supply",
    eyebrow: "Steel & Structural Material Support",
    summary:
      "Reliable rod and steel material supply for structural and infrastructure needs, helping projects maintain quality, availability, and delivery continuity.",
    heroImage: "/assets/rod.webp",
    heroImageAlt: "Steel rods arranged across a construction site for structural work",
    heroLabel: "Steel Material Visual",
    heroTitle: "Reliable Rod Supply for Structural Strength",
    detailShowcase: {
      title: "Rod Supply & Reinforcement Support",
      summary:
        "We support project teams with dependable rod and reinforcement material coordination, helping sites maintain structural quality, planned quantities, and delivery continuity. Our approach keeps material needs, vendor coordination, and site timelines aligned for smooth execution.",
      cta: "Plan Supply",
      image: "/assets/rod2.webp",
      imageAlt: "Bundled steel rods prepared for construction use",
      featureImage: "/assets/rod3.webp",
      featureAlt: "Construction worker tying steel reinforcement rods on site",
    },
    capabilitiesBackground: "/assets/rod.webp",
    highlights: [
      "Rod and steel material sourcing",
      "Supply support for structural works",
      "Project-based quantity coordination",
      "Reliable vendor and delivery management",
    ],
    process: ["Material requirement", "Quantity planning", "Supply coordination", "Delivery support"],
  },
  {
    slug: "land-development",
    icon: "land",
    title: "Land Development",
    eyebrow: "Property Preparation & Development",
    summary:
      "Professional land preparation and development solutions for future-ready commercial, industrial, renewable energy, and infrastructure projects.",
    heroImage: "/assets/land3.webp",
    heroImageAlt: "Site engineer overseeing land development excavation work at sunset",
    heroLabel: "Land Readiness Visual",
    heroTitle: "Ground Preparation for Future-Ready Projects",
    detailShowcase: {
      title: "Land Development & Site Preparation",
      summary:
        "We help convert raw land into project-ready ground through site assessment, earthwork coordination, grading support, access preparation, and practical development planning. The focus is to make each site usable, organized, and aligned with commercial, industrial, and infrastructure requirements.",
      cta: "Plan Development",
      image: "/assets/land2.webp",
      imageAlt: "Excavators preparing land at an active development site",
      featureImage: "/assets/land1.webp",
      featureAlt: "Wide land grading and earth preparation work with machinery",
    },
    capabilitiesBackground: "/assets/land1.webp",
    highlights: [
      "Land preparation and development support",
      "Site readiness coordination",
      "Infrastructure-focused planning assistance",
      "Support for future project usability",
    ],
    process: ["Site assessment", "Development planning", "Ground preparation", "Project readiness"],
  },
  {
    slug: "wind-project",
    icon: "wind",
    title: "Wind Project",
    eyebrow: "Renewable Energy Support",
    summary:
      "Support services and project execution assistance for wind energy development, including site coordination and infrastructure support requirements.",
    media: {
      image: "/assets/wind-project-showcase.webp",
      video: "/assets/wind-project-site-video.mp4",
      alt: "Wind and solar renewable energy project site",
    },
    detailShowcase: {
      title: "Renewable Energy Land Support",
      summary:
        "We provide expert land facilitation and site identification for large-scale wind and renewable power projects. Our team leverages deep industry experience to coordinate with project stakeholders and secure strategic land parcels that drive sustainable growth.",
      cta: "More Plans",
      image: "/assets/feild.webp",
      imageAlt: "Field engineer surveying renewable energy land with wind turbines and transmission infrastructure",
      featureImage: "/assets/wind-project-showcase.webp",
      featureAlt: "Wind and solar renewable energy project facility",
    },
    highlights: [
      "Wind energy project support",
      "Land and site coordination assistance",
      "Workforce and execution support",
      "Infrastructure readiness assistance",
    ],
    process: ["Site requirement", "Coordination planning", "Execution assistance", "Progress support"],
  },
  {
    slug: "solar-project",
    icon: "solar",
    title: "Solar Project",
    eyebrow: "Solar Infrastructure Implementation",
    summary:
      "Renewable energy support and implementation assistance for solar infrastructure projects requiring land, manpower, and execution coordination.",
    heroImage: "/assets/solar.webp",
    heroImageAlt: "Solar technician installing panels on a rooftop project site",
    heroLabel: "Solar Project Visual",
    heroTitle: "Solar Infrastructure Support from Site to Setup",
    detailShowcase: {
      title: "Solar Project Implementation Support",
      summary:
        "We support solar infrastructure work with site coordination, manpower alignment, land readiness, and execution assistance for commercial renewable projects. Our role is to keep installation activity, ground support, and project requirements moving with dependable on-site coordination.",
      cta: "Plan Solar Support",
      image: "/assets/solar2.webp",
      imageAlt: "Large-scale solar farm installation across open land",
      featureImage: "/assets/solar3.avif",
      featureAlt: "Solar energy infrastructure and panel development showcase",
    },
    capabilitiesBackground: "/assets/solar2.webp",
    highlights: [
      "Solar project support services",
      "Land and infrastructure coordination",
      "Execution and manpower assistance",
      "Commercial renewable project support",
    ],
    process: ["Project requirement", "Site support", "Implementation assistance", "Operational handoff"],
  },
  {
    slug: "electric-pole",
    icon: "electric",
    title: "Electric Pole",
    eyebrow: "Power Infrastructure Support",
    summary:
      "Electric pole and transmission infrastructure support for utility-aligned projects, including site coordination, manpower assistance, field readiness, and practical execution support for power connectivity needs.",
    heroImage: "/assets/pole.webp",
    heroImageAlt: "Electric transmission towers and high-voltage power lines",
    heroLabel: "Power Infrastructure Visual",
    heroTitle: "Electric Pole & Transmission Support",
    detailShowcase: {
      title: "Electric Pole & Utility Field Coordination",
      summary:
        "We support electric pole and power infrastructure work with field coordination, workforce alignment, route readiness, and project execution assistance. Our approach helps contractors and stakeholders keep utility-related site work organized, practical, and ready for dependable delivery.",
      cta: "Plan Utility Work",
      image: "/assets/electricPole.webp",
      imageAlt: "Electric transmission tower and power lines over agricultural land",
      featureImage: "/assets/windmill.webp",
      featureAlt: "Renewable energy field with wind turbines and utility infrastructure",
    },
    capabilitiesBackground: "/assets/pole.webp",
    highlights: [
      "Electric pole site support",
      "Transmission route coordination",
      "Utility infrastructure readiness",
      "Manpower and field execution assistance",
    ],
    process: ["Route requirement", "Site readiness", "Field coordination", "Execution support"],
  },
  {
    slug: "labor-contractor",
    icon: "labor",
    title: "Labor Contractor",
    eyebrow: "Skilled Workforce Solutions",
    summary:
      "Skilled and dependable workforce solutions for industrial, construction, infrastructure, and project-based requirements.",
    heroImage: "/assets/labour4.webp",
    heroImageAlt: "Skilled labor team walking through a construction site at sunset",
    heroLabel: "Workforce Visual",
    heroTitle: "Reliable Teams for Site Execution",
    detailShowcase: {
      title: "Skilled Labor Deployment & Site Coordination",
      summary:
        "We provide dependable skilled and semi-skilled labor support for construction, infrastructure, industrial, and project-based requirements. Our focus is disciplined deployment, practical site coordination, safety-aware teams, and ongoing manpower availability that keeps work moving.",
      cta: "Plan Workforce",
      image: "/assets/labour2.webp",
      imageAlt: "Construction workers handling site installation and labor tasks",
      featureImage: "/assets/labour.webp",
      featureAlt: "Labor team standing on construction scaffolding with safety helmets",
    },
    capabilitiesBackground: "/assets/labour3.webp",
    gallery: [
      {
        image: "/assets/labour.webp",
        alt: "Construction labor team on scaffolding",
        title: "Team Deployment",
        description: "Coordinated labor availability for active site needs.",
      },
      {
        image: "/assets/labour2.webp",
        alt: "Workers managing site installation tasks",
        title: "On-Site Execution",
        description: "Hands-on support for construction and industrial work fronts.",
      },
      {
        image: "/assets/labour3.webp",
        alt: "Labor working around reinforcement and high-rise site structure",
        title: "Structural Work Support",
        description: "Workforce coordination around reinforcement and building activity.",
      },
    ],
    highlights: [
      "Skilled and semi-skilled labor support",
      "Industrial and site workforce coordination",
      "Project-based manpower availability",
      "Reliable resource management",
    ],
    process: ["Manpower requirement", "Team planning", "Deployment support", "Ongoing coordination"],
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
      "Infrastructure support, material trading, food products, digital services, renewable support, and manpower coordination under a wider entrepreneur-led profile.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We work as a practical business partner, adapting solutions to project requirements and stakeholder goals.",
  },
];

export const legalCertifications = [
  {
    title: "GST Registered",
    description: "Government-recognized tax registration for compliant business operations.",
    status: "Verified business registration",
  },
  {
    title: "MSME / Udyam Certified",
    description: "Registered enterprise under the MSME/Udyam framework for recognized business identity.",
    status: "Registered enterprise",
  },
  {
    title: "Shop & Establishment Registered",
    description: "Local establishment registration supporting transparent commercial operations.",
    status: "Business establishment proof",
  },
];

export const projects = [
  {
    slug: "integrated-infrastructure-development",
    title: "Integrated Infrastructure Development",
    category: "Infrastructure Development",
    image: "/assets/infrastructure.webp",
    alt: "Modern infrastructure building and commercial development site",
    description:
      "Coordinated groundwork, labor deployment, structural supply, and compliant business support for future-ready infrastructure sites.",
    eyebrow: "Commercial Infrastructure",
    summary:
      "A consolidated project capability page for civil, utility, material, and workforce support backed by Anjana Aim India Company's registered business identity and site-ready execution approach.",
    facts: [
      { label: "Business Identity", value: "GST registered proprietorship" },
      { label: "GSTIN", value: "23BUSPA3622H3ZT" },
      { label: "Principal Base", value: "Maliya Kherkheda, Mandsaur, Madhya Pradesh" },
      { label: "Project Mode", value: "Multi-service infrastructure support" },
    ],
    highlights: [
      "Coordinates land readiness, construction activity, materials, and manpower under one operating approach.",
      "Supports business clients with registered GST documentation and regular business status.",
      "Built for practical execution across construction, renewable, utility, and development requirements.",
      "Keeps stakeholder communication, site resources, and delivery expectations aligned from planning to handover.",
    ],
    process: ["Requirement mapping", "Resource alignment", "Site coordination", "Progress reporting"],
    documentSignals: [
      "GST registration certificate issued on 27/02/2026.",
      "Trade name recorded as ANJANAAIM INDIA COMPANY.",
      "Regular GST registration with principal place of business in Mandsaur, Madhya Pradesh.",
    ],
  },
  {
    slug: "33kv-line-project",
    title: "33KV Line Project",
    category: "Electric Pole & Line Project",
    image: "/assets/electric-project.webp",
    alt: "33KV electric line project route drawing and conductor plan",
    description:
      "Project support for 33KV line marking, pole and stay pit excavation, safety control, manpower planning, and field execution readiness.",
    eyebrow: "Power Line Marking & Excavation",
    summary:
      "A utility infrastructure project page shaped from the ReNew Power SOP for 33KV line marking and excavation, covering survey-based marking, manual and machine excavation, safety, inspection, and records.",
    facts: [
      { label: "Document Reference", value: "RENEW-PRJ-MV-SOP-2" },
      { label: "Revision", value: "00" },
      { label: "SOP Date", value: "02/07/2022" },
      { label: "Work Type", value: "33KV line marking and excavation" },
    ],
    highlights: [
      "Line marking follows approved drawings, survey reports, pole pit marking charts, OHL schedules, and layouts.",
      "Excavation work covers pole and stay pits by manual method and DTH, boring, or tractor-mounted equipment where soil conditions require it.",
      "Resource planning includes site engineer, safety officer, quality engineer, contractor supervisor, skilled workers, boring operator, signal men, and helpers.",
      "Safety controls include PPE, HSE inspection, barricading pits, electrical line checks, LC/LOTO controls, and emergency contact display at the workplace.",
    ],
    process: ["Pole and stay pit marking", "Manual excavation", "Machine boring where required", "Inspection and records"],
    documentSignals: [
      "SOP purpose states guidelines for 33KV line marking and excavation.",
      "Reference standards include IS 5613, IS 785, IS 3043, IS 6639, IS 5300, Indian Electrical Rules, CBIP, and REC guidance.",
      "Records include in-process inspection checklist, QA methodology checklist, permit to work, final check discussion, and JSA.",
    ],
  },
  {
    slug: "suzlon-vendorship",
    title: "Suzlon Vendorship",
    category: "Suzlon Wind Energy Vendor Support",
    image: "/assets/wind.webp",
    alt: "Wind turbine project landscape for renewable energy support",
    description:
      "Vendor support for Suzlon wind project locations, pathway access, right of way, farmer documentation, clearances, and construction continuity.",
    eyebrow: "Suzlon Vendor Partnership",
    summary:
      "A Suzlon vendorship project page based on the land development agreement between Anjanaaim India Company and Suzlon Renewable Development Limited for wind power project locations in Madhya Pradesh.",
    facts: [
      { label: "Vendor Relationship", value: "Suzlon land development support" },
      { label: "Agreement Date", value: "13/04/2026" },
      { label: "Project Districts", value: "Ujjain, Shajapur, Dewas" },
      { label: "WOEG Locations", value: "19 wind turbine locations" },
    ],
    highlights: [
      "Agreement identifies Anjanaaim India Company as the developer engaged for identification and development of renewable energy project locations.",
      "Suzlon Renewable Development Limited is recorded as the company acquiring and providing land for setting up wind power projects across India.",
      "Covers WOEG location temporary pathways, right of way, access road connectivity, and movement readiness for manpower, materials, blades, nacelle, cranes, and vehicles.",
      "Coordinates farmer KYC, Khasra P-II current-year documents, land and farmer documents, and final clearance support.",
      "Keeps renewable project activity moving through liaison with revenue, police, political, Gram Panchayat, village, and construction stakeholders.",
    ],
    process: ["Location and drawing review", "Pathway and ROW coordination", "Farmer documentation", "Construction support through commissioning"],
    documentSignals: [
      "Land Development Agreement executed at Ujjain between Anjanaaim India Company and Suzlon Renewable Development Limited, dated 13/04/2026.",
      "Suzlon Renewable Development Limited is noted as formerly known as Suzlon Gujarat Wind Park Ltd.",
      "Project is defined as wind power project sites in Ujjain, Shajapur, and Dewas districts of Madhya Pradesh.",
      "WOEG is defined in the agreement as a 3.15 MW S140-144 type wind turbine.",
      "Schedule 2 lists 19 WOEG location IDs for Suzlon project development coordination.",
    ],
  },
  {
    slug: "land-preparation-development-work",
    title: "Land Preparation & Development Work",
    category: "Land Development Work",
    image: "/assets/land.webp",
    alt: "Aerial land parcel marked for development planning",
    description:
      "Structured land development support designed to prepare access, documents, temporary pathways, and right-of-way readiness for large-scale project use.",
    eyebrow: "Land Development & Pathway Readiness",
    summary:
      "A land development project page based on the documented scope of development services: pathway preparation, due diligence, right-of-way agreements, clearances, and staged handover for wind project construction.",
    facts: [
      { label: "Core Scope", value: "WOEG location temporary pathway" },
      { label: "Minimum Pathway", value: "6.5 meter width" },
      { label: "ROW Period", value: "Minimum 2 years" },
      { label: "Commercial Model", value: "Milestone-based schedule" },
    ],
    highlights: [
      "Arranges temporary pathway access with required bellmouth, turning radius, and route changes as project drawings evolve.",
      "Supports legal and technical due diligence with farmer KYC, Khasra P-II, Rin Pustika, and other land-related documents.",
      "Handles notary agreement execution, easement deed coordination, lease rent proof, crop compensation, and development document handover.",
      "Maintains accountability for tree cutting and trimming, statutory clearances, government pathway usage, and ROW or litigation resolution until commissioning.",
    ],
    process: ["Land document collection", "Pathway agreement execution", "Ground preparation and access", "Handover and progress reporting"],
    documentSignals: [
      "Schedule 1 defines scope of development services and responsibility split.",
      "Temporary pathway requirement includes 6.5 meter minimum width and 50m x 50m bellmouth where required.",
      "Payment schedule is milestone-based across agreement execution, pathway development, machinery movement, and WOEG erection.",
    ],
  },
];

export const contactInfo = [
  {
    label: "Phone",
    value: "+91 81202 28066",
    href: "tel:+918120228066",
  },
  {
    label: "Email",
    value: "ishuanjana1@gmail.com",
    href: "mailto:ishuanjana1@gmail.com",
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
