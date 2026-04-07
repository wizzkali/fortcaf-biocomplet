import React from 'react';
import Logo from './Logo';
import doypackImg from '@/assets/doypack-hero-blended.png';
import forestBg from '@/assets/hero-forest-test.jpg';
import heroProductBg from '@/assets/hero-product-bg.jpg';
import badgeImg from '@/assets/biocomplet-badge.png';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative">

      {/* === BOSQUE + LOGO === */}
      <div
        className="relative flex flex-col items-center justify-center pt-10 pb-12 md:pt-14 md:pb-16"
        style={{ minHeight: '60vh' }}
      >
        <img src={forestBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/10"/>
        <Logo size="lg" className="mb-4 z-10"/>
      </div>

      {/* === BANDA PRODUCTO === */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: '65vh' }}
      >
        <img src={heroProductBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/50"/>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-10">

          {/* DESKTOP: lado a lado | MÓVIL: columna */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">

            {/* Badge imagen real — izquierda desktop / arriba móvil */}
            <div className="flex items-center justify-center order-1">
              <img
                src={badgeImg}
                alt="BioComplet — Fertilizante Orgánico NPK 6-4-4 CAAE"
                className="w-64 md:w-80"
                style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.55))' }}
              />
            </div>

            {/* Doypack — derecha desktop / abajo móvil */}
            <div className="flex items-center justify-center order-2">
              <img
                src={doypackImg}
                alt="FortCafé BioComplet 1kg"
                className="w-52 md:w-72"
                style={{ filter: 'drop-shadow(0 16px 48px rgba(0,0,0,0.65))' }}
              />
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
