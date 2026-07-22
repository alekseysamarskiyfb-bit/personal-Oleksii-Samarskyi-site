import { ReactNode } from "react";

export default function TimelineItem({
  children,
  isLast = false,
  active = false,
}: {
  children: ReactNode;
  isLast?: boolean;
  active?: boolean;
}) {
  return (
    <div className="timeline-item">
      <div className="timeline-item__marker">
        <span
          className={`timeline-item__dot ${
            active ? "timeline-item__dot--active" : ""
          }`}
        />
        {!isLast && <span className="timeline-item__connector" />}
      </div>
      <div className="timeline-item__content">{children}</div>
    </div>
  );
}
