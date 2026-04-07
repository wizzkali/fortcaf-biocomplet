import React from 'react';
import Logo from './Logo';
import { useLanguage } from '@/contexts/LanguageContext';
import doypackImg from '@/assets/doypack-hero-blended.png';
import heroProductBg from '@/assets/hero-product-bg.jpg';
import forestBg from '@/assets/hero-forest-test.jpg';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const sealSmall: React.CSSProperties = {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '9px',
    color: 'rgba(200,158,40,0.6)',
    letterSpacing: '0.4em',
    textTransform: 'uppercase',
  };

  return (
    <section id="inicio" className="relative">
      <div
        className="relative flex flex-col items-center justify-center pt-10 pb-12 md:pt-14 md:pb-16"
        style={{ minHeight: '60vh' }}
      >
        <img src={forestBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10" />
        <Logo size="lg" className="mb-4 z-10" />
      </div>

      <div
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{ minHeight: '50vh' }}
      >
        <img src={heroProductBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center text-center px-4 py-12 md:py-16">
          <div className="flex flex-col items-center mx-auto p-6 mb-8">
            <img
              src={doypackImg}
              alt="FortCafé BioComplet"
              className="w-56 md:w-80 block"
              style={{ filter: 'drop-shadow(0 12px 40px rgba(0,0,0,0.4))' }}
            />
          </div>

          {/* SELLO */}
          <div style={{
            display: 'inline-block',
            border: '2px solid #C9A84C',
            padding: '1.25rem 2rem',
            position: 'relative',
            minWidth: '280px',
            maxWidth: '360px',
          }}>
            <div style={{ position: 'absolute', top: 5, left: 5, right: 5, bottom: 5, border: '0.5px solid rgba(200,158,40,0.3)', pointerEvents: 'none' }} />

            <div style={{ ...sealSmall, marginBottom: '10px' }}>✦ Lleida · Cataluña ✦</div>

            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(38px, 8vw, 54px)',
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#D4A820',
              letterSpacing: '0.03em',
              lineHeight: 1.05,
              margin: 0,
              textShadow: '0 2px 6px rgba(30,15,2,0.95), 0 -1px 0 rgba(240,200,80,0.4)',
            }}>
              Fortcafé<br />BioComplet
            </h1>

            <div style={{ ...sealSmall, margin: '10px 0', letterSpacing: '0.3em' }}>◆ NPK 6-4-4 · CAAE ◆</div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: '8px auto', width: '85%' }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(190,148,30,0.4)' }} />
              <div style={{ width: '4px', height: '4px', transform: 'rotate(45deg)', background: '#C9A84C', opacity: 0.6, flexShrink: 0 }} />
              <div style={{ flex: 1, height: '1px', background: 'rgba(190,148,30,0.4)' }} />
            </div>

            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '11px',
              fontWeight: 700,
              fontStyle: 'italic',
              color: 'rgba(210,168,50,0.85)',
              letterSpacing: '0.08em',
              lineHeight: 1.9,
              marginTop: '4px',
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
