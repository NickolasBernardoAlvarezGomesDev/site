import type { SkillCluster } from "@/data/profile";
import { Icon } from "@/components/ui/Icon";
import { Tag } from "@/components/ui/Tag";

type SkillClusterCardProps = {
  cluster: SkillCluster;
};

export function SkillClusterCard({ cluster }: SkillClusterCardProps) {
  return (
    <article className="surface-card">
      <div className="content-card">
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1rem" }}>
          <div className="surface-card-soft" style={{ width: "3rem", height: "3rem", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "999px" }}>
            <Icon src={cluster.icon} decorative className="icon--lg" />
          </div>
          <h3 style={{ fontSize: "1.2rem" }}>{cluster.title}</h3>
        </div>

        <p>{cluster.description}</p>

        <div className="tag-list" style={{ marginTop: "1rem" }}>
          {cluster.items.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}
