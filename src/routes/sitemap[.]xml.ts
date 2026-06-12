import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const urlObj = new URL(request.url);
        const origin = urlObj.origin || "https://sailajaconstructions.com";

        const paths = [
          "/",
          "/about",
          "/services",
          "/projects",
          "/contact",
          "/projects/arup-arcadia",
          "/projects/baneswar",
          "/projects/bhaskar",
          "/projects/bimaan-arcade",
          "/projects/durga-residency",
          "/projects/maanaav-abode",
          "/projects/maanav-abode",
          "/projects/madhab-mansion",
          "/projects/mangalmurti-enclave",
          "/projects/mh-complex",
          "/projects/sailaja-paradise",
          "/projects/sailaja-residency",
          "/projects/sailaja-sapphire",
          "/projects/shree-bishnu-commercial",
          "/projects/sunshine-residency",
          "/projects/xopun-aloy"
        ];
        const urls = paths.map((p) => `  <url><loc>${origin}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});