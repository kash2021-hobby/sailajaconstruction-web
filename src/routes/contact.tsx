import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
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
  const [submitted, setSubmitted] = useState(false);
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
              Fill out the form, give us a call, or stop by our office in Sachal, Guwahati. Let's start building something great together across Assam.
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

          <div className="bg-white shadow-2xl border-t-4 border-[var(--primary)] p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[var(--primary)] mx-auto flex items-center justify-center mb-4">
                  <Send className="text-[var(--charcoal)]" />
                </div>
                <h3 className="text-2xl text-[var(--charcoal)]">Thank you!</h3>
                <p className="text-muted-foreground mt-3">We've received your enquiry and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const firstName = data.get("firstName") as string;
                  const lastName = data.get("lastName") as string;
                  const email = data.get("email") as string;
                  const phone = data.get("phone") as string;
                  const message = data.get("message") as string;
                  const body = `*New Enquiry from Sailaja Constructions Website*%0A%0A*Name:* ${firstName} ${lastName}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
                  window.open(`https://wa.me/918471923990?text=${body}`, "_blank");
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="First Name" name="firstName" required />
                  <Field label="Last Name" name="lastName" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone Number" name="phone" type="tel" required />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-[var(--charcoal)] font-bold" style={{ fontFamily: "Montserrat" }}>
                    Your Message <span className="text-[var(--primary)]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full border-2 border-[var(--border)] focus:border-[var(--primary)] outline-none px-4 py-3 bg-white text-[var(--charcoal)] transition"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">Submit Enquiry</button>
              </form>
            )}
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

          <div className="aspect-[16/7] w-full overflow-hidden border-2 border-[var(--charcoal)]">
            <iframe
              title="Sailaja Constructions location in Sachal, Guwahati"
              src="https://www.google.com/maps?q=4RV6%2BG4R+Bormotoria+Guwahati+Assam+781036&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-[var(--charcoal)] font-bold" style={{ fontFamily: "Montserrat" }}>
        {label} {required && <span className="text-[var(--primary)]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full border-2 border-[var(--border)] focus:border-[var(--primary)] outline-none px-4 py-3 bg-white text-[var(--charcoal)] transition"
      />
    </div>
  );
}