"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { n: "01", label: "Audit" },
  { n: "02", label: "Creative" },
  { n: "03", label: "Test" },
  { n: "04", label: "Scale" },
];

export default function GrowthLoop() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`growth-loop ${visible ? "is-visible" : ""}`}
      aria-label="My workflow: audit, creative, test, scale"
    >
      <div className="growth-loop__head">
        <p className="eyebrow">The growth loop</p>
        <p className="tag text-muted">Audit → Creative → Test → Scale</p>
      </div>

      <div className="growth-loop__row">
        {steps.map((step, i) => (
          <div className="growth-loop__step" key={step.n}>
            <span
              className={`growth-loop__dot ${
                i === steps.length - 1 ? "growth-loop__dot--active" : ""
              }`}
            />
            <p className="growth-loop__num tag">{step.n}</p>
            <p className="growth-loop__label">{step.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
