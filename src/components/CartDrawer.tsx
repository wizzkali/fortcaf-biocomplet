import React from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { CONFIG } from '@/config';

const CartDrawer: React.FC = () => {
  const { t } = useLanguage();
  const { qty, setQty, shippingCost, subtotal, total, isCartOpen, setIsCartOpen, setIsCheckoutOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-fc-brown-dark/60" onClick={() => setIsCartOpen(false)} />
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-fc-warm-white p-6 flex flex-col shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display font-bold text-xl text-fc-brown-dark">{t('cart_title')}</h3>
          <button onClick={() => setIsCartOpen(false)} className="text-fc-brown-dark/50 hover:text-fc-brown-dark">
            <X size={20} />
          </button>
        </div>

        {qty === 0 ? (
          <p className="text-fc-brown-dark/60 text-center py-12">{t('cart_empty')}</p>
        ) : (
          <>
            <div className="flex-1">
              <div className="flex items-center justify-between py-4 border-b border-fc-beige">
                <div>
                  <p className="font-bold text-fc-brown-dark text-sm">{t('shop_product_name')}</p>
                  <p className="text-fc-brown-dark/60 text-xs">{CONFIG.price_1kg.toFixed(2)} € / ud</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => setQty(Math.max(0, qty - 1))} className="w-8 h-8 rounded-full border border-fc-beige flex items-center justify-center">
                    <Minus size={14} />
                  </button>
                  <span className="font-bold text-fc-brown-dark w-6 text-center">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="w-8 h-8 rounded-full border border-fc-beige flex items-center justify-center">
                    <Plus size={14} />
                  </button>
                </div>
                <span className="font-bold text-fc-brown-dark text-sm w-16 text-right">
                  {(qty * CONFIG.price_1kg).toFixed(2)} €
                </span>
              </div>
            </div>

            <div className="border-t border-fc-beige pt-4 space-y-2">
              <div className="flex justify-between text-sm text-fc-brown-dark">
                <span>{t('cart_subtotal')}</span>
                <span>{subtotal.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-sm text-fc-brown-dark">
                <span>{t('cart_shipping')}</span>
                <span className={shippingCost === 0 ? 'text-fc-green-dark font-bold' : ''}>
                  {shippingCost === 0 ? t('cart_free') : `${shippingCost.toFixed(2)} €`}
                </span>
              </div>
              <div className="flex justify-between font-bold text-lg text-fc-brown-dark pt-2 border-t border-fc-beige">
                <span>{t('cart_total')}</span>
                <span>{total.toFixed(2)} €</span>
              </div>
              <button
                onClick={() => { setIsCartOpen(false); setIsCheckoutOpen(true); }}
                className="fc-btn-primary w-full mt-4"
              >
                {t('cart_checkout')}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
