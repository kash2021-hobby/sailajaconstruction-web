import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Award, Building2, CheckCircle2, Compass, HardHat, Home, Landmark, MapPin, Sofa, Star, Users } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import residentialImg from "@/assets/service-residential.jpg";
import commercialImg from "@/assets/service-commercial.jpg";
import interiorImg from "@/assets/service-interior.jpg";
import landImg from "@/assets/service-land.jpg";
import durgaImg from "@/assets/project-durga.jpg";
import sapphireImg from "@/assets/project-sapphire.jpg";
import bimaanImg from "@/assets/project-bimaan.jpg";
import sunshineImg from "@/assets/project-sunshine.jpg";
import teamImg from "@/assets/about-team.jpg";
import { CtaBand } from "@/components/site/PageHero";

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
  { icon: Award, label: "Years Experience", value: "13+" },
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
  { name: "Durga Residency", type: "Residential · Guwahati", img: durgaImg },
  { name: "Sailaja's Sapphire", type: "Residential · Guwahati", img: sapphireImg },
  { name: "Bimaan Arcade", type: "Commercial · Guwahati", img: bimaanImg },
  { name: "Sunshine Residency", type: "Residential · Nagaon", img: sunshineImg },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center text-white pt-20">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Premium residential construction in Guwahati" className="w-full h-full object-cover" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--charcoal)]/90 via-[var(--charcoal)]/70 to-[var(--charcoal)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Construction Company in Guwahati</span>
            <h1 className="mt-5 text-5xl md:text-7xl font-black leading-[1.05]">
              Helping Hands,<br />
              Shaping Your<br />
              <span className="text-[var(--primary)]">Dream Home.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              Delivering excellence since 2010 — a RERA-certified builder serving Guwahati, Nagaon and across Assam with residential, commercial and interior construction.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
              <Link to="/projects" className="btn-outline">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative -mt-12 z-10 px-6">
        <div className="mx-auto max-w-6xl bg-white shadow-2xl grid grid-cols-2 md:grid-cols-4 border-t-4 border-[var(--primary)]">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="p-8 flex items-start gap-4 border-r last:border-r-0 border-b md:border-b-0 border-[var(--border)]">
              <div className="w-12 h-12 bg-[var(--primary)] flex items-center justify-center shrink-0">
                <Icon className="text-[var(--charcoal)]" size={22} />
              </div>
              <div>
                <div className="text-2xl font-black text-[var(--charcoal)]" style={{ fontFamily: "Montserrat" }}>{value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUSTED LOCAL */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={residentialImg} alt="Modern residential build" className="w-full h-[480px] object-cover" loading="lazy" width={1200} height={800} />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[var(--primary)] hidden md:flex flex-col items-center justify-center text-center p-4">
              <div className="text-4xl font-black text-[var(--charcoal)]">13+</div>
              <div className="text-xs uppercase tracking-wider text-[var(--charcoal)] mt-1">Years of Trust</div>
            </div>
          </div>
          <div>
            <span className="eyebrow">About Sailaja</span>
            <h2 className="mt-4 text-4xl md:text-5xl text-[var(--charcoal)]">
              Trusted Local Construction Partner in Guwahati.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We are a Sole Proprietorship led by Mr. Manash Pratim Talukdar, serving homeowners, businesses and developers across Guwahati and Nagaon with an empathy-first approach to building.
            </p>
            <ul className="mt-7 space-y-3">
              {["RERA Certified Builder", "13+ Years of Local Expertise", "Empathy-first, Client-led Process"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-[var(--charcoal)] font-medium">
                  <CheckCircle2 className="text-[var(--primary)]" size={20} /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8"><Link to="/about" className="btn-primary">Discover More</Link></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-[var(--soft-gray)]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">What We Do</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-[var(--charcoal)]">
              Our Full-Spectrum<br />Construction Services
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc, img }) => (
              <div key={title} className="group bg-white border border-[var(--border)] hover:border-[var(--primary)] transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" width={1200} height={900} />
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow">Featured Projects</span>
              <h2 className="mt-3 text-4xl md:text-5xl text-[var(--charcoal)]">
                Built to Last.<br />Designed to Inspire.
              </h2>
            </div>
            <Link to="/projects" className="btn-primary self-start">View All Projects</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((p) => (
              <div key={p.name} className="group relative overflow-hidden aspect-[4/3]">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" width={1200} height={900} />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-[var(--charcoal)]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-xs uppercase tracking-widest text-[var(--primary)]" style={{ fontFamily: "Montserrat" }}>{p.type}</div>
                  <h3 className="text-2xl mt-2">{p.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT BANNER */}
      <section className="relative py-20 px-6 bg-[var(--charcoal)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImg} alt="" className="w-full h-full object-cover" loading="lazy" width={1600} height={900} />
        </div>
        <div className="relative mx-auto max-w-6xl flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <h2 className="text-3xl md:text-5xl max-w-2xl">Let's Build Your Dream Home.</h2>
          <Link to="/contact" className="btn-primary shrink-0">Enquire Now</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-[var(--soft-gray)]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="eyebrow">Testimonials</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-[var(--charcoal)]">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Priyanka Sharma", role: "Homeowner, Guwahati", quote: "From the first site visit to handover, the team kept us informed and on schedule. Our home turned out exactly as we imagined." },
              { name: "Rajeev Das", role: "Business Owner, Nagaon", quote: "A reliable builder who understands commercial timelines. Quality of finish and compliance handling was excellent." },
              { name: "Anita Borah", role: "Apartment Resident", quote: "Honest pricing, premium materials and an empathy-first team. We have already recommended them to friends." },
            ].map((t) => (
              <div key={t.name} className="bg-white p-7 border-t-4 border-[var(--primary)]">
                <div className="flex text-[var(--primary)] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-[var(--border)]">
                  <div className="font-bold text-[var(--charcoal)]">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
