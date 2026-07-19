"use client";

import { useEffect, useState } from "react";

export default function HeroLoader() {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setComplete(true), 1550);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className={`hero-loader ${complete ? "is-complete" : ""}`}
      aria-hidden="true"
    >
      <div className="hero-loader__content">
        <p className="hero-loader__label">Samarskyi Oleksii</p>
        <div className="hero-loader__line" />
        <p className="hero-loader__status">Loading selected work</p>
      </div>
    </div>
  );
}
