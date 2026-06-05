import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Maximize, Clock, Home, ArrowRight, Building2, Layout, ShowerHead, CookingPot, DoorOpen, Wind, PaintBucket, Droplet, Zap, ExternalLink, ShieldCheck } from "lucide-react";
import { HeroCurve } from "@/components/HeroCurve";
import { CtaBand } from "@/components/site/PageHero";
import { fadeUp, slideLeft, slideRight, staggerFast, staggerMedium, scaleFade } from "@/lib/animations";
import { useIsMobile } from "@/hooks/use-mobile";

import heroImage from "@/assets/madhabmansionimg/madhobmansion.webp";
import groundFloorPlanImage from "@/assets/madhabmansionimg/groundfloorplan.webp";
import typicalFloorPlanImage from "@/assets/madhabmansionimg/typicalfloorpplan.webp";
import parkingPlanImage from "@/assets/madhabmansionimg/parkingplan.webp";

export const Route = createFileRoute("/projects/madhab-mansion")({
  head: () => ({
    meta: [
      { title: "Sailaja's Madhab Mansion — Elegant 2 & 3BHK in Panjabari, Guwahati | Sailaja Constructions" },
      { name: "description", content: "Explore Sailaja's Madhab Mansion — a residential project at Panjabari, Guwahati offering 2 & 3BHK apartments with quality construction." },
      { property: "og:title", content: "Sailaja's Madhab Mansion — Elegant 2 & 3BHK Residences at Panjabari, Guwahati" },
      { property: "og:description", content: "A residential development offering thoughtfully designed 2 & 3BHK apartments at Panjabari, Guwahati." },
      { property: "og:url", content: "/projects/madhab-mansion" },
    ],
    links: [{ rel: "canonical", href: "/projects/madhab-mansion" }],
  }),
  component: ProjectDetailPage,
});

const propSummary = [
  { icon: MapPin, label: "Location", value: "Panjabari, Guwahati" },
  { icon: Maximize, label: "Area", value: "759 – 1072 Sq.Ft (BUA)" },
  { icon: Clock, label: "Status", value: "Completed" },
  { icon: Home, label: "Type", value: "2 & 3 BHK Apartment" },
];

const specs = [
  { label: "Project Type", value: "Residential" },
  { label: "Configuration", value: "2 & 3 BHK" },
  { label: "Floors", value: "1st – 3rd (Typical)" },
  { label: "Units Per Floor", value: "3 (A, B, C)" },
  { label: "BUA Range", value: "759 – 1072 Sq.Ft" },
  { label: "Location", value: "Panjabari, Guwahati" },
  { label: "Status", value: "Completed" },
];

const unitArooms: [string, string][] = [
  ["Master Bedroom", '~11\'10" × 14\'5"'],
  ["Bedroom 2", '~11\'10" × 12\'6"'],
  ["Bedroom 3", '~11\'10" × 11\'10"'],
  ["Drawing cum Dining", '~11\'2" × 26\'1"'],
  ["Kitchen", '~11\'10" × 6\'5"'],
  ["Toilet", '~8\'6" × 5\'4"'],
  ["Dress", '~6\'11" × 5\'4"'],
  ["Balcony", '~12\'2" × 3\'11"'],
];

const unitBrooms: [string, string][] = [
  ["Master Bedroom", '~13\'9" × 13\'3"'],
  ["Bedroom 2", '~13\'9" × 9\'10"'],
  ["Bedroom 3", '~9\'10" × 9\'10"'],
  ["Drawing cum Dining", '~26\'0" × 11\'2"'],
  ["Kitchen", '~10\'0" × 6\'5"'],
  ["Toilet 1", '~6\'11" × 5\'5"'],
  ["Toilet 2", '~6\'11" × 5\'5"'],
  ["Toilet 3", '~8\'9" × 4\'11"'],
  ["Balcony 1", '~6\'11" × 3\'11"'],
  ["Balcony 2", '~7\'9" × 4\'11"'],
];

const unitCrooms: [string, string][] = [
  ["Master Bedroom", '~9\'10" × 13\'3"'],
  ["Bedroom 2", '~11\'10" × 9\'10"'],
  ["Drawing cum Dining", '~24\'7" × 11\'10"'],
  ["Kitchen", '~12\'10" × 6\'7"'],
  ["Toilet 1", '~6\'11" × 4\'9"'],
  ["Toilet 2", '~6\'11" × 4\'9"'],
  ["Balcony 1", '~11\'10" × 4\'11"'],
  ["Balcony 2", '~4\'11" × 3\'11"'],
];

const specCategories = [
  {
    title: "Structure",
    icon: Building2,
    items: [
      "R.C.C. seismic-resistant frame structure as per I.S. code of practice.",
    ],
  },
  {
    title: "Floors",
    icon: Layout,
    items: [
      "Vitrified flooring 600×600mm in drawing, dining, bedrooms, and kitchen.",
      "Antiskid ceramic tiles 300×300mm in bathrooms.",
    ],
  },
  {
    title: "Toilet",
    icon: ShowerHead,
    items: [
      "Concealed CPVC plumbing and sanitary system.",
      "White sanitary ware with quality water supply fittings.",
      "Glazed wall tiles 7 ft high.",
    ],
  },
  {
    title: "Kitchen",
    icon: CookingPot,
    items: [
      "Marble/Granite kitchen slab with wall tiles two feet above.",
      "Stainless steel sink with quality CP water supply fittings.",
    ],
  },
  {
    title: "Doors",
    icon: DoorOpen,
    items: [
      "Waterproof flush doors throughout.",
    ],
  },
  {
    title: "Windows",
    icon: Wind,
    items: [
      "Plain aluminum sliding windows with grill.",
    ],
  },
  {
    title: "Painting",
    icon: PaintBucket,
    items: [
      "Internal walls finished with POP.",
      "External walls painted with quality cement paint as per builder's choice.",
    ],
  },
  {
    title: "Water Supply",
    icon: Droplet,
    items: [
      "24 hours water supply ensured with overhead tank.",
    ],
  },
  {
    title: "Electrical",
    icon: Zap,
    items: [
      "Concealed wiring with modular switches.",
    ],
  },
];

const paymentMilestones = [
  { step: "01", title: "Booking Amount", percent: "₹5 Lakhs", detail: "" },
  { step: "02", title: "Agreement / Foundation", percent: "20%", detail: "Booking adjusted" },
  { step: "03", title: "1st Slab Casting", percent: "15%", detail: "" },
  { step: "04", title: "2nd Slab Casting", percent: "15%", detail: "" },
  { step: "05", title: "3rd Slab Casting", percent: "15%", detail: "" },
  { step: "06", title: "4th Slab Casting", percent: "15%", detail: "" },
  { step: "07", title: "At the time of Wall Casting", percent: "15%", detail: "" },
  { step: "08", title: "At the time of Hand Over", percent: "5%", detail: "" },
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
                Sailaja's<br />Madhab Mansion
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/80 font-semibold">
                Elegant 2 & 3 BHK Residences in Panjabari, Guwahati
              </p>
              <p className="mt-3 text-sm md:text-base text-white/65 leading-relaxed max-w-xl">
                Welcome to Madhab Mansion — an elegant residential development by Sailaja Construction in Panjabari, Guwahati. Thoughtfully designed 2 & 3 BHK apartments with R.C.C. seismic-resistant construction, premium finishes, and modern amenities.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="btn-primary w-full sm:w-auto justify-center min-h-[48px]"
                >
                  Enquire Now <ArrowRight size={16} />
                </Link>
                <a
                  href="#floor-plans"
                  className="btn-outline w-full sm:w-auto justify-center min-h-[48px]"
                >
                  View Floor Plan
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
              <div className="w-full aspect-[4/3] rounded-lg shadow-2xl bg-[var(--soft-gray)] overflow-hidden">
                <Img src={heroImage} alt="Sailaja's Madhab Mansion" className="w-full h-full object-cover" />
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
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
            variants={reduced ? undefined : staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
          >
            {propSummary.map((item) => (
              <motion.div
                key={item.label}
                variants={reduced ? undefined : fadeUpMobile}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white shadow-lg rounded-lg p-3 md:p-4 flex flex-col items-center text-center border-t-2 border-[var(--primary)]"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--primary)] flex items-center justify-center rounded-full mb-2">
                  <item.icon className="text-[var(--charcoal)]" size={isMobile ? 18 : 22} />
                </div>
                <div className="text-xs md:text-sm font-bold text-[var(--charcoal)]" style={{ fontFamily: "Montserrat" }}>
                  {item.value}
                </div>
                <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                  {item.label}
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
              Elegant 2 & 3BHK Living at Panjabari, Guwahati
            </h2>
            <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              Sailaja's Madhab Mansion is an elegant residential development crafted by Sailaja Construction in Panjabari, Guwahati. The project features thoughtfully designed 2 & 3 BHK apartments with R.C.C. seismic-resistant frame structure, vitrified flooring, modern modular kitchens, and premium finishes throughout. Unit C (2 BHK) is located on the ground floor, while Units A and B (both 3 BHK) occupy the typical floors (1st – 3rd).
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
            {[
              { type: "UNIT A — 3BHK", area: "BUA: 1072 Sq.Ft | SBUA: 1340 Sq.Ft", floor: "Floor: 1st – 3rd (Typical Floors)", rooms: unitArooms },
              { type: "UNIT B — 3BHK", area: "BUA: 1000 Sq.Ft | SBUA: 1250 Sq.Ft", floor: "Floor: 1st – 3rd (Typical Floors)", rooms: unitBrooms },
              { type: "UNIT C — 2BHK", area: "BUA: 759 Sq.Ft | SBUA: 1012 Sq.Ft", floor: "Floor: Ground Floor", rooms: unitCrooms },
            ].map((unit, idx) => (
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
                    <h3 className="text-base md:text-lg font-black text-[var(--charcoal)] mt-1">{unit.area}</h3>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1 font-medium">{unit.floor}</div>
                  </div>
                </div>



                <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                  {unit.rooms.map(([room, dim]) => (
                    <div key={room} className="flex justify-between items-center py-1.5 border-b border-[var(--border)]/50 text-xs md:text-sm">
                      <span className="text-muted-foreground">{room}</span>
                      <span className="font-bold text-[var(--charcoal)]" style={{ fontFamily: "Montserrat" }}>{dim}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: FLOOR PLANS (3 PLACEHOLDERS — COMPASS BELOW SITE/PARKING ONLY) ─── */}
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
              Floor & Site Plans
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Ground floor, typical residential floor, and site parking layouts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Ground Floor Plan */}
            <motion.div
              variants={reduced ? undefined : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col"
            >
              <div className="bg-white border border-[var(--border)] rounded-lg p-2 md:p-4 shadow-lg flex flex-col h-full">
                <div className="relative flex-1 min-h-[200px] md:min-h-[260px] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                  <Img src={groundFloorPlanImage} alt="Ground Floor Plan" className="absolute inset-0 w-full h-full object-contain p-2" />
                </div>
                <div className="mt-auto text-center pt-3 border-t border-[var(--border)]/30">
                  <div className="text-sm font-bold text-[var(--charcoal)]">GROUND FLOOR PLAN</div>
                  <div className="text-xs text-muted-foreground mt-1">Includes Unit C (2 BHK) and lift access</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Tap to zoom</div>
                </div>
              </div>
            </motion.div>

            {/* Typical Floor Plan */}
            <motion.div
              variants={reduced ? undefined : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col"
            >
              <div className="bg-white border border-[var(--border)] rounded-lg p-2 md:p-4 shadow-lg flex flex-col h-full">
                <div className="relative flex-1 min-h-[200px] md:min-h-[260px] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                  <Img src={typicalFloorPlanImage} alt="Typical Floor Plan 1st to 3rd" className="absolute inset-0 w-full h-full object-contain p-2" />
                </div>
                <div className="mt-auto text-center pt-3 border-t border-[var(--border)]/30">
                  <div className="text-sm font-bold text-[var(--charcoal)]">TYPICAL FLOOR PLAN (1st – 3rd)</div>
                  <div className="text-xs text-muted-foreground mt-1">Combined view showing Units A and B on each floor</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Tap to zoom</div>
                </div>
              </div>
            </motion.div>

            {/* Site / Parking Plan + Compass */}
            <motion.div
              variants={reduced ? undefined : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col"
            >
              <div className="bg-white border border-[var(--border)] rounded-lg p-2 md:p-4 shadow-lg flex flex-col h-full">
                <div className="relative flex-1 min-h-[200px] md:min-h-[260px] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                  <Img src={parkingPlanImage} alt="Site / Parking Plan" className="absolute inset-0 w-full h-full object-contain p-2" />
                </div>
                <div className="mt-auto text-center pt-3 border-t border-[var(--border)]/30">
                  <div className="text-sm font-bold text-[var(--charcoal)]">SITE / PARKING PLAN</div>
                  <div className="text-xs text-muted-foreground mt-1">Site layout with car parking and road access</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Tap to zoom</div>
                </div>
              </div>

              {/* Compass — only below Site/Parking Plan */}
              <motion.div
                className="mt-4 flex flex-col items-center"
                variants={reduced ? undefined : scaleFade}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              >
                <Compass />
                <div className="text-[10px] md:text-xs text-muted-foreground mt-2 text-center">
                  Compass orientation for site plan
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: SPECIFICATIONS ─── */}
      <section className="py-12 md:py-20 px-5 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
            variants={reduced ? undefined : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="eyebrow">Specifications</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]">
              Built with Quality, Down to the Last Detail
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Premium materials and construction standards throughout every apartment.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            variants={reduced ? undefined : staggerMedium}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
          >
            {specCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={reduced ? undefined : fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white border border-[var(--border)] p-5 md:p-6 hover:shadow-lg transition"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--primary)] flex items-center justify-center mb-4">
                  <cat.icon className="text-[var(--charcoal)]" size={isMobile ? 20 : 24} />
                </div>
                <h3 className="text-base md:text-lg font-black text-[var(--charcoal)] mb-3" style={{ fontFamily: "Montserrat" }}>
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="text-xs md:text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="text-[var(--primary)] mt-1 shrink-0">&#9632;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 7: PAYMENT TERMS ─── */}
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
            <span className="eyebrow">Payment Schedule</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]">
              Simple, Transparent Payment Terms
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              A clear, milestone-based payment plan designed for your convenience.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--primary)]/20 -translate-x-1/2" />

            <div className="space-y-4 md:space-y-6">
              {paymentMilestones.map((m, idx) => (
                <motion.div
                  key={m.step}
                  variants={reduced ? undefined : fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={sectionViewport}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="flex items-stretch gap-4 lg:gap-6">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--primary)] text-[var(--charcoal)] font-black flex items-center justify-center text-sm md:text-base"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        {m.step}
                      </div>
                      {idx < paymentMilestones.length - 1 && (
                        <div className="hidden lg:block flex-1 w-0.5 bg-[var(--primary)]/20 min-h-[24px]" />
                      )}
                    </div>

                    <div className="flex-1 bg-white border border-[var(--border)] p-4 md:p-6 shadow-sm mb-4 md:mb-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                        <div>
                          <h3 className="text-sm md:text-base font-black text-[var(--charcoal)]" style={{ fontFamily: "Montserrat" }}>
                            {m.title}
                          </h3>
                          {m.detail && (
                            <p className="text-xs md:text-sm text-muted-foreground mt-0.5">{m.detail}</p>
                          )}
                        </div>
                        <span className="text-xs md:text-sm font-bold text-[var(--primary)] whitespace-nowrap" style={{ fontFamily: "Montserrat" }}>
                          {m.percent}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: LOCATION MAP ─── */}
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
              Find Us at Panjabari, Guwahati
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
            <iframe
              src="https://maps.google.com/maps?q=Sailaja%20Madhab%20Mansion%20Panjabari%20Guwahati%20Assam&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height={isMobile ? 300 : 400}
              className="md:h-[400px] lg:h-[500px]"
              style={{ border: 0, borderRadius: "20px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sailaja's Madhab Mansion Location"
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
                Sailaja's Madhab Mansion, Panjabari, Guwahati
              </span>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Sailaja+Madhab+Mansion+Panjabari+Guwahati"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto justify-center min-h-[48px]"
            >
              Get Directions <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 9: RERA CERTIFICATE ─── */}
      <section className="py-12 md:py-20 px-5 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
            variants={reduced ? undefined : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="eyebrow">RERA Certified</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]">
              Our RERA Registration
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Sailaja's Madhab Mansion is officially registered under the Assam Real Estate Regulatory Authority (RERA), ensuring full transparency and compliance for our buyers.
            </p>
            <p className="mt-4 text-xs md:text-sm text-muted-foreground/60 italic">
              [TODO: Add RERA number when available — display prominently in an orange badge once provided]
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              variants={reduced ? undefined : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="bg-white border border-[var(--border)] rounded-lg p-2 md:p-4 shadow-lg">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-[var(--soft-gray)] to-white flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-xs text-muted-foreground/60 font-semibold">RERA Certificate — Page 1 — TODO: Add rera1.jpg to /src/assets/madhabmansionimg/</p>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-sm font-bold text-[var(--charcoal)]">RERA Certificate — Page 1</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Tap to zoom</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={reduced ? undefined : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              <div className="bg-white border border-[var(--border)] rounded-lg p-2 md:p-4 shadow-lg">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-[var(--soft-gray)] to-white flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-xs text-muted-foreground/60 font-semibold">RERA Certificate — Page 2 — TODO: Add rera2.jpg to /src/assets/madhabmansionimg/</p>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-sm font-bold text-[var(--charcoal)]">RERA Certificate — Page 2</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Tap to zoom</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: CTA ─── */}
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
                Interested in Sailaja's<br className="md:hidden" /> Madhab Mansion?
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
