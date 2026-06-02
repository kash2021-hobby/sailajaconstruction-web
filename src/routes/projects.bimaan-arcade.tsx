import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Home, ArrowRight, Building2, CheckCircle2, ExternalLink, Maximize } from "lucide-react";
import { HeroCurve } from "@/components/HeroCurve";
import { CtaBand } from "@/components/site/PageHero";
import { fadeUp, slideLeft, slideRight, staggerFast, scaleFade } from "@/lib/animations";
import { useIsMobile } from "@/hooks/use-mobile";

export const Route = createFileRoute("/projects/bimaan-arcade")({
  head: () => ({
    meta: [
      { title: "Sailaja's Bimaan Arcade — Completed Residential Project in Guwahati | Sailaja Constructions" },
      { name: "description", content: "Explore Bimaan Arcade — a completed residential project by Sailaja Constructions in Guwahati offering 2 & 3BHK apartments." },
      { property: "og:title", content: "Sailaja's Bimaan Arcade — Elegant Residential Living in Guwahati" },
      { property: "og:description", content: "A completed residential development offering thoughtfully designed 2 & 3BHK apartments in Guwahati, Assam." },
      { property: "og:url", content: "/projects/bimaan-arcade" },
    ],
    links: [{ rel: "canonical", href: "/projects/bimaan-arcade" }],
  }),
  component: ProjectDetailPage,
});

const highlights = [
  { icon: MapPin, label: "Location", value: "Guwahati, Assam [TODO: Add specific locality]" },
  { icon: Maximize, label: "Area", value: "1000+ Sq.Ft" },
  { icon: CheckCircle2, label: "Status", value: "Ready to Move" },
  { icon: Home, label: "Type", value: "2 & 3 BHK Apartment" },
];

const specs = [
  { label: "Project Type", value: "Residential" },
  { label: "Configuration", value: "2 & 3 BHK" },
  { label: "Area", value: "1000+ Sq.Ft" },
  { label: "Location", value: "Guwahati, Assam [TODO: Add specific locality]" },
  { label: "Status", value: "Completed (Ready to Move)" },
  { label: "RERA Number", value: "[TODO: Add if available]" },
];

const unitTypeA = {
  type: "UNIT TYPE A",
  config: "2 BHK",
  bua: "[TODO: Add from brochure]",
  sbua: "[TODO: Add from brochure]",
  dimensions: "[TODO: Add from brochure]",
};

const unitTypeB = {
  type: "UNIT TYPE B",
  config: "3 BHK",
  bua: "[TODO: Add from brochure]",
  sbua: "[TODO: Add from brochure]",
  dimensions: "[TODO: Add from brochure]",
};

const allUnits = [unitTypeA, unitTypeB];

const keyFeatures = [
  "Vastu-Compliant Layout",
  "Modular Kitchen",
  "24/7 Water & Electricity",
  "CCTV Surveillance",
  "High-Speed Elevators",
  "Garden",
  "Gym",
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
                Sailaja's<br />Bimaan Arcade
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/80 font-semibold">
                Elegant Residential Living in the Heart of Guwahati
              </p>
              <p className="mt-3 text-sm md:text-base text-white/65 leading-relaxed max-w-xl">
                Welcome to Bimaan Arcade — an elegant residential development by Sailaja Construction in the heart of Guwahati. Thoughtfully designed 2BHK and 3BHK apartments offering comfort, modern amenities, and quality construction.
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
                TODO: Add bimaan-arcade hero image to src/assets/bimaanarcadeimg/
              */}
              <div className="w-full aspect-[4/3] rounded-lg shadow-2xl bg-[var(--soft-gray)] border border-[var(--border)] flex items-center justify-center">
                <div className="text-center p-4">
                  <Building2 size={48} className="mx-auto text-muted-foreground/40 mb-2" />
                  <p className="text-xs text-muted-foreground/60 font-semibold">Building Image — TODO: Add bimaan-arcade hero image to src/assets/bimaanarcadeimg/</p>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
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
              Sailaja's Bimaan Arcade is an elegant residential development crafted by Sailaja Construction in the heart of Guwahati. Featuring thoughtfully designed 2BHK and 3BHK apartments with Vastu-compliant layouts, modern amenities, and quality construction, the project offers comfortable and contemporary living in a well-connected neighborhood.
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
                      <p className="text-xs text-muted-foreground/60 font-semibold">{unit.type} Floor Plan — TODO: Add {["unit-a-plan", "unit-b-plan"][idx]}.jpg</p>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-xs font-bold text-[var(--charcoal)]">{unit.type} Floor Plan — TODO: Add {["unit-a-plan", "unit-b-plan"][idx]}.jpg</div>
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
              Typical floor plan layout
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
                TYPICAL FLOOR PLAN
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-xs text-muted-foreground/60 font-semibold">Typical Floor Plan — TODO: Add typical-floor-plan.jpg</p>
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
              Premium amenities and thoughtful features designed for modern comfortable living.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
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
              TODO: Confirm exact address for Sailaja's Bimaan Arcade
              The pin location is approximate until exact street address is provided.
            */}
            <iframe
              src="https://maps.google.com/maps?q=Sailaja%20Bimaan%20Arcade%20Guwahati%20Assam&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height={isMobile ? 300 : 400}
              className="md:h-[400px] lg:h-[500px]"
              style={{ border: 0, borderRadius: "20px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sailaja's Bimaan Arcade Location"
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
                Sailaja's Bimaan Arcade, Guwahati, Assam [TODO: Add specific street address]
              </span>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Sailaja+Bimaan+Arcade+Guwahati"
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
                Interested in Sailaja's<br className="md:hidden" /> Bimaan Arcade?
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
