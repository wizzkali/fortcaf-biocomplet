import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONFIG } from '@/config';

interface B2BModalProps {
  open: boolean;
  onClose: () => void;
  defaultProfile: string;
}

const profileMap: Record<string, string> = {
  restaurant: 'b2b_profile_restaurant',
  store: 'b2b_profile_store',
  distributor: 'b2b_profile_distributor',
  farmer: 'b2b_profile_farmer',
};

const B2BModal: React.FC<B2BModalProps> = ({ open, onClose, defaultProfile }) => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    profile: '', name: '', phone: '', email: '', city: '', cups: '', seal: '', message: '',
  });

  useEffect(() => {
    if (open && defaultProfile) {
      const key = profileMap[defaultProfile] as any;
      setForm((f) => ({ ...f, profile: key ? t(key) : '' }));
    }
  }, [open, defaultProfile]);

  if (!open) return null;

  const profiles = [
    t('b2b_profile_restaurant' as any),
    t('b2b_profile_store' as any),
    t('b2b_profile_distributor' as any),
    t('b2b_profile_farmer' as any),
  ];

  const isRestaurant = form.profile === t('b2b_profile_restaurant' as any);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let body = `Perfil: ${form.profile}%0ANombre: ${form.name}%0ATeléfono: ${form.phone}%0AEmail: ${form.email}%0ACiudad: ${form.city}`;
    if (isRestaurant) {
      body += `%0ATazas/día: ${form.cups}%0ASello sostenibilidad: ${form.seal}`;
    }
    body += `%0AMensaje: ${form.message}`;
    window.open(`mailto:${CONFIG.emailColab}?subject=Colaboración FortCafé - ${form.profile}&body=${body}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-fc-brown-dark/70" />
      <div className="relative bg-fc-warm-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-fc-brown-dark/50 hover:text-fc-brown-dark">
          <X size={20} />
        </button>
        <h3 className="font-display font-bold text-xl text-fc-brown-dark mb-6">{t('b2b_modal_title')}</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <select required className="fc-input" value={form.profile} onChange={(e) => setForm({ ...form, profile: e.target.value })}>
            <option value="">{t('b2b_modal_profile')}</option>
            {profiles.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
          <input placeholder={t('b2b_modal_name')} required className="fc-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input placeholder={t('b2b_modal_phone')} required className="fc-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <input type="email" placeholder={t('b2b_modal_email')} required className="fc-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input placeholder={t('b2b_modal_city')} required className="fc-input" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />

          {isRestaurant && (
            <>
              <input placeholder={t('b2b_modal_cups')} className="fc-input" value={form.cups} onChange={(e) => setForm({ ...form, cups: e.target.value })} />
              <div>
                <label className="text-fc-brown-dark text-sm mb-2 block">{t('b2b_modal_seal')}</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="seal" value="yes" onChange={() => setForm({ ...form, seal: 'Sí' })} /> {t('b2b_modal_seal_yes')}
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="seal" value="no" onChange={() => setForm({ ...form, seal: 'No' })} /> {t('b2b_modal_seal_no')}
                  </label>
                </div>
              </div>
            </>
          )}

          <textarea placeholder={t('b2b_modal_message')} rows={3} className="fc-input resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <p className="text-fc-brown-dark/60 text-xs italic">{t('b2b_modal_note')}</p>
          <button type="submit" className="fc-btn-primary w-full">{t('b2b_modal_submit')}</button>
        </form>
      </div>
    </div>
  );
};

export default B2BModal;
