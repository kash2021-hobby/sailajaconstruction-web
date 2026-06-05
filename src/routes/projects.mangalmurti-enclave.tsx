import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Maximize, ShieldCheck, Home, ArrowRight, Building2, Layout, ShowerHead, CookingPot, DoorOpen, Wind, PaintBucket, Droplet, Zap, ExternalLink, Stethoscope, ShoppingCart, GraduationCap, Shield, Flame } from "lucide-react";
import { HeroCurve } from "@/components/HeroCurve";
import { CtaBand } from "@/components/site/PageHero";
import { fadeUp, slideLeft, slideRight, staggerFast, staggerMedium, scaleFade } from "@/lib/animations";
import { useIsMobile } from "@/hooks/use-mobile";

import heroImage from "@/assets/mangalmurtienclaveimg/mangalmurti.webp";
import parkingPlanImage from "@/assets/mangalmurtienclaveimg/parkingplan.webp";
import typicalFloorPlanImage from "@/assets/mangalmurtienclaveimg/typicalfloorplan.webp";
import rera1Image from "@/assets/mangalmurtienclaveimg/rera1.webp";
import rera2Image from "@/assets/mangalmurtienclaveimg/rera2.webp";

export const Route = createFileRoute("/projects/mangalmurti-enclave")({
  head: () => ({
    meta: [
      { title: "Sailaja's Mangalmurti Enclave — Premium 3BHK Residences in Chachal, Guwahati | Sailaja Constructions" },
      { name: "description", content: "Explore Sailaja's Mangalmurti Enclave — a RERA-certified ongoing residential project at Chachal, Guwahati offering premium 3BHK apartments." },
      { property: "og:title", content: "Sailaja's Mangalmurti Enclave — Premium 3BHK Residences in Chachal, Guwahati" },
      { property: "og:description", content: "A RERA-certified residential project offering thoughtfully designed 3BHK apartments at Chachal, Guwahati." },
      { property: "og:url", content: "/projects/mangalmurti-enclave" },
    ],
    links: [{ rel: "canonical", href: "/projects/mangalmurti-enclave" }],
  }),
  component: ProjectDetailPage,
});

const reraNumber = "KM 06 OF 2022-2023";

const propSummary = [
  { icon: MapPin, label: "Location", value: "Chachal, Guwahati" },
  { icon: Maximize, label: "Area", value: "960 – 1100 Sq.Ft (BUA)" },
  { icon: ShieldCheck, label: "RERA", value: reraNumber },
  { icon: Home, label: "Type", value: "3 BHK Apartment" },
];

const specs = [
  { label: "Project Type", value: "Residential" },
  { label: "Configuration", value: "3 BHK (All Units)" },
  { label: "Units Per Floor", value: "3 (A, B, C)" },
  { label: "Floors", value: "1st – 3rd (Typical) + Ground (Parking)" },
  { label: "BUA Range", value: "960 – 1100 Sq.Ft" },
  { label: "SBUA Range", value: "1200 – 1375 Sq.Ft" },
  { label: "Location", value: "Rongamatir Path, Aamtol, Chachal, VIP Road, Guwahati" },
  { label: "RERA Number", value: reraNumber },
  { label: "Status", value: "Completed" },
];

const unitArooms: [string, string][] = [
  ["Drawing cum Dining", '~22\'3" × 10\'3"'],
  ["Kitchen", '~5\'11" × 12\'0"'],
  ["Master Bedroom", '~12\'0" × 14\'9"'],
  ["Bedroom 2", '~9\'10" × 11\'10"'],
  ["Bedroom 3", '~11\'10" × 13\'9"'],
  ["Toilet 1", '~7\'10" × 5\'5"'],
  ["Toilet 2", '~8\'0" × 4\'4"'],
  ["Dress", '~7\'10" × 4\'10"'],
  ["Balcony 1", '~10\'3" × 3\'11"'],
  ["Balcony 2", '~6\'11" × 3\'11"'],
];

const unitBrooms: [string, string][] = [
  ["Drawing", '~11\'10" × 12\'0"'],
  ["Dining", '~11\'10" × 12\'0"'],
  ["Kitchen", '~12\'9" × 5\'11"'],
  ["Master Bedroom", '~11\'10" × 13\'9"'],
  ["Bedroom 2", '~9\'10" × 13\'9"'],
  ["Bedroom 3", '~11\'10" × 11\'10"'],
  ["Toilet 1", '~7\'1" × 4\'11"'],
  ["Toilet 2", '~7\'1" × 4\'11"'],
  ["Balcony 1", '~8\'10" × 3\'11"'],
  ["Balcony 2", '~4\'11" × 10\'6"'],
  ["Balcony 3", '~6\'11" × 3\'11"'],
];

const unitCrooms: [string, string][] = [
  ["Master Bedroom", '~10\'9" × 11\'10"'],
  ["Bedroom 2", '~9\'10" × 11\'10"'],
  ["Kitchen", '~9\'10" × 5\'11"'],
  ["Toilet 1", '~8\'11" × 4\'11"'],
  ["Toilet 2", '~9\'10" × 4\'4"'],
  ["Puja", '~5\'11" × 5\'2"'],
  ["Balcony", '~6\'7" × 4\'11"'],
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
  { step: "01", title: "Booking Amount", percent: "₹5 Lacs", detail: "" },
  { step: "02", title: "Agreement / Foundation", percent: "20%", detail: "Booking adjusted" },
  { step: "03", title: "1st Slab Casting", percent: "15%", detail: "" },
  { step: "04", title: "2nd Slab Casting", percent: "15%", detail: "" },
  { step: "05", title: "3rd Slab Casting", percent: "15%", detail: "" },
  { step: "06", title: "4th Slab Casting", percent: "15%", detail: "" },
  { step: "07", title: "At the time of Wall Casting", percent: "15%", detail: "" },
  { step: "08", title: "At the time of Hand Over", percent: "5%", detail: "" },
];

const landmarks = [
  {
    category: "Hospitals",
    icon: Stethoscope,
    items: [
      ["GNRC", "1.50 KM"],
      ["Rehman", "900 Mtr"],
      ["Downtown", "1.00 KM"],
      ["Pratiksha", "1.60 KM"],
    ],
  },
  {
    category: "Supermarkets",
    icon: ShoppingCart,
    items: [
      ["New Daily Bazaar", "200 Mtr"],
      ["Nayantara Super Mart", "1.20 KM"],
      ["Peoples Mart", "600 Mtr"],
    ],
  },
  {
    category: "Schools",
    icon: GraduationCap,
    items: [
      ["Montfort", "1.10 KM"],
      ["Axel", "2.20 KM"],
      ["Silver Oak", "1.60 KM"],
    ],
  },
  {
    category: "Police Station",
    icon: Shield,
    items: [
      ["Dispur P.S.", "2.50 KM"],
    ],
  },
  {
    category: "Fire Station",
    icon: Flame,
    items: [
      ["Dispur Fire Station", "1.50 KM"],
    ],
  },
];

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
                COMPLETED PROJECT
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
                Sailaja's<br />Mangalmurti Enclave
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/80 font-semibold">
                Premium 3 BHK Residences in Chachal, Guwahati
              </p>
              <p className="mt-3 text-sm md:text-base text-white/65 leading-relaxed max-w-xl">
                Welcome to Mangalmurti Enclave — an elegant RERA-certified residential development by Sailaja Construction in Chachal, Guwahati. Featuring thoughtfully designed 3 BHK apartments with R.C.C. seismic-resistant construction, premium finishes, modern amenities, and an excellent location near schools, hospitals, and shopping.
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
                <Img src={heroImage} alt="Sailaja's Mangalmurti Enclave" className="w-full h-full object-cover" />
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
              Premium 3BHK Living at Chachal, Guwahati
            </h2>
            <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              Sailaja's Mangalmurti Enclave is an elegant RERA-certified residential development crafted by Sailaja Construction in Chachal, Guwahati. Each floor features three thoughtfully designed 3 BHK apartments (Units A, B, and C) with R.C.C. seismic-resistant frame structure, vitrified flooring, modern modular kitchens, and premium finishes throughout. The project is officially registered under the Assam RERA, ensuring full transparency and compliance.
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
              { type: "UNIT A — 3BHK", area: "BUA: 1100 Sq.Ft | SBUA: 1375 Sq.Ft", rooms: unitArooms },
              { type: "UNIT B — 3BHK", area: "BUA: 1050 Sq.Ft | SBUA: 1310 Sq.Ft", rooms: unitBrooms },
              { type: "UNIT C — 3BHK", area: "BUA: 960 Sq.Ft | SBUA: 1200 Sq.Ft", rooms: unitCrooms },
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

      {/* ─── SECTION 5: FLOOR PLANS (NO COMPASS) ─── */}
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
              Site & Typical Floor Plans
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Ground floor parking plan and typical residential floor layout
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
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                  <Img src={parkingPlanImage} alt="Site / Parking Plan Ground Floor" className="w-full h-full object-contain p-2" />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-sm font-bold text-[var(--charcoal)]">SITE / PARKING PLAN (Ground Floor)</div>
                  <div className="text-xs text-muted-foreground mt-1">Includes 8 car parking spaces, office, waiting area, security cabin, and lift</div>
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
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                  <Img src={typicalFloorPlanImage} alt="Typical Floor Plan 1st to 3rd" className="w-full h-full object-contain p-2" />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-sm font-bold text-[var(--charcoal)]">TYPICAL FLOOR PLAN (1st – 3rd)</div>
                  <div className="text-xs text-muted-foreground mt-1">Combined view showing Units A, B, and C on each floor</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Tap to zoom</div>
                </div>
              </div>
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

      {/* ─── SECTION 8: PRIME LOCATION ADVANTAGES ─── */}
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
            <span className="eyebrow">Neighbourhood</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]">
              Prime Location Advantages
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Everything you need within easy reach — top hospitals, schools, supermarkets, and emergency services nearby.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            variants={reduced ? undefined : staggerMedium}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
          >
            {landmarks.map((loc) => (
              <motion.div
                key={loc.category}
                variants={reduced ? undefined : fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white border border-[var(--border)] p-5 md:p-6 hover:shadow-lg transition"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--primary)] flex items-center justify-center mb-4">
                  <loc.icon className="text-[var(--charcoal)]" size={isMobile ? 20 : 24} />
                </div>
                <h3 className="text-base md:text-lg font-black text-[var(--charcoal)] mb-3" style={{ fontFamily: "Montserrat" }}>
                  {loc.category}
                </h3>
                <ul className="space-y-2">
                  {loc.items.map(([name, dist]) => (
                    <li key={name} className="flex justify-between items-center text-xs md:text-sm">
                      <span className="text-muted-foreground">{name}</span>
                      <span className="font-bold text-[var(--charcoal)]" style={{ fontFamily: "Montserrat" }}>{dist}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 9: LOCATION MAP ─── */}
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
              Find Us at Chachal, Guwahati
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
              src="https://maps.google.com/maps?q=Rongamatir%20Path%20Aamtol%20Chachal%20VIP%20Road%20Guwahati&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height={isMobile ? 300 : 400}
              className="md:h-[400px] lg:h-[500px]"
              style={{ border: 0, borderRadius: "20px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sailaja's Mangalmurti Enclave Location"
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
                Rongamatir Path, Aamtol, Chachal, VIP Road, Guwahati
              </span>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Rongamatir+Path+Aamtol+Chachal+VIP+Road+Guwahati"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto justify-center min-h-[48px]"
            >
              Get Directions <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 10: RERA CERTIFICATE ─── */}
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
              Sailaja's Mangalmurti Enclave is officially registered under the Assam Real Estate Regulatory Authority (RERA), ensuring full transparency and compliance for our buyers.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 bg-[var(--primary)] text-[var(--charcoal)] px-6 py-3 font-bold text-sm tracking-wider uppercase">
              <ShieldCheck size={18} />
              <span>RERA No: {reraNumber}</span>
            </div>
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
                  <Img src={rera1Image} alt="RERA Certificate Page 1" className="w-full h-full object-contain p-2" />
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
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                  <Img src={rera2Image} alt="RERA Certificate Page 2" className="w-full h-full object-contain p-2" />
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

      {/* ─── SECTION 11: CTA ─── */}
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
                Interested in Sailaja's<br className="md:hidden" /> Mangalmurti Enclave?
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
