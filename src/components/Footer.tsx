import React from 'react';
import Logo from './Logo';
import { useLanguage } from '@/contexts/LanguageContext';

const footerLinks = [
  { key: 'nav_inicio' as const, href: '#inicio' },
  { key: 'nav_tienda' as const, href: '#tienda' },
  { key: 'nav_agricultura' as const, href: '#agricultura' },
  { key: 'nav_colabora' as const, href: '#colabora' },
  { key: 'nav_contacto' as const, href: '#contacto' },
];

const Footer: React.FC = () => {
  const { t, lang, setLang } = useLanguage();

  return (
    <footer className="fc-section-dark py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-10">
          {/* Col 1: Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Logo size="sm" className="mb-4" />
            <p className="text-fc-warm-white/60 text-sm italic">{t('footer_tagline')}</p>
            <div className="flex gap-3 mt-4">
              <span className="fc-badge fc-badge-brown text-[10px]">CAAE</span>
              <span className="fc-badge fc-badge-brown text-[10px]">defeder</span>
            </div>
          </div>

          {/* Col 2: Links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            {footerLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-fc-warm-white/70 hover:text-fc-green-light transition-colors text-sm"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          {/* Col 3: Info */}
          <div className="flex flex-col items-center md:items-start gap-2 text-fc-warm-white/60 text-sm">
            <span>{t('footer_location')}</span>
            <span>{t('footer_registry')}</span>
            <span>{t('footer_cert')}</span>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-fc-brown-mid mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-fc-warm-white/40 text-xs">{t('footer_rights')}</p>

          {/* Language toggle */}
          <div className="flex rounded-full overflow-hidden border border-fc-warm-white/20">
            <button
              onClick={() => setLang('es')}
              className={`px-3 py-1 text-xs font-semibold transition-colors ${lang === 'es' ? 'bg-fc-green-dark text-fc-warm-white' : 'text-fc-warm-white/50'}`}
            >
              ES
            </button>
            <button
              onClick={() => setLang('ca')}
              className={`px-3 py-1 text-xs font-semibold transition-colors ${lang === 'ca' ? 'bg-fc-green-dark text-fc-warm-white' : 'text-fc-warm-white/50'}`}
            >
              CA
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
