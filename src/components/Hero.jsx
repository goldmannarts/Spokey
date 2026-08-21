import { useState } from 'react';

const initialSearch = {
  mode: 'all',
  query: '',
  location: 'all',
  type: 'House',
  bedrooms: 'all',
};

export default function Hero({ onSearch }) {
  const [search, setSearch] = useState(initialSearch);

  const setField = (field, value) => setSearch((current) => ({ ...current, [field]: value }));

  const submit = (event) => {
    event.preventDefault();
    onSearch(search);
    document.querySelector('#listings')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <img className="hero-background" src="/assets/hero-villa.png" alt="Mediterranean villa overlooking an infinity pool and olive-covered hills" />
      <div className="hero-gradient" aria-hidden="true" />
      <div className="hero-heading-wrap">
        <p className="eyebrow">Curated homes across Europe</p>
        <h1>Luxury<br />Living</h1>
      </div>
      <div className="hero-media">
        <p className="hero-caption"><span>Featured residence</span> Ibiza, Spain</p>
        <form className="property-search" onSubmit={submit}>
          <div className="property-kind-toggle" aria-label="Property type">
            {['House', 'Apartment'].map((type) => (
              <button
                className={search.type === type ? 'active' : ''}
                key={type}
                type="button"
                aria-pressed={search.type === type}
                onClick={() => setField('type', type)}
              >
                {type}
                {search.type === type && <img src="/assets/check-circle.svg" alt="" aria-hidden="true" />}
              </button>
            ))}
          </div>
          <div className="main-search">
            <label className="sr-only" htmlFor="property-search-query">Describe the home you are looking for</label>
            <textarea
              id="property-search-query"
              value={search.query}
              onChange={(event) => setField('query', event.target.value)}
              maxLength={100}
              placeholder="What kind of house are you looking for?"
            />
            <span className="search-limit">max. 100 characters</span>
            <button className="primary-button search-submit" type="submit">
              Find listing <img src="/assets/sparkle.svg" alt="" aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
