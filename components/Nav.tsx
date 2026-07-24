"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#creako", label: "Creako Labs" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#track-record", label: "Track Record" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Lock scroll without the horizontal jump caused by the scrollbar disappearing
  useEffect(() => {
    if (open) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Scrollspy: highlight whichever section is currently passing through the "reading band"
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b hairline">
      <div className="bg-ink/90 backdrop-blur">
      <nav className="max-w-content mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4">
        <a
          href="#top"
          className="logo-mark font-mono text-sm text-text focus-ring rounded justify-self-start"
          onClick={() => setOpen(false)}
        >
          <span className="text-signal">~</span>oleksii.samarskyi
          <span className="logo-mark__cursor">_</span>
        </a>

        <ul className="hidden md:flex items-center justify-center gap-7 justify-self-center">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nav-link tag transition-colors focus-ring rounded no-underline ${
                  active === l.href ? "nav-link--active text-text" : "text-muted hover:text-text"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 justify-self-end">
          <a
            href="#contact"
            className="button button-primary button-nav focus-ring hidden md:inline-flex"
          >
            Get in touch
          </a>

          {/* Burger — mobile only */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`burger md:hidden focus-ring ${open ? "burger--open" : ""}`}
          >
            <span className="burger__bar" />
            <span className="burger__bar" />
            <span className="burger__bar" />
          </button>
        </div>
      </nav>
      </div>

      {/* Mobile panel */}
      <div className={`mobile-panel md:hidden ${open ? "mobile-panel--open" : ""}`}>
        <ul className="mobile-panel__list">
          {links.map((l, i) => (
            <li
              key={l.href}
              className="mobile-panel__item"
              style={{ transitionDelay: open ? `${80 + i * 55}ms` : "0ms" }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`mobile-panel__link font-display text-2xl font-semibold tracking-tight ${
                  active === l.href ? "mobile-panel__link--active" : ""
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li
            className="mobile-panel__item mobile-panel__item--cta"
            style={{ transitionDelay: open ? `${80 + links.length * 55}ms` : "0ms" }}
          >
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="button button-primary focus-ring"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
