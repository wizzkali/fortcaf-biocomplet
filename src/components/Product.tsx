import React from 'react';
import { Leaf, RefreshCw, Shield, CircleOff } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';
import doypackImg from '@/assets/doypack-fortcafe.jpg';

const Product: React.FC = () => {
  const { t } = useLanguage();

  const attrs = [
    { icon: Leaf, label: t('product_organic') },
    { icon: RefreshCw, label: t('product_circular') },
    { icon: Shield, label: t('product_ecoviable') },
    { icon: CircleOff, label: t('product_zero') },
  ];

  return (
    <section id="producto" className="fc-section-dark py-20 md:py-28">
      <FadeInSection className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-[45%] flex justify-center">
            <img
              src={doypackImg}
              alt="FortCafé BioComplet"
              className="w-56 md:w-72"
              style={{ filter: 'drop-shadow(0 0 40px rgba(90,143,74,0.3))' }}
            />
          </div>

          {/* Text */}
          <div className="md:w-[55%]">
            <h2 className="fc-h2 text-fc-warm-white mb-6">{t('product_title')}</h2>
            <p className="text-fc-warm-white/80 text-lg leading-relaxed mb-8">{t('product_desc')}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {attrs.map((a) => (
                <div key={a.label} className="flex items-center gap-3">
                  <a.icon size={20} className="text-fc-green-light flex-shrink-0" />
                  <span className="fc-label text-fc-warm-white">{a.label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-fc-warm-white/60 text-sm">
              <span className="fc-badge fc-badge-brown">CAAE</span>
              <span className="fc-badge fc-badge-brown">defeder</span>
              <span>{t('product_cert')}</span>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Product;
