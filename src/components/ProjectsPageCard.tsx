import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Project } from "@/lib/projectsData";

function getHighlights(p: Project): { label: string }[] {
  const hasRERA = p.tags?.some((t) => t.toLowerCase().includes("rera"));

  if (p.status === "Ongoing") {
    return [
      { label: "Currently under construction" },
      { label: `${p.area} total area` },
      { label: hasRERA ? "RERA Certified" : `Located in ${p.location}` },
    ];
  }

  if (p.status === "Completed") {
    return [
      { label: "Ready to move in" },
      { label: `${p.area} ${p.type === "Commercial" ? "total area" : "per unit"}` },
      { label: hasRERA ? "RERA: Certified" : `Located in ${p.location}` },
    ];
  }

  return [
    { label: "Coming soon" },
    { label: `${p.area} total area` },
    { label: `Located in ${p.location}` },
  ];
}

const detailRoutes: Record<string, string> = {
  "Arup Arcadia": "/projects/arup-arcadia",
  "Sailaja's Maanav Abode": "/projects/maanav-abode",
  "Sailaja's Baneswar": "/projects/baneswar",
  "Sailaja's Bhaskar Residency": "/projects/bhaskar",
  "Sailaja's Xopun Aloy": "/projects/xopun-aloy",
  "Sailaja's Madhab Mansion": "/projects/madhab-mansion",
  "Sailaja Paradise": "/projects/sailaja-paradise",
  "Sailaja's Sapphire": "/projects/sailaja-sapphire",
  "Sailaja's Sunshine Residency": "/projects/sunshine-residency",
  "Bimaan Arcade": "/projects/bimaan-arcade",
  "Sailaja's Durga Residency": "/projects/durga-residency",
  "Sailaja's Mangalmurti Enclave": "/projects/mangalmurti-enclave",
};

export function ProjectsPageCard({ project }: { project: Project }) {
  const highlights = getHighlights(project);
  const route = detailRoutes[project.name] || null;
  const hasDetailPage = route !== null;

  const card = (
    <article className="bg-white rounded-[24px] overflow-hidden transition-all duration-300 cursor-pointer h-full flex flex-col"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)", border: "1px solid #E5E7EB" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-3px)";
        el.style.boxShadow = "0 10px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "";
        el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: "24px 24px 80px 80px" }}>
        <div className="absolute top-3 left-3 z-10 bg-yellow-400 text-[#111827] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
          {project.status}
        </div>
        <img
          src={project.img}
          alt={`${project.name} building exterior`}
          className="w-full h-full object-cover"
          loading="lazy"
          width={1200}
          height={900}
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[22px] font-bold text-[#111827] flex items-center justify-between gap-2">
          {project.name}
          {hasDetailPage && <ArrowUpRight size={18} className="text-[#111827] shrink-0" />}
        </h3>

        <div className="h-4" />

        <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">
          {project.desc}
        </p>

        <div className="h-4" />

        <p className="text-sm font-bold text-[#111827]">Highlights</p>

        <div className="h-3" />

        <div className="space-y-3 mb-auto">
          {highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-[#FF7A00] shrink-0 mt-0.5" />
              <span className="text-[13px] text-[#374151]">{h.label}</span>
            </div>
          ))}
        </div>

        <div className="h-4" />

        <div className="pt-3 border-t border-[#E5E7EB]">
          <span className="text-[13px] text-[#9CA3AF]">
            Type: {project.type}
          </span>
        </div>
      </div>
    </article>
  );

  if (hasDetailPage) {
    return <Link to={route} className="block h-full">{card}</Link>;
  }

  return <div className="h-full">{card}</div>;
}
