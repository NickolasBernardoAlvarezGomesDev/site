import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import type { ExperienceItem } from "@/data/experience";

type ExperienceCardProps = {
  item: ExperienceItem;
};

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <article className="surface-card experience-card">
      <div className="content-card">
        <div className="experience-card__meta">
          <Badge>{item.company}</Badge>
          <span className="experience-card__period">{item.period}</span>
        </div>

        <h3 className="experience-card__title" style={{ marginTop: "1rem", fontSize: "1.35rem" }}>
          {item.role}
        </h3>
        <p>{item.summary}</p>

        <ul className="bullet-list" style={{ margin: "0.25rem 0 0", paddingLeft: "1.1rem" }}>
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <div className="experience-card__stack" style={{ marginTop: "1rem" }}>
          {item.stack.map((stack) => (
            <Tag key={stack}>{stack}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}
