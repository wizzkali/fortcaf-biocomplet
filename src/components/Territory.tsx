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
          <div className="flex-shrink-0 text-center">
            <Sprout className="w-32 h-32 text-fc-green-dark/30" />
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Territory;

import { Sprout } from 'lucide-react';
