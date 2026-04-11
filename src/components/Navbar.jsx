import { useEffect, useState } from "react";
import { navLinks } from "../data/siteContent";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <a href="#home" className="flex items-center gap-3">
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
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary">
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
              <a
                key={link.href}
                href={link.href}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-2 text-center" onClick={() => setOpen(false)}>
              Get in Touch
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
