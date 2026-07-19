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
        <line x1="12" y1="0" x2="12" y2="400" stroke="#2C2620" strokeWidth="2" />
        <path
          ref={ref}
          d="M12 0 L12 400"
          stroke="#FF3D6E"
          strokeWidth="2"
          className={`growth-path ${drawn ? "is-drawn" : ""}`}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 640 220"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        ref={ref}
        d="M8 190 C 90 188, 140 175, 190 150 C 230 130, 250 95, 300 90 C 340 86, 360 118, 405 108 C 445 99, 460 55, 510 42 C 550 32, 580 34, 632 16"
        stroke="#FF3D6E"
        strokeWidth="4"
        strokeLinecap="round"
        className={`growth-path ${drawn ? "is-drawn" : ""}`}
      />
      <circle cx="632" cy="16" r="7" fill="#FF3D6E" />
      <circle cx="8" cy="190" r="5" fill="#5B4CFF" />
    </svg>
  );
}
