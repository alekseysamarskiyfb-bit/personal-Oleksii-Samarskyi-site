import Nav from "@/components/Nav";
import GrowthLine from "@/components/GrowthLine";

function Divider() {
  return (
    <div className="max-w-content mx-auto px-6">
      <GrowthLine variant="divider" className="w-full h-8 opacity-70" />
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className="font-body">
      <Nav />

      {/* HERO */}
      <section className="max-w-content mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <p className="eyebrow eyebrow-signal mb-5">Co-founder, Creako Labs</p>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05] font-semibold tracking-tight max-w-3xl">
          Building and growing our own digital products.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl">
          Design-led from the start. Now driving growth — audits,
          experiments, paid acquisition and creative — for the products
          Creako Labs builds.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="bg-signal text-ink font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity focus-ring"
          >
            Get in touch
          </a>
          <a
            href="#products"
            className="eyebrow border hairline px-6 py-3 rounded-full hover:text-text transition-colors focus-ring"
          >
            See the products
          </a>
        </div>

        <GrowthLine className="w-full max-w-2xl h-auto mt-16" />
      </section>

      <Divider />

      {/* ABOUT */}
      <section id="about" className="max-w-content mx-auto px-6 py-20 md:py-28">
        <p className="eyebrow mb-4">About</p>
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            From brand to growth.
          </h2>
          <div className="space-y-5 text-muted text-lg leading-relaxed">
            <p>
              I started as a designer — UI/UX, branding, logo and identity
              work, creative direction. That background is still the base
              of everything I do: I think in systems, not just screens.
            </p>
            <p>
              Right now I'm moving into growth marketing — learning it the
              way I learned design: by doing the work. Audits, hypothesis
              testing, SEO, and running paid acquisition on Google and Meta,
              alongside the creative and brand work I already own.
            </p>
            <p>
              My brother and I co-founded{" "}
              <a href="#creako" className="text-text underline decoration-signal underline-offset-4">
                Creako Labs
              </a>{" "}
              together. He builds the products. I build the brand around
              them and, increasingly, the growth engine that helps them
              find real users.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* CREAKO LABS */}
      <section id="creako" className="max-w-content mx-auto px-6 py-20 md:py-28">
        <p className="eyebrow eyebrow-data mb-4">Company</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-8">
          Creako Labs
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <p className="text-lg text-muted leading-relaxed">
            Not an agency — a product studio. My brother and I co-founded
            Creako Labs to build our own digital products end to end, from
            concept to growth, rather than working to someone else's brief.
          </p>

          <div className="bg-ink-2 border hairline rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="eyebrow mb-2">Product & engineering</p>
                <p className="font-display text-xl font-medium">My brother</p>
              </div>
              <div>
                <p className="eyebrow eyebrow-signal mb-2">Brand & growth</p>
                <p className="font-display text-xl font-medium">Me</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t hairline">
              <p className="eyebrow mb-3">Products</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-ink-3 border hairline rounded-full px-3 py-1">
                  Recal
                </span>
                <span className="text-sm bg-ink-3 border hairline rounded-full px-3 py-1">
                  Ray
                </span>
                <span className="text-sm text-muted border border-dashed hairline rounded-full px-3 py-1">
                  + future products
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* CAPABILITIES */}
      <section id="capabilities" className="max-w-content mx-auto px-6 py-20 md:py-28">
        <p className="eyebrow mb-4">Capabilities</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12 max-w-2xl">
          What I bring to a product.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="eyebrow eyebrow-signal mb-4">Growth & performance</p>
            <ul className="space-y-3 text-muted">
              <li>Growth audits &amp; analytics</li>
              <li>Hypothesis testing / experiments</li>
              <li>Google Ads &amp; Meta Ads</li>
              <li>SEO</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow eyebrow-data mb-4">Brand & creative</p>
            <ul className="space-y-3 text-muted">
              <li>Logo &amp; brand identity</li>
              <li>Ad creatives — video &amp; photo</li>
              <li>Creative direction</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Product</p>
            <ul className="space-y-3 text-muted">
              <li>UI/UX design</li>
              <li>Design systems</li>
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      {/* PRODUCTS */}
      <section id="products" className="max-w-content mx-auto px-6 py-20 md:py-28">
        <p className="eyebrow mb-4">Proof of work</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12 max-w-2xl">
          Products I'm growing, from Creako Labs.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Recal */}
          <div className="bg-ink-2 border hairline rounded-2xl p-8">
            <div className="flex items-center justify-between mb-4">
              <p className="eyebrow eyebrow-signal">Live</p>
              <p className="eyebrow">Creako Labs</p>
            </div>
            <h3 className="font-display text-2xl font-semibold mb-2">Recal</h3>
            <p className="eyebrow mb-4">Role — Growth & Creative</p>
            <p className="text-muted leading-relaxed">
              Running growth audits, testing acquisition channels and
              building the creative — ad visuals and previews — behind the
              campaigns.
            </p>
          </div>

          {/* Ray */}
          <div className="bg-ink-2 border hairline rounded-2xl p-8">
            <div className="flex items-center justify-between mb-4">
              <p className="eyebrow eyebrow-data">Building</p>
              <p className="eyebrow">Creako Labs</p>
            </div>
            <h3 className="font-display text-2xl font-semibold mb-2">Ray</h3>
            <p className="eyebrow mb-4">Role — Growth & Creative</p>
            <p className="text-muted leading-relaxed">
              Laying the brand and growth foundation early — identity,
              positioning and the first acquisition experiments — as the
              product moves toward launch.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* CONTACT */}
      <section id="contact" className="max-w-content mx-auto px-6 py-20 md:py-28">
        <p className="eyebrow mb-4">Contact</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl mb-6">
          Building a product? Let's talk.
        </h2>
        <p className="text-lg text-muted max-w-xl mb-10">
          Open to conversations with founders, partners and teams working
          on brand, design and growth for early-stage products.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:hello@example.com"
            className="bg-signal text-ink font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity focus-ring"
          >
            hello@example.com
          </a>
          <a
            href="#"
            className="eyebrow border hairline px-6 py-3 rounded-full hover:text-text transition-colors focus-ring"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="border-t hairline">
        <div className="max-w-content mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-2 text-muted eyebrow">
          <p>Aleksey Samarskiy — Co-founder, Creako Labs</p>
          <p>© 2026</p>
        </div>
      </footer>
    </main>
  );
}
