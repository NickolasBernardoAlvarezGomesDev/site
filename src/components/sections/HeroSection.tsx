import { brandIcons, uiIcons } from "@/assets/media";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Tag } from "@/components/ui/Tag";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="home-hero section" id="topo">
      <Container>
        <div className="home-hero__grid">
          <div className="hero-copy">
            <span className="eyebrow">Nickolas Bernardo Alvarez Gomes</span>
            <h1 className="headline">{profile.headline}</h1>
            <p className="lede">{profile.subtitle}</p>
            <p className="muted" style={{ maxWidth: "60ch", margin: 0 }}>
              {profile.supportingText}
            </p>

            <div className="button-row">
              <Button to={profile.ctas.projects} iconRight={<Icon src={uiIcons.arrowRight} decorative className="icon--invert" />}>
                Ver projetos
              </Button>
              <Button href={profile.ctas.whatsapp} variant="secondary" iconLeft={<Icon src={brandIcons.whatsapp} decorative className="icon--lg" />}>
                Falar com Nickolas
              </Button>
            </div>

            <div className="tag-list" aria-label="Focos tecnicos">
              <Tag>Firmware</Tag>
              <Tag>Telemetria</Tag>
              <Tag>Sensores</Tag>
              <Tag>Aquisicao de dados</Tag>
              <Tag>Operacao em campo</Tag>
            </div>
          </div>

          <aside className="surface-card hero-panel" aria-label="Resumo tecnico">
            <div className="media-frame hero-panel__visual">
              <img src={profile.heroMedia.src} alt={profile.heroMedia.alt} />
            </div>

            <div className="hero-panel__details">
              <span className="badge">Operacao real</span>
              <ul className="hero-evidence" style={{ margin: 0, paddingLeft: "1.2rem" }}>
                {profile.heroHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="surface-card-soft" style={{ padding: "1rem" }}>
                <strong style={{ display: "block", marginBottom: "0.4rem" }}>Foco atual</strong>
                <p style={{ margin: 0 }}>Integracao entre dispositivo, firmware, transmissao e uso operacional do dado.</p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
