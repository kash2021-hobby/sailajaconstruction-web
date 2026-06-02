import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Flag, HeartHandshake, Target, Phone } from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/PageHero";
import { fadeUp, slideLeft, slideRight, staggerFast, scaleFade } from "@/lib/animations";
import { useIsMobile } from "@/hooks/use-mobile";
import teamImg from "@/assets/about-team.jpg";
import sapphireImg from "@/assets/project-sapphire.jpg";
import durgaImg from "@/assets/project-durga.jpg";
import xopunImg from "@/assets/project-xopun.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sailaja Constructions — Construction Company in Guwahati" },
      { name: "description", content: "16+ years building trust across Guwahati and Nagaon. Led by Mr. Manash Pratim Talukdar, Sailaja Constructions delivers residential and commercial builds with an empathy-first approach." },
      { property: "og:title", content: "About Sailaja Constructions" },
      { property: "og:description", content: "Builders in Nagaon and Guwahati since 2010 — empathy-first, RERA-certified, owner-led." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function Img({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className={`${className} bg-[var(--soft-gray)] border border-[var(--border)]`} />;
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />;
}

function AboutPage() {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const sectionViewport = { once: true, amount: 0.2 as const };
  const animY = isMobile ? 20 : 30;
  const fadeUpMobile = { hidden: { opacity: 0, y: animY }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>Building With Purpose,<br />Backed by Trust</>}
        subtitle="At Sailaja Constructions, we don't just build spaces — we build lasting relationships across Guwahati and Nagaon."
      />

      {/* ─── SECTION 2: ABOUT US ─── */}
      <section className="py-16 md:py-24 px-5 lg:px-8">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — 3-layer image composition */}
          <motion.div
            className="relative w-full"
            style={{ height: isMobile ? 320 : 500 }}
            variants={reduced ? undefined : slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Layer 1 — Background card (empty, decorative) */}
            <div
              className="absolute rounded-2xl shadow-lg bg-[#F5F5F5]"
              style={{
                width: isMobile ? 120 : 200,
                height: isMobile ? 80 : 130,
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            />

            {/* Layer 2 — Main building photo */}
            <div
              className="absolute rounded-2xl overflow-hidden shadow-lg"
              style={{
                width: isMobile ? 280 : 500,
                height: isMobile ? 220 : 400,
                top: isMobile ? 30 : 50,
                left: isMobile ? 40 : 80,
                zIndex: 2,
              }}
            >
              <Img
                src="/images/about/about-building-main.jpg"
                alt="Main Building Photo — TODO: Add src/assets/aboutimg/about-building-main.jpg"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Layer 3 — Secondary building photo with golden tint + 16+ text */}
            <div
              className="absolute rounded-2xl overflow-hidden shadow-lg"
              style={{
                width: isMobile ? 200 : 350,
                height: isMobile ? 160 : 280,
                bottom: 0,
                right: 0,
                zIndex: 3,
              }}
            >
              <div className="relative w-full h-full">
                <Img
                  src="/images/about/about-building-secondary.jpg"
                  alt="Second Building Photo — TODO: Add src/assets/aboutimg/about-building-secondary.jpg"
                  className="w-full h-full object-cover"
                />
                {/* Warm sepia/golden tint overlay */}
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "rgba(180, 120, 40, 0.45)", mixBlendMode: "multiply" }}
                />
                {/* White text overlay centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div
                    className="text-white font-black leading-none"
                    style={{
                      fontSize: isMobile ? 40 : 64,
                      fontFamily: "Montserrat",
                      textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    }}
                  >
                    16+
                  </div>
                  <div
                    className="text-white font-normal tracking-wider mt-1"
                    style={{
                      fontSize: isMobile ? 14 : 18,
                      letterSpacing: "2px",
                      textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    years Experience
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            variants={reduced ? undefined : slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="eyebrow">About Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]">
              Sailaja Construction- Building Assam, One Project at a Time
            </h2>
            <div className="mt-5 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                At Sailaja Construction, our 16 years in business have taught us invaluable lessons, culminating in the expertise we apply daily to serve our customers and communities across North East India. Established in 2010, we pride ourselves on being a premier real estate construction company dedicated to delivering top quality and unwavering reliability in every project.
              </p>
              <p>
                As a sole proprietorship firm, Sailaja Construction specializes in the meticulous construction of residential flats and dynamic commercial spaces. Our services are thoughtfully designed to spark enthusiasm and significantly improve the quality of life for our clients. We believe that a truly premium space is one built with integrity, precision, and an eye for future living.
              </p>
              <p>
                Our dedicated employees work tirelessly every day, committed to nourishing our surroundings in a safe, responsible, and sustainable way. This commitment to environmental stewardship and ethical practices underpins every structure we build.
              </p>
              <p>
                Currently, our operations are firmly established in Guwahati and Nagaon, and we hold a strong vision for future expansion, bringing our hallmark of excellence to more regions.
              </p>
              <p className="italic font-semibold text-[var(--charcoal)]">
                Our Slogan: Helping hands, Shaping Your Dream Home.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 3: INTRO (existing) ─── */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12">
          <h2 className="text-4xl md:text-5xl text-[var(--charcoal)] leading-tight">
            Built in Guwahati. Trusted Across Assam.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sailaja Constructions is a Sole Proprietorship founded in 2010 and led by Mr. Manash Pratim Talukdar. From our base in Sachal, Guwahati, we deliver residential and commercial construction services across Guwahati, Nagaon and Central Assam — combining honest timelines, clear communication and work that holds up inside and out.
          </p>
        </div>

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

      {/* ─── SECTION 4: MISSION VISION VALUES (existing) ─── */}
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

      {/* ─── SECTION 5: REAL FOUNDATION (existing) ─── */}
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

      {/* ─── SECTION 6: OUR DEDICATED TEAM ─── */}
      <section className="py-16 md:py-24 px-5 lg:px-8 bg-[var(--soft-gray)]">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
            variants={reduced ? undefined : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="eyebrow">Our Team</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]">
              Our Dedicated Team
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              The success of Sailaja Construction is driven by our team of experienced professionals who bring their expertise to every aspect of our operations.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={reduced ? undefined : staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
          >
            {/* Team Member 1 — Manash */}
            <motion.div
              variants={reduced ? undefined : fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Img
                  src="/images/about/team-manash.jpg"
                  alt="Mr. Manash Pratim Talukdar — TODO: Add src/assets/aboutimg/team-manash.jpg"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="text-white font-black text-sm md:text-base" style={{ fontFamily: "Montserrat" }}>
                    Mr. Manash Pratim Talukdar
                  </div>
                  <div className="text-[var(--primary)] text-xs md:text-sm font-semibold mt-0.5">
                    (Proprietor/Founder)
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Team Member 2 — Mridula */}
            <motion.div
              variants={reduced ? undefined : fadeUp}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Img
                  src="/images/about/team-mridula.jpg"
                  alt="Mridula Gogoi — TODO: Add src/assets/aboutimg/team-mridula.jpg"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="text-white font-black text-sm md:text-base" style={{ fontFamily: "Montserrat" }}>
                    Mridula Gogoi
                  </div>
                  <div className="text-[var(--primary)] text-xs md:text-sm font-semibold mt-0.5">
                    (Legal Advisor)
                  </div>
                  <a href="tel:9435547314" className="inline-flex items-center gap-1 text-white/80 text-xs mt-1.5 hover:text-[var(--primary)] transition">
                    <Phone size={11} /> 94355-47314
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Team Member 3 — Himangshu */}
            <motion.div
              variants={reduced ? undefined : fadeUp}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Img
                  src="/images/about/team-himangshu.jpg"
                  alt="Himangshu Kalita — TODO: Add src/assets/aboutimg/team-himangshu.jpg"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="text-white font-black text-sm md:text-base" style={{ fontFamily: "Montserrat" }}>
                    Himangshu Kalita
                  </div>
                  <div className="text-[var(--primary)] text-xs md:text-sm font-semibold mt-0.5">
                    (Legal Advisor)
                  </div>
                  <a href="tel:9435547314" className="inline-flex items-center gap-1 text-white/80 text-xs mt-1.5 hover:text-[var(--primary)] transition">
                    <Phone size={11} /> 94355-47314
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Team Member 4 — Bishal */}
            <motion.div
              variants={reduced ? undefined : fadeUp}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition lg:col-start-2"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Img
                  src="/images/about/team-bishal.jpg"
                  alt="Bishal Kalita — TODO: Add src/assets/aboutimg/team-bishal.jpg"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="text-white font-black text-sm md:text-base" style={{ fontFamily: "Montserrat" }}>
                    Bishal Kalita
                  </div>
                  <div className="text-[var(--primary)] text-xs md:text-sm font-semibold mt-0.5">
                    (Tax Consultant)
                  </div>
                  <a href="tel:7899517651" className="inline-flex items-center gap-1 text-white/80 text-xs mt-1.5 hover:text-[var(--primary)] transition">
                    <Phone size={11} /> 78995-17651
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Team Member 5 — Anupam */}
            <motion.div
              variants={reduced ? undefined : fadeUp}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Img
                  src="/images/about/team-anupam.jpg"
                  alt="Anupam Kshatriya — TODO: Add src/assets/aboutimg/team-anupam.jpg"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="text-white font-black text-sm md:text-base" style={{ fontFamily: "Montserrat" }}>
                    Anupam Kshatriya
                  </div>
                  <div className="text-[var(--primary)] text-xs md:text-sm font-semibold mt-0.5">
                    (Manager)
                  </div>
                  <a href="tel:9957720455" className="inline-flex items-center gap-1 text-white/80 text-xs mt-1.5 hover:text-[var(--primary)] transition">
                    <Phone size={11} /> 99577-20455
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
