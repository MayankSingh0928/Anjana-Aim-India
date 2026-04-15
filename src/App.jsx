import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";
import { AboutSection } from "./components/AboutSection";
import { Icon } from "./components/Icon";
import { Navbar } from "./components/Navbar";
import { Reveal } from "./components/Reveal";
import { SectionIntro } from "./components/SectionIntro";
import {
  contactInfo,
  coverageStats,
  infrastructureStats,
  legalCertifications,
  processSteps,
  projects,
  serviceDetails,
  services,
  whyChooseUs,
} from "./data/siteContent";

const faqItems = [
  {
    question: "What services does Anjana Aim India Company provide?",
    answer:
      "We provide construction support, rod supply, land development, renewable energy project support, and labor contracting services for infrastructure and business clients.",
  },
  {
    question: "Do you support land acquisition and property-related projects?",
    answer:
      "Yes. We support land identification, development coordination, and infrastructure-oriented property solutions for commercial, industrial, and renewable energy requirements.",
  },
  {
    question: "Which regions do you currently serve?",
    answer:
      "Our operations are centered in Madhya Pradesh, with project support and business reach extending into other regions depending on project scope and requirements.",
  },
  {
    question: "How can I send a business inquiry?",
    answer:
      "You can use the contact form on the website, which redirects directly to WhatsApp with your inquiry details, or contact us through the listed email and phone information.",
  },
  {
    question: "Do you work with contractors, developers, and project partners?",
    answer:
      "Yes. We work with business clients, contractors, developers, investors, and project stakeholders requiring dependable execution and infrastructure support.",
  },
  {
    question: "Can you support renewable energy projects?",
    answer:
      "Yes. We support wind and solar project requirements through execution assistance, land-related coordination, and project support services.",
  },
];

function getContactHref(serviceSlug) {
  return `/?service=${encodeURIComponent(serviceSlug)}#contact`;
}

function getServiceTitleFromSlug(serviceSlug) {
  return services.find((service) => service.slug === serviceSlug)?.title || services[0].title;
}

function HomePage({ onInquirySubmit, selectedServiceSlug }) {
  const selectedServiceTitle = getServiceTitleFromSlug(selectedServiceSlug);

  useEffect(() => {
    const targetId = window.location.hash.replace("#", "");

    if (!targetId) {
      return;
    }

    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, []);

  return (
    <main>
      <section id="home" className="relative overflow-hidden">
        <img
          src="/assets/industrial-hero.svg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.1]"
          aria-hidden="true"
        />
        <div className="hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.08),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(30,64,175,0.08),_transparent_36%)]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              Infrastructure • Construction • Energy
            </span>
            <h1 className="mt-7 font-heading text-5xl font-semibold leading-tight tracking-tight text-[color:var(--primary)] sm:text-6xl">
              Building Infrastructure for a Stronger Tomorrow
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Trusted partner in construction, rod supply, land development, wind projects, solar projects, and labor
              contracting for ambitious industrial and infrastructure work.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/#services" className="btn-primary">
                Our Services
              </a>
              <a href="/#contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                "Corporate discipline for on-ground execution",
                "Strong support across multi-sector project needs",
                "Professional delivery with dependable workforce coordination",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-[color:var(--border)] bg-white/80 p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-[color:var(--accent)]">
                      <Icon name="shield" className="h-4 w-4" />
                    </span>
                    <p className="text-sm leading-6 text-slate-600">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-amber-300/20 blur-2xl lg:block" />
            <div className="absolute -right-8 bottom-8 hidden h-32 w-32 rounded-full bg-blue-300/20 blur-3xl lg:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(140deg,rgba(13,27,42,0.98),rgba(23,37,84,0.92))] p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.06),transparent)]" />
              <div className="relative">
                <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/aim-logo.webp"
                      alt="Anjana Aim India Company brand logo"
                      className="h-14 w-14 rounded-full border border-white/10 object-cover"
                    />
                    <div>
                      <p className="font-heading text-2xl font-semibold text-white">Anjana Aim India Company</p>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Business profile</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      { title: "Core Strength", detail: "Construction & project support" },
                      { title: "Capability", detail: "Renewable & development works" },
                      { title: "Approach", detail: "Quality, timing, accountability" },
                      { title: "Base", detail: "Mandsaur, Madhya Pradesh" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm uppercase tracking-[0.24em] text-amber-300">{item.title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-200">{item.detail}</p>
                      </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,239,230,0.65))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-[color:var(--primary)] sm:text-4xl">
                COMPLETE LAND & PROPERTY SOLUTIONS
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                From strategic land acquisition to large-scale infrastructure development, we provide reliable and
                growth-oriented property solutions across Madhya Pradesh and beyond.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {processSteps.map((item, index) => (
              <Reveal key={item.step} delay={index * 80}>
                <article className="relative overflow-hidden rounded-[1.9rem] border border-[#eadfce] bg-white/80 px-6 pb-8 pt-12 text-center shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                  <span className="absolute left-1/2 top-5 -translate-x-1/2 font-heading text-7xl font-semibold tracking-[-0.06em] text-[#d7b48c]/30">
                    {item.step}
                  </span>
                  <div className="relative">
                    <h3 className="font-heading text-3xl font-semibold leading-tight text-[color:var(--primary)]">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-base leading-8 text-slate-600">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180}>
            <div className="mt-12 flex justify-center">
              <a href="/#contact" className="btn-primary min-w-44">
                Know More
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
          <Reveal>
            <div className="grid gap-8">
              <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:items-start">
                <div className="overflow-hidden rounded-[2rem] border border-[#eadfce] bg-[#f5ecdf] shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                  <img
                    src="/assets/meeting room.webp"
                    alt="Professional meeting room and office setup"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-[color:var(--primary)] sm:text-4xl">
                    PREMIER LAND & INFRASTRUCTURE PARTNER
                  </h2>
                  <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                    We provide complete land and real estate solutions as a trusted land facilitator, developer,
                    builder, and contractor. With deep industry experience and strategic collaborations, we deliver
                    reliable, growth-oriented property solutions across Madhya Pradesh and beyond. We specialize in land
                    acquisition, property investment advisory, and infrastructure support for large-scale commercial and
                    renewable energy projects.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                {infrastructureStats.map((item, index) => (
                  <Reveal key={item.label} delay={index * 80}>
                    <div className="rounded-[1.8rem] border border-[#eadfce] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
                      <p className="font-heading text-5xl font-semibold tracking-[-0.04em] text-[#cfaa7d]">
                        {item.value}
                      </p>
                      <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--primary)]">
                        {item.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-[2rem] border border-[#eadfce] bg-[#f8f1e6] shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
              <img
                src="/assets/office.webp"
                alt="Premium infrastructure and building development showcase"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="section-shell service-bg-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,27,42,0.92),rgba(13,27,42,0.78),rgba(13,27,42,0.54))]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200 shadow-sm">
                Services
              </span>
              <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Integrated business support across construction, development, and energy
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
                Our service portfolio is structured to support business clients, contractors, and project stakeholders with dependable delivery and operational strength.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 70}>
                <article className="group h-full rounded-[1.75rem] border border-white/20 bg-white/92 p-7 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_30px_80px_rgba(0,0,0,0.26)]">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/10 transition group-hover:bg-[color:var(--accent)]">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-semibold text-[color:var(--primary)]">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                  <a
                    href={`/services/${service.slug}`}
                    className="mt-6 flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)] transition hover:gap-3"
                  >
                    <span>Business-ready support</span>
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionIntro
              eyebrow="Projects"
              title="Professional work showcase built around trust and execution"
              description="These sample showcase blocks communicate the type of work your company supports today and can later be replaced with live project photographs, milestones, and case studies."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 90}>
                <article className="group overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)]">
                  <div className="project-surface relative flex min-h-64 items-end overflow-hidden p-6">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.1),rgba(15,23,42,0.82))]" />
                    <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(245,158,11,0.24),transparent)] opacity-80" />
                    <div className="relative rounded-2xl border border-white/15 bg-slate-950/65 px-4 py-3 backdrop-blur-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[color:var(--primary)]">
                        <Icon name="project" className="h-5 w-5" />
                      </span>
                      <h3 className="font-heading text-2xl font-semibold text-[color:var(--primary)]">{project.title}</h3>
                    </div>
                    <p className="mt-4 text-base leading-7 text-slate-600">{project.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="section-shell why-bg-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,27,42,0.9),rgba(13,27,42,0.72),rgba(13,27,42,0.42))]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200 shadow-sm">
                Why Choose Us
              </span>
              <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A dependable partner for business-critical site and project needs
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
                Our positioning is built around reliability, capability, and the confidence business clients expect from a serious industrial service company.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="h-full rounded-[1.75rem] border border-white/20 bg-white/92 p-7 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_80px_rgba(0,0,0,0.26)]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-[color:var(--accent)]">
                    <Icon name="shield" className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-[color:var(--primary)]">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionIntro
              eyebrow="Certifications & Legal"
              title="Clean verification signals without exposing sensitive documents"
              description="We present business legitimacy in a professional format while keeping PAN declarations, raw editable files, and sensitive records private."
              centered
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {legalCertifications.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="h-full rounded-[1.75rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,#ffffff,#f8fafc)] p-7 shadow-[0_20px_55px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-[color:var(--accent)]">
                      <Icon name="shield" className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">
                        {item.status}
                      </p>
                      <h3 className="mt-3 font-heading text-2xl font-semibold text-[color:var(--primary)]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-7 text-slate-600">{item.description}</p>
                  <div className="mt-6 flex items-center gap-2 border-t border-[color:var(--border)] pt-5 text-sm font-semibold text-slate-500">
                    <Icon name="shield" className="h-4 w-4 text-[color:var(--accent)]" />
                    Public-safe verification summary
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[linear-gradient(180deg,rgba(248,241,230,0.55),rgba(255,255,255,0.96))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-[color:var(--primary)] sm:text-4xl">
                ENGINEERING EXCELLENCE, DELIVERING DREAMS
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                With years of expertise, we redefine infrastructure and property development. From concept to execution,
                every project is built with structural integrity, transparency, and long-term value.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coverageStats.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="rounded-[1.9rem] border border-[#eadfce] bg-white/75 px-6 py-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                  <div className="mx-auto flex h-40 w-full max-w-[220px] items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="max-h-40 w-auto object-contain"
                    />
                  </div>
                  <h3 className="mt-8 font-heading text-2xl font-semibold text-[color:var(--primary)]">{item.title}</h3>
                  <p className="mt-4 text-lg font-medium text-slate-600">{item.value}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(13,27,42,1),rgba(30,58,138,0.92))] px-6 py-10 shadow-[0_25px_80px_rgba(15,23,42,0.22)] sm:px-10 lg:px-14 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Let&apos;s Build Together</p>
                <h2 className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl">
                  Looking for a reliable partner for construction, development, or energy projects?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
                  Start the conversation with a team that values trust, operational discipline, and long-term business
                  relationships.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <a href="/#contact" className="btn-primary btn-primary--light">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="section-shell scroll-mt-24 pt-10">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionIntro
              eyebrow="Contact"
              title="Start your next project conversation with confidence"
              description="Share your requirement and we&apos;ll respond with the professionalism, clarity, and practical support expected from a serious business partner."
            />

            <div className="mt-10 space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Address" ? "_blank" : undefined}
                  rel={item.label === "Address" ? "noreferrer" : undefined}
                  className="block rounded-3xl border border-[color:var(--border)] bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-base leading-7 text-[color:var(--primary)]">{item.value}</p>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-[2rem] border border-[color:var(--border)] bg-white p-5 shadow-[0_16px_45px_rgba(15,23,42,0.06)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Google Maps</p>
                  <h3 className="mt-2 font-heading text-2xl font-semibold text-[color:var(--primary)]">Location Overview</h3>
                </div>
                <a
                  href="https://maps.google.com/?q=Maliya%20Kherkheda%20Mandsaur%20Madhya%20Pradesh%20458895"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  Open Map
                </a>
              </div>
              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-[color:var(--border)] bg-slate-100">
                <div className="flex min-h-64 items-center justify-center bg-[linear-gradient(135deg,rgba(15,23,42,0.04),rgba(245,158,11,0.08))] p-8 text-center">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Map Placeholder</p>
                    <p className="mt-3 max-w-md text-base leading-7 text-slate-600">
                      Embed a live Google Maps iframe here when the final public business location link is ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/aim-logo.webp"
                  alt="Anjana Aim India Company circular logo"
                  className="h-16 w-16 rounded-full border border-amber-200 object-cover"
                />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Contact Form</p>
                  <h3 className="mt-2 font-heading text-3xl font-semibold text-[color:var(--primary)]">
                    Anjana Aim India Company
                  </h3>
                </div>
              </div>

              <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={onInquirySubmit}>
                <label className="form-field">
                  <span>Name</span>
                  <input type="text" name="name" placeholder="Your full name" />
                </label>
                <label className="form-field">
                  <span>Phone</span>
                  <input type="tel" name="phone" placeholder="Your phone number" />
                </label>
                <label className="form-field">
                  <span>Email</span>
                  <input type="email" name="email" placeholder="Your email address" />
                </label>
                <label className="form-field">
                  <span>Service Required</span>
                  <select name="service" defaultValue={selectedServiceTitle}>
                    {services.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="form-field sm:col-span-2">
                  <span>Message</span>
                  <textarea name="message" rows="6" placeholder="Tell us about your project requirement" />
                </label>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(244,239,230,0.75))]">
        <div className="hero-grid absolute inset-0 opacity-10" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <span className="inline-flex rounded-full border border-[#eadfce] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
            Company Profile
          </span>
          <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-[color:var(--primary)] sm:text-5xl">
            About Anjana Aim India Company
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Learn more about our business vision, multi-sector capabilities, and the leadership driving dependable
            execution across infrastructure, land development, renewable energy, and construction support.
          </p>
        </div>
      </section>

      <AboutSection standalone />
    </main>
  );
}

function FaqPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(244,239,230,0.75))]">
        <div className="hero-grid absolute inset-0 opacity-10" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <span className="inline-flex rounded-full border border-[#eadfce] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
            Support
          </span>
          <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-[color:var(--primary)] sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Find quick answers about our services, project capabilities, business coverage, and inquiry process.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5">
            {faqItems.map((item, index) => (
              <Reveal key={item.question} delay={index * 60}>
                <article className="rounded-[1.8rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:p-8">
                  <h2 className="font-heading text-2xl font-semibold text-[color:var(--primary)]">{item.question}</h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">{item.answer}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function PrivacyPolicyPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(244,239,230,0.75))]">
        <div className="hero-grid absolute inset-0 opacity-10" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <span className="inline-flex rounded-full border border-[#eadfce] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
            Legal
          </span>
          <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-[color:var(--primary)] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Last updated: April 13, 2026
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_22px_60px_rgba(15,23,42,0.06)] sm:p-10">
            <div className="privacy-policy prose prose-slate max-w-none">
              <p><strong>Last updated:</strong> April 13, 2026</p>

              <p>
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
                information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>

              <p>
                We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the
                collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been
                created with the help of the Privacy Policy Generator.
              </p>

              <h2>Interpretation and Definitions</h2>
              <h3>Interpretation</h3>
              <p>
                The words whose initial letters are capitalized have meanings defined under the following conditions. The
                following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>

              <h3>Definitions</h3>
              <p>For the purposes of this Privacy Policy:</p>
              <ul>
                <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                <li>
                  <strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with
                  a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities
                  entitled to vote for election of directors or other managing authority.
                </li>
                <li>
                  <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Privacy Policy)
                  refers to anjana-aim-india, Nahargarh Road, Near Primary School, Maliya Kherkheda, Mandsaur, Madhya Pradesh 458895.
                </li>
                <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                <li><strong>Country</strong> refers to: Madhya Pradesh, India</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
                <li><strong>Personal Data</strong> (or &quot;Personal Information&quot;) is any information that relates to an identified or identifiable individual.</li>
                <li>We use &quot;Personal Data&quot; and &quot;Personal Information&quot; interchangeably unless a law uses a specific term.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                <li><strong>Website</strong> refers to anjana-aim-india, accessible from https://anjana-aim-india.vercel.app/.</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>

              <h2>Collecting and Using Your Personal Data</h2>
              <h3>Types of Data Collected</h3>
              <h3>Personal Data</h3>
              <p>
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be
                used to contact or identify You. Personally identifiable information may include, but is not limited to:
              </p>
              <ul>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Usage Data</li>
              </ul>

              <h3>Usage Data</h3>
              <p>Usage Data is collected automatically when using the Service.</p>
              <p>
                Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
              </p>
              <p>
                When You access the Service by or through a mobile device, We may collect certain information automatically, including, but
                not limited to, the type of mobile device You use, Your mobile device&apos;s unique ID, the IP address of Your mobile device,
                Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
              </p>
              <p>
                We may also collect information that Your browser sends whenever You visit Our Service or when You access the Service by or
                through a mobile device.
              </p>

              <h3>Tracking Technologies and Cookies</h3>
              <p>
                We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.
                Tracking technologies We use include beacons, tags, and scripts to collect and track information and to improve and analyze
                Our Service. The technologies We use may include:
              </p>
              <ul>
                <li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.</li>
                <li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
              </ul>
              <p>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.</p>
              <p>
                Where required by law, we use non-essential cookies (such as analytics, advertising, and remarketing cookies) only with Your consent.
                You can withdraw or change Your consent at any time using Our cookie preferences tool (if available) or through Your browser/device settings.
                Withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal.
              </p>

              <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
              <h3>Necessary / Essential Cookies</h3>
              <p><strong>Type:</strong> Session Cookies</p>
              <p><strong>Administered by:</strong> Us</p>
              <p><strong>Purpose:</strong> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>

              <h3>Cookies Policy / Notice Acceptance Cookies</h3>
              <p><strong>Type:</strong> Persistent Cookies</p>
              <p><strong>Administered by:</strong> Us</p>
              <p><strong>Purpose:</strong> These Cookies identify if users have accepted the use of cookies on the Website.</p>

              <h3>Functionality Cookies</h3>
              <p><strong>Type:</strong> Persistent Cookies</p>
              <p><strong>Administered by:</strong> Us</p>
              <p><strong>Purpose:</strong> These Cookies allow Us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>

              <p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of Our Privacy Policy.</p>

              <h2>Use of Your Personal Data</h2>
              <p>The Company may use Personal Data for the following purposes:</p>
              <ul>
                <li><strong>To provide and maintain our Service,</strong> including to monitor the usage of our Service.</li>
                <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                <li><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                <li><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application&apos;s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                <li><strong>To provide You with news, special offers, and general information</strong> about other goods, services and events which We offer that are similar to those that you have already purchased or inquired about unless You have opted not to receive such information.</li>
                <li><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
                <li><strong>For business transfers:</strong> We may use Your Personal Data to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
                <li><strong>For other purposes:</strong> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
              </ul>

              <p>We may share Your Personal Data in the following situations:</p>
              <ul>
                <li><strong>With Service Providers:</strong> We may share Your Personal Data with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                <li><strong>For business transfers:</strong> We may share or transfer Your Personal Data in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                <li><strong>With Affiliates:</strong> We may share Your Personal Data with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                <li><strong>With business partners:</strong> We may share Your Personal Data with Our business partners to offer You certain products, services or promotions.</li>
                <li><strong>With other users:</strong> If Our Service offers public areas, when You share Personal Data or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                <li><strong>With Your consent:</strong> We may disclose Your Personal Data for any other purpose with Your consent.</li>
              </ul>

              <h2>Retention of Your Personal Data</h2>
              <p>
                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.
                We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if We are
                required to retain Your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
              </p>
              <p>
                Where possible, We apply shorter retention periods and/or reduce identifiability by deleting, aggregating, or anonymizing data.
                Unless otherwise stated, the retention periods below are maximum periods (&quot;up to&quot;) and We may delete or anonymize data sooner
                when it is no longer needed for the relevant purpose. We apply different retention periods to different categories of Personal Data
                based on the purpose of processing and legal obligations:
              </p>

              <h3>Account Information</h3>
              <ul>
                <li><strong>User Accounts:</strong> retained for the duration of your account relationship plus up to 24 months after account closure to handle any post-termination issues or resolve disputes.</li>
              </ul>

              <h3>Customer Support Data</h3>
              <ul>
                <li><strong>Support tickets and correspondence:</strong> up to 24 months from the date of ticket closure to resolve follow-up inquiries, track service quality, and defend against potential legal claims</li>
                <li><strong>Chat transcripts:</strong> up to 24 months for quality assurance and staff training purposes.</li>
              </ul>

              <h3>Usage Data</h3>
              <ul>
                <li><strong>Website analytics data (cookies, IP addresses, device identifiers):</strong> up to 24 months from the date of collection, which allows us to analyze trends while respecting privacy principles.</li>
                <li><strong>Server logs (IP addresses, access times):</strong> up to 24 months for security monitoring and troubleshooting purposes.</li>
              </ul>

              <p>Usage Data is retained in accordance with the retention periods described above, and may be retained longer only where necessary for security, fraud prevention, or legal compliance.</p>
              <p>We may retain Personal Data beyond the periods stated above for different reasons:</p>
              <ul>
                <li><strong>Legal obligation:</strong> We are required by law to retain specific data (e.g., financial records for tax authorities).</li>
                <li><strong>Legal claims:</strong> Data is necessary to establish, exercise, or defend legal claims.</li>
                <li><strong>Your explicit request:</strong> You ask Us to retain specific information.</li>
                <li><strong>Technical limitations:</strong> Data exists in backup systems that are scheduled for routine deletion.</li>
              </ul>
              <p>You may request information about how long We will retain Your Personal Data by contacting Us.</p>
              <p>When retention periods expire, We securely delete or anonymize Personal Data according to the following procedures:</p>
              <ul>
                <li><strong>Deletion:</strong> Personal Data is removed from Our systems and no longer actively processed.</li>
                <li><strong>Backup retention:</strong> Residual copies may remain in encrypted backups for a limited period consistent with our backup retention schedule and are not restored except where necessary for security, disaster recovery, or legal compliance.</li>
                <li><strong>Anonymization:</strong> In some cases, We convert Personal Data into anonymous statistical data that cannot be linked back to You. This anonymized data may be retained indefinitely for research and analytics.</li>
              </ul>

              <h2>Transfer of Your Personal Data</h2>
              <p>
                Your information, including Personal Data, is processed at the Company&apos;s operating offices and in any other places where the
                parties involved in the processing are located. It means that this information may be transferred to — and maintained on —
                computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may
                differ from those from Your jurisdiction.
              </p>
              <p>
                Where required by applicable law, We will ensure that international transfers of Your Personal Data are subject to appropriate
                safeguards and supplementary measures where appropriate. The Company will take all steps reasonably necessary to ensure that Your
                data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an
                organization or a country unless there are adequate controls in place including the security of Your data and other personal
                information.
              </p>

              <h2>Delete Your Personal Data</h2>
              <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
              <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
              <p>
                You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the
                account settings section that allows you to manage Your personal information. You may also contact Us to request access to,
                correct, or delete any Personal Data that You have provided to Us.
              </p>
              <p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>

              <h2>Disclosure of Your Personal Data</h2>
              <h3>Business Transactions</h3>
              <p>
                If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice
                before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
              </p>

              <h3>Law enforcement</h3>
              <p>
                Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response
                to valid requests by public authorities (e.g. a court or a government agency).
              </p>

              <h3>Other legal requirements</h3>
              <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
              <ul>
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of the Company</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of Users of the Service or the public</li>
                <li>Protect against legal liability</li>
              </ul>

              <h2>Security of Your Personal Data</h2>
              <p>
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method
                of electronic storage is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We
                cannot guarantee its absolute security.
              </p>

              <h2>Children&apos;s Privacy</h2>
              <p>
                Our Service does not address anyone under the age of 16. We do not knowingly collect personally identifiable information from
                anyone under the age of 16. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data,
                please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 16 without verification of
                parental consent, We take steps to remove that information from Our servers.
              </p>
              <p>
                If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We
                may require Your parent&apos;s consent before We collect and use that information.
              </p>

              <h2>Links to Other Websites</h2>
              <p>
                Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be
                directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy of every site You visit.
              </p>
              <p>
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or
                services.
              </p>

              <h2>Changes to this Privacy Policy</h2>
              <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
              <p>
                We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the
                &quot;Last updated&quot; date at the top of this Privacy Policy.
              </p>
              <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, You can contact us:</p>
              <ul>
                <li>By email:   info@anjanaaimindia.com</li>
              </ul>
              <p>Generated using TermsFeed Privacy Policy Generator</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceDetailPage({ service }) {
  if (!service) {
    return (
      <main>
        <section className="section-shell">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-flex rounded-full border border-[#eadfce] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
              Service Not Found
            </span>
            <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-[color:var(--primary)]">
              The requested service page could not be found.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Please return to the services section and choose one of our available business support services.
            </p>
            <a href="/#services" className="btn-primary mt-8">
              View Services
            </a>
          </div>
        </section>
      </main>
    );
  }

  const detailShowcase = service.detailShowcase;
  const contactHref = getContactHref(service.slug);
  const capabilitiesBackground = service.capabilitiesBackground;

  return (
    <main>
      <section className="relative overflow-hidden border-b border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(244,239,230,0.75))]">
        <div className="hero-grid absolute inset-0 opacity-10" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
          <Reveal>
            <span className="inline-flex rounded-full border border-[#eadfce] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
              {service.eyebrow}
            </span>
            <h1 className="mt-6 font-heading text-5xl font-semibold tracking-tight text-[color:var(--primary)] sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{service.summary}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={contactHref} className="btn-primary">
                Start Inquiry
              </a>
              <a href="/#services" className="btn-secondary">
                Back to Services
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.1)] backdrop-blur-xl sm:p-6">
              {service.media ? (
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={service.media.image}
                    alt={service.media.alt}
                    className="h-80 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04),rgba(15,23,42,0.55))]" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">
                      Renewable Site Visual
                    </span>
                    <h2 className="mt-3 font-heading text-3xl font-semibold text-white">
                      Wind & Solar Infrastructure Support
                    </h2>
                  </div>
                </div>
              ) : service.heroImage ? (
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={service.heroImage}
                    alt={service.heroImageAlt}
                    className="h-80 w-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.06),rgba(15,23,42,0.68))]" />
                  <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(245,158,11,0.26),transparent)]" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">
                      {service.heroLabel}
                    </span>
                    <h2 className="mt-3 font-heading text-3xl font-semibold text-white">
                      {service.heroTitle}
                    </h2>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-950 text-white shadow-lg shadow-slate-900/10">
                    <Icon name={service.icon} className="h-9 w-9" />
                  </div>
                  <h2 className="mt-8 font-heading text-3xl font-semibold text-[color:var(--primary)]">
                    Business-ready {service.title.toLowerCase()} support
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Our approach is practical, coordinated, and built around project needs so clients receive dependable
                    service support from planning to execution.
                  </p>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {detailShowcase ? (
        <section className="section-shell bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:px-8">
            <Reveal>
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--primary)]">
                  {detailShowcase.title}
                </p>
                <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
                  {detailShowcase.summary}
                </p>
                <a href={contactHref} className="btn-primary mt-10">
                  {detailShowcase.cta}
                </a>
              </div>

              <div className="mt-8 overflow-hidden border border-[#eadfce] bg-[#f5ecdf] shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                <img
                  src={detailShowcase.image}
                  alt={detailShowcase.imageAlt}
                  className="h-64 w-full object-cover sm:h-72"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden border border-[#eadfce] bg-[#f8f1e6] shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
                <img
                  src={detailShowcase.featureImage}
                  alt={detailShowcase.featureAlt}
                  className="h-[28rem] w-full object-cover lg:h-[33rem]"
                />
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {service.media ? (
        <section className="section-shell">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Project Media"
                title="On-ground wind project capability, presented with clarity"
                description="A visual overview of renewable energy infrastructure support, styled to match the professional presentation of Anjana Aim India Company."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Wind site coordination", "Solar-adjacent infrastructure", "Execution support", "Renewable project readiness"].map((item) => (
                  <div key={item} className="rounded-2xl border border-[color:var(--border)] bg-white p-5 shadow-[0_14px_35px_rgba(15,23,42,0.05)]">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-[color:var(--accent)]">
                      <Icon name="shield" className="h-4 w-4" />
                    </span>
                    <p className="mt-4 text-sm font-semibold leading-6 text-[color:var(--primary)]">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:p-5">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-950">
                  <video
                    controls
                    preload="metadata"
                    poster={service.media.image}
                    className="aspect-video w-full object-cover"
                  >
                    <source src={service.media.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="grid gap-4 px-2 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                      Anjana Aim India Company
                    </p>
                    <h3 className="mt-2 font-heading text-2xl font-semibold text-[color:var(--primary)]">
                      Renewable Energy Site Support
                    </h3>
                  </div>
                  <a href={contactHref} className="btn-secondary">
                    Discuss Project
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {service.gallery ? (
        <section className="section-shell bg-[linear-gradient(180deg,rgba(248,250,252,0.96),rgba(255,255,255,1))]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Workforce Gallery"
                title={`${service.title} support in action`}
                description="A visual overview of deployment, supervision, and practical site support across active project environments."
                centered
              />
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {service.gallery.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <article className="group h-full overflow-hidden rounded-[1.75rem] border border-[color:var(--border)] bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)]">
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.58))]" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-[color:var(--accent)]">
                          <Icon name="labor" className="h-5 w-5" />
                        </span>
                        <h3 className="font-heading text-xl font-semibold text-[color:var(--primary)]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section
        className={`section-shell relative overflow-hidden ${capabilitiesBackground ? "bg-slate-950" : ""}`}
        style={
          capabilitiesBackground
            ? {
                backgroundAttachment: "fixed",
                backgroundImage: `url(${capabilitiesBackground})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }
            : undefined
        }
      >
        {capabilitiesBackground ? (
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.92),rgba(15,23,42,0.74),rgba(15,23,42,0.58))]" aria-hidden="true" />
        ) : null}
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <Reveal>
            {capabilitiesBackground ? (
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200 shadow-sm">
                  Capabilities
                </span>
                <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  What we provide in {service.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
                  Focused support designed for contractors, developers, industrial clients, renewable project teams, and infrastructure stakeholders.
                </p>
              </div>
            ) : (
              <SectionIntro
                eyebrow="Capabilities"
                title={`What we provide in ${service.title}`}
                description="Focused support designed for contractors, developers, industrial clients, renewable project teams, and infrastructure stakeholders."
              />
            )}
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {service.highlights.map((item, index) => (
              <Reveal key={item} delay={index * 70}>
                <div className="h-full rounded-[1.75rem] border border-[color:var(--border)] bg-white/95 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-50 text-[color:var(--accent)]">
                    <Icon name="shield" className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-base font-semibold leading-7 text-[color:var(--primary)]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-tint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionIntro
              eyebrow="Process"
              title="A clear execution flow for dependable delivery"
              description="Every service is handled with a straightforward operating approach that keeps requirements, resources, and timelines aligned."
              centered
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {service.process.map((item, index) => (
              <Reveal key={item} delay={index * 80}>
                <div className="rounded-[1.75rem] border border-[#eadfce] bg-white p-6 text-center shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                  <p className="font-heading text-5xl font-semibold text-[#d7b48c]/55">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-[color:var(--primary)]">{item}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="schedule-line-art absolute bottom-0 left-0 top-0 hidden w-[45%] opacity-70 lg:block" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div aria-hidden="true" />
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-heading text-3xl font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)] sm:text-4xl">
                Schedule a Visit
              </p>
              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                Experience our project support approach firsthand. Schedule a visit to discuss your {service.title.toLowerCase()} requirement, review practical next steps, and connect with our team for clear guidance.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {[
                  { day: "Monday - Friday", time: "9:am - 4:30pm" },
                  { day: "Saturday", time: "9:am - 1:30pm" },
                  { day: "Sunday", time: "Closed" },
                ].map((item) => (
                  <div key={item.day}>
                    <p className="font-heading text-xl font-semibold text-[color:var(--primary)]">{item.day}</p>
                    <p className="mt-4 text-base font-semibold text-[#c5a178]">{item.time}</p>
                  </div>
                ))}
              </div>

              <a href={contactHref} className="btn-primary mt-10">
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(13,27,42,1),rgba(30,58,138,0.92))] px-6 py-10 shadow-[0_25px_80px_rgba(15,23,42,0.22)] sm:px-10 lg:px-14 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Service Inquiry</p>
                <h2 className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl">
                  Need reliable support for {service.title.toLowerCase()}?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
                  Share your requirement and our team will help you plan the next practical step.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <a href={contactHref} className="btn-primary btn-primary--light">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

function App() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER ;
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isAboutPage = currentPath === "/about";
  const isFaqPage = currentPath === "/faq";
  const isPrivacyPage = currentPath === "/privacy-policy";
  const serviceSlug = currentPath.startsWith("/services/") ? currentPath.replace("/services/", "") : "";
  const selectedService = serviceDetails.find((service) => service.slug === serviceSlug);
  const selectedInquiryService = new URLSearchParams(window.location.search).get("service") || "";

  const handleInquirySubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() || "Not provided";
    const phone = formData.get("phone")?.toString().trim() || "Not provided";
    const email = formData.get("email")?.toString().trim() || "Not provided";
    const service = formData.get("service")?.toString().trim() || "Not provided";
    const message = formData.get("message")?.toString().trim() || "Not provided";

    const whatsappMessage = [
      "Hello Anjana Aim India Company,",
      "",
      "I would like to send an inquiry:",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service Required: ${service}`,
      `Message: ${message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[color:var(--surface)] text-slate-900">
      <Navbar />
      {isAboutPage ? (
        <AboutPage />
      ) : isFaqPage ? (
        <FaqPage />
      ) : isPrivacyPage ? (
        <PrivacyPolicyPage />
      ) : serviceSlug ? (
        <ServiceDetailPage service={selectedService} />
      ) : (
        <HomePage onInquirySubmit={handleInquirySubmit} selectedServiceSlug={selectedInquiryService} />
      )}
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
