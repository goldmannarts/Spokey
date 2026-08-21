import { Building2, KeyRound, MapPin } from 'lucide-react';

const pillars = [
  {
    icon: MapPin,
    title: 'Location',
    text: 'We look beyond the postcode, selecting homes in neighbourhoods with a distinct rhythm, enduring value and genuine sense of place.',
  },
  {
    icon: Building2,
    title: 'Property Type',
    text: 'From city apartments and quiet townhouses to coastal villas, rural homes and light-filled penthouses, every shortlist is personal.',
  },
  {
    icon: KeyRound,
    title: 'Amenities',
    text: 'Terraces, pools, sea views, gardens, concierge service, private parking and exceptional finishes, considered around how you live.',
  },
];

export default function ValueProposition() {
  return (
    <section className="value-section section-shell" id="about">
      <p className="eyebrow">A more considered search</p>
      <h2 className="display-heading">Where your wishes<br />find their home</h2>
      <div className="value-grid">
        {pillars.map(({ icon: Icon, title, text }, index) => (
          <article className="value-item" key={title}>
            <div className="value-icon"><Icon size={19} strokeWidth={1.6} /></div>
            <span className="item-number">0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
