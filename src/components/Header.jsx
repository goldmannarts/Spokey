import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  ['Home', '#home'],
  ['Explore', '#listings'],
  ['About', '#how-it-works'],
  ['Add Listing', '#contact'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen);
    return () => document.body.classList.remove('menu-is-open');
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <a className="brand" href="#home" aria-label="Spokey Estate home">
        <img src="/assets/spokey-estate.svg" alt="Spokey Estate" />
      </a>
      <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </nav>
      <button
        className="icon-button menu-button"
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
