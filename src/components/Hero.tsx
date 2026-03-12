import React from 'react';
import Logo from './Logo';
import { useLanguage } from '@/contexts/LanguageContext';
import doypackImg from '@/assets/doypack-front-transparent.png';
import heroProductBg from '@/assets/hero-product-bg.jpg';
import forestBg from '@/assets/hero-forest.jpg';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative">
      {/* === TOP SECTION — Forest background with clean logo === */}
      <div
        className="relative flex flex-col items-center justify-center pt-10 pb-12 md:pt-14 md:pb-16"
        style={{ minHeight: '60vh' }}
      >
        <img
          src={forestBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <Logo size="lg" className="mb-4 z-10" />
      </div>

      {/* === DARK PRODUCT BAND === */}
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{ minHeight: '50vh' }}
      >
        <img
          src={heroProductBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex flex-col items-center text-center px-4 py-12 md:py-16">
          <div className="flex items-center justify-center mx-auto border-4 border-[#5A8F4A] ring-4 ring-[#D4AF37] rounded-2xl p-1 bg-[#3E2723] mb-6">
            <img
              src={doypackImg}
              alt="FortCafé BioComplet"
              className="w-56 md:w-80 block"
              style={{
                filter: 'drop-shadow(0 12px 40px rgba(90,143,74,0.35))',
              }}
            />
          </div>

          <h1
            className="font-display font-bold uppercase text-center leading-none"
            style={{
              color: '#5A8F4A',
              fontSize: 'clamp(32px, 7vw, 64px)',
              letterSpacing: '0.02em',
              textShadow: '0 2px 12px rgba(0,0,0,0.2)',
            }}
          >
            FORTCAFÉ<br />BIOCOMPLET
          </h1>

          <p
            className="font-body font-semibold mt-3 max-w-md"
            style={{
              color: '#5A8F4A',
              fontSize: 'clamp(13px, 2.2vw, 18px)',
              letterSpacing: '0.03em',
              textShadow: '0 1px 8px rgba(0,0,0,0.15)',
            }}
          >
            {t('hero_desc')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
