import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="section" id="experiencia">
      <Container>
        <SectionHeader eyebrow="Experiencia" title="Atuacao em monitoramento, testes e P&D com proximidade real do hardware." />
        <div className="experience-list">
          {experience.map((item) => (
            <ExperienceCard key={`${item.company}-${item.role}`} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
