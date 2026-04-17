import React from 'react';
import { Leaf, RefreshCw, Shield, CircleOff } from 'lucide-react';
import caaeLogoImg from '@/assets/caae-logo.png';
import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';
import doypackImg from '@/assets/doypack-shop-nobg.png';

const Product: React.FC = () => {
  const { t } = useLanguage();

  const attrs = [
    { icon: Leaf, label: t('product_organic'), position: 'top-left' },
    { icon: RefreshCw, label: t('product_circular'), position: 'top-right' },
    { icon: Shield, label: t('product_ecoviable'), position: 'bottom-left' },
    { icon: CircleOff, label: t('product_zero'), position: 'bottom-right' },
  ];

  return (
    <section id="producto" className="fc-section-dark py-20 md:py-28">
      <FadeInSection className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="fc-h2 text-fc-warm-white text-center mb-4">{t('product_title')}</h2>
        <p className="text-fc-warm-white/70 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          {t('product_desc')}
        </p>

        {/* Product with attributes around it */}
        <div className="relative flex items-center justify-center py-8">
          {/* Attributes grid around the product */}
          <div className="grid grid-cols-3 items-center gap-4 md:gap-8 w-full max-w-2xl">
            {/* Left column attributes */}
            <div className="flex flex-col gap-12 items-end">
              <div className="flex flex-col items-center text-center">
                <Leaf size={28} className="text-fc-green-light mb-2" />
                <span className="fc-label text-fc-warm-white text-[11px]">{t('product_organic')}</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield size={28} className="text-fc-green-light mb-2" />
                <span className="fc-label text-fc-warm-white text-[11px]">{t('product_ecoviable')}</span>
              </div>
            </div>

            {/* Center product image */}
            <div className="flex justify-center">
              <img loading="lazy"
                src={doypackImg}
                alt="FortCafé BioComplet 1kg"
                className="w-40 md:w-56"
                style={{ filter: 'drop-shadow(0 0 40px rgba(90,143,74,0.3))' }}
              />
            </div>

            {/* Right column attributes */}
            <div className="flex flex-col gap-12 items-start">
              <div className="flex flex-col items-center text-center">
                <RefreshCw size={28} className="text-fc-green-light mb-2" />
                <span className="fc-label text-fc-warm-white text-[11px]">{t('product_circular')}</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <CircleOff size={28} className="text-fc-green-light mb-2" />
                <span className="fc-label text-fc-warm-white text-[11px]">{t('product_zero')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <img loading="lazy" src={caaeLogoImg} alt="CAAE Certificación Ecológica" className="h-14 w-auto" />
          <div className="text-fc-warm-white/70 text-sm">
            <span className="block font-semibold text-fc-warm-white">Certificación Ecológica</span>
            <span>{t('product_cert')}</span>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Product;
