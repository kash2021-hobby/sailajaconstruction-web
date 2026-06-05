import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { Award, Building2, CheckCircle2, HardHat, Home, Landmark, Sofa, Star, Users } from "lucide-react";
import heroImg from "@/assets/herosectionimg.webp";
import residentialImg from "@/assets/bhaskarimg/sailajabhaskarresideny.webp";
import commercialImg from "@/assets/fashioncityimg.webp";
import interiorImg from "@/assets/service-interior.jpg";
import landImg from "@/assets/service-land.jpg";
import durgaImg from "@/assets/durgaresidencyimg/sailajadurgaresidency.webp";
import sapphireImg from "@/assets/project-sapphire.jpg";
import bimaanImg from "@/assets/project-bimaan.jpg";
import sunshineImg from "@/assets/sunshineresidencyimg/sunshinneimg.webp";
import xopunImg from "@/assets/xopunaloyimg/xopunaloy.webp";
import { CtaBand } from "@/components/site/PageHero";
import { HeroCurve } from "@/components/HeroCurve";
import { fadeUp, slideLeft, slideRight, staggerFast, staggerMedium, scaleFade } from "@/lib/animations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sailaja Constructions — Construction Company in Guwahati & Builders in Nagaon" },
      { name: "description", content: "RERA-certified Construction Company in Guwahati and Builders in Nagaon. Residential, commercial, interior & land management since 2010." },
      { property: "og:title", content: "Sailaja Constructions — Construction Company in Guwahati" },
      { property: "og:description", content: "Helping hands, shaping your dream home. Delivering excellence since 2010 across Guwahati and Nagaon." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const stats = [
  { icon: Award, label: "Years Experience", value: "16+" },
  { icon: Building2, label: "Projects Delivered", value: "15+" },
  { icon: Users, label: "Happy Clients", value: "400+" },
  { icon: HardHat, label: "RERA Certified", value: "100%" },
];

const services = [
  { icon: Home, title: "Residential Construction", desc: "Custom homes designed and built around your lifestyle with precision craftsmanship.", img: residentialImg },
  { icon: Building2, title: "Commercial Construction", desc: "Functional, durable spaces for retail, office and mixed-use developments.", img: commercialImg },
  { icon: Sofa, title: "Interior Design", desc: "Thoughtful interiors that bring warmth, utility and character to every room.", img: interiorImg },
  { icon: Landmark, title: "Land Management", desc: "End-to-end land acquisition, development planning and regulatory handling.", img: landImg },
];

const featured = [
  { name: "Sailaja's Durga Residency", category: "RESIDENTIAL", desc: "A premium residential complex with modern amenities in Guwahati.", img: durgaImg },
  { name: "Sailaja's Xopun Aloy", category: "RESIDENTIAL", desc: "An elegant residential development offering thoughtfully designed 2BHK and 3BHK apartments in the heart of Guwahati.", img: xopunImg },
  { name: "Saikia Complex", category: "COMMERCIAL", desc: "A versatile commercial complex designed for modern businesses and retail.", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80" },
  { name: "Sailaja's Sunshine Residency", category: "RESIDENTIAL", desc: "Serene residential living surrounded by lush greenery in Nagaon.", img: sunshineImg },
];

const testimonials = [
  { name: "Priyanka Sharma", role: "Homeowner, Guwahati", quote: "From the first site visit to handover, the team kept us informed and on schedule. Our home turned out exactly as we imagined." },
  { name: "Rajeev Das", role: "Business Owner, Nagaon", quote: "A reliable builder who understands commercial timelines. Quality of finish and compliance handling was excellent." },
  { name: "Anita Borah", role: "Apartment Resident", quote: "Honest pricing, premium materials and an empathy-first team. We have already recommended them to friends." },
];

function AnimatedStat({ icon: Icon, label, value, index: i }: { icon: typeof Award; label: string; value: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduced = useReducedMotion();
  const num = parseInt(value);
  const suffix = value.replace(/[\d]/g, "");

  return (
    <motion.div
      ref={ref}
      variants={reduced ? undefined : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
      className="p-4 md:p-8 flex items-start gap-3 md:gap-4 border-r last:border-r-0 border-b md:border-b-0 border-[var(--border)]"
    >
      <div className="w-12 h-12 bg-[var(--primary)] flex items-center justify-center shrink-0">
        <Icon className="text-[var(--charcoal)]" size={22} />
      </div>
      <div>
        <div className="text-2xl font-black text-[var(--charcoal)]" style={{ fontFamily: "Montserrat" }}>
          {inView ? <CountUp end={num} suffix={suffix} duration={2.5} /> : value}
        </div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{label}</div>
      </div>
    </motion.div>
  );
}

const projectRoute: Record<string, string> = {
  "Sailaja's Durga Residency": "/projects/durga-residency",
  "Sailaja's Sunshine Residency": "/projects/sunshine-residency",
  "Sailaja's Xopun Aloy": "/projects/xopun-aloy",
};

function ProjectStackCard({ project, index, total }: { project: typeof featured[number]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const isLast = index === total - 1;

  if (reduced) return null;

  const to = projectRoute[project.name] || "/projects";

  return (
    <div
      ref={ref}
      className="sticky top-0 h-[80dvh] md:h-[85dvh]"
      style={{
        zIndex: (index + 1) * 10,
        touchAction: "pan-y",
        isolation: "isolate",
        marginBottom: 24,
      }}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden bg-[#1a1a1a]"
        style={{
          scale: isLast ? 1 : scale,
          borderRadius: 20,
          boxShadow: "0 -4px 20px rgba(0,0,0,0.15)",
          willChange: "transform",
        }}
      >
        <img
          src={project.img}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1600}
          height={900}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-5 pb-8 pt-20 md:px-10 lg:px-16 md:pb-12 lg:pb-16">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--primary)] mb-2"
            style={{ fontFamily: "Montserrat" }}
          >
            {project.category}
          </span>
          <h3
            className="text-white font-black leading-tight text-3xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: "Montserrat" }}
          >
            {project.name}
          </h3>
          <p className="text-white/80 text-sm md:text-base max-w-md mt-2 md:mt-3">
            {project.desc}</p>
          <Link
            to={to}
            className="inline-flex items-center gap-2 mt-4 md:mt-6 px-6 py-3 min-h-[44px] bg-[var(--primary)] text-[var(--charcoal)] font-bold uppercase tracking-wider text-xs rounded-lg hover:brightness-90 transition"
            style={{ fontFamily: "Montserrat" }}
          >
            View Project
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function Index() {
  const reduced = useReducedMotion();
  const sectionViewport = { once: true, amount: 0.2 as const };

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center text-white pt-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={reduced ? undefined : { scale: 1 }}
          animate={reduced ? undefined : { scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <img src={xopunImg} alt="Premium residential construction in Guwahati" className="w-full h-full object-cover" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--charcoal)]/90 via-[var(--charcoal)]/70 to-[var(--charcoal)]/40" />
        </motion.div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              className="eyebrow"
              initial={reduced ? undefined : { opacity: 0, y: 30 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Construction Company in Guwahati
            </motion.span>
            <motion.h1
              className="mt-5 text-5xl md:text-7xl font-black leading-[1.05]"
              initial={reduced ? undefined : { opacity: 0, y: 30 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Helping Hands,<br />
              Shaping Your<br />
              <motion.span
                className="text-[var(--primary)]"
                initial={reduced ? undefined : { scale: 0.9 }}
                animate={reduced ? undefined : { scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
              >
                Dream Home.
              </motion.span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-white/80 max-w-xl"
              initial={reduced ? undefined : { opacity: 0 }}
              animate={reduced ? undefined : { opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              Delivering excellence since 2010 — a RERA-certified builder serving Guwahati, Nagaon and across Assam with residential, commercial and interior construction.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-wrap gap-4"
              variants={reduced ? undefined : { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={reduced ? undefined : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
              </motion.div>
              <motion.div
                variants={reduced ? undefined : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Link to="/projects" className="btn-outline">View Our Work</Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <HeroCurve />
      </section>

      {/* STATS BAR */}
      <section className="relative -mt-5 md:-mt-8 lg:-mt-12 z-30 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-2 md:grid-cols-4 border-t-4 border-[var(--primary)]">
          {stats.map((s, i) => (
            <AnimatedStat key={s.label} icon={s.icon} label={s.label} value={s.value} index={i} />
          ))}
        </div>
      </section>

      {/* TRUSTED LOCAL */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            variants={reduced ? undefined : slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img src={residentialImg} alt="Modern residential build" className="w-full h-[480px] object-cover" loading="lazy" width={1200} height={800} />
            <motion.div
              className="absolute -bottom-6 -right-6 w-40 h-40 bg-[var(--primary)] hidden md:flex flex-col items-center justify-center text-center p-4"
              variants={reduced ? undefined : scaleFade}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            >
              <div className="text-4xl font-black text-[var(--charcoal)]">16+</div>
              <div className="text-xs uppercase tracking-wider text-[var(--charcoal)] mt-1">Years of Trust</div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={reduced ? undefined : slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="eyebrow">About Sailaja</span>
            <h2 className="mt-4 text-4xl md:text-5xl text-[var(--charcoal)]">
              Trusted Local Construction Partner in Guwahati.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We are a Sole Proprietorship led by Mr. Manash Pratim Talukdar, serving homeowners, businesses and developers across Guwahati and Nagaon with an empathy-first approach to building.
            </p>
            <ul className="mt-7 space-y-3">
              {["RERA Certified Builder", "16+ Years of Local Expertise", "Empathy-first, Client-led Process"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-[var(--charcoal)] font-medium">
                  <CheckCircle2 className="text-[var(--primary)]" size={20} /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8"><Link to="/about" className="btn-primary">Discover More</Link></div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-[var(--soft-gray)]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            variants={reduced ? undefined : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="eyebrow">What We Do</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-[var(--charcoal)]">
              Our Full-Spectrum<br />Construction Services
            </h2>
          </motion.div>
          <motion.div
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={reduced ? undefined : staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
          >
            {services.map(({ icon: Icon, title, desc, img }) => (
              <motion.div
                key={title}
                variants={reduced ? undefined : fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group bg-white border border-[var(--border)] hover:border-[var(--primary)]"
                whileHover={reduced ? undefined : { y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                style={{ transition: "border-color 0.3s" }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={1200}
                    height={900}
                    whileHover={reduced ? undefined : { scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-[var(--primary)] flex items-center justify-center mb-4 -mt-12 relative border-4 border-white">
                    <Icon size={20} className="text-[var(--charcoal)]" />
                  </div>
                  <h3 className="text-lg text-[var(--charcoal)]">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{desc}</p>
                  <Link to="/services" className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-[var(--primary)] hover:text-[var(--charcoal)]" style={{ fontFamily: "Montserrat" }}>
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECTS — STACKING CARDS */}
      <section className="relative z-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div
              variants={reduced ? undefined : slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="eyebrow">Featured Projects</span>
              <h2 className="mt-3 text-4xl md:text-5xl text-[var(--charcoal)]">
                Built to Last.<br />Designed to Inspire.
              </h2>
            </motion.div>
            <motion.div
              variants={reduced ? undefined : slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link to="/projects" className="btn-primary self-start">View All Projects</Link>
            </motion.div>
          </div>
        </div>

        <div className="relative" style={{ height: `${featured.length * 100}vh` }}>
          {reduced ? (
            featured.map((p) => (
              <div key={p.name} className="h-screen flex items-center justify-center bg-[var(--soft-gray)] border-b border-[var(--border)]">
                <div className="max-w-3xl text-center px-6">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--primary)]">{p.category}</span>
                  <h3 className="text-4xl md:text-6xl font-black text-[var(--charcoal)] mt-3">{p.name}</h3>
                </div>
              </div>
            ))
          ) : (
            featured.map((p, i) => (
              <ProjectStackCard key={p.name} project={p} index={i} total={featured.length} />
            ))
          )}
        </div>
      </section>

      {/* LET'S BUILD CTA */}
      <section className="relative py-20 px-6 bg-[var(--charcoal)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImg} alt="" className="w-full h-full object-cover" loading="lazy" width={1600} height={900} />
        </div>
        <div className="relative mx-auto max-w-6xl flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <motion.h2
            className="text-3xl md:text-5xl max-w-2xl"
            variants={reduced ? undefined : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Let's Build Your Dream Home.
          </motion.h2>
          <motion.div
            animate={reduced ? undefined : { scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Link to="/contact" className="btn-primary shrink-0">Enquire Now</Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-[var(--soft-gray)]">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center max-w-xl mx-auto mb-14"
            variants={reduced ? undefined : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="eyebrow">Testimonials</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-[var(--charcoal)]">What Our Clients Say</h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={reduced ? undefined : staggerMedium}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={reduced ? undefined : fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white p-7 border-t-4 border-[var(--primary)]"
              >
                <div className="flex text-[var(--primary)] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-[var(--border)]">
                  <div className="font-bold text-[var(--charcoal)]">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
