import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function AboutPreviewSection() {
  return (
    <section className="section" id="sobre-preview">
      <Container>
        <div className="about-grid">
          <div className="media-frame about-preview__media">
            <img src={profile.aboutMedia.src} alt={profile.aboutMedia.alt} />
          </div>

          <article className="surface-card about-summary">
            <span className="eyebrow">Sobre</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Perfil tecnico orientado a integracao, confiabilidade e operacao real.
            </h2>
            <p>{profile.summary}</p>
            <p className="muted" style={{ marginTop: 0 }}>
              A pagina Sobre concentra o resumo profissional, os diferenciais e os agrupamentos de habilidades sem inflar a narrativa da home.
            </p>
            <div className="button-row" style={{ marginTop: "1.25rem" }}>
              <Button to={profile.ctas.about} variant="secondary">
                Ir para Sobre
              </Button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
