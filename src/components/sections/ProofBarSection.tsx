import { Container } from "@/components/layout/Container";
import { profile } from "@/data/profile";

export function ProofBarSection() {
  return (
    <section className="proof-bar" aria-label="Sinais de credibilidade">
      <Container>
        <div className="proof-bar__inner">
          {profile.proofBar.map((item) => (
            <span key={item} className="proof-chip">
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
