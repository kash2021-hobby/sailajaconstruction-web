import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Home, ArrowRight, Building2, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { HeroCurve } from "@/components/HeroCurve";
import { CtaBand } from "@/components/site/PageHero";
import { fadeUp, slideLeft, slideRight, staggerFast, scaleFade } from "@/lib/animations";
import { useIsMobile } from "@/hooks/use-mobile";

export const Route = createFileRoute("/projects/sunshine-residency")({
  head: () => ({
    meta: [
      { title: "Sailaja's Sunshine Residency — Completed Residential Project in Guwahati | Sailaja Constructions" },
      { name: "description", content: "Explore Sunshine Residency — a completed residential project by Sailaja Constructions in Guwahati offering quality apartments." },
      { property: "og:title", content: "Sailaja's Sunshine Residency — Elegant Residential Living in Guwahati" },
      { property: "og:description", content: "A completed residential development offering thoughtfully designed apartments in Guwahati, Assam." },
      { property: "og:url", content: "/projects/sunshine-residency" },
    ],
    links: [{ rel: "canonical", href: "/projects/sunshine-residency" }],
  }),
  component: ProjectDetailPage,
});

const highlights = [
  { icon: MapPin, label: "Location", value: "Guwahati, Assam [TODO: Add specific locality]" },
  { icon: CheckCircle2, label: "Status", value: "Ready to Move" },
];

const specs = [
  { label: "Project Type", value: "Residential" },
  { label: "Total Units per Floor", value: "4 (Unit A, B, C, D)" },
  { label: "Location", value: "Guwahati, Assam [TODO: Add specific locality]" },
  { label: "Status", value: "Completed (Ready to Move)" },
  { label: "RERA Number", value: "[TODO: Add if available]" },
  { label: "Total Area / Configuration", value: "[TODO: Add if available]" },
];

const unitTypeA = {
  type: "UNIT A",
  config: "[TODO: Confirm BHK from brochure]",
  bua: "790 Sq.Ft",
  sbua: "988 Sq.Ft",
  dimensions: "[TODO: Add from brochure]",
};

const unitTypeB = {
  type: "UNIT B",
  config: "[TODO: Confirm BHK from brochure]",
  bua: "733 Sq.Ft",
  sbua: "916 Sq.Ft",
  dimensions: "[TODO: Add from brochure]",
};

const unitTypeC = {
  type: "UNIT C",
  config: "[TODO: Confirm BHK from brochure]",
  bua: "[TODO: Add from brochure]",
  sbua: "[TODO: Add from brochure]",
  dimensions: "[TODO: Add from brochure]",
};

// TODO: BUA/SBUA values were unclear in source — verify before
// publishing as these numbers seemed inconsistent
const unitTypeD = {
  type: "UNIT D",
  config: "[TODO: Confirm BHK from brochure]",
  bua: "[TODO: Confirm — possibly 766 Sq.Ft but verify]",
  sbua: "[TODO: Confirm — possibly 583 Sq.Ft but verify; SBUA is typically larger than BUA]",
  dimensions: "[TODO: Add from brochure]",
};

const allUnits = [unitTypeA, unitTypeB, unitTypeC, unitTypeD];

// TODO: Confirm if Modular Kitchen, Garden, and Gym are also
// available — currently only 5 features visible in source
const keyFeatures = [
  "Vastu-Compliant Layout",
  "24/7 Water & Electricity",
  "CCTV Surveillance",
  "High-Speed Elevators",
  "Generator",
];

function Img({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className={`${className} bg-[var(--soft-gray)] border border-[var(--border)]`} />;
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />;
}

function Compass() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100" className="max-w-[80px] md:max-w-[120px]">
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/30" />
      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/15" />
      <line x1="50" y1="4" x2="50" y2="96" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/20" />
      <line x1="4" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/20" />
      <polygon points="50,6 44,28 56,28" fill="var(--primary)" opacity="0.9" />
      <polygon points="50,94 44,72 56,72" fill="currentColor" opacity="0.3" />
      <text x="50" y="14" textAnchor="middle" fill="var(--primary)" fontWeight="800" fontSize="16" fontFamily="Montserrat">N</text>
      <text x="50" y="93" textAnchor="middle" fill="currentColor" fontWeight="600" fontSize="13" opacity="0.5" fontFamily="Montserrat">S</text>
      <text x="12" y="55" textAnchor="middle" fill="currentColor" fontWeight="600" fontSize="13" opacity="0.5" fontFamily="Montserrat">W</text>
      <text x="88" y="55" textAnchor="middle" fill="currentColor" fontWeight="600" fontSize="13" opacity="0.5" fontFamily="Montserrat">E</text>
    </svg>
  );
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
                COMPLETED PROJECT
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
                Sailaja's<br />Sunshine Residency
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/80 font-semibold">
                Elegant Residential Living in the Heart of Guwahati
              </p>
              <p className="mt-3 text-sm md:text-base text-white/65 leading-relaxed max-w-xl">
                Welcome to Sunshine Residency — an elegant residential development by Sailaja Construction in the heart of Guwahati. Thoughtfully designed apartments offering comfort, modern amenities, and quality construction.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="btn-primary w-full sm:w-auto justify-center min-h-[48px]"
                >
                  Enquire Now <ArrowRight size={16} />
                </Link>
                <a
                  href="#"
                  className="btn-outline w-full sm:w-auto justify-center min-h-[48px]"
                >
                  View Gallery
                </a>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              variants={reduced ? undefined : { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {/*
                TODO: Add sunshine-residency hero image to src/assets/sunshineresidencyimg/
              */}
              <div className="w-full aspect-[4/3] rounded-lg shadow-2xl bg-[var(--soft-gray)] border border-[var(--border)] flex items-center justify-center">
                <div className="text-center p-4">
                  <Building2 size={48} className="mx-auto text-muted-foreground/40 mb-2" />
                  <p className="text-xs text-muted-foreground/60 font-semibold">Building Image — TODO: Add sunshine-residency hero image to src/assets/sunshineresidencyimg/</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <HeroCurve />
      </section>

      {/* ─── SECTION 2: PROPERTY SUMMARY ─── */}
      <section className="relative z-10 -mt-6 md:-mt-10 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-lg mx-auto"
            variants={reduced ? undefined : staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
          >
            {highlights.map((h) => (
              <motion.div
                key={h.label}
                variants={reduced ? undefined : fadeUpMobile}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white shadow-lg rounded-lg p-3 md:p-4 flex flex-col items-center text-center border-t-2 border-[var(--primary)]"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--primary)] flex items-center justify-center rounded-full mb-2">
                  <h.icon className="text-[var(--charcoal)]" size={isMobile ? 18 : 22} />
                </div>
                <div className="text-xs md:text-sm font-bold text-[var(--charcoal)]" style={{ fontFamily: "Montserrat" }}>
                  {h.value}
                </div>
                <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                  {h.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 3: ABOUT THE PROJECT ─── */}
      <section className="py-12 md:py-20 px-5 lg:px-8">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            variants={reduced ? undefined : slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="eyebrow">About the Project</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]">
              About the Project
            </h2>
            <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              Sailaja's Sunshine Residency is an elegant residential development crafted by Sailaja Construction in the heart of Guwahati. Featuring thoughtfully designed apartments with Vastu-compliant layouts, modern amenities, and quality construction, the project offers comfortable and contemporary living in a well-connected neighborhood.
            </p>
          </motion.div>
          <motion.div
            variants={reduced ? undefined : slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white border border-[var(--border)] rounded-lg p-5 md:p-8 shadow-lg"
          >
            <h3 className="text-lg md:text-xl font-black text-[var(--charcoal)] mb-5" style={{ fontFamily: "Montserrat" }}>Project Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {specs.map((s) => (
                <div key={s.label} className="border-b border-[var(--border)] pb-3">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                  <div className="text-sm md:text-base font-bold text-[var(--charcoal)] mt-0.5">{s.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 4: UNIT CONFIGURATIONS ─── */}
      <section className="py-12 md:py-20 px-5 lg:px-8 bg-[var(--soft-gray)]">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
            variants={reduced ? undefined : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="eyebrow">Unit Configurations</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]">
              Choose Your Perfect Home
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {allUnits.map((unit, idx) => (
              <motion.div
                key={unit.type}
                variants={reduced ? undefined : fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                className="bg-white border border-[var(--border)] p-5 md:p-8 hover:shadow-xl transition"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="eyebrow text-xs">{unit.type}</div>
                    <div className="text-sm md:text-base font-bold text-[var(--charcoal)] mt-1">{unit.config}</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1">BUA: {unit.bua} | SBUA: {unit.sbua}</div>
                  </div>
                </div>

                <div className="mb-5 bg-white border border-[var(--border)] rounded-lg p-2 shadow-sm">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-[var(--soft-gray)] to-white flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-xs text-muted-foreground/60 font-semibold">{unit.type} Floor Plan — TODO: Add {["unit-a-plan", "unit-b-plan", "unit-c-plan", "unit-d-plan"][idx]}.jpg</p>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-xs font-bold text-[var(--charcoal)]">{unit.type} Floor Plan — TODO: Add {["unit-a-plan", "unit-b-plan", "unit-c-plan", "unit-d-plan"][idx]}.jpg</div>
                  </div>
                </div>

                <div className="text-xs md:text-sm text-muted-foreground italic">
                  Room dimensions: {unit.dimensions}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: FLOOR PLANS ─── */}
      <section id="floor-plans" className="py-12 md:py-20 px-5 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
            variants={reduced ? undefined : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="eyebrow">Floor Plans</span>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl text-[var(--charcoal)]">
              Thoughtfully Designed Layouts
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Typical First Floor Plan showing all 4 units
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              variants={reduced ? undefined : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white border border-[var(--border)] rounded-lg p-2 md:p-4 shadow-lg"
            >
              <div className="text-xs font-bold text-[var(--charcoal)] uppercase tracking-wider mb-2 text-center">
                TYPICAL FIRST FLOOR PLAN
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-xs text-muted-foreground/60 font-semibold">Typical First Floor Plan — TODO: Add typical-first-floor-plan.jpg</p>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <div className="text-[10px] text-muted-foreground">Tap to zoom</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 flex flex-col items-center"
            variants={reduced ? undefined : scaleFade}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <Compass />
            <div className="text-[10px] md:text-xs text-muted-foreground mt-2 text-center">
              Compass orientation for floor plan
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 6: KEY FEATURES ─── */}
      <section className="py-12 md:py-20 px-5 lg:px-8 bg-[var(--soft-gray)]">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
            variants={reduced ? undefined : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="eyebrow">Amenities</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]">
              Key Features
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Quality features designed for comfortable living.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto"
            variants={reduced ? undefined : staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
          >
            {keyFeatures.map((feature) => (
              <motion.div
                key={feature}
                variants={reduced ? undefined : fadeUpMobile}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white border border-[var(--border)] p-4 md:p-5 flex items-center gap-3 hover:shadow-lg transition"
              >
                <CheckCircle2 className="text-[var(--primary)] shrink-0" size={isMobile ? 20 : 24} />
                <span className="text-sm md:text-base font-bold text-[var(--charcoal)]" style={{ fontFamily: "Montserrat" }}>
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 7: LOCATION MAP ─── */}
      <section className="py-12 md:py-20 px-5 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-8 md:mb-10"
            variants={reduced ? undefined : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="eyebrow">Location</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]">
              Find Us in Guwahati
            </h2>
          </motion.div>

          <motion.div
            variants={reduced ? undefined : scaleFade}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            {/*
              TODO: Confirm exact address for Sunshine Residency
              The pin location is approximate until exact street address is provided.
            */}
            <iframe
              src="https://maps.google.com/maps?q=Sailaja%20Sunshine%20Residency%20Guwahati%20Assam&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height={isMobile ? 300 : 400}
              className="md:h-[400px] lg:h-[500px]"
              style={{ border: 0, borderRadius: "20px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sailaja's Sunshine Residency Location"
            />
          </motion.div>

          <motion.div
            className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            variants={reduced ? undefined : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <MapPin className="text-[var(--primary)] shrink-0" size={20} />
              <span className="text-sm md:text-base text-[var(--charcoal)] font-semibold">
                Sailaja's Sunshine Residency, Guwahati, Assam [TODO: Add specific street address]
              </span>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Sailaja+Sunshine+Residency+Guwahati"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto justify-center min-h-[48px]"
            >
              Get Directions <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 8: CTA ─── */}
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
                Interested in Sailaja's<br className="md:hidden" /> Sunshine Residency?
              </h3>
              <p className="mt-2 text-sm md:text-base text-[var(--charcoal)]/80 max-w-lg">
                Get in touch with us today for site visits, pricing, and more details.
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
