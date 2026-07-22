import Image from "next/image";
import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import GrowthSignal from "@/components/GrowthSignal";
import TimelineItem from "@/components/TimelineItem";
import ScrollReset from "@/components/ScrollReset";

export default function Home() {
  return (
    <main id="top" className="font-body">
      <ScrollReset />
      <Nav />

      {/* HERO */}
      <section className="max-w-content mx-auto px-6 pt-16 pb-14 md:pt-20 md:pb-20">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-16 items-center">
          <div>
            <p className="hero-eyebrow eyebrow eyebrow-signal mb-7">
              Co-founder &amp; Growth Lead · Creako Labs
            </p>

            <h1 className="font-display text-5xl md:text-7xl leading-[0.98] font-semibold tracking-tight">
              <span className="hero-name-line"><span>Oleksii</span></span>
              <span className="hero-name-line"><span>Samarskyi</span></span>
            </h1>

            <p className="hero-tagline mt-6 text-lg md:text-xl text-text/90 font-medium">
              Performance creative &amp; growth.
            </p>

            <p className="hero-bio mt-4 text-lg text-muted max-w-xl leading-relaxed">
              3+ years producing performance creative for paid acquisition —
              Meta, TikTok, Native, Display. Now building brand and growth
              for the products Creako Labs makes.
            </p>

            <div className="hero-ctas mt-10 flex flex-wrap items-center gap-4">
              <a href="#products" className="button button-primary focus-ring">
                View Products
              </a>
              <a href="#contact" className="button button-secondary focus-ring">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="hero-portrait portrait-wrap relative w-full max-w-sm mx-auto md:mx-0 md:ml-auto">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border hairline">
              <Image
                src="/avatar-4k.jpeg"
                alt="Oleksii Samarskyi"
                fill
                sizes="(min-width: 768px) 380px, 90vw"
                className="portrait object-cover"
                quality={90}
                priority
              />
              <div className="portrait-overlay absolute inset-0 pointer-events-none" />
              <div className="portrait-scan absolute inset-0 pointer-events-none" />
            </div>
            <div className="portrait-badge absolute -bottom-4 left-4 md:-left-4 border hairline rounded-xl px-4 py-3">
              <p className="eyebrow">Based in</p>
              <p className="font-display text-sm font-medium">Poland · Remote</p>
            </div>
          </div>
        </div>

        <GrowthSignal />
      </section>

      <Marquee />

      {/* STATS */}
      <section className="max-w-content mx-auto px-6 py-12 md:py-16 border-b hairline">
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-2xl border hairline bg-line">
          <Reveal className="stat-card">
            <StatCounter value={3} suffix="+" label="Years in performance creative" />
          </Reveal>
          <Reveal delay={80} className="stat-card">
            <StatCounter value={4} label="Designers led" />
          </Reveal>
          <Reveal delay={160} className="stat-card">
            <StatCounter value={10} suffix="+" label="Platforms & AI tools" />
          </Reveal>
          <Reveal delay={240} className="stat-card">
            <StatCounter value={2} label="Products at Creako Labs" />
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-content mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-4">About</p>
        </Reveal>
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              From ad creative
              <br />
              to growth.
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-muted text-lg leading-relaxed">
            <p>
              I started as a designer — UI/UX, branding, logo and identity
              work, creative direction. That background is still the base
              of everything I do: I think in systems, not just screens.
            </p>
            <p>
              For the past 3+ years I&apos;ve worked inside performance
              marketing — producing static, motion and AI-assisted
              creatives for paid acquisition on Meta, TikTok, Native and
              Display, running A/B-tests alongside media buyers, and
              leading a team of designers through that process. That&apos;s
              where design and growth actually meet: not in theory, in the
              daily loop of create → test → read the numbers → iterate.
            </p>
            <p>
              At{" "}
              <a href="#creako" className="text-text underline decoration-signal underline-offset-4">
                Creako Labs
              </a>
              , the product studio I co-founded, I lead brand, creative
              direction and growth across the products we build — turning
              early-stage products into clear, compelling launches.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CREAKO LABS */}
      <section id="creako" className="max-w-content mx-auto px-6 py-20 md:py-28 border-t hairline">
        <Reveal>
          <p className="eyebrow eyebrow-data mb-4">Company</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-10">
            Creako Labs
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p className="text-lg text-muted leading-relaxed">
              Creako Labs is a founder-led product studio. We build our own
              digital products from concept to launch — combining product
              engineering, brand and growth instead of working to someone
              else&apos;s brief. My focus is everything that turns a product
              people build into a product people find, try and stick with.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-ink-2 border hairline rounded-2xl p-6 hover-lift">
              <p className="eyebrow eyebrow-signal mb-2">My role</p>
              <p className="font-display text-xl font-semibold mb-4">
                Brand, creative &amp; growth
              </p>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Positioning, identity, ad creative and the growth
                experiments that get each product in front of real users.
              </p>
              <div className="pt-5 border-t hairline">
                <p className="eyebrow mb-3">Products</p>
                <div className="flex flex-wrap gap-2">
                  <span className="tag bg-ink-3 border hairline rounded-full px-3 py-1.5">
                    Recal
                  </span>
                  <span className="tag bg-ink-3 border hairline rounded-full px-3 py-1.5">
                    Ray
                  </span>
                  <span className="tag text-muted border border-dashed hairline rounded-full px-3 py-1.5">
                    + future products
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="max-w-content mx-auto px-6 py-20 md:py-28 border-t hairline">
        <Reveal>
          <p className="eyebrow mb-4">Capabilities</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-14 max-w-2xl">
            What I bring to a product.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          <Reveal>
            <div className="bg-ink-2 border hairline rounded-2xl p-6 md:p-7 hover-lift h-full">
              <div className="flex items-center justify-between mb-6">
                <p className="eyebrow eyebrow-signal">Growth & performance</p>
                <span className="tag text-muted">01</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Growth audits & analytics",
                  "A/B testing with media buyers",
                  "Paid acquisition — Meta, TikTok, Google",
                  "SEO",
                ].map((t) => (
                  <span
                    key={t}
                    className="tag text-muted border hairline rounded-full px-3 py-1.5 transition-colors duration-300 hover:text-text hover:border-signal/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="bg-ink-2 border hairline rounded-2xl p-6 md:p-7 hover-lift h-full">
              <div className="flex items-center justify-between mb-6">
                <p className="eyebrow eyebrow-data">Brand & creative</p>
                <span className="tag text-muted">02</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Logo & brand identity",
                  "Static, motion & AI-assisted ad creatives",
                  "Creative direction",
                  "Midjourney",
                  "Runway",
                  "HeyGen",
                  "After Effects",
                ].map((t) => (
                  <span
                    key={t}
                    className="tag text-muted border hairline rounded-full px-3 py-1.5 transition-colors duration-300 hover:text-text hover:border-signal/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="bg-ink-2 border hairline rounded-2xl p-6 md:p-7 hover-lift h-full">
              <div className="flex items-center justify-between mb-6">
                <p className="eyebrow">Product & team</p>
                <span className="tag text-muted">03</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["UI/UX design", "Design systems", "Leading creative teams"].map(
                  (t) => (
                    <span
                      key={t}
                      className="tag text-muted border hairline rounded-full px-3 py-1.5 transition-colors duration-300 hover:text-text hover:border-signal/50"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section id="track-record" className="max-w-content mx-auto px-6 py-20 md:py-28 border-t hairline">
        <Reveal>
          <p className="eyebrow mb-4">Track record</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-14 max-w-2xl">
            From performance creative to building our own products.
          </h2>
        </Reveal>

        <div>
          <Reveal>
            <TimelineItem active>
              <p className="eyebrow eyebrow-signal mb-2">Now</p>
              <h3 className="font-display text-xl font-semibold mb-1">
                Co-founder &amp; Growth Lead — Creako Labs
              </h3>
              <p className="text-muted mb-3">
                Leading brand, creative direction and growth for Recal and
                Ray.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Brand", "Growth", "Product Design"].map((t) => (
                  <span key={t} className="tag border hairline rounded-full px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </TimelineItem>
          </Reveal>

          <Reveal>
            <TimelineItem>
              <p className="eyebrow mb-2">Dec 2025 — Present</p>
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
                  <span key={t} className="tag border hairline rounded-full px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </TimelineItem>
          </Reveal>

          <Reveal>
            <TimelineItem>
              <p className="eyebrow mb-2">Oct 2025 — Apr 2026</p>
              <h3 className="font-display text-xl font-semibold mb-1">
                Performance Creative Designer — Traffic Place
              </h3>
              <p className="eyebrow mb-3">Part-time · Remote</p>
              <p className="text-muted mb-3">
                Built AI-generated and UGC-style ad creatives for
                Sweepstakes campaigns across paid social.
              </p>
              <div className="flex flex-wrap gap-2">
                {["UGC Advertising", "Prompt Engineering"].map((t) => (
                  <span key={t} className="tag border hairline rounded-full px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </TimelineItem>
          </Reveal>

          <Reveal>
            <TimelineItem>
              <p className="eyebrow eyebrow-data mb-2">ADPRODIGIES · 1 yr 4 mos · Remote</p>

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
                  Led a team of 4 designers, ran weekly creative reviews
                  with media buyers and owned the team&apos;s A/B-testing
                  and production workflow.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Team Leadership", "Performance Marketing"].map((t) => (
                    <span key={t} className="tag border hairline rounded-full px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TimelineItem>
          </Reveal>

          <Reveal>
            <TimelineItem>
              <p className="eyebrow mb-2">Nov 2024 — Jul 2025</p>
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
                  <span key={t} className="tag border hairline rounded-full px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </TimelineItem>
          </Reveal>

          <Reveal>
            <TimelineItem isLast>
              <p className="eyebrow mb-2">Sep 2023 — Sep 2024</p>
              <h3 className="font-display text-xl font-semibold mb-1">
                Creative Designer → Junior Performance Designer
              </h3>
              <p className="eyebrow mb-3">Affiliate & performance marketing teams · Ukraine / Remote</p>
              <p className="text-muted">
                Early roles producing static, video and animated ad
                creatives for Search, Sweepstakes and Crypto paid
                campaigns — where the performance-creative loop started.
              </p>
            </TimelineItem>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-content mx-auto px-6 py-20 md:py-28 border-t hairline">
        <Reveal>
          <p className="eyebrow mb-4">Proof of work</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-14 max-w-2xl">
            Products I&apos;m helping bring to market at Creako Labs.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-ink-2 border hairline rounded-2xl p-8 hover-lift h-full">
              <div className="flex items-center justify-between mb-4">
                <p className="eyebrow eyebrow-signal">Live</p>
                <p className="eyebrow">Creako Labs</p>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Recal</h3>
              <p className="eyebrow mb-4">Role — Growth, brand &amp; creative</p>
              <p className="text-muted leading-relaxed">
                Running growth audits, testing acquisition channels and
                building the creative — ad visuals and previews — behind
                the campaigns.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-ink-2 border hairline rounded-2xl p-8 hover-lift h-full">
              <div className="flex items-center justify-between mb-4">
                <p className="eyebrow eyebrow-data">Building</p>
                <p className="eyebrow">Creako Labs</p>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Ray</h3>
              <p className="eyebrow mb-4">Role — Growth, brand &amp; creative</p>
              <p className="text-muted leading-relaxed">
                Laying the brand and growth foundation early — identity,
                positioning and the first acquisition experiments — as the
                product moves toward launch.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-content mx-auto px-6 py-20 md:py-28 border-t hairline">
        <Reveal>
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight max-w-2xl mb-6">
            Building a product?
            <br />
            Let&apos;s talk.
          </h2>
          <p className="text-lg text-muted max-w-xl mb-10">
            Open to conversations with founders, partners and teams working
            on brand, design and growth for early-stage products.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:oleksii.samarskyii@gmail.com"
              className="button button-primary focus-ring"
            >
              oleksii.samarskyii@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/oleksii-samarskyi"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary focus-ring"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t hairline">
        <div className="max-w-content mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-2 text-muted tag">
          <p>Oleksii Samarskyi — Co-founder, Creako Labs</p>
          <p>© 2026</p>
        </div>
      </footer>
    </main>
  );
}
