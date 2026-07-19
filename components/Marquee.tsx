const items = [
  "META",
  "TIKTOK",
  "GOOGLE",
  "NATIVE",
  "MIDJOURNEY",
  "RUNWAY",
  "HEYGEN",
  "FIGMA",
  "AFTER EFFECTS",
  "CAPCUT",
];

export default function Marquee() {
  return (
    <div className="marquee overflow-hidden border-y hairline bg-ink-2/60" aria-label="Tools and platforms">
      <div className="marquee-track">
        {[false, true].map((duplicate) => (
          <div className="marquee-group" aria-hidden={duplicate} key={String(duplicate)}>
            {items.map((item) => (
              <span key={item} className="tag marquee-item text-muted">
                {item}
                <span className="marquee-dot" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
