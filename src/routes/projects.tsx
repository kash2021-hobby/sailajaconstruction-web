import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, CtaBand } from "@/components/site/PageHero";
import { projects } from "@/lib/projectsData";
import { ProjectsPageCard } from "@/components/ProjectsPageCard";

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

const tabs = ["All", "Ongoing", "Completed", "Upcoming"] as const;

function ProjectsPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const filtered = tab === "All" ? projects : projects.filter((p) => p.status === tab);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/projects") return <Outlet />;

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
                {t === "All" ? "All Projects" : t}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filtered.map((p) => (
              <div key={p.name}>
                <ProjectsPageCard project={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}