import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const NavLink: React.FC<{ label: string; href: string; onClick?: () => void }> = ({ label, href, onClick }) => {
  const handleClick = () => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    onClick?.();
  };
  return (
    <button
      onClick={handleClick}
      className="font-display font-bold uppercase tracking-wide hover:opacity-70 transition-opacity cursor-pointer"
      style={{ color: '#2C1A0E', fontSize: '15px', letterSpacing: '0.06em' }}
    >
      {label}
    </button>
  );
};

const Navbar: React.FC = () => {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const links = [
    { label: t('nav_inicio'), href: '#inicio' },
    { label: t('nav_producto'), href: '#producto' },
    { label: t('nav_tienda'), href: '#tienda' },
    { label: t('nav_agricultura'), href: '#agricultura' },
    { label: t('nav_colabora'), href: '#colabora' },
    { label: t('nav_contacto'), href: '#contacto' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(168, 184, 154, 0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {links.map((link) => (
              <NavLink key={link.href} label={link.label} href={link.href} />
            ))}
          </div>

          {/* Language toggle */}
          <div className="hidden md:flex items-center gap-1 absolute right-8">
            <button
              onClick={() => setLang('es')}
              className={`px-2 py-1 text-xs font-bold rounded transition-colors ${lang === 'es' ? 'bg-fc-green-dark text-fc-warm-white' : 'text-fc-brown-dark/60 hover:text-fc-brown-dark'}`}
            >
              ES
            </button>
            <button
              onClick={() => setLang('ca')}
              className={`px-2 py-1 text-xs font-bold rounded transition-colors ${lang === 'ca' ? 'bg-fc-green-dark text-fc-warm-white' : 'text-fc-brown-dark/60 hover:text-fc-brown-dark'}`}
            >
              CA
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-3 md:hidden w-full justify-between">
            <span className="font-display font-bold text-sm" style={{ color: '#2C1A0E' }}>FortCafé</span>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-fc-brown-dark">
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-64 p-8 pt-20 flex flex-col gap-5" style={{ backgroundColor: '#A8B89A' }}>
            {links.map((link) => (
              <NavLink
                key={link.href}
                label={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
              />
            ))}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setLang('es')}
                className={`px-3 py-1 text-xs font-bold rounded ${lang === 'es' ? 'bg-fc-green-dark text-fc-warm-white' : ''}`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('ca')}
                className={`px-3 py-1 text-xs font-bold rounded ${lang === 'ca' ? 'bg-fc-green-dark text-fc-warm-white' : ''}`}
              >
                CA
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
