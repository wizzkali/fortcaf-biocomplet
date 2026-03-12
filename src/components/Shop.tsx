import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { CONFIG } from '@/config';
import FadeInSection from './FadeInSection';
import doypackImg from '@/assets/doypack-front.png';

const Shop: React.FC = () => {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const [localQty, setLocalQty] = useState(1);

  return (
    <section id="tienda" className="fc-section-cream py-20 md:py-28">
      <FadeInSection className="max-w-2xl mx-auto px-4 md:px-8">
        <h2 className="fc-h2 text-fc-brown-dark text-center mb-4">{t('shop_title')}</h2>
        <div className="text-center mb-12">
          <span className="fc-badge fc-badge-green">{t('shop_free_shipping')}</span>
        </div>

        {/* Product card */}
        <div className="fc-card bg-fc-warm-white p-6 md:p-8 max-w-md mx-auto">
          <img
            src={doypackImg}
            alt={t('shop_product_name')}
            className="w-48 mx-auto mb-6"
          />
          <h3 className="font-display font-bold text-xl text-fc-brown-dark mb-2">{t('shop_product_name')}</h3>
          <p className="text-fc-brown-dark/70 text-sm mb-4">{t('shop_product_desc')}</p>
          <p className="text-2xl font-bold text-fc-green-dark mb-4">{CONFIG.price_1kg.toFixed(2)} €</p>

          {/* Quantity selector */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={() => setLocalQty(Math.max(1, localQty - 1))}
              className="w-10 h-10 rounded-full border border-fc-beige flex items-center justify-center hover:bg-fc-beige transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="text-xl font-bold text-fc-brown-dark w-8 text-center">{localQty}</span>
            <button
              onClick={() => setLocalQty(localQty + 1)}
              className="w-10 h-10 rounded-full border border-fc-beige flex items-center justify-center hover:bg-fc-beige transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Shipping banner */}
          <div className={`text-center text-sm mb-4 py-2 rounded-lg ${localQty >= CONFIG.shipping_free_threshold ? 'bg-fc-green-dark/10 text-fc-green-dark animate-pulse' : 'bg-orange-50 text-orange-600'}`}>
            {localQty >= CONFIG.shipping_free_threshold ? t('shop_shipping_free') : t('shop_shipping_info')}
          </div>

          <button
            onClick={() => addToCart(localQty)}
            className="fc-btn-primary w-full"
          >
            {t('shop_add')}
          </button>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Shop;
