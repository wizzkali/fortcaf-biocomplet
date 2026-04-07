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
      {/* === TOP SECTION === */}
      <div
        className="relative flex flex-col items-center justify-center pt-10 pb-12 md:pt-14 md:pb-16"
        style={{ minHeight: '60vh' }}
      >
        <img src={forestBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10" />
        <Logo size="lg" className="mb-4 z-10" />
      </div>

      {/* === DARK PRODUCT BAND === */}
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{ minHeight: '50vh' }}
      >
        <img src={heroProductBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex flex-col items-center text-center px-4 py-12 md:py-16">
          {/* Doypack */}
          <div className="flex flex-col items-center justify-center mx-auto rounded-2xl p-6 mb-8">
            <img
              src={doypackImg}
              alt="FortCafé BioComplet"
              className="w-56 md:w-80 block"
              style={{ filter: 'drop-shadow(0 12px 40px rgba(0,0,0,0.4))' }}
            />
          </div>

          {/* SELLO DORADO */}
          <div style={{
            display: 'inline-block',
            border: '2px solid #C9A84C',
            padding: '1.1rem 1.8rem',
            position: 'relative',
            minWidth: '260px',
            maxWidth: '340px',
          }}>
            {/* Marco interior */}
            <div style={{
              position: 'absolute', top: 5, left: 5, right: 5, bottom: 5,
              border: '0.5px solid rgba(200,158,40,0.3)',
              pointerEvents: 'none',
            }} />

            {/* Lleida · Cataluña */}
            <div style={{
              fontFamily: "'Uncial Antiqua', serif",
              fontSize: '9px',
              color: 'rgba(200,158,40,0.6)',
              letterSpacing: '0.3em',
              marginBottom: '8px',
              WebkitTextStroke: '0.3px rgba(200,158,40,0.4)',
            }}>✦ Lleida · Cataluña ✦</div>

            {/* Título principal */}
            <h1 style={{
              fontFamily: "'Uncial Antiqua', serif",
              fontSize: 'clamp(26px, 5vw, 34px)',
              letterSpacing: '0.03em',
              lineHeight: 1.15,
              color: '#D4A820',
              textShadow: '0 2px 4px rgba(60,40,5,0.9), 0 -1px 0 rgba(240,200,80,0.5), 0 0 30px rgba(200,158,40,0.2)',
              margin: 0,
            }}>
              Fortcafé<br />BioComplet
            </h1>

            {/* NPK badge */}
            <div style={{
              fontFamily: "'Uncial Antiqua', serif",
              fontSize: '9px',
              color: 'rgba(200,158,40,0.65)',
              letterSpacing: '0.25em',
              margin: '8px 0',
              WebkitTextStroke: '0.3px rgba(200,158,40,0.5)',
            }}>◆ NPK 6-4-4 · CAAE ◆</div>

            {/* Línea decorativa */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: '8px auto', width: '90%' }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(190,148,30,0.35)' }} />
              <div style={{ width: '4px', height: '4px', transform: 'rotate(45deg)', background: '#C9A84C', opacity: 0.5 }} />
              <div style={{ flex: 1, height: '1px', background: 'rgba(190,148,30,0.35)' }} />
            </div>

            {/* Subtítulo */}
            <div style={{
              fontFamily: "'Uncial Antiqua', serif",
              fontSize: '10px',
              color: 'rgba(210,168,50,0.7)',
              letterSpacing: '0.1em',
              lineHeight: 2,
              marginTop: '4px',
              WebkitTextStroke: '0.4px rgba(200,158,40,0.5)',
            }}>
              Fertilizante orgánico · Economía circular<br />
              Hostelería de Lleida · Agricultura sostenible
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
