import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Ruler, ArrowRight, Building2, MoveVertical, Layers, ExternalLink, Maximize2, Layout, DoorOpen, CookingPot, Zap, Droplets, CheckCircle2 } from "lucide-react";
import { HeroCurve } from "@/components/HeroCurve";
import { CtaBand } from "@/components/site/PageHero";
import { fadeUp, fadeIn, slideLeft, slideRight, staggerFast, staggerMedium, scaleFade } from "@/lib/animations";
import { useIsMobile } from "@/hooks/use-mobile";
import arupArcadiaImage from "@/assets/aruparcadiaimg/aruparcadia.webp";

export const Route = createFileRoute("/projects/arup-arcadia")({
  head: () => ({
    meta: [
      { title: "Sailaja's Arup Arcadia — Modern 3BHK in Six Mile, Guwahati | Sailaja Constructions" },
      { name: "description", content: "Explore Sailaja's Arup Arcadia — a premium ongoing residential project in Six Mile, Guwahati offering spacious 3BHK homes with modern amenities." },
      { property: "og:title", content: "Sailaja's Arup Arcadia — Modern 3BHK Living in Six Mile, Guwahati" },
      { property: "og:description", content: "A thoughtfully designed residential project offering spacious 3BHK homes with premium amenities in Six Mile, Guwahati." },
      { property: "og:url", content: "/projects/arup-arcadia" },
    ],
    links: [{ rel: "canonical", href: "/projects/arup-arcadia" }],
  }),
  component: ProjectDetailPage,
});

const highlights = [
  { icon: Building2, label: "Type", value: "Spacious 3BHK" },
  { icon: Ruler, label: "SUBA", value: "1,230 – 1,315 sq.ft" },
  { icon: MoveVertical, label: "Lift", value: "Lift Facility" },
  { icon: Layers, label: "Configuration", value: "G+3" },
  { icon: MapPin, label: "Location", value: "Six Mile, Guwahati" },
  { icon: Building2, label: "Quality", value: "Quality Construction" },
];

const specs = [
  { label: "Project Type", value: "Residential" },
  { label: "Configuration", value: "3BHK" },
  { label: "Units per Floor", value: "2 Units" },
  { label: "Floors", value: "G+3" },
  { label: "Location", value: "Six Mile, Guwahati" },
  { label: "Status", value: "Ongoing" },
];

const unitA = {
  type: "UNIT A — 3BHK",
  area: "1,315 sq.ft (SUBA)",
  desc: "A spacious 3BHK home featuring a generous master bedroom with attached dressing room, two additional bedrooms, an expansive living-cum-dining area, modern kitchen, and a private balcony — ideal for growing families who love their space.",
  rooms: [
    ["Master Bedroom", '10\'-4" × 15\'-0"'],
    ["Bedroom 2", '10\'-5" × 13\'-3"'],
    ["Bedroom 3", '10\'-5" × 13\'-4"'],
    ["Living cum Dining", '10\'-10" × 24\'-4"'],
    ["Kitchen", '10\'-4" × 6\'-7"'],
    ["Dressing Room", '5\'-8" × 5\'-0"'],
    ["Toilet 1", '10\'-4" × 4\'-7"'],
    ["Toilet 2", '6\'-6" × 5\'-0"'],
    ["Balcony", '10\'-10" × 4\'-7"'],
  ],
};

const unitB = {
  type: "UNIT B — 3BHK",
  area: "1,230 sq.ft (SUBA)",
  desc: "A smartly designed 3BHK home offering three well-proportioned bedrooms, a comfortable living-cum-dining space, a functional kitchen, and a balcony — perfect for families seeking comfort and efficiency in equal measure.",
  rooms: [
    ["Master Bedroom", '10\'-4" × 15\'-5"'],
    ["Bedroom 2", '10\'-5" × 12\'-0"'],
    ["Bedroom 3", '10\'-5" × 12\'-0"'],
    ["Living cum Dining", '10\'-10" × 23\'-10"'],
    ["Kitchen", '10\'-4" × 7\'-0"'],
    ["Toilet 1", '10\'-4" × 4\'-7"'],
    ["Toilet 2", '6\'-6" × 5\'-0"'],
    ["Balcony", '10\'-10" × 4\'-0"'],
  ],
};

// TODO: Update with real specs from project brochure
const specCategories = [
  {
    title: "Structure",
    icon: Building2,
    items: [
      'RCC framed structure with earthquake-resistant design',
      'High-grade cement and TMT steel reinforcement',
      'External walls: 8" thick / Internal walls: 4" thick',
    ],
  },
  {
    title: "Flooring",
    icon: Layout,
    items: [
      'Vitrified tiles in living, dining, and bedrooms',
      'Anti-skid ceramic tiles in toilets and balcony',
      'Marble or granite in common areas',
    ],
  },
  {
    title: "Doors & Windows",
    icon: DoorOpen,
    items: [
      'Main door: solid wood with premium finish',
      'Internal doors: engineered wood with quality fittings',
      'Windows: powder-coated aluminum with sliding glass',
    ],
  },
  {
    title: "Kitchen",
    icon: CookingPot,
    items: [
      'Granite countertop with stainless steel sink',
      'Glazed ceramic tile dado up to 2 ft above counter',
      'Provision for water purifier and exhaust fan',
    ],
  },
  {
    title: "Electrical",
    icon: Zap,
    items: [
      'Concealed copper wiring with MCB protection',
      'Modular switches (Anchor / Legrand or equivalent)',
      'Provision for AC, geyser, TV, internet in all rooms',
    ],
  },
  {
    title: "Plumbing & Sanitary",
    icon: Droplets,
    items: [
      'CPVC/UPVC concealed plumbing',
      'Branded sanitary fittings (Jaquar / Cera or equivalent)',
      'Hot and cold water provision in all toilets',
    ],
  },
];

// TODO: Update with real payment terms from project brochure
const paymentMilestones = [
  { step: "01", title: "On Booking", percent: "10%", detail: "Booking confirmation and agreement signing" },
  { step: "02", title: "On Agreement", percent: "15%", detail: "Registration of sale agreement" },
  { step: "03", title: "On Foundation Completion", percent: "15%", detail: "" },
  { step: "04", title: "On Plinth Completion", percent: "10%", detail: "" },
  { step: "05", title: "On Each Slab Casting", percent: "10% per slab", detail: "" },
  { step: "06", title: "On Brickwork Completion", percent: "10%", detail: "" },
  { step: "07", title: "On Flooring & Finishing", percent: "10%", detail: "" },
  { step: "08", title: "On Possession", percent: "Remaining balance", detail: "Plus registration & legal charges" },
];

const paymentNotes = [
  "All payments to be made via cheque/NEFT/RTGS in favor of Sailaja Constructions",
  "GST and other applicable taxes extra as per government norms",
  "Registration, stamp duty, and legal charges to be borne by the buyer",
  "Home loan assistance available through partner banks",
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
                ONGOING PROJECT
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
                Sailaja's<br />Arup Arcadia
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/80 font-semibold">
                Modern 3BHK Living in the Heart of Six Mile, Guwahati
              </p>
              <p className="mt-3 text-sm md:text-base text-white/65 leading-relaxed max-w-xl">
                A thoughtfully designed residential project offering spacious 3BHK homes with premium amenities, modern layouts, and the comfort your family deserves — perfectly located in Six Mile, Guwahati.
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
              <Img
                src={arupArcadiaImage}
                alt="Sailaja's Arup Arcadia"
                className="w-full aspect-[4/3] object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
        <HeroCurve />
      </section>

      {/* ─── SECTION 2: KEY HIGHLIGHTS ─── */}
      <section className="relative z-10 -mt-6 md:-mt-10 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
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
              Modern Living in Six Mile, Guwahati
            </h2>
            <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              Sailaja's Arup Arcadia is a premium residential project crafted for modern families who value space, comfort, and connectivity. Strategically located at Six Mile, Guwahati — one of the city's most well-connected neighborhoods — the project offers easy access to schools, hospitals, markets, and key business hubs. Each apartment is designed with thoughtful layouts, ample natural light, and quality finishes, making every home a place you'll be proud to call yours.
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
            {[unitA, unitB].map((unit, idx) => (
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
                    <h3 className="text-xl md:text-2xl font-black text-[var(--charcoal)] mt-1">{unit.area}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{unit.desc}</p>
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
              Typical 1<sup>st</sup> to 3<sup>rd</sup> Floor Plan
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-6 lg:gap-8">
            {/* Floor plan A */}
            <motion.div
              className="flex-1 max-w-lg mx-auto lg:mx-0"
              variants={reduced ? undefined : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="bg-white border border-[var(--border)] rounded-lg p-2 md:p-4 shadow-lg">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                  <Img
                    src="/images/projects/arup-arcadia/floor-plan-unit-a.jpg"
                    alt="Unit A Floor Plan - 1,315 sq.ft"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-sm font-bold text-[var(--charcoal)]">Unit A — 1,315 sq.ft</div>
                  <div className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
                    <Maximize2 size={12} /> Pinch to zoom
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Compass — centered on mobile, side on desktop */}
            <motion.div
              className="flex flex-col items-center justify-center order-first lg:order-none mb-4 lg:mb-0 lg:pt-12"
              variants={reduced ? undefined : scaleFade}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <Compass />
              <div className="text-[10px] md:text-xs text-muted-foreground mt-2 text-center">
                Compass orientation<br />for floor plans
              </div>
            </motion.div>

            {/* Floor plan B */}
            <motion.div
              className="flex-1 max-w-lg mx-auto lg:mx-0"
              variants={reduced ? undefined : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              <div className="bg-white border border-[var(--border)] rounded-lg p-2 md:p-4 shadow-lg">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                  <Img
                    src="/images/projects/arup-arcadia/floor-plan-unit-b.jpg"
                    alt="Unit B Floor Plan - 1,230 sq.ft"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-sm font-bold text-[var(--charcoal)]">Unit B — 1,230 sq.ft</div>
                  <div className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
                    <Maximize2 size={12} /> Pinch to zoom
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: SPECIFICATIONS ─── */}
      {/* TODO: Update with real specs from project brochure */}
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
              Premium materials and modern construction standards across every apartment.
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

      {/* ─── SECTION 7: TERMS OF PAYMENT ─── */}
      {/* TODO: Update with real payment terms from project brochure */}
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
            <span className="eyebrow">Payment Plan</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]">
              Simple, Transparent Payment Terms
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              A clear payment schedule designed for your convenience.
            </p>
          </motion.div>

          {/* Mobile: stacked cards — Desktop: stepped timeline */}
          <div className="relative">
            {/* Desktop connecting line */}
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
                    {/* Step badge */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--primary)] text-[var(--charcoal)] font-black flex items-center justify-center text-sm md:text-base"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        {m.step}
                      </div>
                      {/* Connecting line between badges on desktop */}
                      {idx < paymentMilestones.length - 1 && (
                        <div className="hidden lg:block flex-1 w-0.5 bg-[var(--primary)]/20 min-h-[24px]" />
                      )}
                    </div>

                    {/* Card content */}
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

          {/* Additional notes */}
          <motion.div
            className="mt-8 md:mt-10 bg-white border border-[var(--border)] p-5 md:p-8 shadow-sm"
            variants={reduced ? undefined : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h4 className="text-sm md:text-base font-black text-[var(--charcoal)] mb-4" style={{ fontFamily: "Montserrat" }}>
              Important Notes
            </h4>
            <ul className="space-y-2">
              {paymentNotes.map((note) => (
                <li key={note} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                  <CheckCircle2 size={14} className="text-[var(--primary)] shrink-0 mt-0.5" />
                  {note}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

      {/* ─── SECTION 8: LOCATION MAP ─── */}
      <section className="py-12 md:py-20 px-5 lg:px-8 bg-[var(--soft-gray)]">
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
              Find Us at Six Mile, Guwahati
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
              src="https://maps.google.com/maps?q=Arup%20Arcadia%20Six%20Mile%20Guwahati&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height={isMobile ? 300 : 400}
              className="md:h-[400px] lg:h-[500px]"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arup Arcadia Location"
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
                Sailaja's Arup Arcadia, Six Mile, Guwahati, Assam
              </span>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Arup+Arcadia+Six+Mile+Guwahati"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto justify-center min-h-[48px]"
            >
              Get Directions <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 9: CTA ─── */}
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
                Interested in Sailaja's<br className="md:hidden" /> Arup Arcadia?
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
