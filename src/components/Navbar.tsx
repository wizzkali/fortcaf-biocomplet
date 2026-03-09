import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

const navLinks = [
  { key: 'nav_inicio' as const, href: '#inicio' },
  { key: 'nav_producto' as const, href: '#producto' },
  { key: 'nav_cultivos' as const, href: '#cultivos' },
  { key: 'nav_como_usarlo' as const, href: '#como-usarlo' },
  { key: 'nav_contacto' as const, href: '#contacto' },
];

const Navbar: React.FC = () => {
  const { t, lang, setLang } = useLanguage();
  const { qty, setIsCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(44,26,14,0.96)' : 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          <Logo size="sm" />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.href)}
                className="fc-label text-fc-warm-white hover:text-fc-green-light transition-colors cursor-pointer"
                style={{ fontSize: '13px' }}
              >
                {t(link.key)}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Solicita información button */}
            <button
              onClick={() => handleNavClick('#contacto')}
              className="fc-btn-primary text-xs px-5 py-2"
            >
              {t('nav_solicita')}
            </button>

            {/* Language toggle */}
            <div className="flex rounded-full overflow-hidden border border-fc-warm-white/30">
              <button
                onClick={() => setLang('es')}
                className={`px-3 py-1 text-xs font-semibold transition-colors ${lang === 'es' ? 'bg-fc-green-dark text-fc-warm-white' : 'text-fc-warm-white/70 hover:text-fc-warm-white'}`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('ca')}
                className={`px-3 py-1 text-xs font-semibold transition-colors ${lang === 'ca' ? 'bg-fc-green-dark text-fc-warm-white' : 'text-fc-warm-white/70 hover:text-fc-warm-white'}`}
              >
                CA
              </button>
            </div>

            {/* Cart icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-fc-warm-white hover:text-fc-green-light transition-colors"
            >
              <ShoppingBag size={22} />
              {qty > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-fc-green-dark text-fc-warm-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {qty}
                </span>
              )}
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-fc-warm-white hover:text-fc-green-light transition-colors"
            >
              <ShoppingBag size={22} />
              {qty > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-fc-green-dark text-fc-warm-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {qty}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-fc-warm-white"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-fc-brown-dark/80" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-64 bg-fc-brown-dark p-8 pt-20 flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.href)}
                className="fc-label text-fc-warm-white hover:text-fc-green-light transition-colors text-left text-base"
              >
                {t(link.key)}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contacto')}
              className="fc-btn-primary text-xs mt-4"
            >
              {t('nav_solicita')}
            </button>
            <div className="flex rounded-full overflow-hidden border border-fc-warm-white/30 self-start">
              <button
                onClick={() => setLang('es')}
                className={`px-3 py-1 text-xs font-semibold transition-colors ${lang === 'es' ? 'bg-fc-green-dark text-fc-warm-white' : 'text-fc-warm-white/70 hover:text-fc-warm-white'}`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('ca')}
                className={`px-3 py-1 text-xs font-semibold transition-colors ${lang === 'ca' ? 'bg-fc-green-dark text-fc-warm-white' : 'text-fc-warm-white/70 hover:text-fc-warm-white'}`}
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
