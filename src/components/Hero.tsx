import React from 'react';
import Logo from './Logo';
import { useLanguage } from '@/contexts/LanguageContext';
import doypackImg from '@/assets/doypack-hero-blended.png';
import heroProductBg from '@/assets/hero-product-bg.jpg';
import forestBg from '@/assets/hero-forest-test.jpg';

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

      {/* === BANDA PRODUCTO === */}
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{ minHeight: '55vh' }}
      >
        <img src={heroProductBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center py-12">

          {/* Círculo + doypack centrado encima */}
          <div className="relative flex items-center justify-center" style={{ width: 320, height: 320 }}>

            {/* SVG círculo alrededor */}
            <svg
              viewBox="0 0 320 320"
              width="320"
              height="320"
              className="absolute inset-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path id="arcText" d="M160,160 m-130,0 a130,130 0 1,1 260,0 a130,130 0 1,1 -260,0"/>
                <marker id="arr" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                  <path d="M0,1.5 L7,5 L0,8.5" stroke="#8AAF5A" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </marker>
              </defs>

              {/* Anillo exterior punteado */}
              <circle cx="160" cy="160" r="150" fill="none" stroke="#C9A84C" stroke-width="1" stroke-dasharray="3 5" opacity="0.35"/>

              {/* Anillo principal */}
              <circle cx="160" cy="160" r="142" fill="none" stroke="#C9A84C" stroke-width="1.5" opacity="0.5"/>
              <circle cx="160" cy="160" r="136" fill="none" stroke="#C9A84C" stroke-width="0.5" opacity="0.2"/>

              {/* 3 flechas verdes a 120° */}
              <path d="M168,20 A142,142 0 0 1 275,213" fill="none" stroke="#8AAF5A" stroke-width="3" stroke-linecap="round" marker-end="url(#arr)" opacity="0.9"/>
              <path d="M275,213 A142,142 0 0 1 45,213" fill="none" stroke="#8AAF5A" stroke-width="3" stroke-linecap="round" marker-end="url(#arr)" opacity="0.9"/>
              <path d="M45,213 A142,142 0 0 1 168,20" fill="none" stroke="#8AAF5A" stroke-width="3" stroke-linecap="round" marker-end="url(#arr)" opacity="0.9"/>

              {/* Texto circular */}
              <text font-family="'Cormorant Garamond', Georgia, serif" font-size="13.5" fill="#D4A820" letter-spacing="1.8" opacity="0.9">
                <textPath href="#arcText" startOffset="3%">
                  Fertilizante Orgánico · Economía Circular · Agricultura Sostenible ·
                </textPath>
              </text>

              {/* NPK correcto — pequeño, en la parte baja visible */}
              <text x="160" y="294" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#C9A84C" letter-spacing="2" opacity="0.75">
                NPK 6-4-4 · CAAE
              </text>
            </svg>

            {/* Doypack encima, cubriendo el centro */}
            <img
              src={doypackImg}
              alt="FortCafé BioComplet"
              className="relative z-10"
              style={{
                width: '210px',
                filter: 'drop-shadow(0 12px 40px rgba(0,0,0,0.55))',
                marginTop: '10px',
              }}
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
