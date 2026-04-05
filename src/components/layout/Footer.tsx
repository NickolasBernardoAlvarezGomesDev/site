import { brandIcons } from "@/assets/media";
import { profile } from "@/data/profile";
import { links } from "@/data/links";
import { Container } from "@/components/layout/Container";
import { IconLink } from "@/components/ui/IconLink";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div>
            <strong>{profile.name}</strong>
            <p className="footer__copy">Sistemas embarcados, firmware, telemetria e integracao hardware-software.</p>
          </div>

          <div className="social-links" aria-label="Links sociais">
            <IconLink label="GitHub" href={links.github} icon={brandIcons.github} />
            <IconLink label="LinkedIn" href={links.linkedin} icon={brandIcons.linkedin} />
            <IconLink label="WhatsApp" href={links.whatsapp} icon={brandIcons.whatsapp} />
          </div>
        </div>
      </Container>
    </footer>
  );
}
