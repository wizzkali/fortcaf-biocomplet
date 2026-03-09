import React from 'react';
import Logo from './Logo';
import { useLanguage } from '@/contexts/LanguageContext';
import CoffeeStain from './CoffeeStain';
import heroBg from '@/assets/hero-bg.jpg';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-fc-brown-dark/60" />

      <CoffeeStain className="top-10 right-10 z-10" size={250} opacity={0.12} />
      <CoffeeStain className="bottom-20 left-5 z-10" size={180} opacity={0.08} />

      <div className="relative z-20 max-w-3xl mx-auto px-4 md:px-8 py-32 w-full text-center">
        <Logo size="lg" className="mb-8 mx-auto" />

        <h1 className="fc-h1 text-4xl md:text-6xl text-fc-warm-white mb-4 leading-tight">
          {t('hero_tagline')}
        </h1>

        <p className="fc-label text-fc-green-light mb-8" style={{ letterSpacing: '0.15em', fontSize: '13px' }}>
          {t('hero_claim')}
        </p>

        <button onClick={() => scrollTo('#contacto')} className="fc-btn-primary text-base px-10 py-4">
          {t('nav_solicita')}
        </button>
      </div>
    </section>
  );
};

export default Hero;
