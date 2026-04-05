import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export function SectionHeader({ eyebrow, title, description, actions }: SectionHeaderProps) {
  return (
    <div className="section-header">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <div className="grid-sidebar">
        <div>
          <h2 className="section-title">{title}</h2>
        </div>
        <div style={{ display: "grid", gap: "1rem", alignContent: "start" }}>
          {description ? <p className="section-description">{description}</p> : null}
          {actions ? <div className="button-row">{actions}</div> : null}
        </div>
      </div>
    </div>
  );
}
