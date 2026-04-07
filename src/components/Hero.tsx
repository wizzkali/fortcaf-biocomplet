import React from 'react';
import Logo from './Logo';
import BioCompletBadge from './BioCompletBadge';
import { useLanguage } from '@/contexts/LanguageContext';
import doypackImg from '@/assets/doypack-hero-blended.png';
import forestBg from '@/assets/hero-forest-test.jpg';
import soilBg from '@/assets/hero-soil-bg.png';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative">

      {/* === TOP — Bosque con logo === */}
      <div
        className="relative flex flex-col items-center justify-center pt-10 pb-12 md:pt-14 md:pb-16"
        style={{ minHeight: '60vh' }}
      >
        <img src={forestBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10" />
        <Logo size="lg" className="mb-4 z-10" />
      </div>

      {/* === BANDA PRODUCTO + BADGE === */}
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{ minHeight: '60vh' }}
      >
        {/* Fondo tierra */}
        <img src={soilBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 40%' }} />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 py-14 md:py-20 w-full max-w-5xl mx-auto">

          {/* Doypack izquierda */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src={doypackImg}
              alt="FortCafé BioComplet"
              className="w-48 md:w-72"
              style={{ filter: 'drop-shadow(0 16px 48px rgba(0,0,0,0.6))' }}
            />
          </div>

          {/* Badge derecha */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <BioCompletBadge size={300} />
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
