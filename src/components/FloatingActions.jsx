import { useEffect, useState } from "react";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 420);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/917067038682?text=Hello%20Anjana%20Aim%20India%20Company,%20I%20want%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-500/30 transition hover:-translate-y-1 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M20.52 3.48A11.77 11.77 0 0 0 12.14 0C5.57 0 .24 5.33.24 11.9c0 2.1.55 4.16 1.6 5.97L0 24l6.31-1.8a11.88 11.88 0 0 0 5.83 1.49h.01c6.57 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.53-8.31ZM12.15 21.7h-.01a9.82 9.82 0 0 1-5-1.37l-.36-.22-3.75 1.07 1-3.65-.24-.37a9.85 9.85 0 0 1-1.52-5.25c0-5.43 4.42-9.85 9.87-9.85 2.63 0 5.1 1.02 6.95 2.87a9.79 9.79 0 0 1 2.9 6.98c0 5.44-4.43 9.79-9.84 9.79Zm5.4-7.35c-.3-.15-1.76-.87-2.03-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.34.22-.64.08-.3-.15-1.28-.47-2.44-1.48-.91-.82-1.52-1.83-1.7-2.13-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.66-1.6-.91-2.2-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.53.08-.8.38-.27.3-1.03 1-1.03 2.44 0 1.44 1.06 2.84 1.2 3.03.15.2 2.08 3.17 5.03 4.44.7.3 1.25.48 1.68.61.7.22 1.34.19 1.84.11.56-.08 1.76-.72 2-.42.25-.3.25-1.4.17-1.55-.07-.15-.27-.22-.56-.37Z" />
        </svg>
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-24 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[color:var(--primary)] text-white shadow-xl shadow-slate-900/20 transition ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
        }`}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2" aria-hidden="true">
          <path d="m6 14 6-6 6 6" />
        </svg>
      </button>
    </>
  );
}
