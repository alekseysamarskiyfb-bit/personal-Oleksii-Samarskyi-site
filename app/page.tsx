import Image from "next/image";
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
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
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
          </div>

          <div className="justify-self-start md:justify-self-end">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-2xl overflow-hidden border hairline">
              <Image
                src="/avatar.jpeg"
                alt="Aleksey Samarskiy"
                width={352}
                height={352}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
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
              For the past 3+ years I've worked inside performance
              marketing — producing static, motion and AI-assisted
              creatives for paid acquisition on Meta, TikTok, Native and
              Display, running A/B-tests alongside media buyers, and
              leading a team of designers through that process. That's
              where design and growth actually meet: not in theory, in the
              daily loop of create → test → read the numbers → iterate.
            </p>
            <p>
              My brother Mark and I co-founded{" "}
              <a href="#creako" className="text-text underline decoration-signal underline-offset-4">
                Creako Labs
              </a>{" "}
              together. He builds the products. I'm bringing that same
              loop — brand, creative and growth — to the products we build.
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
            Not an agency — a product studio. My brother Mark and I
            co-founded Creako Labs to build our own digital products end
            to end, from concept to growth, rather than working to
            someone else's brief.
          </p>

          <div className="bg-ink-2 border hairline rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="eyebrow mb-2">Product & engineering</p>
                <p className="font-display text-xl font-medium">Mark Skrypka</p>
              </div>
              <div>
                <p className="eyebrow eyebrow-signal mb-2">Brand & growth</p>
                <p className="font-display text-xl font-medium">Aleksey Samarskiy</p>
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
              <li>A/B testing with media buyers</li>
              <li>Paid acquisition — Meta, TikTok, Google</li>
              <li>SEO</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow eyebrow-data mb-4">Brand & creative</p>
            <ul className="space-y-3 text-muted">
              <li>Logo &amp; brand identity</li>
              <li>Static, motion & AI-assisted ad creatives</li>
              <li>Creative direction</li>
              <li>Midjourney, Runway, HeyGen, After Effects</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Product & team</p>
            <ul className="space-y-3 text-muted">
              <li>UI/UX design</li>
              <li>Design systems</li>
              <li>Leading creative teams</li>
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      {/* TRACK RECORD */}
      <section id="track-record" className="max-w-content mx-auto px-6 py-20 md:py-28">
        <p className="eyebrow mb-4">Track record</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12 max-w-2xl">
          From performance creative to building our own products.
        </h2>

        <div className="space-y-10">
          {/* Creako Labs — now */}
          <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 pb-10 border-b hairline">
            <p className="eyebrow eyebrow-signal">Now</p>
            <div>
              <h3 className="font-display text-xl font-semibold mb-1">
                Co-founder — Creako Labs
              </h3>
              <p className="text-muted mb-3">
                Co-founding a product studio with Mark — brand, creative
                direction and growth for Recal and Ray.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Brand", "Growth", "Product Design"].map((t) => (
                  <span key={t} className="text-xs eyebrow border hairline rounded-full px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Senior Performance Creative Designer */}
          <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 pb-10 border-b hairline">
            <p className="eyebrow">Dec 2025 — Present</p>
            <div>
              <h3 className="font-display text-xl font-semibold mb-1">
                Senior Performance Creative Designer
              </h3>
              <p className="eyebrow mb-3">Affiliate media-buying team · Poland · Remote</p>
              <p className="text-muted mb-3">
                Producing static, motion and AI-assisted creatives for paid
                affiliate campaigns, working directly with media buyers on
                testing and optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Performance Marketing", "Motion Design", "AI Creative"].map((t) => (
                  <span key={t} className="text-xs eyebrow border hairline rounded-full px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Traffic Place */}
          <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 pb-10 border-b hairline">
            <p className="eyebrow">Oct 2025 — Apr 2026</p>
            <div>
              <h3 className="font-display text-xl font-semibold mb-1">
                Performance Creative Designer — Traffic Place
              </h3>
              <p className="eyebrow mb-3">Part-time · Remote</p>
              <p className="text-muted mb-3">
                Built AI-generated and UGC-style ad creatives for Sweepstakes
                campaigns across paid social.
              </p>
              <div className="flex flex-wrap gap-2">
                {["UGC Advertising", "Prompt Engineering"].map((t) => (
                  <span key={t} className="text-xs eyebrow border hairline rounded-full px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ADPRODIGIES — nested */}
          <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 pb-10 border-b hairline">
            <p className="eyebrow">Aug 2024 — Nov 2025</p>
            <div>
              <p className="eyebrow eyebrow-data mb-3">ADPRODIGIES · 1 yr 4 mos · Remote</p>

              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold mb-1">
                  Motion & Creative Designer
                </h3>
                <p className="eyebrow mb-3">Aug 2025 — Nov 2025 · Poland</p>
                <p className="text-muted">
                  Produced static, motion and AI-assisted creatives for
                  iGaming campaigns in a high-volume production pipeline.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold mb-1">
                  Team Lead / Performance Creative Designer
                </h3>
                <p className="eyebrow mb-3">Aug 2024 — Aug 2025 · 1 yr 1 mo · Ukraine</p>
                <p className="text-muted mb-3">
                  Led a team of 4 designers, ran weekly creative reviews with
                  media buyers and owned the team's A/B-testing and
                  production workflow.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Team Leadership", "Performance Marketing"].map((t) => (
                    <span key={t} className="text-xs eyebrow border hairline rounded-full px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Private Media Buying Team */}
          <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 pb-10 border-b hairline">
            <p className="eyebrow">Nov 2024 — Jul 2025</p>
            <div>
              <h3 className="font-display text-xl font-semibold mb-1">
                Performance Creative Designer
              </h3>
              <p className="eyebrow mb-3">Affiliate media-buying team · Part-time · Ukraine / Remote</p>
              <p className="text-muted mb-3">
                Created static and video creatives and landing pages for
                affiliate campaigns, reviewed directly with media buyers.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Affiliate Marketing", "Banner Design"].map((t) => (
                  <span key={t} className="text-xs eyebrow border hairline rounded-full px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Earlier roles, condensed */}
          <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10">
            <p className="eyebrow">Sep 2023 — Sep 2024</p>
            <div>
              <h3 className="font-display text-xl font-semibold mb-1">
                Creative Designer → Junior Performance Designer
              </h3>
              <p className="eyebrow mb-3">Affiliate & performance marketing teams · Ukraine / Remote</p>
              <p className="text-muted">
                Early roles producing static, video and animated ad
                creatives for Search, Sweepstakes and Crypto paid campaigns —
                where the performance-creative loop started.
              </p>
            </div>
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
            href="mailto:oleksii.samarskyii@gmail.com"
            className="bg-signal text-ink font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity focus-ring"
          >
            oleksii.samarskyii@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/oleksii-samarskyi"
            target="_blank"
            rel="noopener noreferrer"
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
