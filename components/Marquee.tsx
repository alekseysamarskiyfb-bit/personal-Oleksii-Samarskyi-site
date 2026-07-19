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
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y hairline py-4 bg-ink-2">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span
            key={i}
            className="tag flex items-center gap-6 px-6 text-muted shrink-0"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-signal" />
          </span>
        ))}
      </div>
    </div>
  );
}
