import { ArrowUpRight, Search, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

const initialSearch = {
  mode: 'buy',
  query: '',
  location: 'all',
  type: 'all',
  bedrooms: 'all',
};

export default function Hero({ onSearch }) {
  const [search, setSearch] = useState(initialSearch);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const setField = (field, value) => setSearch((current) => ({ ...current, [field]: value }));

  const submit = (event) => {
    event.preventDefault();
    onSearch(search);
    document.querySelector('#listings')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-heading-wrap">
        <p className="eyebrow">Curated homes across Europe</p>
        <h1>Luxury<br />Living</h1>
      </div>
      <div className="hero-media">
        <img src="/assets/hero-villa.png" alt="Mediterranean villa overlooking an infinity pool and olive-covered hills" />
        <p className="hero-caption"><span>Featured residence</span> Ibiza, Spain</p>
        <form className="property-search" onSubmit={submit}>
          <div className="search-topline">
            <div className="mode-toggle" aria-label="Listing type">
              {['buy', 'rent'].map((mode) => (
                <button
                  className={search.mode === mode ? 'active' : ''}
                  key={mode}
                  type="button"
                  aria-pressed={search.mode === mode}
                  onClick={() => setField('mode', mode)}
                >
                  {mode[0].toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
            <button
              className="filter-toggle"
              type="button"
              aria-expanded={filtersOpen}
              onClick={() => setFiltersOpen((open) => !open)}
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
          </div>
          <label className="main-search">
            <Search aria-hidden="true" />
            <span className="sr-only">Search by location or property name</span>
            <input
              value={search.query}
              onChange={(event) => setField('query', event.target.value)}
              placeholder="What kind of home are you looking for?"
            />
          </label>
          <div className={`search-filters ${filtersOpen ? 'search-filters--open' : ''}`}>
            <label>
              <span>Location</span>
              <select value={search.location} onChange={(event) => setField('location', event.target.value)}>
                <option value="all">Anywhere</option>
                <option value="Portugal">Portugal</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Spain">Spain</option>
                <option value="Ireland">Ireland</option>
              </select>
            </label>
            <label>
              <span>Property type</span>
              <select value={search.type} onChange={(event) => setField('type', event.target.value)}>
                <option value="all">All homes</option>
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Townhouse">Townhouse</option>
                <option value="House">House</option>
              </select>
            </label>
            <label>
              <span>Bedrooms</span>
              <select value={search.bedrooms} onChange={(event) => setField('bedrooms', event.target.value)}>
                <option value="all">Any number</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </label>
          </div>
          <button className="primary-button search-submit" type="submit">
            Find a Home <ArrowUpRight size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}
