import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Button } from "@/components/ui/Button";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjectsSection() {
  return (
    <section className="section" id="projetos-destaque">
      <Container>
        <SectionHeader
          eyebrow="Projetos em destaque"
          title="Cases escolhidos para mostrar criterio tecnico, integracao e contexto real."
          description="Em vez de empilhar cards ilustrativos, a home prioriza os casos que melhor mostram problema, papel tecnico e resultado."
          actions={<Button to="/projetos" variant="secondary">Ver todos os projetos</Button>}
        />

        <div className="card-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
