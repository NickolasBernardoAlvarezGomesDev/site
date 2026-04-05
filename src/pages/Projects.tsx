import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/data/projects";

export function ProjectsPage() {
  return (
    <main className="page-main projects-page">
      <section className="page-hero section">
        <Container>
          <div className="page-hero__grid">
            <div>
              <span className="eyebrow">Projetos</span>
              <h1 className="headline" style={{ marginTop: "1rem" }}>
                Casos tecnicos organizados para leitura rapida e aprofundamento.
              </h1>
              <p className="lede" style={{ marginTop: "1rem" }}>
                A pagina reune projetos com foco em problema, contexto tecnico, papel exercido e resultado. Sem filtros artificiais enquanto o volume ainda nao pede isso.
              </p>
            </div>
            <article className="surface-card cta-panel">
              <strong style={{ fontSize: "1.05rem" }}>Dominios recorrentes</strong>
              <div className="tag-list" style={{ marginTop: "1rem" }}>
                <Tag>Embedded</Tag>
                <Tag>Firmware</Tag>
                <Tag>IoT</Tag>
                <Tag>Telemetria</Tag>
                <Tag>Integracao</Tag>
                <Tag>Dados</Tag>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Lista completa"
            title="Projetos priorizados por aderencia tecnica ao posicionamento do portfolio."
            description="A selecao mistura casos aplicados, exploracoes embarcadas e integracoes menores que ajudam a demonstrar criterio de implementacao."
          />

          <div className="card-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
