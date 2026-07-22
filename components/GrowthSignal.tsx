"use client";

import { useEffect, useRef, useState } from "react";

// Same x-coordinates as the dots on the path below (out of the 920-wide
// viewBox), converted to percentages, so labels always sit under their dot.
const steps = [
  { x: 22 / 920, label: "Audit" },
  { x: 290 / 920, label: "Creative" },
  { x: 520 / 920, label: "Test" },
  { x: 898 / 920, label: "Scale" },
];

export default function GrowthSignal() {
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
      className={`growth-signal ${visible ? "is-visible" : ""}`}
      aria-label="The growth loop: audit, creative, test and scale"
    >
      <div className="growth-signal__head">
        <p className="eyebrow">The growth loop</p>
        <p className="tag text-muted">Audit → Creative → Test → Scale</p>
      </div>

      <svg viewBox="0 0 920 116" fill="none" aria-hidden="true">
        <path
          className="growth-signal__base"
          d="M22 82 C155 82 190 82 290 57 S430 28 520 54 S695 94 898 20"
        />
        <path
          className="growth-signal__route"
          d="M22 82 C155 82 190 82 290 57 S430 28 520 54 S695 94 898 20"
        />
        <circle className="growth-signal__node" cx="22" cy="82" r="5" />
        <circle className="growth-signal__node" cx="290" cy="57" r="5" />
        <circle className="growth-signal__node" cx="520" cy="54" r="5" />
        <circle
          className="growth-signal__node growth-signal__node--active"
          cx="898"
          cy="20"
          r="6"
        />
        <circle className="growth-signal__pulse" r="4">
          <animateMotion
            dur="5.5s"
            repeatCount="indefinite"
            path="M22 82 C155 82 190 82 290 57 S430 28 520 54 S695 94 898 20"
          />
        </circle>
      </svg>

      <div className="growth-signal__steps">
        {steps.map((step) => (
          <span
            key={step.label}
            className={`growth-signal__step growth-signal__step--${step.label.toLowerCase()}`}
            style={{
              left: `${step.x * 100}%`,
              transform: "translateX(-50%)",
            }}
          >
            {step.label}
          </span>
        ))}
      </div>
    </div>
  );
}
