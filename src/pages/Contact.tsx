import { brandIcons, uiIcons } from "@/assets/media";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { links } from "@/data/links";
import { profile } from "@/data/profile";

const channels = [
  { title: "WhatsApp", value: "55 51 99921-3128", href: links.whatsapp, icon: brandIcons.whatsapp },
  { title: "E-mail", value: links.emailAddress, href: links.email, icon: uiIcons.mail },
  { title: "LinkedIn", value: "linkedin.com/in/nickolas-bernardo-alvarez-gomes-2bb114141", href: links.linkedin, icon: brandIcons.linkedin },
  { title: "GitHub", value: "github.com/NickolasBernardoAlvarezGomesDev", href: links.github, icon: brandIcons.github }
];

export function ContactPage() {
  return (
    <main className="page-main contact-page">
      <section className="page-hero section">
        <Container>
          <div className="page-hero__grid">
            <div>
              <span className="eyebrow">Contato</span>
              <h1 className="headline" style={{ marginTop: "1rem" }}>
                {profile.contactTitle}
              </h1>
              <p className="lede" style={{ marginTop: "1rem" }}>
                {profile.contactText}
              </p>

              <div className="button-row" style={{ marginTop: "1.25rem" }}>
                <Button href={links.whatsapp}>WhatsApp</Button>
                <Button href={links.email} variant="secondary">
                  E-mail
                </Button>
              </div>
            </div>

            <article className="surface-card contact-page__panel">
              <div className="content-card">
                <strong style={{ fontSize: "1.1rem" }}>Canais diretos</strong>
                <p style={{ marginTop: "0.5rem" }}>Sem formulario complexo. O fechamento do site e direto, com contato simples e rapido.</p>
                <div className="contact-channel-grid" style={{ marginTop: "1rem" }}>
                  {channels.map((channel) => (
                    <a key={channel.title} className="surface-card-soft contact-link" href={channel.href} target="_blank" rel="noreferrer">
                      <Icon src={channel.icon} decorative className="icon--lg" />
                      <div className="contact-link__body">
                        <strong>{channel.title}</strong>
                        <span>{channel.value}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
