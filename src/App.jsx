import { useCallback, useMemo, useState } from 'react';
import FAQ from './components/FAQ';
import Footer, { FinalCTA } from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import PropertyGrid from './components/PropertyGrid';
import Testimonials from './components/Testimonials';
import ValueProposition from './components/ValueProposition';
import { listings } from './data';

const defaultSearch = { mode: 'all', query: '', location: 'all', type: 'all', bedrooms: 'all' };

export default function App() {
  const [search, setSearch] = useState(defaultSearch);
  const [selectedListing, setSelectedListing] = useState(null);

  const filteredListings = useMemo(() => {
    const query = search.query.trim().toLowerCase();
    return listings.filter((listing) => {
      const haystack = `${listing.title} ${listing.location} ${listing.type} ${listing.description}`.toLowerCase();
      const matchesType = search.type === 'all'
        || (search.type === 'House' && ['House', 'Villa', 'Townhouse'].includes(listing.type))
        || (search.type === 'Apartment' && ['Apartment', 'Penthouse'].includes(listing.type));
      return (search.mode === 'all' || listing.mode === search.mode)
        && (search.location === 'all' || listing.location.includes(search.location))
        && matchesType
        && (search.bedrooms === 'all' || listing.beds >= Number(search.bedrooms))
        && (!query || haystack.includes(query));
    });
  }, [search]);

  const closeListing = useCallback(() => setSelectedListing(null), []);

  return (
    <>
      <Header />
      <main>
        <Hero onSearch={setSearch} />
        <ValueProposition />
        <HowItWorks />
        <PropertyGrid
          listings={filteredListings}
          activeSearch={search}
          selected={selectedListing}
          onSelect={setSelectedListing}
          onClose={closeListing}
          onReset={() => setSearch(defaultSearch)}
        />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
