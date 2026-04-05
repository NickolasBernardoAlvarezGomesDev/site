import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { links } from "@/data/links";
import { projects } from "@/data/projects";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug]);

  if (!project) {
    return (
      <main className="page-main project-detail-page">
        <section className="section">
          <Container narrow>
            <article className="surface-card cta-panel">
              <span className="eyebrow">Projeto nao encontrado</span>
              <h1 className="section-title" style={{ marginTop: "1rem" }}>
                O slug informado nao corresponde a um case cadastrado.
              </h1>
              <div className="button-row" style={{ marginTop: "1.25rem" }}>
                <Button to="/projetos">Voltar para projetos</Button>
              </div>
            </article>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main className="page-main project-detail-page">
      <section className="page-hero section">
        <Container>
          <div className="page-hero__grid">
            <div>
              <span className="eyebrow">{project.category}</span>
              <h1 className="headline" style={{ marginTop: "1rem" }}>
                {project.title}
              </h1>
              <p className="lede" style={{ marginTop: "1rem" }}>
                {project.shortDescription}
              </p>
              <div className="tag-list" style={{ marginTop: "1.25rem" }}>
                {project.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>

            <div className="media-frame page-hero__media">
              <img src={project.coverImage} alt={project.coverAlt} />
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="project-detail-grid">
            <div className="detail-metrics">
              <article className="surface-card detail-block">
                <h2>Visao geral</h2>
                <p>{project.overview}</p>
              </article>

              <article className="surface-card detail-block">
                <h2>Problema</h2>
                <p>{project.problem}</p>
              </article>

              <article className="surface-card detail-block">
                <h2>Contexto tecnico</h2>
                <p>{project.technicalContext}</p>
              </article>

              <article className="surface-card detail-block">
                <h2>Papel do Nickolas</h2>
                <p>{project.role}</p>
              </article>

              <article className="surface-card detail-block">
                <h2>Arquitetura / fluxo / diagrama</h2>
                <ol className="architecture-list" style={{ margin: 0, paddingLeft: "1.2rem" }}>
                  {project.architectureNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </article>
            </div>

            <div className="detail-stack">
              <article className="surface-card detail-block">
                <h2>Stack</h2>
                <div className="tag-list" style={{ marginTop: "1rem" }}>
                  {project.stack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </article>

              <article className="surface-card detail-block">
                <h2>Resultado</h2>
                <p>{project.result}</p>
              </article>

              <article className="surface-card detail-block">
                <h2>Aprendizados</h2>
                <ul className="bullet-list" style={{ margin: 0, paddingLeft: "1.1rem" }}>
                  {project.lessonsLearned.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="surface-card detail-block">
                <h2>Evidencias e links</h2>
                <ul className="evidence-list" style={{ margin: 0, paddingLeft: "1.1rem" }}>
                  {project.evidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {project.evidenceLinks.length > 0 ? (
                  <div className="detail-links" style={{ marginTop: "1rem" }}>
                    {project.evidenceLinks.map((link) => (
                      <Button key={link.url} href={link.url} variant="ghost">
                        {link.label}
                      </Button>
                    ))}
                  </div>
                ) : null}
              </article>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Imagens e apoio"
            title="Galeria de apoio para o case."
            description="Enquanto os screenshots e fotos reais ainda nao estao no repositorio, a estrutura ja esta pronta para receber imagens tecnicas, mockups e diagramas."
          />

          <div className="gallery-grid">
            {project.gallery.map((image) => (
              <article key={image.src + image.caption} className="detail-gallery-card">
                <div className="media-frame detail-gallery-card__media">
                  <img src={image.src} alt={image.alt} />
                </div>
                <div className="detail-gallery-card__body">
                  <p style={{ margin: 0 }}>{image.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container narrow>
          <article className="surface-card cta-panel">
            <span className="eyebrow">CTA final</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Se este case conversa com a vaga ou desafio tecnico, a conversa pode partir daqui.
            </h2>
            <p>
              Para aprofundar o contexto do projeto, discutir firmware, telemetria, aquisicao de dados ou integracao hardware-software, o caminho mais direto e por WhatsApp ou pela pagina de contato.
            </p>
            <div className="button-row" style={{ marginTop: "1.25rem" }}>
              <Button href={links.whatsapp}>Falar no WhatsApp</Button>
              <Button to="/contato" variant="secondary">
                Ir para contato
              </Button>
            </div>
          </article>
        </Container>
      </section>
    </main>
  );
}
