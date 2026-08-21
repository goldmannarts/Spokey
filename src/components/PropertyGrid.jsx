import { ArrowUpRight, Bath, BedDouble, Expand, Home, MapPin, X } from 'lucide-react';
import { useEffect, useRef } from 'react';

function PropertyCard({ listing, onSelect }) {
  return (
    <button className="property-card" type="button" onClick={() => onSelect(listing)} aria-label={`View ${listing.title}`}>
      <span className="property-image">
        <img src={listing.image} alt={`${listing.title}, ${listing.location}`} loading="lazy" />
        <span className="property-type">{listing.type}</span>
      </span>
      <span className="property-location"><MapPin size={13} /> {listing.location}</span>
      <span className="property-title-row">
        <span className="property-title">{listing.title}</span>
        <ArrowUpRight className="property-arrow" size={20} />
      </span>
      <span className="property-description">{listing.description}</span>
      <span className="property-price">{listing.price}</span>
      <span className="property-meta">
        <span><BedDouble size={15} /> {listing.beds} beds</span>
        <span><Bath size={15} /> {listing.baths} baths</span>
        <span><Expand size={15} /> {listing.size}</span>
      </span>
    </button>
  );
}

function PropertyDialog({ listing, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!listing) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && onClose();
    document.body.classList.add('modal-is-open');
    window.addEventListener('keydown', onKeyDown);
    closeRef.current?.focus();
    return () => {
      document.body.classList.remove('modal-is-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [listing, onClose]);

  if (!listing) return null;
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="property-modal" role="dialog" aria-modal="true" aria-labelledby="property-modal-title">
        <button ref={closeRef} className="icon-button modal-close" type="button" aria-label="Close property details" onClick={onClose}><X /></button>
        <img src={listing.image} alt={`${listing.title}, ${listing.location}`} />
        <div className="modal-content">
          <p className="property-location"><MapPin size={13} /> {listing.location}</p>
          <h2 id="property-modal-title">{listing.title}</h2>
          <p>{listing.description} Available for private viewings by appointment.</p>
          <div className="modal-details">
            <span><Home size={16} /> {listing.type}</span>
            <span><BedDouble size={16} /> {listing.beds} bedrooms</span>
            <span><Bath size={16} /> {listing.baths} bathrooms</span>
            <span><Expand size={16} /> {listing.size}</span>
          </div>
          <div className="modal-footer">
            <strong>{listing.price}</strong>
            <a className="primary-button" href="#contact" onClick={onClose}>Arrange a Viewing <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function PropertyGrid({ listings, activeSearch, selected, onSelect, onClose, onReset }) {
  const activeLabels = [
    activeSearch.mode === 'all' ? 'All homes' : activeSearch.mode === 'rent' ? 'For rent' : 'For sale',
    activeSearch.location !== 'all' && activeSearch.location,
    activeSearch.type !== 'all' && activeSearch.type,
    activeSearch.bedrooms !== 'all' && `${activeSearch.bedrooms}+ bedrooms`,
    activeSearch.query && `“${activeSearch.query}”`,
  ].filter(Boolean);

  return (
    <section className="listing-section section-shell" id="listings">
      <div className="section-intro listing-intro">
        <div>
          <p className="eyebrow">Selected with care</p>
          <h2>Recent Listings</h2>
        </div>
        <div className="results-summary" aria-live="polite">
          <span>{listings.length} {listings.length === 1 ? 'residence' : 'residences'}</span>
          <p>{activeLabels.join(' · ')}</p>
        </div>
      </div>
      {listings.length ? (
        <div className="property-grid">
          {listings.map((listing) => <PropertyCard key={listing.id} listing={listing} onSelect={onSelect} />)}
        </div>
      ) : (
        <div className="empty-results">
          <h3>No exact matches yet.</h3>
          <p>Try broadening your search, or let us curate something privately.</p>
          <button type="button" className="text-button" onClick={onReset}>View all listings <ArrowUpRight size={17} /></button>
        </div>
      )}
      <PropertyDialog listing={selected} onClose={onClose} />
    </section>
  );
}
