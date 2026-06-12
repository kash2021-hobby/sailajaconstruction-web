import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sailaja Constructions — Builders in Nagaon & Guwahati" },
      { name: "description", content: "Get in touch with Sailaja Constructions in Sachal, Guwahati. Serving Guwahati and Nagaon for residential and commercial construction." },
      { property: "og:title", content: "Get in Touch with Sailaja Constructions" },
      { property: "og:description", content: "Reach out today to schedule a free consultation for your next build in Guwahati or Nagaon." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [showMap, setShowMap] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Get in Touch with Sailaja</>}
        subtitle="Reach out today to schedule a free consultation for your next build in Guwahati or Nagaon."
      />

      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="eyebrow">We're Here to Help</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-[var(--charcoal)] leading-tight">
              Let's Talk About<br />Your Next Build.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Give us a call, message us on WhatsApp, or stop by our office in Sachal, Guwahati. Let's start building something great together across Assam.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: MapPin, label: "Visit us", value: "Flat No-G1, Mangalmurti Enclave, Rangamatir Path, Sachal, Guwahati-781022." },
                { icon: Mail, label: "Email", value: "sailajaconstruction@gmail.com" },
                { icon: Phone, label: "Service Areas", value: "Guwahati & Nagaon, Assam" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-12 h-12 bg-[var(--primary)] flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[var(--charcoal)]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground" style={{ fontFamily: "Montserrat" }}>{label}</div>
                    <div className="text-[var(--charcoal)] font-semibold mt-1">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow-2xl border-t-4 border-[#25D366] p-8 md:p-10 text-center flex flex-col items-center justify-center min-h-[400px] transition-transform hover:-translate-y-1 duration-300">
            <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <svg
                className="w-12 h-12 text-[#25D366]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.498 1.452 5.433 1.453 5.435 0 9.856-4.418 9.86-9.858.002-2.635-1.023-5.112-2.887-6.978C17.187 1.906 14.71 .882 12.01.882c-5.44 0-9.859 4.418-9.863 9.858-.002 2.015.525 3.987 1.528 5.73l-.988 3.606 3.69-.968zm11.36-6.143c-.302-.15-1.788-.882-2.065-.983-.277-.1-.478-.15-.679.15-.2.3-.777.983-.95 1.185-.174.2-.349.226-.651.075-1.119-.558-1.928-.97-2.695-2.285-.2-.342.2-.317.572-1.058.06-.12.03-.226-.015-.327-.045-.1-.478-1.155-.655-1.583-.172-.416-.347-.36-.478-.366-.124-.006-.266-.007-.407-.007-.142 0-.372.053-.567.266-.195.213-.745.728-.745 1.775 0 1.047.761 2.059.868 2.203.106.144 1.498 2.288 3.628 3.208.507.219.902.35 1.213.449.51.162.973.139 1.34.084.41-.06 1.788-.731 2.041-1.439.252-.708.252-1.314.177-1.439-.076-.126-.277-.2-.579-.35z" />
              </svg>
            </div>
            <h3 className="text-2xl text-[var(--charcoal)] font-bold mb-3" style={{ fontFamily: "Montserrat" }}>
              Chat on WhatsApp
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-sm">
              Have a project in mind or need a free consultation? Contact us directly on WhatsApp for immediate assistance.
            </p>
            <a
              href="https://wa.me/918471923990?text=Hi!%20I'm%20interested%20in%20Sailaja%20Constructions%20and%20would%20like%20to%20learn%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-3 w-full max-w-xs justify-center py-4 text-base tracking-wider transition-all hover:bg-[#128C7E] hover:border-[#128C7E] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 duration-200"
              style={{ backgroundColor: "#25D366", borderColor: "#25D366", color: "white" }}
            >
              Start WhatsApp Chat
            </a>
            <p className="text-xs text-muted-foreground mt-4">
              Typically replies in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Find us on Google */}
      <section className="py-24 px-6 bg-[var(--soft-gray)]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow">We Are Here</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-[var(--charcoal)]">Find Us in Guwahati</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { icon: MapPin, label: "Address", value: "Sachal, Guwahati, Assam 781022" },
              { icon: Mail, label: "Send Email", value: "sailajaconstruction@gmail.com" },
              { icon: Phone, label: "Service Area", value: "Guwahati & Nagaon" },
              { icon: Instagram, label: "Follow Us", value: "social", social: true },
            ].map(({ icon: Icon, label, value, social }) => (
              <div key={label} className="bg-white p-6 text-center border-t-4 border-[var(--primary)]">
                <div className="w-14 h-14 bg-[var(--primary)] mx-auto flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[var(--charcoal)]" />
                </div>
                <div className="text-sm font-bold text-[var(--charcoal)]" style={{ fontFamily: "Montserrat" }}>{label}</div>
                {social ? (
                  <div className="flex justify-center gap-3 mt-3 text-[var(--charcoal)]">
                    <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                    <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                    <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                  </div>
                ) : (
                  <div className="text-sm text-muted-foreground mt-2">{value}</div>
                )}
              </div>
            ))}
          </div>

          <div
            className="aspect-[16/7] w-full overflow-hidden border-2 border-[var(--charcoal)] cursor-pointer relative"
            onClick={() => setShowMap(true)}
          >
            {showMap ? (
              <iframe
                title="Sailaja Constructions location in Sachal, Guwahati"
                src="https://www.google.com/maps?q=4RV6%2BG4R+Bormotoria+Guwahati+Assam+781036&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--soft-gray)] text-[var(--charcoal)] gap-3 p-6">
                <MapPin size={40} className="text-[var(--primary)]" />
                <span className="font-bold text-lg" style={{ fontFamily: "Montserrat" }}>Click to View Map</span>
                <span className="text-sm text-muted-foreground">Flat No-G1, Mangalmurti Enclave, Rangamatir Path, Sachal, Guwahati-781022.</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}