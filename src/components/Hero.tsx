import React from 'react';
import Logo from './Logo';
import { useLanguage } from '@/contexts/LanguageContext';
import CoffeeStain from './CoffeeStain';
import doypackImg from '@/assets/doypack-fortcafe.jpg';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="fc-section-dark relative min-h-screen flex items-center overflow-hidden">
      <CoffeeStain className="top-10 right-10" size={250} opacity={0.12} />
      <CoffeeStain className="bottom-20 left-5" size={180} opacity={0.08} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-32 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <Logo size="lg" className="mb-8" />

            <h1 className="fc-h1 text-4xl md:text-6xl text-fc-warm-white mb-4 leading-tight">
              {t('hero_tagline')}
            </h1>

            <p className="fc-label text-fc-green-light mb-4" style={{ letterSpacing: '0.15em', fontSize: '13px' }}>
              {t('hero_claim')}
            </p>

            <p className="text-fc-warm-white/75 text-lg mb-6 max-w-lg leading-relaxed">
              {t('hero_desc')}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
              <span className="fc-badge fc-badge-green">🌿 100% Ecológico</span>
              <span className="fc-badge fc-badge-green">♻️ Economía Circular</span>
              <span className="fc-badge fc-badge-brown">✅ Cert. CAAE + defeder</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
              <button onClick={() => scrollTo('#tienda')} className="fc-btn-primary">
                {t('hero_cta')}
              </button>
              <button
                onClick={() => scrollTo('#economia-circular')}
                className="text-fc-warm-white underline underline-offset-4 hover:text-fc-green-light transition-colors font-medium"
              >
                {t('hero_cta2')}
              </button>
            </div>
          </div>

          {/* Product image */}
          <div className="flex-shrink-0">
            <img
              src={doypackImg}
              alt="FortCafé BioComplet - Fertilizante orgánico 1kg"
              className="w-64 md:w-80 drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 0 40px rgba(90,143,74,0.3))' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
