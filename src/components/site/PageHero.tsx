import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle?: string }) {
  return (
    <section className="relative bg-[var(--charcoal)] text-white pt-36 pb-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,184,0,0.15) 0%, transparent 50%), repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 24px)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="inline-block px-4 py-1 border-2 border-[var(--primary)] text-[var(--primary)] text-xs font-bold tracking-[0.25em] uppercase mb-6" style={{ fontFamily: "Montserrat" }}>
          {eyebrow}
        </span>
        <h1 className="text-4xl md:text-6xl font-black leading-tight">{title}</h1>
        {subtitle && <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-[var(--charcoal)] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="bg-[var(--primary)] p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-xs font-bold tracking-[0.25em] uppercase text-[var(--charcoal)]/80 mb-2" style={{ fontFamily: "Montserrat" }}>
              Ready to Start Your Project?
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[var(--charcoal)] leading-tight">
              From Idea to Reality,<br />Let's Begin.
            </h3>
          </div>
          <a href="/contact" className="inline-flex items-center justify-center bg-[var(--charcoal)] text-white px-8 py-4 font-bold uppercase tracking-wider text-sm border-2 border-[var(--charcoal)] hover:bg-transparent hover:text-[var(--charcoal)] transition" style={{ fontFamily: "Montserrat" }}>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}