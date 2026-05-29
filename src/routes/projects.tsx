import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Ruler } from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/PageHero";
import durgaImg from "@/assets/project-durga.jpg";
import sapphireImg from "@/assets/project-sapphire.jpg";
import bimaanImg from "@/assets/project-bimaan.jpg";
import sunshineImg from "@/assets/project-sunshine.jpg";
import xopunImg from "@/assets/project-xopun.jpg";
import mangalImg from "@/assets/project-mangalmurti.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Construction Company in Guwahati | Sailaja Constructions" },
      { name: "description", content: "Explore residential and commercial projects by Sailaja Constructions across Guwahati and Nagaon — ongoing and completed builds." },
      { property: "og:title", content: "From Vision to Reality — Our Projects" },
      { property: "og:description", content: "Ongoing and completed construction projects by Sailaja Constructions in Guwahati and Nagaon." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

type Project = {
  name: string;
  type: "Residential" | "Commercial";
  status: "Ongoing" | "Completed";
  area: string;
  location: string;
  img: string;
  desc: string;
};

const projects: Project[] = [
  { name: "Durga Residency", type: "Residential", status: "Ongoing", area: "32,000 sq.ft", location: "Guwahati", img: durgaImg, desc: "A premium residential tower combining open-concept apartments with energy-efficient design." },
  { name: "Sailaja's Sapphire", type: "Residential", status: "Ongoing", area: "48,000 sq.ft", location: "Guwahati", img: sapphireImg, desc: "Multi-family residential community with landscaped courtyards and premium amenities." },
  { name: "Bimaan Arcade", type: "Commercial", status: "Ongoing", area: "22,500 sq.ft", location: "Guwahati", img: bimaanImg, desc: "Mixed-use commercial arcade with retail, dining and office space in central Guwahati." },
  { name: "Sunshine Residency", type: "Residential", status: "Completed", area: "28,000 sq.ft", location: "Nagaon", img: sunshineImg, desc: "Bright, sunlit residential apartments built for comfortable family living." },
  { name: "Xopun Aloy", type: "Residential", status: "Completed", area: "12,000 sq.ft", location: "Guwahati", img: xopunImg, desc: "A contemporary single-family residence with bespoke interiors and a private garden." },
  { name: "Mangalmurti Enclave", type: "Residential", status: "Completed", area: "36,000 sq.ft", location: "Sachal, Guwahati", img: mangalImg, desc: "A serene apartment enclave with a central courtyard and family-first amenities." },
];

const tabs = ["All", "Ongoing", "Completed"] as const;

function ProjectsPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const filtered = tab === "All" ? projects : projects.filter((p) => p.status === tab);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={<>From Vision to Reality</>}
        subtitle="Explore a showcase of the spaces we've proudly built — and a preview of what's coming next across Guwahati and Nagaon."
      />

      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="eyebrow">Built to Last</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-[var(--charcoal)]">Where Ideas Become Landmarks</h2>
          </div>

          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-3 text-xs font-bold uppercase tracking-widest border-2 transition ${
                  tab === t
                    ? "bg-[var(--charcoal)] text-white border-[var(--charcoal)]"
                    : "bg-transparent text-[var(--charcoal)] border-[var(--charcoal)]/20 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                }`}
                style={{ fontFamily: "Montserrat" }}
              >
                {t === "All" ? "All Projects" : t === "Ongoing" ? "Ongoing" : "Completed"}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <article key={p.name} className="group bg-white border border-[var(--border)] overflow-hidden hover:shadow-2xl transition">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" loading="lazy" width={1200} height={900} />
                  <div className="absolute top-4 left-4 bg-[var(--primary)] text-[var(--charcoal)] px-3 py-1 text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "Montserrat" }}>
                    {p.status}
                  </div>
                  <div className="absolute inset-0 bg-[var(--charcoal)]/85 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white p-6 text-center">
                    <h3 className="text-2xl mb-3">{p.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--primary)]"><Ruler size={14} /> {p.area}</div>
                    <div className="flex items-center gap-2 text-sm text-white/80 mt-2"><MapPin size={14} /> {p.location}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[var(--primary)] font-bold" style={{ fontFamily: "Montserrat" }}>{p.type}</div>
                  <h3 className="text-xl text-[var(--charcoal)] mt-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
                  <div className="mt-4 pt-4 border-t border-[var(--border)] flex justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Ruler size={12} /> {p.area}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {p.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}