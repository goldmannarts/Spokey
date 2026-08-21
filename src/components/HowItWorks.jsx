import { ArrowDownRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Inquire and Inspire',
    text: 'Tell us where you want to be and how you want to live. We listen closely to your priorities, budget and non-negotiables, then translate them into a focused brief.',
    tags: ['Find', 'Refine', 'Personalised'],
    image: '/assets/process-consultation.jpg',
    alt: 'Light-filled contemporary living room prepared for a private consultation',
  },
  {
    number: '02',
    title: 'Guided Tours, Your Way',
    text: 'Your shortlist becomes a carefully paced viewing plan. Join us in person or tour remotely, with honest context on the property, its setting and its potential.',
    tags: ['Personal', 'Structured', 'Hassle-free'],
    image: '/assets/process-viewing.jpg',
    alt: 'Warm modern interior seen during a curated home viewing',
  },
  {
    number: '03',
    title: 'Sealing the Deal, Your Style',
    text: 'From negotiation and due diligence to contracts and key handover, we keep every detail moving and every decision clear, at a pace that feels right.',
    tags: ['Fair', 'Transparent', 'Approachable'],
    image: '/assets/process-handover.jpg',
    alt: 'Architectural interior detail in a refined contemporary home',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section section-shell" id="how-it-works">
      <div className="section-intro">
        <div>
          <p className="eyebrow">From brief to front door</p>
          <h2>How it works</h2>
        </div>
        <p>A clear process, guided by people who know what to look for and when to listen.</p>
      </div>
      <div className="process-list">
        {steps.map((step, index) => (
          <article className={`process-step ${index % 2 ? 'process-step--reverse' : ''}`} key={step.number}>
            <div className="process-image-wrap">
              <img src={step.image} alt={step.alt} loading="lazy" />
              <span>{step.number}</span>
            </div>
            <div className="process-content">
              <ArrowDownRight className="process-arrow" size={27} strokeWidth={1.4} />
              <p className="step-label">Step {step.number}</p>
              <h3>{step.title}</h3>
              <p className="process-copy">{step.text}</p>
              <div className="process-tags">
                {step.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
