import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section section-shell" id="faq">
      <div className="faq-heading">
        <p className="eyebrow">The practical details</p>
        <h2>Frequently asked Questions</h2>
        <p>Answers to common questions about finding a property, costs and what happens next.</p>
      </div>
      <div className="accordion">
        {faqs.map((faq, index) => {
          const isOpen = index === openIndex;
          return (
            <div className={`accordion-item ${isOpen ? 'accordion-item--open' : ''}`} key={faq.question}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {faq.question}
                  {isOpen ? <Minus size={19} /> : <Plus size={19} />}
                </button>
              </h3>
              <div className="accordion-panel" id={`faq-panel-${index}`}>
                <div><p>{faq.answer}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
