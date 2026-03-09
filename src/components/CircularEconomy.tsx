import React from 'react';
import { Coffee, RefreshCw, Sprout, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';
import CoffeeStain from './CoffeeStain';

const CircularEconomy: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Coffee, text: t('ec_step1') },
    { icon: RefreshCw, text: t('ec_step2') },
    { icon: Sprout, text: t('ec_step3') },
  ];

  return (
    <section id="economia-circular" className="fc-section-cream relative py-20 md:py-28">
      <CoffeeStain className="top-10 right-0" size={200} opacity={0.1} />
      <FadeInSection className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="fc-h2 text-fc-brown-dark text-center mb-16">{t('ec_title')}</h2>

        {/* 3 Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 mb-16">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 rounded-full bg-fc-green-dark flex items-center justify-center mb-4">
                  <step.icon size={28} className="text-fc-warm-white" />
                </div>
                <p className="text-fc-brown-dark text-sm leading-relaxed">{step.text}</p>
              </div>
              {i < 2 && (
                <ArrowRight size={24} className="text-fc-brown-light hidden md:block flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-center mb-10">
          <p className="font-display italic text-fc-brown-dark text-2xl md:text-3xl leading-relaxed max-w-3xl mx-auto">
            "{t('ec_quote')}"
          </p>
        </blockquote>

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
