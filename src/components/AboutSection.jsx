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
              description="Anjana Aim India Company is a diversified business focused on construction, rod supply, land development, wind energy projects, solar energy projects, and labor contracting. We are committed to delivering dependable project execution, quality resources, and professional service support across infrastructure and energy sectors."
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
          <div className="relative rounded-[2rem] border border-[color:var(--border)] bg-white p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#f7d92c]">
                <img
                  src="/assets/founder-ishwar-singh-anjana.webp"
                  alt="Founder Ishwar Singh Anjana"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center p-2">
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
                  Entrepreneur and business leader driving Anjana Aim India Company with a practical focus on project
                  delivery, dependable support, and long-term business growth across infrastructure and energy sectors.
                </p>
                <div className="mt-6 rounded-[1.5rem] bg-slate-50 p-5">
                  <span className="rounded-full bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                    Leadership Highlights
                  </span>
                  <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                    <li>Strong entrepreneurial approach to business development and execution support.</li>
                    <li>Focus on reliable partnerships, project readiness, and disciplined coordination.</li>
                    <li>Commitment to quality service and expanding capability across multiple sectors.</li>
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
