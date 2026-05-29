import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--charcoal)] shadow-lg" : "bg-[var(--charcoal)]/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white">
          <div className="w-10 h-10 bg-[var(--primary)] flex items-center justify-center font-black text-[var(--charcoal)] text-lg">S</div>
          <span className="font-extrabold text-lg tracking-wide" style={{ fontFamily: "Montserrat" }}>
            SAILAJA<span className="text-[var(--primary)]">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-semibold text-white/85 hover:text-[var(--primary)] transition-colors uppercase tracking-wider"
              activeProps={{ className: "text-[var(--primary)]" }}
              activeOptions={{ exact: l.to === "/" }}
              style={{ fontFamily: "Montserrat" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary">Get a Quote</Link>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--charcoal)] border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-white font-semibold uppercase tracking-wider text-sm"
                style={{ fontFamily: "Montserrat" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}