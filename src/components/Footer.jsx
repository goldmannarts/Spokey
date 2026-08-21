import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="final-cta section-shell" id="contact">
      <p className="eyebrow">Begin with a conversation</p>
      <h2>Your Dream Home Awaits</h2>
      <p>From the first thought of moving to the moment the keys are yours, we bring clarity, local perspective and quiet attention to every step.</p>
      <a className="primary-button" href="#listings">Browse Listings <ArrowRight size={17} /></a>
    </section>
  );
}

const columns = [
  { title: 'Pages', links: [['Home', '#home'], ['Explore', '#listings'], ['About', '#how-it-works'], ['Add Listing', '#contact']] },
  { title: 'Law', links: [['Privacy Policy', '#'], ['Terms of Service', '#']] },
  { title: 'External', links: [['LinkedIn', '#'], ['Facebook', '#'], ['Instagram', '#']] },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/assets/spokey-estate.svg" alt="Spokey Estate" />
          <p>Exceptional homes.<br />Considered journeys.</p>
        </div>
        {columns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Spokey Estate</span>
        <span>Made for life well placed</span>
      </div>
    </footer>
  );
}
