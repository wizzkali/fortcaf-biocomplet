import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';
import CoffeeStain from './CoffeeStain';

const Territory: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="fc-section-cream relative py-20 md:py-28">
      <CoffeeStain className="bottom-10 right-10" size={180} opacity={0.1} />
      <FadeInSection className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="fc-h2 text-fc-brown-dark mb-6">{t('territory_title')}</h2>
            <p className="text-fc-brown-dark/80 leading-relaxed mb-8">{t('territory_text')}</p>
            <p className="font-display italic text-fc-green-dark text-2xl mb-6">{t('territory_highlight')}</p>
            <button
              onClick={() => document.querySelector('#tienda')?.scrollIntoView({ behavior: 'smooth' })}
              className="fc-btn-primary"
            >
              {t('territory_cta')}
            </button>
          </div>

          {/* Placeholder foto Lleida */}
          <div
            className="flex-shrink-0 w-full md:w-72 h-56 md:h-72 rounded-2xl flex flex-col items-center justify-center gap-3 border-2 border-dashed"
            style={{ borderColor: 'rgba(44,26,14,0.2)', backgroundColor: 'rgba(44,26,14,0.04)' }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'rgba(44,26,14,0.25)' }}>
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
            </svg>
            <span style={{ fontSize: '12px', color: 'rgba(44,26,14,0.35)', textAlign: 'center', padding: '0 1rem' }}>
              Foto dels camps de Lleida<br />— pendent d'Alfonso
            </span>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Territory;
