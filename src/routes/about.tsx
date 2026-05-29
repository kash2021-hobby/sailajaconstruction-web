import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, CheckCircle2, Flag, HeartHandshake, Target } from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/PageHero";
import teamImg from "@/assets/about-team.jpg";
import sapphireImg from "@/assets/project-sapphire.jpg";
import durgaImg from "@/assets/project-durga.jpg";
import xopunImg from "@/assets/project-xopun.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sailaja Constructions — Construction Company in Guwahati" },
      { name: "description", content: "13+ years building trust across Guwahati and Nagaon. Led by Mr. Manash Pratim Talukdar, Sailaja Constructions delivers residential and commercial builds with an empathy-first approach." },
      { property: "og:title", content: "About Sailaja Constructions" },
      { property: "og:description", content: "Builders in Nagaon and Guwahati since 2010 — empathy-first, RERA-certified, owner-led." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>Building With Purpose,<br />Backed by Trust</>}
        subtitle="At Sailaja Constructions, we don't just build spaces — we build lasting relationships across Guwahati and Nagaon."
      />

      {/* Intro */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12">
          <h2 className="text-4xl md:text-5xl text-[var(--charcoal)] leading-tight">
            Built in Guwahati. Trusted Across Assam.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sailaja Constructions is a Sole Proprietorship founded in 2010 and led by Mr. Manash Pratim Talukdar. From our base in Sachal, Guwahati, we deliver residential and commercial construction services across Guwahati, Nagaon and Central Assam — combining honest timelines, clear communication and work that holds up inside and out.
          </p>
        </div>

        {/* Stat collage */}
        <div className="mx-auto max-w-6xl mt-14 grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="bg-[var(--charcoal)] text-white p-8">
            <div className="text-xs tracking-[0.25em] uppercase text-[var(--primary)] font-bold" style={{ fontFamily: "Montserrat" }}>Projects</div>
            <div className="text-5xl font-black mt-3">15+</div>
            <p className="text-sm text-white/70 mt-3">Completed residential and commercial projects across Guwahati and Nagaon.</p>
          </div>
          <div className="row-span-2"><img src={sapphireImg} alt="Sailaja's Sapphire" className="w-full h-full object-cover" loading="lazy" width={1200} height={900} /></div>
          <div className="bg-[var(--charcoal)] text-white p-8">
            <div className="text-xs tracking-[0.25em] uppercase text-[var(--primary)] font-bold" style={{ fontFamily: "Montserrat" }}>Happy Clients</div>
            <div className="text-5xl font-black mt-3">400+</div>
            <p className="text-sm text-white/70 mt-3">Families and businesses who trusted us with their dream space.</p>
          </div>
          <div><img src={durgaImg} alt="Durga Residency" className="w-full h-full object-cover aspect-square" loading="lazy" width={1200} height={1200} /></div>
          <div className="bg-[var(--primary)] text-[var(--charcoal)] p-8">
            <div className="text-xs tracking-[0.25em] uppercase font-bold" style={{ fontFamily: "Montserrat" }}>Commitment</div>
            <div className="text-5xl font-black mt-3">110%</div>
            <p className="text-sm mt-3">We go above and beyond — your project, your goals, your satisfaction first.</p>
          </div>
          <div><img src={xopunImg} alt="Xopun Aloy" className="w-full h-full object-cover aspect-square" loading="lazy" width={1200} height={1200} /></div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 px-6 bg-[var(--soft-gray)]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="eyebrow">Impactful</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-[var(--charcoal)]">Vision, Mission &amp; Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Our Vision", desc: "To create lasting spaces in Assam that strengthen communities and inspire confidence — built with care and purpose." },
              { icon: Flag, title: "Our Mission", desc: "To make construction simple and dependable through clear communication, skilled craftsmanship and client-first service." },
              { icon: HeartHandshake, title: "Our Values", desc: "We build with integrity, treat every project like our own and prioritize quality over shortcuts." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-8 border border-[var(--border)] hover:border-[var(--primary)] transition">
                <div className="w-14 h-14 bg-[var(--primary)] flex items-center justify-center mb-5">
                  <Icon size={24} className="text-[var(--charcoal)]" />
                </div>
                <h3 className="text-xl text-[var(--charcoal)]">{title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Drives Us */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <img src={teamImg} alt="Mr. Manash Pratim Talukdar on site" className="w-full h-[560px] object-cover" loading="lazy" width={1200} height={1400} />
          <div>
            <span className="eyebrow">Real Foundation</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-[var(--charcoal)]">What Drives Us</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Sailaja Constructions was founded on a simple idea: bring reliability back to construction. Under the leadership of proprietor Mr. Manash Pratim Talukdar, with the support of our legal and tax advisory team, we partner with homeowners, businesses and developers who care about quality as much as we do.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Licensed, insured and RERA-registered builder",
                "Customized build solutions for every project",
                "Reliable timelines and transparent reporting",
                "Clean, safe and organised job sites",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-[var(--charcoal)] font-medium">
                  <CheckCircle2 className="text-[var(--primary)]" size={20} /> {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 bg-[var(--soft-gray)] border-l-4 border-[var(--primary)]">
              <div className="text-xs uppercase tracking-widest text-[var(--primary)] font-bold mb-1" style={{ fontFamily: "Montserrat" }}>Proprietor</div>
              <div className="text-lg font-bold text-[var(--charcoal)]">Mr. Manash Pratim Talukdar</div>
              <div className="text-sm text-muted-foreground">Supported by a dedicated legal &amp; tax advisory team.</div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}