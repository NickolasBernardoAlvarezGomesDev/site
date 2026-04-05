import { useState } from "react";
import { NavLink } from "react-router-dom";
import { brandIcons, uiIcons } from "@/assets/media";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/layout/Container";

const navigationItems = [
  { label: "Projetos", to: "/projetos" },
  { label: "Sobre", to: "/sobre" },
  { label: "Contato", to: "/contato" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <NavLink className="wordmark" to="/" onClick={() => setIsOpen(false)}>
            <strong>{profile.shortName}</strong>
            <span>Firmware, telemetria e integracao embarcada</span>
          </NavLink>

          <nav aria-label="Principal" className="site-nav">
            {navigationItems.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="site-header__actions">
            <Button href={profile.ctas.whatsapp} iconLeft={<Icon src={brandIcons.whatsapp} decorative className="icon--lg" />}>
              Falar com Nickolas
            </Button>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className="mobile-toggle"
            type="button"
            onClick={() => setIsOpen((current) => !current)}
          >
            <Icon src={isOpen ? uiIcons.close : uiIcons.menu} decorative className="icon--lg icon--invert" />
          </button>
        </div>
      </Container>

      {isOpen ? (
        <div className="mobile-panel" id="mobile-navigation">
          <Container>
            <div className="mobile-panel__inner">
              {navigationItems.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={() => setIsOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
              <Button href={profile.ctas.whatsapp} iconLeft={<Icon src={brandIcons.whatsapp} decorative className="icon--lg" />}>
                Falar com Nickolas
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
