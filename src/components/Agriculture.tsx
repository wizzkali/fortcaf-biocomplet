import React, { useState } from 'react';
import { Package, PackagePlus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';
import AgriModal from './AgriModal';

const Agriculture: React.FC = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  const cards = [
    {
      icon: Package,
      badge: t('agri_format_agricultural'),
      title: t('agri_bigbag500_title'),
      desc: t('agri_bigbag500_desc'),
      price: t('agri_bigbag500_price'),
    },
    {
      icon: PackagePlus,
      badge: t('agri_format_professional'),
      title: t('agri_bigbag1000_title'),
      desc: t('agri_bigbag1000_desc'),
      price: t('agri_bigbag1000_price'),
    },
  ];

  return (
    <section id="agricultura" className="fc-section-beige py-20 md:py-28">
      <FadeInSection className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="fc-h2 text-fc-brown-dark text-center mb-2">{t('agri_title')}</h2>
        <p className="text-center text-fc-brown-dark/70 mb-12">{t('agri_subtitle')}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {cards.map((card) => (
            <div key={card.title} className="fc-card bg-fc-warm-white p-8 flex flex-col items-center text-center">
              <card.icon size={48} className="text-fc-brown-light mb-4" />
              <span className="fc-badge fc-badge-brown mb-3">{card.badge}</span>
              <h3 className="font-display font-bold text-xl text-fc-brown-dark mb-3">{card.title}</h3>
              <p className="text-fc-brown-dark/70 text-sm mb-4 leading-relaxed">{card.desc}</p>
              <p className="italic text-fc-green-dark text-sm mb-6">{card.price}</p>
              <button onClick={() => setModalOpen(true)} className="fc-btn-primary">
                {t('agri_cta')}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center italic text-fc-brown-dark/60 text-sm">{t('agri_footer_note')}</p>
      </FadeInSection>

      <AgriModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Agriculture;
