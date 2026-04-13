import { useEffect, useState } from "react";
import { navLinks } from "../data/siteContent";
import { Icon } from "./Icon";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "text-sm font-medium text-slate-700 transition hover:text-[color:var(--accent)]";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/60 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/assets/aim-logo.png"
            alt="Anjana Aim India Company logo"
            className="h-12 w-12 rounded-full border border-amber-200/70 object-cover shadow-sm"
          />
          <div>
            <p className="font-heading text-lg font-semibold text-[color:var(--primary)]">
              Anjana Aim India
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Company</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`${linkClass} inline-flex items-center gap-2`}
                  aria-expanded={activeDropdown === link.href}
                >
                  <span>{link.label}</span>
                  <Icon
                    name="chevron"
                    className={`h-4 w-4 transition ${activeDropdown === link.href ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`absolute left-0 top-full mt-4 w-52 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-all duration-200 ${
                    activeDropdown === link.href
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0"
                  }`}
                >
                  {link.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[color:var(--accent)]"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            )
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="/#contact" className="btn-primary">
            Get in Touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--primary)] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-[color:var(--border)] bg-white px-4 py-4 shadow-xl shadow-slate-900/5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.href} className="flex flex-col gap-2">
                <a
                  href={link.href}
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
                {link.children ? (
                  <div className="ml-4 rounded-2xl border border-slate-200 bg-slate-50 p-2">
                    {link.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-[color:var(--accent)]"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <a href="/#contact" className="btn-primary mt-2 text-center" onClick={() => setOpen(false)}>
              Get in Touch
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
