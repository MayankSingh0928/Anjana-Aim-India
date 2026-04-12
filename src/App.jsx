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
  processSteps,
  projects,
  services,
  whyChooseUs,
} from "./data/siteContent";

function HomePage({ onInquirySubmit }) {
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
                      src="/assets/aim-logo.png"
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
                    src="/assets/meeting-room-showcase.svg"
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
                src="/assets/premium-building-showcase.svg"
                alt="Premium infrastructure and building development showcase"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="section-shell section-tint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionIntro
              eyebrow="Services"
              title="Integrated business support across construction, development, and energy"
              description="Our service portfolio is structured to support business clients, contractors, and project stakeholders with dependable delivery and operational strength."
              centered
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 70}>
                <article className="group h-full rounded-[1.75rem] border border-[color:var(--border)] bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/10 transition group-hover:bg-[color:var(--accent)]">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-semibold text-[color:var(--primary)]">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]">
                    <span>Business-ready support</span>
                    <Icon name="arrow" className="h-4 w-4" />
                  </div>
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
                <article className="overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                  <div className="project-surface flex min-h-56 items-end p-6">
                    <div className="rounded-2xl border border-white/15 bg-slate-950/55 px-4 py-3 backdrop-blur-sm">
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

      <section id="why-choose-us" className="section-shell section-tint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionIntro
              eyebrow="Why Choose Us"
              title="A dependable partner for business-critical site and project needs"
              description="Our positioning is built around reliability, capability, and the confidence business clients expect from a serious industrial service company."
              centered
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="rounded-[1.75rem] border border-[color:var(--border)] bg-white p-7 shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
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

      <section id="contact" className="section-shell pt-10">
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
                  src="/assets/aim-logo.png"
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
                  <select name="service">
                    <option>Construction</option>
                    <option>Rod Supply</option>
                    <option>Land Development</option>
                    <option>Wind Project</option>
                    <option>Solar Project</option>
                    <option>Labor Contractor</option>
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

function App() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "917067038682";
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isAboutPage = currentPath === "/about";

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
      {isAboutPage ? <AboutPage /> : <HomePage onInquirySubmit={handleInquirySubmit} />}
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
