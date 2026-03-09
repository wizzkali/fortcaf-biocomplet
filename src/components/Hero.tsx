import React from 'react';
import Logo from './Logo';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'hsl(36, 40%, 90%)' }}
    >
      {/* Coffee stain textures — top band */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '18vh',
          background: 'linear-gradient(180deg, hsl(25, 45%, 35%) 0%, hsl(30, 40%, 50%) 40%, hsl(36, 40%, 85%) 85%, transparent 100%)',
          opacity: 0.85,
        }}
      />
      {/* Coffee stain spots */}
      <div
        className="absolute"
        style={{
          top: '12vh',
          left: '5%',
          width: '180px',
          height: '200px',
          background: 'radial-gradient(ellipse, rgba(139, 94, 60, 0.25) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'rotate(-15deg)',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '8vh',
          right: '8%',
          width: '220px',
          height: '180px',
          background: 'radial-gradient(ellipse, rgba(139, 94, 60, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'rotate(20deg)',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '15vh',
          left: '40%',
          width: '120px',
          height: '140px',
          background: 'radial-gradient(ellipse, rgba(160, 110, 60, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      {/* More scattered stain spots on sides */}
      <div
        className="absolute"
        style={{
          top: '35%',
          right: '2%',
          width: '100px',
          height: '160px',
          background: 'radial-gradient(ellipse, rgba(139, 94, 60, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'rotate(30deg)',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '50%',
          left: '3%',
          width: '130px',
          height: '120px',
          background: 'radial-gradient(ellipse, rgba(160, 110, 60, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'rotate(-10deg)',
        }}
      />

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 pt-24 pb-16">
        {/* Large logo */}
        <Logo size="lg" className="mb-10" />

        {/* Main heading */}
        <h1
          className="font-display font-bold uppercase"
          style={{
            color: '#2C1A0E',
            fontSize: 'clamp(28px, 5vw, 48px)',
            letterSpacing: '0.04em',
            lineHeight: 1.15,
            marginBottom: '12px',
          }}
        >
          FERTILIZANTE DE CAFÉ
        </h1>

        {/* Subheading */}
        <p
          style={{
            color: '#3D6B35',
            fontSize: 'clamp(18px, 3vw, 26px)',
            fontWeight: 500,
            letterSpacing: '0.02em',
          }}
        >
          100% ecológico
        </p>

        {/* CTA */}
        <button
          onClick={() => scrollTo('#contacto')}
          className="fc-btn-primary text-base px-10 py-4 mt-10"
        >
          {t('nav_solicita')}
        </button>
      </div>
    </section>
  );
};

export default Hero;
