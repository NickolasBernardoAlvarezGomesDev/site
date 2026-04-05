import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { expertise } from "@/data/profile";
import { Icon } from "@/components/ui/Icon";

export function ExpertiseSection() {
  return (
    <section className="section" id="expertise">
      <Container>
        <SectionHeader
          eyebrow="Onde gero mais valor"
          title="Tres frentes em que o trabalho costuma gerar mais aderencia tecnica."
          description="O foco nao esta em volume de tags, e sim nos contextos em que integracao, consistencia do dado e troubleshooting realmente importam."
        />

        <div className="card-grid">
          {expertise.map((item) => (
            <article key={item.title} className="surface-card">
              <div className="content-card">
                <div style={{ display: "inline-flex", width: "3rem", height: "3rem", alignItems: "center", justifyContent: "center", borderRadius: "999px" }} className="surface-card-soft">
                  <Icon src={item.icon} decorative className="icon--lg" />
                </div>
                <h3 style={{ marginTop: "1rem", fontSize: "1.3rem" }}>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
