import { contactInfo, footerServices, navLinks } from "../data/siteContent";

export function Footer() {
  return (
    <footer className="bg-[color:var(--primary)] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/assets/aim-logo.png"
              alt="Anjana Aim India Company logo"
              className="h-14 w-14 rounded-full border border-white/15 object-cover"
            />
            <div>
              <p className="font-heading text-xl font-semibold">Anjana Aim India Company</p>
              <p className="mt-1 text-sm text-slate-300">Determined to win with dependable execution.</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            Diversified project support across construction, infrastructure, land development, renewable energy,
            and labor contracting.
          </p>
        </div>

        <div>
          <p className="font-heading text-lg font-semibold">Quick Links</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-lg font-semibold">Services</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-lg font-semibold">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {contactInfo.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition hover:text-white">
                  {item.value}
                </a>
              </li>
            ))}
            <li>GSTN: 23BUSPA3622H3ZT</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Anjana Aim India Company. All rights reserved.</p>
          <p>Built for credibility, clarity, and business growth.</p>
        </div>
      </div>
    </footer>
  );
}
