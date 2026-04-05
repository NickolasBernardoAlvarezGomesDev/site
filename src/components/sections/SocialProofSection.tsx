import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { credibilityBlocks } from "@/data/profile";
import { testimonials } from "@/data/testimonials";

export function SocialProofSection() {
  return (
    <section className="section" id="credibilidade">
      <Container>
        <SectionHeader
          eyebrow="Credibilidade"
          title="Contextos que sustentam o posicionamento tecnico sem inventar prova social."
          description="Como ainda nao ha depoimentos publicados no portfolio, a secao trabalha com historico real de atuacao e aderencia tecnica."
        />

        {testimonials.length > 0 ? (
          <div className="social-proof-grid">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`${testimonial.name}-${testimonial.company}`} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <div className="social-proof-grid">
            {credibilityBlocks.map((item) => (
              <article key={item.title} className="surface-card social-proof-card">
                <div className="content-card">
                  <h3 style={{ fontSize: "1.2rem" }}>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="social-proof-card__highlight">{item.highlight}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
