import React from 'react';
import { Coffee, Sprout, RefreshCw } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';
import CoffeeStain from './CoffeeStain';

const CircularEconomy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="economia-circular" className="fc-section-cream relative py-20 md:py-28">
      <CoffeeStain className="top-10 right-0" size={200} opacity={0.1} />
      <CoffeeStain className="bottom-10 left-0" size={160} opacity={0.08} />
      <FadeInSection className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="fc-h2 text-fc-brown-dark text-center mb-16 italic">{t('ec_title')}</h2>

        {/* Problem + Solution layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16">
          {/* Problem */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="w-20 h-20 rounded-full bg-fc-brown-dark/10 flex items-center justify-center mb-4">
              <Coffee size={36} className="text-fc-brown-light" />
            </div>
            <h3 className="font-display italic text-fc-brown-dark text-xl mb-2">{t('ec_problem_title')}</h3>
            <p className="text-fc-brown-dark/70 text-sm leading-relaxed">{t('ec_problem_text')}</p>
          </div>

          {/* Central circular arrow icon */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-fc-green-dark flex items-center justify-center">
              <RefreshCw size={32} className="text-fc-warm-white" />
            </div>
          </div>

          {/* Solution */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="w-20 h-20 rounded-full bg-fc-green-dark/10 flex items-center justify-center mb-4">
              <Sprout size={36} className="text-fc-green-dark" />
            </div>
            <h3 className="font-display italic text-fc-green-dark text-xl mb-2">{t('ec_solution_title')}</h3>
            <p className="text-fc-brown-dark/70 text-sm leading-relaxed">{t('ec_solution_text')}</p>
          </div>
        </div>

        <p className="text-center text-fc-brown-dark/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          {t('ec_narrative')}
        </p>

        <div className="text-center">
          <p className="font-display italic text-fc-green-dark text-xl mb-4">{t('ec_cta')}</p>
          <button
            onClick={() => document.querySelector('#tienda')?.scrollIntoView({ behavior: 'smooth' })}
            className="fc-btn-primary"
          >
            {t('hero_cta')}
          </button>
        </div>
      </FadeInSection>
    </section>
  );
};

export default CircularEconomy;
