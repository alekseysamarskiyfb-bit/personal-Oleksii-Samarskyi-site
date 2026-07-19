"use client";

import { useEffect, useRef, useState } from "react";

type GrowthLineProps = {
  variant?: "hero" | "timeline";
  className?: string;
};

export default function GrowthLine({
  variant = "hero",
  className = "",
}: GrowthLineProps) {
  const ref = useRef<SVGPathElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (variant === "timeline") {
    return (
      <svg
        viewBox="0 0 24 400"
        className={className}
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line x1="12" y1="0" x2="12" y2="400" stroke="#24262B" strokeWidth="1.5" />
        <path
          ref={ref}
          d="M12 0 L12 400"
          stroke="#C9A961"
          strokeWidth="1.5"
          className={`growth-path ${drawn ? "is-drawn" : ""}`}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 640 160"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 130 C 90 128, 140 118, 190 100 C 230 85, 250 62, 300 58 C 340 55, 360 78, 405 70 C 445 63, 460 34, 510 25 C 550 18, 580 19, 632 8"
        stroke="#24262B"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
      <path
        ref={ref}
        d="M8 130 C 90 128, 140 118, 190 100 C 230 85, 250 62, 300 58 C 340 55, 360 78, 405 70 C 445 63, 460 34, 510 25 C 550 18, 580 19, 632 8"
        stroke="#C9A961"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={`growth-path ${drawn ? "is-drawn" : ""}`}
      />
      <circle cx="632" cy="8" r="3.5" fill="#C9A961" />
      <circle cx="8" cy="130" r="2.5" fill="#8A8D93" />
    </svg>
  );
}
