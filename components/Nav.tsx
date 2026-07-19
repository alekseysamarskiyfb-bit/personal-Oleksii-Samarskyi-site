const links = [
  { href: "#about", label: "About" },
  { href: "#creako", label: "Creako Labs" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-ink/85 backdrop-blur border-b hairline">
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display font-semibold tracking-tight text-text focus-ring rounded"
        >
          Aleksey Samarskiy
        </a>
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="eyebrow hover:text-text transition-colors focus-ring rounded"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm font-medium bg-signal text-ink px-4 py-2 rounded-full hover:opacity-90 transition-opacity focus-ring"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
