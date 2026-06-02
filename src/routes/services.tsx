import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ClipboardList, FileText, HardHat } from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/PageHero";
import residentialImg from "@/assets/bhaskarimg/sailajabhaskarresideny.webp";
import commercialImg from "@/assets/fashioncityimg.webp";
import interiorImg from "@/assets/service-interior.jpg";
import landImg from "@/assets/service-land.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Construction Company in Guwahati | Sailaja Constructions" },
      { name: "description", content: "Residential, commercial, interior and land management services from a trusted Construction Company in Guwahati and Builders in Nagaon." },
      { property: "og:title", content: "Our Construction Services" },
      { property: "og:description", content: "Tailored residential, commercial, interior and land services across Guwahati and Nagaon." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Residential Construction",
    img: residentialImg,
    desc: "We specialize in custom homes designed around your lifestyle, preferences and budget — built with care, premium materials and attention to every detail.",
    benefits: ["Tailored floor plans and architecture", "Energy-efficient systems and modern designs", "Seamless permit handling and inspections", "Built to suit Assam's climate and local codes"],
  },
  {
    title: "Commercial Construction",
    img: commercialImg,
    desc: "From retail spaces to office buildings, we create efficient, functional and durable structures that help your business thrive in Guwahati and Nagaon.",
    benefits: ["Structures matched to your business goals", "Timely delivery and project coordination", "Code-compliant and inspection-ready builds", "Minimal disruption to neighbouring businesses"],
  },
  {
    title: "Interior Design",
    img: interiorImg,
    desc: "Thoughtful interiors that bring warmth, utility and character — from concept to finishing, we deliver spaces that feel as good as they look.",
    benefits: ["Custom layouts, finishes and furnishings", "Modular kitchens, wardrobes and storage", "Lighting and material consultation", "On-time execution by in-house craftsmen"],
  },
  {
    title: "Land Management",
    img: landImg,
    desc: "End-to-end land services covering acquisition support, development planning, documentation and regulatory clearances across Assam.",
    benefits: ["Plot identification and verification", "Documentation and title support", "Site planning and feasibility studies", "Regulatory and statutory liaison"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Our Construction Solutions</>}
        subtitle="At Sailaja Constructions, we offer expert construction solutions across Guwahati and Nagaon, tailored to fit your needs."
      />

      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl space-y-16">
          {services.map((s, i) => (
            <div key={s.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative">
                <img src={s.img} alt={s.title} className="w-full h-[420px] object-cover" loading="lazy" width={1200} height={800} />
                <div className="absolute top-0 left-0 w-16 h-16 bg-[var(--primary)] flex items-center justify-center text-[var(--charcoal)] font-black text-xl" style={{ fontFamily: "Montserrat" }}>0{i + 1}</div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl text-[var(--charcoal)]">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6">
                  <div className="text-sm font-bold text-[var(--charcoal)] uppercase tracking-wider" style={{ fontFamily: "Montserrat" }}>Key Benefits</div>
                  <ul className="mt-3 space-y-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[var(--charcoal)]">
                        <CheckCircle2 className="text-[var(--primary)] mt-0.5 shrink-0" size={18} /> <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="btn-primary mt-7">Enquire Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-[var(--soft-gray)]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="eyebrow">3-Step Process</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-[var(--charcoal)]">Our Process, Made Simple</h2>
            <p className="mt-4 text-muted-foreground">
              Great construction starts with great communication. Our process is built around transparency, trust and timely execution — so you always know what to expect.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ClipboardList, title: "1. Plan & Discover", desc: "We start with a detailed consultation to understand your vision, goals and budget — followed by a site visit and early planning advice." },
              { icon: FileText, title: "2. Design & Quote", desc: "You'll receive a tailored design proposal, material insights and a clear, itemised quote — no guesswork, just straightforward numbers." },
              { icon: HardHat, title: "3. Build & Deliver", desc: "Our skilled team gets to work, keeping you informed at every stage. We wrap up with a final walkthrough and a project you'll be proud to call yours." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-8 border border-[var(--border)] hover:border-[var(--primary)] transition">
                <div className="w-14 h-14 bg-[var(--primary)] flex items-center justify-center mb-5">
                  <Icon size={24} className="text-[var(--charcoal)]" />
                </div>
                <h3 className="text-lg text-[var(--charcoal)]">{title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary">Schedule a Free Consultation</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}