export function SectionIntro({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="inline-flex rounded-full border border-[color:var(--border)] bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)] shadow-sm">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-[color:var(--primary)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}
