import React from 'react';
import Logo from './Logo';
import { useLanguage } from '@/contexts/LanguageContext';
import doypackImg from '@/assets/doypack-fortcafe.jpg';
import heroProductBg from '@/assets/hero-product-bg.jpg';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative">
      {/* === TOP SECTION — Sage green with logo === */}
      <div
        className="relative flex flex-col items-center justify-center pt-24 pb-8 md:pt-28 md:pb-12"
        style={{ backgroundColor: '#A8B89A' }}
      >
        {/* 1kg indicator top right */}
        <span
          className="absolute top-24 right-8 md:top-28 md:right-16 font-display font-bold"
          style={{ color: '#2C1A0E', fontSize: 'clamp(18px, 3vw, 28px)' }}
        >
          1kg
        </span>

        {/* Large centered logo */}
        <Logo size="lg" className="mb-4" />
      </div>

      {/* === DARK PRODUCT BAND — coffee grounds, doypack, text overlay === */}
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{ minHeight: '50vh' }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroProductBg})` }}
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Doypack product image */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 py-12 md:py-16">
          <img
            src={doypackImg}
            alt="FortCafé BioComplet 1kg doypack"
            className="w-32 md:w-44 mb-4 drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.4))' }}
          />

          {/* Large title overlay */}
          <h1
            className="font-display font-bold uppercase text-center leading-none"
            style={{
              color: '#FAF6EE',
              fontSize: 'clamp(32px, 7vw, 64px)',
              letterSpacing: '0.02em',
              textShadow: '0 2px 12px rgba(0,0,0,0.4)',
            }}
          >
            FORTCAFÉ<br />BIOCOMPLET
          </h1>

          <p
            className="font-body font-semibold uppercase mt-3"
            style={{
              color: '#FAF6EE',
              fontSize: 'clamp(14px, 2.5vw, 22px)',
              letterSpacing: '0.06em',
              textShadow: '0 1px 8px rgba(0,0,0,0.3)',
            }}
          >
            FERTILIZANTE ORGÁNICO DE<br />CAFÉ 100% ECOLÓGICO
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
