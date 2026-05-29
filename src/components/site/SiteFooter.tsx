import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Shield } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--charcoal)] text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-[var(--primary)] flex items-center justify-center font-black text-[var(--charcoal)]">S</div>
            <span className="font-extrabold text-lg text-white" style={{ fontFamily: "Montserrat" }}>
              SAILAJA<span className="text-[var(--primary)]">.</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            A trusted Construction Company in Guwahati and Builders in Nagaon, delivering residential, commercial and interior projects across Assam since 2010.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-[var(--primary)] hover:text-[var(--charcoal)] hover:border-[var(--primary)] transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-5" style={{ fontFamily: "Montserrat" }}>Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-[var(--primary)]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[var(--primary)]">About</Link></li>
            <li><Link to="/services" className="hover:text-[var(--primary)]">Services</Link></li>
            <li><Link to="/projects" className="hover:text-[var(--primary)]">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--primary)]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-5" style={{ fontFamily: "Montserrat" }}>Services</h4>
          <ul className="space-y-3 text-sm">
            <li>Residential Construction</li>
            <li>Commercial Construction</li>
            <li>Interior Design</li>
            <li>Land Management</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-5" style={{ fontFamily: "Montserrat" }}>Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin size={16} className="text-[var(--primary)] mt-0.5 shrink-0" /> Flat No. G1, Mangalmurti Enclave, Sachal, Guwahati, Assam 781022</li>
            <li className="flex gap-3"><Mail size={16} className="text-[var(--primary)] shrink-0" /> info@sailajaconstructions.com</li>
            <li className="flex gap-3"><Phone size={16} className="text-[var(--primary)] shrink-0" /> Guwahati &amp; Nagaon</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-[var(--primary)]" />
            <span>RERA Certified Builder &middot; Registered under Assam RERA</span>
          </div>
          <div>&copy; {new Date().getFullYear()} Sailaja Constructions. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}