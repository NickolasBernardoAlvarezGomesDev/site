import { brandIcons, uiIcons } from "@/assets/media";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { links } from "@/data/links";
import { profile } from "@/data/profile";

const contactChannels = [
  {
    label: "WhatsApp",
    value: "55 51 99921-3128",
    href: links.whatsapp,
    icon: brandIcons.whatsapp
  },
  {
    label: "E-mail",
    value: links.emailAddress,
    href: links.email,
    icon: uiIcons.mail
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nickolas-bernardo-alvarez-gomes-2bb114141",
    href: links.linkedin,
    icon: brandIcons.linkedin
  },
  {
    label: "GitHub",
    value: "github.com/NickolasBernardoAlvarezGomesDev",
    href: links.github,
    icon: brandIcons.github
  }
];

export function ContactSection() {
  return (
    <section className="section" id="contato">
      <Container>
        <div className="contact-grid">
          <article className="surface-card contact-card">
            <span className="eyebrow">Contato</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              {profile.contactTitle}
            </h2>
            <p>{profile.contactText}</p>

            <div className="contact-actions" style={{ marginTop: "1.25rem" }}>
              <Button href={links.whatsapp} iconLeft={<Icon src={brandIcons.whatsapp} decorative className="icon--lg" />}>
                WhatsApp
              </Button>
              <Button href={links.email} variant="secondary" iconLeft={<Icon src={uiIcons.mail} decorative className="icon--invert" />}>
                E-mail
              </Button>
              <Button href={links.linkedin} variant="ghost">
                LinkedIn
              </Button>
              <Button href={links.github} variant="ghost">
                GitHub
              </Button>
            </div>
          </article>

          <div className="contact-channel-grid">
            {contactChannels.map((channel) => (
              <a key={channel.label} className="surface-card-soft contact-link" href={channel.href} target="_blank" rel="noreferrer">
                <Icon src={channel.icon} decorative className="icon--lg" />
                <div className="contact-link__body">
                  <strong>{channel.label}</strong>
                  <span>{channel.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
