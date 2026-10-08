"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [active, setActive] = useState("");

  // Detect scroll for nav shadow and logo visibility
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
      // Hero section is typically ~400-600px tall. We show the logo once we scroll down a bit.
      setShowLogo(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`);
        }
      });
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(callback, {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleLinkClick = useCallback((href: string) => {
    setOpen(false);
    setActive(href);
  }, []);

  // Close mobile nav on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <>
      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-btn { display: none; }
        @media (max-width: 767px) {
          .nav-desktop { display: none; }
          .nav-mobile-btn { display: flex; }
        }
      `}</style>

      <header
        id="top"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "var(--bg)",
          borderBottom: "1px solid var(--bd)",
          boxShadow: scrolled ? "0 1px 16px rgba(0,0,0,.04)" : "none",
          transition: "box-shadow 0.2s ease",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "4rem",
            }}
          >
            {/* Logo */}
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActive("");
              }}
              style={{
                fontWeight: 600,
                fontSize: "1.0625rem",
                letterSpacing: "-0.02em",
                color: "var(--tx)",
                textDecoration: "none",
                flexShrink: 0,
                opacity: showLogo ? 1 : 0,
                pointerEvents: showLogo ? "auto" : "none",
                transform: showLogo ? "translateY(0)" : "translateY(5px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
              aria-label={`${personalInfo.firstName} — back to top`}
            >
              {personalInfo.firstName}
              <span style={{ color: "var(--ac)" }}>.</span>
            </a>

            {/* Desktop nav */}
            <nav
              aria-label="Primary navigation"
              className="nav-desktop"
              style={{
                alignItems: "center",
                gap: "0.125rem",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  style={{
                    fontSize: "0.875rem",
                    padding: "0.375rem 0.75rem",
                    borderRadius: "0.375rem",
                    color: active === link.href ? "var(--tx)" : "var(--t2)",
                    fontWeight: active === link.href ? 500 : 400,
                    textDecoration: "none",
                    transition: "color 0.15s ease, background-color 0.15s ease",
                    backgroundColor:
                      active === link.href ? "var(--sub)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--tx)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      active === link.href ? "var(--tx)" : "var(--t2)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right actions */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="nav-mobile-btn btn-icon"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-nav"
              >
                {open ? (
                  <X size={16} aria-hidden="true" />
                ) : (
                  <Menu size={16} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav panel */}
        {open && (
          <div
            id="mobile-nav"
            style={{
              borderTop: "1px solid var(--bd)",
              backgroundColor: "var(--bg)",
              padding: "1rem var(--content-px)",
            }}
          >
            <nav
              aria-label="Mobile navigation"
              style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  style={{
                    fontSize: "0.9375rem",
                    padding: "0.625rem 0.75rem",
                    borderRadius: "0.375rem",
                    color: active === link.href ? "var(--tx)" : "var(--t2)",
                    fontWeight: active === link.href ? 500 : 400,
                    textDecoration: "none",
                    backgroundColor:
                      active === link.href ? "var(--sub)" : "transparent",
                    transition: "color 0.15s ease",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
