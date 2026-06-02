import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Ruler, ArrowRight, Building2, MoveVertical, Layers, ExternalLink, Layout, DoorOpen, CookingPot, Zap, Droplets, CheckCircle2, Award, HardHat, Paintbrush } from "lucide-react";
import { HeroCurve } from "@/components/HeroCurve";
import { CtaBand } from "@/components/site/PageHero";
import { fadeUp, fadeIn, slideLeft, slideRight, staggerFast, staggerMedium, scaleFade } from "@/lib/animations";
import { useIsMobile } from "@/hooks/use-mobile";
import heroImage from "@/assets/manabadobeimg/manabadobe.webp";
import unit1Plan from "@/assets/manabadobeimg/unit1.webp";
import unit2Plan from "@/assets/manabadobeimg/unit2.webp";
import unit3Plan from "@/assets/manabadobeimg/unit3.webp";
import unit4Plan from "@/assets/manabadobeimg/unit4.webp";
import groundFloorPlan from "@/assets/manabadobeimg/groundfloorplan.webp";
import typicalFloorPlan from "@/assets/manabadobeimg/1stto3rdfloorplann.webp";
import reraImage1 from "@/assets/manabadobeimg/rera1.webp";
import reraImage2 from "@/assets/manabadobeimg/rera2.webp";

const unitPlans = [unit1Plan, unit2Plan, unit3Plan, unit4Plan];

export const Route = createFileRoute("/projects/maanav-abode")({
  head: () => ({
    meta: [
      { title: "Sailaja's Maanav Abode — Elegant 3BHK in Beltola, Guwahati | Sailaja Constructions" },
      { name: "description", content: "Explore Sailaja's Maanav Abode — a RERA-certified ongoing residential project at Ranibagaan, Beltola, Guwahati offering spacious 3BHK apartments." },
      { property: "og:title", content: "Sailaja's Maanav Abode — Elegant 3BHK Residences at Ranibagaan, Beltola" },
      { property: "og:description", content: "A RERA-certified residential project offering thoughtfully designed 3BHK apartments at Ranibagaan, Beltola, Guwahati." },
      { property: "og:url", content: "/projects/maanav-abode" },
    ],
    links: [{ rel: "canonical", href: "/projects/maanav-abode" }],
  }),
  component: ProjectDetailPage,
});

const highlights = [
  { icon: Award, label: "Certification", value: "RERA Certified" },
  { icon: Building2, label: "Apartments", value: "3BHK Apartments" },
  { icon: HardHat, label: "Total Units", value: "4 Total Units (G+3)" },
  { icon: Ruler, label: "SBUA", value: "1175 – 1466 Sq.Ft" },
  { icon: MoveVertical, label: "Lift", value: "6 Passenger Capacity" },
  { icon: Layers, label: "Structure", value: "R.C.C. Seismic-Resistant" },
  { icon: MapPin, label: "Location", value: "Ranibagaan, Beltola" },
  { icon: CheckCircle2, label: "Parking", value: "Car Parking Available" },
];

const specs = [
  { label: "Project Type", value: "Residential" },
  { label: "Configuration", value: "3BHK" },
  { label: "Total Units", value: "4 (1 on Ground Floor + 3 on each of 1st-3rd floors)" },
  { label: "Floors", value: "G+3" },
  { label: "Location", value: "Ranibagaan, Beltola, Guwahati" },
  { label: "Status", value: "Ongoing" },
  { label: "RERA", value: "Certified" },
  { label: "Ground Floor", value: "Car Parking + Guard Room + Unit 4" },
];

const unit1 = {
  type: "UNIT 1 — 3BHK",
  area: "BUA: 1140.87 Sq.Ft | SBUA: 1426 Sq.Ft",
  rooms: [
    ["Bedroom 1", '11\' × 10\'2"'],
    ["Bedroom 2", "11' × 12'"],
    ["Bedroom 3", "11' × 11'"],
    ["Living", '12\'4" × 11\'6"'],
    ["Dining", '9\'2" × 15\''],
    ["Kitchen", "13' × 6'"],
    ["Toilet 1", '4\'5" × 10\'2"'],
    ["Toilet 2", "9' × 4'5\""],
    ["Balcony 1", '10\'2" × 4\''],
    ["Balcony 2", "5' × 7'5\""],
    ["Balcony 3", "5' × 7'7\""],
    ["Balcony 4", "5' × 8'10\""],
  ],
};

const unit2 = {
  type: "UNIT 2 — 3BHK",
  area: "BUA: 968.67 Sq.Ft | SBUA: 1210.83 Sq.Ft",
  rooms: [
    ["Bedroom 1", '11\' × 10\'2"'],
    ["Bedroom 2", "12' × 10'7\""],
    ["Bedroom 3", "11' × 10'6\""],
    ["Living", "10' × 12'"],
    ["Dining", '11\'3" × 7\'3"'],
    ["Kitchen", '9\'2" × 6\''],
    ["Toilet 1", '5\'9" × 4\'8"'],
    ["Toilet 2", '11\'1" × 4\'5"'],
    ["Balcony 1", "5' × 6'3\""],
    ["Balcony 2", "5' × 7'9\""],
    ["Balcony 3", '7\'4" × 5\'5"'],
  ],
};

const unit3 = {
  type: "UNIT 3 — 3BHK",
  area: "BUA: 1173.16 Sq.Ft | SBUA: 1466.45 Sq.Ft",
  rooms: [
    ['Bedroom 1', '11\'1" × 11\''],
    ['Bedroom 2', '13\'5" × 11\''],
    ['Bedroom 3', '11\'5" × 13\''],
    ['Living', '11\'9" × 11\'6"'],
    ['Dining', '12\'9" × 8\'1"'],
    ['Kitchen', '9\'7" × 7\''],
    ['Toilet 1', '7\' × 5\'7"'],
    ['Toilet 2', '9\' × 5\''],
    ['Balcony 1', '5\' × 6\'7"'],
    ['Balcony 2', '5\' × 7\'8"'],
    ['Balcony 3', '5\' × 8\'7"'],
    ['Balcony 4', '5\' × 8\'4"'],
  ],
};

const unit4 = {
  type: "UNIT 4 — 3BHK",
  area: "BUA: 940.36 Sq.Ft | SBUA: 1175.45 Sq.Ft",
  rooms: [
    ["Bedroom 1", "11' × 12'"],
    ["Bedroom 2", '10\'6" × 10\'2"'],
    ["Bedroom 3", '10\'10" × 10\'2"'],
    ["Living", '12\'4" × 10\'4"'],
    ["Dining", '7\'6" × 9\'3"'],
    ["Kitchen", '10\'6" × 6\''],
    ["Verandah", '7\'6" × 4\'4"'],
    ["Toilet 1", '4\'5" × 10\'2"'],
    ["Toilet 2", '7\'1" × 4\'5"'],
    ["Balcony", "4' × 6'7\""],
  ],
};

const specCategories = [
  {
    title: "Structure",
    icon: Building2,
    items: [
      "R.C.C. seismic resistant frame structure as per I.S. code of practice.",
    ],
  },
  {
    title: "Floors",
    icon: Layout,
    items: [
      "Vitrified flooring of size 600mm × 600mm in drawing and dining rooms, bedroom and kitchen.",
      "Antiskid ceramic tiles (300mm × 300mm) in bathroom.",
    ],
  },
  {
    title: "Toilet",
    icon: Droplets,
    items: [
      "Concealed CPVC plumbing and sanitary system.",
      "White color sanitary ware and best quality water supply fitting.",
      "Glazed wall tiles 7 ft on wall.",
    ],
  },
  {
    title: "Kitchen",
    icon: CookingPot,
    items: [
      "Marble/Granite kitchen slab and wall tiles two feet above slab.",
      "Stainless steel sinks with good quality CP water supply fitting.",
    ],
  },
  {
    title: "Doors",
    icon: DoorOpen,
    items: [
      "Water proof flush door.",
    ],
  },
  {
    title: "Windows",
    icon: Layout,
    items: [
      "Aluminum sliding windows with grill.",
    ],
  },
  {
    title: "Painting",
    icon: Paintbrush,
    items: [
      "Internal walls to be finished with POP.",
      "External walls to be painted with good quality cement paint as per builder's choice.",
    ],
  },
  {
    title: "Water Supply",
    icon: Droplets,
    items: [
      "Deep Tube borewell with submersible pump & Overhead tank & Ground water tank for water storage.",
    ],
  },
  {
    title: "Electrical",
    icon: Zap,
    items: [
      "Concealed wiring with modular switch.",
    ],
  },
  {
    title: "Lift & Staircase",
    icon: MoveVertical,
    items: [
      "1 lift with 6 passenger capacity and 1 staircase.",
    ],
  },
];

const paymentMilestones = [
  { step: "01", title: "Booking Amount", percent: "₹2 Lakhs", detail: "" },
  { step: "02", title: "Agreement / Foundation", percent: "20% + GST", detail: "Booking amount adjusted" },
  { step: "03", title: "1st Slab Casting", percent: "15% + GST", detail: "" },
  { step: "04", title: "2nd Slab Casting", percent: "15% + GST", detail: "" },
  { step: "05", title: "3rd Slab Casting", percent: "15% + GST", detail: "" },
  { step: "06", title: "4th Slab Casting", percent: "15% + GST", detail: "" },
  { step: "07", title: "Wall Casting", percent: "15% + GST", detail: "" },
  { step: "08", title: "Handover", percent: "5% + GST", detail: "" },
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
                ONGOING PROJECT &bull; RERA CERTIFIED
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
                Sailaja's<br />Maanav Abode
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/80 font-semibold">
                Elegant 3BHK Residences at Ranibagaan, Beltola, Guwahati
              </p>
              <p className="mt-3 text-sm md:text-base text-white/65 leading-relaxed max-w-xl">
                Welcome to Sailaja's Maanav Abode — a thoughtfully designed residential development in Ranibagaan, Beltola, Guwahati. Offering spacious 3BHK apartments built on a R.C.C. seismic-resistant frame structure, with modern specifications and quality construction by Sailaja Construction.
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
                src={heroImage}
                alt="Sailaja's Maanav Abode building exterior"
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
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
              Elegant 3BHK Living at Ranibagaan, Beltola
            </h2>
            <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              Sailaja's Maanav Abode is a RERA-certified residential project located at Ranibagaan, Beltola, Guwahati. The G+3 development features 4 well-designed 3BHK apartments — one on the ground floor and three typical units repeated across the 1st to 3rd floors. Built with R.C.C. seismic-resistant frame structure and premium specifications, every home is crafted to deliver lasting comfort, safety, and quality.
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
            {[unit1, unit2, unit3, unit4].map((unit, idx) => (
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
                  </div>
                </div>

                {/* Floor plan placeholder inside each unit card */}
                <div className="mb-5 bg-white border border-[var(--border)] rounded-lg p-2 shadow-sm">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-[var(--soft-gray)] to-white flex items-center justify-center">
                    <Img
                      src={unitPlans[idx]}
                      alt={`Unit ${idx + 1} — 3BHK floor plan`}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-xs font-bold text-[var(--charcoal)]">Unit {idx + 1} Floor Plan</div>

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
              Ground Floor & Typical 1<sup>st</sup>-3<sup>rd</sup> Floor Plans
            </h2>
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
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                  <Img
                    src={groundFloorPlan}
                    alt="Ground floor plan with parking and Unit 4"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-sm font-bold text-[var(--charcoal)]">Ground Floor Plan (Unit 4 + Parking)</div>

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
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                  <Img
                    src={typicalFloorPlan}
                    alt="Typical 1st to 3rd floor plan showing Units 1, 2, and 3"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-sm font-bold text-[var(--charcoal)]">Typical 1st to 3rd Floor Plan (Units 1, 2, 3)</div>

                </div>
              </div>
            </motion.div>
          </div>

          {/* Compass — below both plans */}
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
              Compass orientation for floor plans
            </div>
          </motion.div>
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
              Find Us at Ranibagaan, Beltola
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
              src="https://maps.google.com/maps?q=Sailaja%27s%20Manab%20Abode%20Ranibagaan%20Beltola%20Guwahati&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height={isMobile ? 300 : 400}
              className="md:h-[400px] lg:h-[500px]"
              style={{ border: 0, borderRadius: "20px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sailaja's Maanav Abode Location"
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
                Sailaja's Maanav Abode, Ranibagaan, Beltola, Guwahati, Assam
              </span>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Sailaja+Manab+Abode+Ranibagaan+Beltola+Guwahati"
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
              Sailaja's Maanav Abode is officially registered under the Assam Real Estate Regulatory Authority (RERA), ensuring full transparency and compliance for our buyers.
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
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                  <Img
                    src={reraImage1}
                    alt="RERA Certificate Page 1 — Sailaja's Maanav Abode"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-sm font-bold text-[var(--charcoal)]">RERA Certificate — Page 1</div>

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
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                  <Img
                    src={reraImage2}
                    alt="RERA Certificate Page 2 — Sailaja's Maanav Abode"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-sm font-bold text-[var(--charcoal)]">RERA Certificate — Page 2</div>

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
                Interested in Sailaja's<br className="md:hidden" /> Maanav Abode?
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
