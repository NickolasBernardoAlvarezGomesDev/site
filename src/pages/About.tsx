import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SkillClusterCard } from "@/components/cards/SkillClusterCard";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Button } from "@/components/ui/Button";
import { aboutDifferentials, expertise, profile, skillClusters } from "@/data/profile";
import { experience } from "@/data/experience";

export function AboutPage() {
  return (
    <main className="page-main about-page">
      <section className="page-hero section">
        <Container>
          <div className="about-grid">
            <div className="media-frame about-page__portrait">
              <img src={profile.aboutMedia.src} alt={profile.aboutMedia.alt} />
            </div>

            <article className="surface-card about-summary">
              <span className="eyebrow">Sobre</span>
              <h1 className="section-title" style={{ marginTop: "1rem" }}>
                Perfil tecnico orientado a integracao, confiabilidade e operacao real.
              </h1>
              <p>{profile.summary}</p>
              <div className="button-row" style={{ marginTop: "1.25rem" }}>
                <Button href={profile.ctas.cv} variant="secondary">
                  Curriculo PDF
                </Button>
                <Button href={profile.ctas.whatsapp}>Falar com Nickolas</Button>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeader eyebrow="Diferenciais" title="Mais aderencia a contextos em que fazer funcionar importa mais do que apenas implementar." />
          <div className="card-grid">
            {aboutDifferentials.map((item) => (
              <article key={item.title} className="surface-card">
                <div className="content-card">
                  <h3 style={{ fontSize: "1.2rem" }}>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeader eyebrow="Areas de atuacao" title="Eixos tecnicos que estruturam o posicionamento do portfolio." />
          <div className="card-grid">
            {expertise.map((item) => (
              <article key={item.title} className="surface-card">
                <div className="content-card">
                  <h3 style={{ fontSize: "1.2rem" }}>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeader eyebrow="Habilidades" title="Agrupamentos curados para mostrar foco, nao inflacao de tags." />
          <div className="skill-grid">
            {skillClusters.map((cluster) => (
              <SkillClusterCard key={cluster.title} cluster={cluster} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeader eyebrow="Experiencia consolidada" title="Resumo das experiencias mais relevantes para o posicionamento atual." />
          <div className="experience-list">
            {experience.map((item) => (
              <ExperienceCard key={`${item.company}-${item.role}`} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
