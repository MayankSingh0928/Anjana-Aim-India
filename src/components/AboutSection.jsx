import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";
import { stats } from "../data/siteContent";

export function AboutSection({ standalone = false }) {
  return (
    <section id="about" className={`section-shell ${standalone ? "pt-16" : ""}`}>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-8 xl:gap-16">
        <Reveal>
          <div className="max-w-2xl">
            <SectionIntro
              eyebrow="About Us"
              title="About Anjana Aim India Company"
              description="Anjana Aim India Company is part of a broader entrepreneur-led profile associated with Ishwar Singh Anjana, spanning infrastructure support, material trading, food product manufacturing, digital services, renewable project support, and labor contracting."
            />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {stats.map((item, index) => (
              <Reveal key={item.label} delay={index * 80}>
                <div className="rounded-[1.8rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{item.value}</p>
                  <p className="mt-3 font-heading text-2xl font-semibold text-[color:var(--primary)]">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-6">
            <div className="absolute right-0 top-0 h-32 w-32 bg-amber-200/25 blur-3xl" aria-hidden="true" />
            <div className="relative grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
              <div className="relative min-h-[34rem] overflow-hidden rounded-[1.5rem] bg-[#f7d92c] shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <img
                  src="/assets/owner3.webp"
                  alt="Founder Ishwar Singh Anjana"
                  className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0),rgba(15,23,42,0.38))]" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">
                    Founder
                  </p>
                  <p className="mt-2 font-heading text-xl font-semibold text-[color:var(--primary)]">
                    Ishwar Singh Anjana
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center p-2 lg:p-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                    Founder & Vision
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[color:var(--primary)] sm:text-[2.2rem]">
                  Ishwar Singh
                  <br />
                  Anjana
                </h3>
                <p className="mt-5 max-w-md text-base leading-8 text-slate-600">
                  Entrepreneur and business leader associated with Anjanaaim India Pvt. Ltd., Bhopal Basseel Company,
                  A2Z LLP, A12 International LLP, Author Selin Buss Company, and Bharat Jan Kalyan Yojna.
                </p>
                <div className="mt-6 rounded-[1.5rem] bg-slate-50 p-5">
                  <span className="rounded-full bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                    Leadership Highlights
                  </span>
                  <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                    <li>Multi-sector business profile across infrastructure, trading, food products, and services.</li>
                    <li>Focus on reliable partnerships, project readiness, and disciplined coordination.</li>
                    <li>New India focused vision combining business growth with socially conscious initiatives.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
