import React from 'react';
import Logo from './Logo';
import { useLanguage } from '@/contexts/LanguageContext';
import doypackImg from '@/assets/doypack-hero-blended.png';
import forestBg from '@/assets/hero-forest-test.jpg';
import heroProductBg from '@/assets/hero-product-bg.jpg';

const BioCompletBadge: React.FC<{ size?: number }> = ({ size = 260 }) => (
  <svg viewBox="0 0 260 300" width={size} xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.5))' }}>
    <defs>
      <path id="topArcH" d="M130,155 m-108,0 a108,108 0 1,1 216,0"/>
      <path id="botArcH" d="M 38,185 A 108,108 0 0 0 222,185"/>
      <marker id="arGH" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
        <path d="M1,2 L9,6 L1,10" stroke="#8AAF5A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </marker>
      <marker id="arYH" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
        <path d="M1,2 L9,6 L1,10" stroke="#D4A820" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </marker>
    </defs>
    <circle cx="130" cy="155" r="108" fill="#2a1508" opacity="0.95"/>
    <circle cx="130" cy="155" r="108" fill="none" stroke="rgba(200,158,40,0.35)" strokeWidth="1.5"/>
    {/* 3 arcos */}
    <path d="M50,85 A108,108 0 0 1 210,85" fill="none" stroke="#D4A820" strokeWidth="5" strokeLinecap="round" markerEnd="url(#arYH)" opacity="0.9"/>
    <path d="M215,92 A108,108 0 0 1 170,255" fill="none" stroke="#8AAF5A" strokeWidth="5" strokeLinecap="round" markerEnd="url(#arGH)" opacity="0.9"/>
    <path d="M90,255 A108,108 0 0 1 45,92" fill="none" stroke="#8AAF5A" strokeWidth="5" strokeLinecap="round" markerEnd="url(#arGH)" opacity="0.9"/>
    {/* Texto superior en arco */}
    <text fontFamily="Georgia,serif" fontSize="12" fill="#D4A820" letterSpacing="1" opacity="0.88">
      <textPath href="#topArcH" startOffset="5%">Fertilizante Orgánico · Economía Circular</textPath>
    </text>
    {/* BioComplet */}
    <text x="130" y="142" textAnchor="middle" fontFamily="'Cormorant Garamond',Georgia,serif" fontSize="46" fontStyle="italic" fontWeight="700" fill="#D4A820" opacity="0.95">Bio</text>
    <text x="130" y="184" textAnchor="middle" fontFamily="'Cormorant Garamond',Georgia,serif" fontSize="40" fontStyle="italic" fontWeight="700" fill="#D4A820" opacity="0.95">Complet</text>
    {/* NPK correcto */}
    <text x="130" y="206" textAnchor="middle" fontFamily="Georgia,serif" fontSize="12.5" fill="#C9A84C" letterSpacing="1.5" opacity="0.82">NPK 6-4-4 · CAAE</text>
    {/* Texto inferior en arco */}
    <text fontFamily="Georgia,serif" fontSize="12" fill="#D4A820" letterSpacing="1" opacity="0.88">
      <textPath href="#botArcH" startOffset="18%">Agricultura Sostenible</textPath>
    </text>
  </svg>
);

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

          {/* DESKTOP: lado a lado | MÓVIL: columna badge arriba, doypack abajo */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">

            {/* Badge izquierda en desktop, arriba en móvil */}
            <div className="flex items-center justify-center order-1 md:order-1">
              <BioCompletBadge size={280} />
            </div>

            {/* Doypack derecha en desktop, abajo en móvil */}
            <div className="flex items-center justify-center order-2 md:order-2">
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
