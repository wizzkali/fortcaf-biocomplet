import React, { useState } from 'react';
import { Coffee, Store, Truck, Tractor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';
import B2BModal from './B2BModal';

const Collaborate: React.FC = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProfile, setModalProfile] = useState('');

  const openModal = (profile: string) => {
    setModalProfile(profile);
    setModalOpen(true);
  };

  const cards = [
    {
      icon: Coffee,
      badge: t('colab_restaurant_badge'),
      h3: t('colab_restaurant_h3'),
      text: t('colab_restaurant_text'),
      cta: t('colab_cta_interest'),
      profile: 'restaurant',
    },
    {
      icon: Store,
      badge: t('colab_store_badge'),
      h3: t('colab_store_h3'),
      text: t('colab_store_text'),
      cta: t('colab_cta_interest'),
      profile: 'store',
    },
    {
      icon: Truck,
      badge: t('colab_distributor_badge'),
      h3: t('colab_distributor_h3'),
      text: t('colab_distributor_text'),
      cta: t('colab_cta_interest'),
      profile: 'distributor',
    },
    {
      icon: Tractor,
      badge: t('colab_farmer_badge'),
      h3: t('colab_farmer_h3'),
      text: t('colab_farmer_text'),
      cta: t('colab_cta_contact'),
      profile: 'farmer',
    },
  ];

  return (
    <section id="colabora" className="fc-section-dark py-20 md:py-28">
      <FadeInSection className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="fc-h2 text-fc-warm-white text-center mb-2">{t('colab_title')}</h2>
        <p className="text-center text-fc-green-light mb-12">{t('colab_subtitle')}</p>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div key={card.profile} className="fc-card bg-fc-brown-mid/40 p-8 border border-fc-brown-mid/60">
              <div className="flex items-center gap-3 mb-3">
                <card.icon size={24} className="text-fc-green-light" />
                <span className="text-2xl">{card.emoji}</span>
              </div>
              <span className="fc-badge fc-badge-green mb-3 inline-block">{card.badge}</span>
              <h3 className="font-display font-bold text-lg text-fc-warm-white mb-3">{card.h3}</h3>
              <p className="text-fc-warm-white/70 text-sm leading-relaxed mb-6">{card.text}</p>
              <button onClick={() => openModal(card.profile)} className="fc-btn-primary">
                {card.cta}
              </button>
            </div>
          ))}
        </div>
      </FadeInSection>

      <B2BModal open={modalOpen} onClose={() => setModalOpen(false)} defaultProfile={modalProfile} />
    </section>
  );
};

export default Collaborate;
