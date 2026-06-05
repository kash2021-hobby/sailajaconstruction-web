import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Maximize, Clock, Home, ArrowRight, Building2, Layers, ShowerHead, ChefHat, DoorOpen, Wind, PaintBucket, Droplet, Zap, ExternalLink, ShieldCheck, Waves, Dumbbell, Users, TreePine, Shirt, ArrowUpDown, Stethoscope, GraduationCap, Shield, ShoppingCart, Bus } from "lucide-react";
import { HeroCurve } from "@/components/HeroCurve";
import { CtaBand } from "@/components/site/PageHero";
import { fadeUp, slideLeft, slideRight, staggerFast, staggerMedium, scaleFade } from "@/lib/animations";
import { useIsMobile } from "@/hooks/use-mobile";
import paradiseHeroImage from "@/assets/sailajaparadiseimg/sailajaparadise.webp";

import typeAImage from "@/assets/sailajaparadiseimg/typea.webp";
import typeBImage from "@/assets/sailajaparadiseimg/typeb.webp";
import typeCImage from "@/assets/sailajaparadiseimg/typec.webp";
import typeDImage from "@/assets/sailajaparadiseimg/typed.webp";
import typeEImage from "@/assets/sailajaparadiseimg/typee.webp";
import typeFImage from "@/assets/sailajaparadiseimg/typef.webp";
import parkingPlanImage from "@/assets/sailajaparadiseimg/parkingplan.webp";
import typicalPlanImage from "@/assets/sailajaparadiseimg/typicalplan.webp";
import terracePlanImage from "@/assets/sailajaparadiseimg/terraceplan.webp";
import rera1Image from "@/assets/sailajaparadiseimg/rera1.webp";
import rera2Image from "@/assets/sailajaparadiseimg/rera2.webp";

const unitPlans = [typeAImage, typeBImage, typeCImage, typeDImage, typeEImage, typeFImage];

export const Route = createFileRoute("/projects/sailaja-paradise")({
  head: () => ({
    meta: [
      { title: "Sailaja's Paradise — Premium 2 & 3 BHK with Rooftop Recreation Center in Nagaon | Sailaja Constructions" },
      { name: "description", content: "Explore Sailaja's Paradise — a premium ongoing residential project in Nagaon, Assam offering spacious 2 & 3 BHK apartments with rooftop swimming pool, gym, and community hall." },
      { property: "og:title", content: "Sailaja's Paradise — Premium 2 & 3 BHK Residences with Rooftop Recreation Center" },
      { property: "og:description", content: "A premium residential development offering thoughtfully designed 2 & 3 BHK apartments with rooftop Recreation Center in Nagaon, Assam." },
      { property: "og:url", content: "/projects/sailaja-paradise" },
    ],
    links: [{ rel: "canonical", href: "/projects/sailaja-paradise" }],
  }),
  component: ProjectDetailPage,
});

const propSummary = [
  { icon: MapPin, label: "Location", value: "Nagaon, Assam" },
  { icon: Maximize, label: "Area", value: "716 – 1616 Sq.Ft (SBUA)" },
  { icon: Clock, label: "Status", value: "Ongoing" },
  { icon: Home, label: "Type", value: "2 & 3 BHK Apartment" },
];

const specs = [
  { label: "Project Type", value: "Residential" },
  { label: "Configuration", value: "2 & 3 BHK (6 Unit Types: A, B, C, D, E, F)" },
  { label: "Lifts", value: "2" },
  { label: "BUA Range", value: "716.06 – 1616.34 Sq.Ft" },
  { label: "SBUA Range", value: "930.78 – 1616.34 Sq.Ft" },
  { label: "Amenities", value: "Rooftop Swimming Pool, Gym, Community Hall, Terrace Landscape" },
  { label: "Location", value: "Nagaon, Assam" },
  { label: "Status", value: "Ongoing" },
];

const unitArooms: [string, string][] = [
  ["Living", '11\'10" × 11\'5"'],
  ["Dining", '7\'4" × 7\'10"'],
  ["Kitchen", '7\'5" × 6\'1"'],
  ["Bed Room 1", '11\'10" × 10\'10"'],
  ["Bed Room 2", '11\'6" × 11\'2"'],
  ["Bed Room 3", '11\'6" × 10\'10"'],
  ["Toilet 1", '7\'5" × 4\'5"'],
  ["Toilet 2", '7\'7" × 4\'5"'],
  ["Balcony 1", '7\'7" × 4\'0"'],
  ["Balcony 2", '7\'1" × 4\'0"'],
  ["Balcony 3", '4\'8" × 7\'7"'],
];

const unitBrooms: [string, string][] = [
  ["Living", '11\'6" × 13\'1"'],
  ["Dining", '10\'5" × 8\'0"'],
  ["Kitchen", '6\'0" × 8\'10"'],
  ["Bed Room 1", '10\'5" × 13\'2"'],
  ["Bed Room 2", '10\'5" × 13\'1"'],
  ["Toilet 1", '7\'3" × 4\'3"'],
  ["Toilet 2", '5\'0" × 7\'3"'],
  ["Balcony 1", '4\'0" × 9\'0"'],
  ["Balcony 2", '4\'0" × 9\'4"'],
  ["Balcony 3", '11\'4" × 4\'0"'],
];

const unitCrooms: [string, string][] = [
  ["Living", '11\'4" × 17\'9"'],
  ["Dining", '8\'6" × 12\'4"'],
  ["Kitchen", '6\'1" × 11\'10"'],
  ["Bed Room 1", '11\'6" × 11\'10"'],
  ["Bed Room 2", '12\'5" × 11\'10"'],
  ["Bed Room 3", '12\'5" × 11\'10"'],
  ["Toilet 1", '4\'3" × 8\'0"'],
  ["Toilet 2", '8\'6" × 4\'3"'],
  ["Balcony 1", '9\'0" × 4\'0"'],
  ["Balcony 2", '8\'6" × 4\'0"'],
  ["Balcony 3", '9\'0" × 4\'0"'],
];

const unitDrooms: [string, string][] = [
  ["Living", '17\'0" × 13\'0"'],
  ["Dining", '10\'0" × 6\'9"'],
  ["Kitchen", '8\'4" × 6\'6"'],
  ["Bed Room", '10\'6" × 10\'0"'],
  ["Study", '11\'6" × 6\'6"'],
  ["Toilet", '7\'1" × 6\'0"'],
  ["Balcony 1", '4\'0" × 8\'2"'],
  ["Balcony 2", '4\'0" × 7\'3"'],
];

const unitErooms: [string, string][] = [
  ["Living & Dining", '11\'4" × 16\'3"'],
  ["Kitchen", '7\'6" × 5\'8"'],
  ["Bed Room 1", '10\'10" × 11\'10"'],
  ["Bed Room 2", '10\'6" × 12\'2"'],
  ["Toilet 1", '6\'5" × 4\'5"'],
  ["Toilet 2", '6\'1" × 5\'9"'],
  ["Balcony 1", '3\'5" × 5\'0"'],
  ["Balcony 2", '4\'0" × 8\'1"'],
];

const unitFrooms: [string, string][] = [
  ["Living", '11\'2" × 11\'8"'],
  ["Dining", '7\'4" × 8\'8"'],
  ["Kitchen", '8\'0" × 6\'10"'],
  ["Bed Room 1", '11\'0" × 12\'0"'],
  ["Bed Room 2", '10\'0" × 12\'0"'],
  ["Toilet 1", '5\'0" × 8\'0"'],
  ["Toilet 2", '4\'3" × 9\'0"'],
  ["Balcony 1", '8\'1" × 4\'0"'],
  ["Balcony 2", '7\'3" × 4\'0"'],
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
    icon: Layers,
    items: [
      "Vitrified flooring of size 600mm×600mm in drawing and dining rooms, bed room and kitchen.",
      "Antiskid ceramic tiles (300mm×300mm) in bathroom.",
    ],
  },
  {
    title: "Toilet",
    icon: ShowerHead,
    items: [
      "Concealed CPVC plumbing and sanitary system.",
      "White color sanitary ware and best quality water supply fitting.",
      "Glazed wall tiles 7 ft on wall.",
    ],
  },
  {
    title: "Kitchen",
    icon: ChefHat,
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
    icon: Wind,
    items: [
      "Plain aluminum sliding windows with grill.",
    ],
  },
  {
    title: "Painting",
    icon: PaintBucket,
    items: [
      "Internal walls to be finished with POP.",
      "External walls are to be painted with good quality cement paint as per builder's choice.",
    ],
  },
  {
    title: "Water Supply",
    icon: Droplet,
    items: [
      "24 hours of water supply is ensured with over head tank.",
    ],
  },
  {
    title: "Electrical",
    icon: Zap,
    items: [
      "Concealed wiring with modular switch.",
    ],
  },
];

const paymentMilestones = [
  { step: "01", title: "Booking Amount", percent: "₹5 Lakhs", detail: "" },
  { step: "02", title: "Agreement / Foundation", percent: "15%", detail: "Booking amount adjusted" },
  { step: "03", title: "1st Slab", percent: "10%", detail: "" },
  { step: "04", title: "2nd Slab", percent: "10%", detail: "" },
  { step: "05", title: "3rd Slab", percent: "10%", detail: "" },
  { step: "06", title: "4th Slab", percent: "10%", detail: "" },
  { step: "07", title: "5th Slab", percent: "10%", detail: "" },
  { step: "08", title: "6th Slab", percent: "10%", detail: "" },
  { step: "09", title: "7th Slab", percent: "10%", detail: "" },
  { step: "10", title: "Wall Casting", percent: "10%", detail: "" },
  { step: "11", title: "Handover", percent: "5%", detail: "" },
];

const amenities = [
  { icon: Waves, title: "Swimming Pool", desc: "Rooftop swimming pool with terrace landscape for a refreshing retreat." },
  { icon: Dumbbell, title: "Fully Equipped Gym", desc: 'Dedicated gym space (23\'-8" × 17\'-6") for daily fitness routines.' },
  { icon: Users, title: "Community Hall", desc: 'Spacious community hall (34\'-4" × 28\'-10") suitable for parties and gatherings.' },
  { icon: TreePine, title: "Terrace Landscape", desc: "Beautifully landscaped terrace connected to the swimming pool area." },
  { icon: Shirt, title: "Changing Rooms", desc: "Convenient changing rooms adjacent to the pool and gym." },
  { icon: ArrowUpDown, title: "Dual Lifts", desc: "Two lifts for seamless access to all floors including the rooftop." },
];

const locationCategories = [
  {
    title: "Hospitals",
    icon: Stethoscope,
    items: [
      "Nagaon Civil Hospital — 500 m",
      "Trinayan Hospital — 200 m",
    ],
  },
  {
    title: "Schools & Colleges",
    icon: GraduationCap,
    items: [
      "K V Nagaon School — 3 km",
      "Nagaon College — 600 m",
    ],
  },
  {
    title: "Police Station",
    icon: Shield,
    items: [
      "Nagaon Sadar — 400 m",
    ],
  },
  {
    title: "Shopping & Dining",
    icon: ShoppingCart,
    items: [
      "Dominos — 650 m",
      "Pantaloons — 750 m",
      "Platinum Mall — 950 m",
      "Vishal Mega Mart — 1.3 km",
      "Reliance Trends — 1.6 km",
      "Bara Bazaar Market — 550 m",
    ],
  },
  {
    title: "Transit",
    icon: Bus,
    items: [
      "ASTC Bus Stand — 900 m",
      "Nagaon Railway Station — 1 km",
      "By-pass — 5 km",
    ],
  },
  {
    title: "Government & Banks",
    icon: Building2,
    items: [
      "DC Office — 950 m",
      "SP Office — 700 m",
      "Post Office — 650 m",
      "SBI — 500 m",
      "HDFC — 650 m",
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
                ONGOING PROJECT
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
                Sailaja's<br />Paradise
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/80 font-semibold">
                Premium 2 & 3 BHK Residences with Rooftop Recreation Center at Nagaon, Assam
              </p>
              <p className="mt-3 text-sm md:text-base text-white/65 leading-relaxed max-w-xl">
                Welcome to Sailaja's Paradise — a premium residential development by Sailaja Construction at Nagaon, Assam. Featuring thoughtfully designed 2 & 3 BHK apartments with R.C.C. seismic-resistant construction, premium finishes, dual lifts, and a rooftop Recreation Center featuring a swimming pool, gym, community hall, and terrace landscape — your perfect health retreat.
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
              <Img
                src={paradiseHeroImage}
                alt="Sailaja's Paradise building exterior"
                className="w-full aspect-[4/3] object-cover rounded-lg shadow-2xl"
              />
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
              Premium Living at Sailaja's Paradise
            </h2>
            <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              Sailaja's Paradise is a premium residential development crafted by Sailaja Construction at Nagaon, Assam. The project features 6 thoughtfully designed unit configurations (Types A through F) spanning 2 & 3 BHK apartments with R.C.C. seismic-resistant frame structure, vitrified flooring, modern modular kitchens, premium finishes, and dual lifts. A standout rooftop Recreation Center offers residents a swimming pool, fully equipped gym, community hall, terrace landscape, and changing rooms — designed as the perfect health retreat suitable for parties and gatherings.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { type: "UNIT A", bhk: "3 BHK", bua: "995.57 Sq.Ft (92.50 SQ M)", sbua: "1294.24 Sq.Ft (120.25 SQ M)", rooms: unitArooms },
              { type: "UNIT B", bhk: "2 BHK", bua: "916.03 Sq.Ft (85.11 SQ M)", sbua: "1190.83 Sq.Ft (110.64 SQ M)", rooms: unitBrooms },
              { type: "UNIT C", bhk: "3 BHK", bua: "1243.34 Sq.Ft (115.52 SQ M)", sbua: "1616.34 Sq.Ft (150.17 SQ M)", rooms: unitCrooms },
              { type: "UNIT D", bhk: "2 BHK", bua: "716.06 Sq.Ft (66.53 SQ M)", sbua: "930.78 Sq.Ft (86.48 SQ M)", rooms: unitDrooms },
              { type: "UNIT E", bhk: "2 BHK", bua: "807.22 Sq.Ft (75.00 SQ M)", sbua: "1049.39 Sq.Ft (97.5 SQ M)", rooms: unitErooms },
              { type: "UNIT F", bhk: "2 BHK", bua: "834.24 Sq.Ft (77.51 SQ M)", sbua: "1084.47 Sq.Ft (100.76 SQ M)", rooms: unitFrooms },
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
                    <h3 className="text-base md:text-lg font-black text-[var(--charcoal)] mt-1">BUA: {unit.bua} | SBUA: {unit.sbua}</h3>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1">{unit.bhk}</div>
                  </div>
                </div>

                <div className="mb-5 bg-white border border-[var(--border)] rounded-lg p-2 shadow-sm">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                    <Img src={unitPlans[idx]} alt={`Unit ${["A", "B", "C", "D", "E", "F"][idx]} Floor Plan`} className="w-full h-full object-contain p-2" />
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-xs font-bold text-[var(--charcoal)]">Unit {["A", "B", "C", "D", "E", "F"][idx]} Floor Plan</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                  {unit.rooms.map(([room, dim]) => (
                    <div key={`${room}-${dim}`} className="flex justify-between items-center py-1.5 border-b border-[var(--border)]/50 text-xs md:text-sm">
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
              Parking, Typical & Terrace Floor Plans
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Ground floor parking, typical residential layout, and rooftop Recreation Center with swimming pool, gym, and community hall
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <motion.div
              variants={reduced ? undefined : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="bg-white border border-[var(--border)] rounded-lg p-2 md:p-4 shadow-lg">
                <div className="text-xs font-bold text-[var(--charcoal)] uppercase tracking-wider mb-2 text-center">PARKING PLAN (Ground Floor)</div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                  <Img src={parkingPlanImage} alt="Parking Plan Ground Floor" className="w-full h-full object-contain p-2" />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-xs text-muted-foreground">Ground floor parking layout with dual lifts and staircase access</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Tap to zoom</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={reduced ? undefined : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <div className="bg-white border border-[var(--border)] rounded-lg p-2 md:p-4 shadow-lg">
                <div className="text-xs font-bold text-[var(--charcoal)] uppercase tracking-wider mb-2 text-center">TYPICAL FLOOR PLAN</div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                  <Img src={typicalPlanImage} alt="Typical Floor Plan" className="w-full h-full object-contain p-2" />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-xs text-muted-foreground">Combined view showing all six unit types (A, B, C, D, E, F) on each typical floor</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Tap to zoom</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={reduced ? undefined : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="bg-white border border-[var(--border)] rounded-lg p-2 md:p-4 shadow-lg">
                <div className="text-xs font-bold text-[var(--charcoal)] uppercase tracking-wider mb-2 text-center">TERRACE PLAN (Recreation Center)</div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[var(--soft-gray)]">
                  <Img src={terracePlanImage} alt="Terrace Plan Recreation Center" className="w-full h-full object-contain p-2" />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-xs text-muted-foreground">Rooftop Recreation Center with swimming pool, gym, community hall, changing rooms, and terrace landscape</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Tap to zoom</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: RECREATION CENTER & HEALTH RETREAT ─── */}
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
              Recreation Center & Health Retreat
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              A premium rooftop experience designed to elevate your lifestyle — suitable for parties, fitness, and relaxation.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            variants={reduced ? undefined : staggerMedium}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
          >
            {amenities.map((a) => (
              <motion.div
                key={a.title}
                variants={reduced ? undefined : fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white border border-[var(--border)] p-5 md:p-6 hover:shadow-lg transition"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--primary)] flex items-center justify-center mb-4">
                  <a.icon className="text-[var(--charcoal)]" size={isMobile ? 20 : 24} />
                </div>
                <h3 className="text-base md:text-lg font-black text-[var(--charcoal)] mb-3" style={{ fontFamily: "Montserrat" }}>
                  {a.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {a.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 7: BUILT WITH QUALITY ─── */}
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

      {/* ─── SECTION 8: PAYMENT TERMS ─── */}
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

      {/* ─── SECTION 9: PRIME LOCATION ADVANTAGES ─── */}
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
            <span className="eyebrow">Location Advantages</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]">
              Everything You Need, Right Around the Corner
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Strategically located in Nagaon with easy access to hospitals, schools, shopping, and transit.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            variants={reduced ? undefined : staggerMedium}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
          >
            {locationCategories.map((cat) => (
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

      {/* ─── SECTION 10: LOCATION MAP ─── */}
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
              Find Us at Nagaon, Assam
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
              src="https://maps.google.com/maps?q=Sailaja%20Paradise%20Nagaon%20Assam&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height={isMobile ? 300 : 400}
              className="md:h-[400px] lg:h-[500px]"
              style={{ border: 0, borderRadius: "20px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sailaja's Paradise Location"
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
                Nagaon, Assam
              </span>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Sailaja+Paradise+Nagaon+Assam"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto justify-center min-h-[48px]"
            >
              Get Directions <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 11: RERA CERTIFICATE ─── */}
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
              Sailaja's Paradise is officially registered under the Assam Real Estate Regulatory Authority (RERA), ensuring full transparency and compliance for our buyers.
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

      {/* ─── SECTION 12: CTA ─── */}
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
                Interested in Sailaja's<br className="md:hidden" /> Paradise?
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
