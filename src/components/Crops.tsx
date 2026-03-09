import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';

const crops = [
  { emoji: '🌳', key: 'crops_almond' as const },
  { emoji: '🫒', key: 'crops_olive' as const },
  { emoji: '🍇', key: 'crops_vine' as const },
  { emoji: '🍎', key: 'crops_fruit' as const },
  { emoji: '🥬', key: 'crops_garden' as const },
];

const Crops: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="cultivos" className="fc-section-cream py-20 md:py-28">
      <FadeInSection className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="fc-h2 text-fc-brown-dark text-center mb-2">{t('crops_title')}</h2>
        <p className="text-center text-fc-green-dark font-medium mb-12">{t('crops_subtitle')}</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {crops.map((crop) => (
            <div
              key={crop.key}
              className="fc-card bg-fc-warm-white p-6 flex flex-col items-center text-center cursor-default"
            >
              <span className="text-4xl mb-3">{crop.emoji}</span>
              <span className="font-bold text-fc-brown-dark text-sm">{t(crop.key)}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-fc-brown-dark/70 text-sm max-w-2xl mx-auto leading-relaxed">
          {t('crops_benefits')}
        </p>
      </FadeInSection>
    </section>
  );
};

export default Crops;
