import { Quote } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section className="testimonials-section section-shell">
      <div className="section-intro">
        <div>
          <p className="eyebrow">In their words</p>
          <h2>What Clients say</h2>
        </div>
        <p>Long searches, fresh starts and considered decisions, shared by the people we have guided home.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <figure className="testimonial" key={testimonial.name + testimonial.context}>
            <Quote size={22} strokeWidth={1.3} aria-hidden="true" />
            <blockquote>“{testimonial.quote}”</blockquote>
            <figcaption>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.context}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
