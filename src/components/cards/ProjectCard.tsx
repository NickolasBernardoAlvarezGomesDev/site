import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface-card project-card">
      <div className="content-card">
        <div className="media-frame project-card__media">
          <img src={project.coverImage} alt={project.coverAlt} />
        </div>

        <div className="project-card__meta">
          <Badge>{project.category}</Badge>
          <span>{project.featured ? "Destaque" : "Caso tecnico"}</span>
        </div>

        <h3 className="project-card__title" style={{ marginTop: "1rem", fontSize: "1.4rem" }}>
          {project.title}
        </h3>
        <p>{project.shortDescription}</p>

        <div className="surface-card-soft" style={{ padding: "1rem", marginTop: "0.25rem" }}>
          <strong style={{ display: "block", marginBottom: "0.35rem" }}>Problema / foco</strong>
          <p style={{ margin: 0 }}>{project.problem}</p>
        </div>

        <div className="tag-list" style={{ marginTop: "1rem" }}>
          {project.stack.slice(0, 5).map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <div className="button-row" style={{ marginTop: "1.25rem" }}>
          <Button to={`/projetos/${project.slug}`} variant="secondary">
            Ver caso completo
          </Button>
          {project.repoUrl ? (
            <Button href={project.repoUrl} variant="ghost">
              Abrir repositorio
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
