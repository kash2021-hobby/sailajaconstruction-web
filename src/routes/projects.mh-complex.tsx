import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Building2, Clock, Construction } from "lucide-react";
import { HeroCurve } from "@/components/HeroCurve";
import { CtaBand } from "@/components/site/PageHero";
import { fadeUp, scaleFade } from "@/lib/animations";
import { useIsMobile } from "@/hooks/use-mobile";

export const Route = createFileRoute("/projects/mh-complex")({
  head: () => ({
    meta: [
      { title: "MH Complex (RERA) — Premium Commercial Complex in Guwahati | Sailaja Constructions" },
      { name: "description", content: "Explore MH Complex (RERA) — an ongoing RERA-certified commercial project in Guwahati by Sailaja Constructions." },
      { property: "og:title", content: "MH Complex (RERA) — Premium Commercial Complex in Guwahati" },
      { property: "og:description", content: "A RERA-certified mixed-use commercial complex designed for modern businesses and retail spaces in Guwahati, Assam." },
      { property: "og:url", content: "/projects/mh-complex" },
    ],
    links: [{ rel: "canonical", href: "/projects/mh-complex" }],
  }),
  component: ProjectDetailPage,
});

function Img({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className={`${className} bg-[var(--soft-gray)] border border-[var(--border)]`} />;
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />;
}

function ProjectDetailPage() {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const sectionViewport = { once: true, amount: 0.2 as const };
  const animY = isMobile ? 20 : 30;

  const fadeUpMobile = { hidden: { opacity: 0, y: animY }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="overflow-x-hidden">
      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative bg-[var(--charcoal)] text-white pt-32 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,184,0,0.15) 0%, transparent 50%), repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 24px)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              variants={reduced ? undefined : fadeUpMobile}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span
                className="inline-block px-4 py-1.5 border-2 border-[var(--primary)] text-[var(--primary)] text-xs font-bold tracking-[0.25em] uppercase mb-5"
                style={{ fontFamily: "Montserrat" }}
              >
                ONGOING PROJECT
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
                MH Complex (RERA)
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/80 font-semibold">
                Premium Commercial Complex in Guwahati
              </p>
              <p className="mt-3 text-sm md:text-base text-white/65 leading-relaxed max-w-xl">
                A RERA-certified mixed-use commercial complex designed for modern businesses and retail spaces in Guwahati, Assam.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="btn-primary w-full sm:w-auto justify-center min-h-[48px]"
                >
                  Enquire Now <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              variants={reduced ? undefined : { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="w-full aspect-[4/3] rounded-lg shadow-2xl bg-[var(--soft-gray)] overflow-hidden flex items-center justify-center">
                <Building2 size={64} className="text-muted-foreground/30" />
              </div>
            </motion.div>
          </div>
        </div>
        <HeroCurve />
      </section>

      {/* ─── SECTION 2: UNDER CONSTRUCTION ─── */}
      <section className="relative z-10 -mt-6 md:-mt-10 px-4 sm:px-6 pb-12 md:pb-20">
        <div className="mx-auto max-w-3xl">
          <motion.div
            variants={reduced ? undefined : scaleFade}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[var(--primary)] flex items-center justify-center rounded-full mx-auto mb-6">
              <Construction size={isMobile ? 28 : 36} className="text-[var(--charcoal)]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--charcoal)] mb-4">
              Project Details Coming Soon
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
              The detailed information for <strong>MH Complex (RERA)</strong> is currently under preparation. We are working on finalizing the specifications, floor plans, and pricing details. Please check back soon or contact us for more information.
            </p>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock size={16} />
              <span>Estimated launch details — coming soon</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 3: CTA ─── */}
      <section className="bg-[var(--charcoal)] py-16">
        <div className="mx-auto max-w-6xl px-5">
          <motion.div
            className="bg-[var(--primary)] p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            variants={reduced ? undefined : scaleFade}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <div
                className="text-xs font-bold tracking-[0.25em] uppercase text-[var(--charcoal)]/80 mb-2"
                style={{ fontFamily: "Montserrat" }}
              >
                Interested?
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-[var(--charcoal)] leading-tight">
                Interested in MH Complex (RERA)?
              </h3>
              <p className="mt-2 text-sm md:text-base text-[var(--charcoal)]/80 max-w-lg">
                Get in touch with us today for early pricing, site visits, and more details.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[var(--charcoal)] text-white px-8 py-4 font-bold uppercase tracking-wider text-sm border-2 border-[var(--charcoal)] w-full md:w-auto min-h-[48px]"
              style={{ fontFamily: "Montserrat" }}
            >
              <span>Enquire Now</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
