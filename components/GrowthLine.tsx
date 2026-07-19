type GrowthLineProps = {
  variant?: "hero" | "divider";
  className?: string;
};

export default function GrowthLine({
  variant = "hero",
  className = "",
}: GrowthLineProps) {
  if (variant === "divider") {
    return (
      <svg
        viewBox="0 0 400 40"
        className={className}
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 32 C 60 32, 90 30, 130 24 C 170 18, 190 10, 230 12 C 270 14, 290 22, 330 16 C 360 11, 380 8, 400 6"
          stroke="#262B34"
          strokeWidth="1.5"
        />
        <circle cx="400" cy="6" r="3" fill="#FF4A2E" />
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
        d="M8 190 C 90 188, 140 175, 190 150 C 230 130, 250 95, 300 90 C 340 86, 360 118, 405 108 C 445 99, 460 55, 510 42 C 550 32, 580 34, 632 16"
        stroke="#FF4A2E"
        strokeWidth="3.5"
        strokeLinecap="round"
        className="growth-path"
      />
      <circle cx="632" cy="16" r="6" fill="#FF4A2E" />
      <circle cx="8" cy="190" r="4" fill="#6C8CFF" />
    </svg>
  );
}
