import React from 'react';
import { Shovel, TreeDeciduous, Flower2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';

const months = ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
const monthColors = [
  '#1A1A1A', '#1A1A1A', '#1A1A1A', // E F M - ideal
  '#5A8F4A', '#5A8F4A',            // A M - posible
  '#C0392B', '#C0392B', '#C0392B', // J J A - no aconsejado
  '#5A8F4A', '#5A8F4A',            // S O - posible
  '#C0392B', '#C0392B',            // N D - no aconsejado
];

const HowToUse: React.FC = () => {
  const { t } = useLanguage();

  const columns = [
    {
      icon: Shovel,
      title: t('howto_planting'),
      dose: t('howto_planting_dose'),
      instruction: t('howto_planting_inst'),
    },
    {
      icon: TreeDeciduous,
      title: t('howto_fruiting'),
      dose: t('howto_fruiting_dose'),
      instruction: t('howto_fruiting_inst'),
    },
    {
      icon: Flower2,
      title: t('howto_flowering'),
      dose: t('howto_flowering_dose'),
      instruction: t('howto_flowering_inst'),
    },
  ];

  return (
    <section className="fc-section-green py-20 md:py-28">
      <FadeInSection className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="fc-h2 text-fc-warm-white text-center mb-16">{t('howto_title')}</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {columns.map((col) => (
            <div key={col.title} className="text-center">
              <col.icon size={40} className="text-fc-warm-white mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl text-fc-warm-white mb-3">{col.title}</h3>
              <p className="fc-label text-fc-warm-white/80 mb-2">{t('howto_dose')}</p>
              <p className="text-fc-warm-white font-bold text-lg mb-4">{col.dose}</p>
              <p className="text-fc-warm-white/80 text-sm leading-relaxed">{col.instruction}</p>
            </div>
          ))}
        </div>

        {/* Calendar */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {months.map((m, i) => (
            <span
              key={i}
              className="w-10 h-10 rounded-full flex items-center justify-center text-fc-warm-white text-xs font-bold"
              style={{ backgroundColor: monthColors[i] }}
            >
              {m}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-6 text-sm text-fc-warm-white/80">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#1A1A1A' }} />
            {t('howto_ideal')}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#5A8F4A' }} />
            {t('howto_possible')}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#C0392B' }} />
            {t('howto_not_recommended')}
          </span>
        </div>
      </FadeInSection>
    </section>
  );
};

export default HowToUse;
