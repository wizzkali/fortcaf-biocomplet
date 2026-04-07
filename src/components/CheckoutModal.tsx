import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { CONFIG } from '@/config';

const CheckoutModal: React.FC = () => {
  const { t } = useLanguage();
  const { qty, shippingCost, subtotal, total, isCheckoutOpen, setIsCheckoutOpen } = useCart();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', postal: '', city: '',
  });

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `PEDIDO FORTCAFÉ%0A%0AProducto: FortCafé BioComplet 1kg%0ACantidad: ${qty}%0ASubtotal: ${subtotal.toFixed(2)}€%0AEnvío: ${shippingCost === 0 ? 'GRATIS' : shippingCost.toFixed(2) + '€'}%0ATotal: ${total.toFixed(2)}€%0A%0ADATOS DEL CLIENTE%0ANombre: ${form.name}%0AEmail: ${form.email}%0ATeléfono: ${form.phone}%0ADirección: ${form.address}%0ACP: ${form.postal}%0ACiudad: ${form.city}`;
    window.open(`mailto:${CONFIG.email}?subject=Pedido FortCafé - ${qty} bolsas&body=${body}`);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setIsCheckoutOpen(false)}>
      <div className="absolute inset-0 bg-fc-brown-dark/70 backdrop-blur-sm" />
      <div
        className="relative fc-modal-glass rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={() => setIsCheckoutOpen(false)} className="absolute top-4 right-4 text-fc-brown-dark/50 hover:text-fc-brown-dark transition-colors duration-300">
          <X size={20} />
        </button>
        <h3 className="font-display font-bold text-xl text-fc-brown-dark mb-4">{t('checkout_title')}</h3>

        {/* Order summary */}
        <div className="bg-fc-cream/60 backdrop-blur-sm rounded-xl p-4 mb-6 text-sm border border-fc-beige/30">
          <div className="flex justify-between mb-1">
            <span>{t('shop_product_name')} × {qty}</span>
            <span>{subtotal.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>{t('cart_shipping')}</span>
            <span>{shippingCost === 0 ? t('cart_free') : `${shippingCost.toFixed(2)} €`}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t border-fc-beige pt-2 mt-2">
            <span>{t('cart_total')}</span>
            <span>{total.toFixed(2)} €</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input placeholder={t('checkout_name')} required className="fc-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input type="email" placeholder={t('checkout_email')} required className="fc-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input placeholder={t('checkout_phone')} required className="fc-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <input placeholder={t('checkout_address')} required className="fc-input" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
          <div className="grid grid-cols-2 gap-3">
            <input placeholder={t('checkout_postal')} required className="fc-input" value={form.postal} onChange={(e) => setForm({ ...form, postal: e.target.value })} />
            <input placeholder={t('checkout_city')} required className="fc-input" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
          </div>
          <p className="text-fc-brown-dark/60 text-xs italic">{t('checkout_note')}</p>
          <button type="submit" className="fc-btn-dark w-full">{t('checkout_submit')}</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
