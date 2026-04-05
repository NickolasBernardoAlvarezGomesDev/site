import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="surface-card social-proof-card">
      <div className="content-card">
        <p style={{ fontSize: "1.05rem", marginTop: 0 }}>"{testimonial.quote}"</p>
        <strong>{testimonial.name}</strong>
        <span className="muted">
          {testimonial.role} · {testimonial.company}
        </span>
      </div>
    </article>
  );
}
