export default function GrowthSignal() {
  return (
    <div className="growth-signal" aria-label="The growth loop: brand, creative, testing and scale">
      <div className="growth-signal__head">
        <p className="eyebrow">The growth loop</p>
        <p className="tag text-muted">Brand → Creative → Test → Scale</p>
      </div>
      <svg viewBox="0 0 920 116" fill="none" aria-hidden="true">
        <path className="growth-signal__base" d="M22 82 C155 82 190 82 290 57 S430 28 520 54 S695 94 898 20" />
        <path className="growth-signal__route" d="M22 82 C155 82 190 82 290 57 S430 28 520 54 S695 94 898 20" />
        <circle className="growth-signal__node" cx="22" cy="82" r="5" />
        <circle className="growth-signal__node" cx="290" cy="57" r="5" />
        <circle className="growth-signal__node" cx="520" cy="54" r="5" />
        <circle className="growth-signal__node growth-signal__node--active" cx="898" cy="20" r="6" />
        <circle className="growth-signal__pulse" r="4">
          <animateMotion dur="5.5s" repeatCount="indefinite" path="M22 82 C155 82 190 82 290 57 S430 28 520 54 S695 94 898 20" />
        </circle>
      </svg>
      <div className="growth-signal__steps tag">
        <span>01 Brand</span><span>02 Creative</span><span>03 Signals</span><span>04 Scale</span>
      </div>
    </div>
  );
}
