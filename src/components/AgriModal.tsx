import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONFIG } from '@/config';

interface AgriModalProps {
  open: boolean;
  onClose: () => void;
}

const AgriModal: React.FC<AgriModalProps> = ({ open, onClose }) => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: '', phone: '', email: '', crop: '', format: '', hectares: '', message: '',
  });

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Nombre: ${form.name}%0ATeléfono: ${form.phone}%0AEmail: ${form.email}%0ACultivo: ${form.crop}%0AFormato: ${form.format}%0AHectáreas: ${form.hectares}%0AMensaje: ${form.message}`;
    window.open(`mailto:${CONFIG.email}?subject=Presupuesto Agrícola FortCafé&body=${body}`);
    onClose();
  };

  const crops = [
    t('agri_crop_almond'), t('agri_crop_olive'), t('agri_crop_vine'),
    t('agri_crop_fruit'), t('agri_crop_garden'), t('agri_crop_other'),
  ];
  const formats = [t('agri_format_25'), t('agri_format_500'), t('agri_format_1000')];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-fc-brown-dark/70" />
      <div className="relative bg-fc-warm-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-fc-brown-dark/50 hover:text-fc-brown-dark">
          <X size={20} />
        </button>
        <h3 className="font-display font-bold text-xl text-fc-brown-dark mb-6">{t('agri_modal_title')}</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input placeholder={t('agri_modal_name')} required className="fc-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input placeholder={t('agri_modal_phone')} required className="fc-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <input type="email" placeholder={t('agri_modal_email')} required className="fc-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <select required className="fc-input" value={form.crop} onChange={(e) => setForm({ ...form, crop: e.target.value })}>
            <option value="">{t('agri_modal_crop')}</option>
            {crops.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select required className="fc-input" value={form.format} onChange={(e) => setForm({ ...form, format: e.target.value })}>
            <option value="">{t('agri_modal_format')}</option>
            {formats.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
          <input placeholder={t('agri_modal_hectares')} className="fc-input" value={form.hectares} onChange={(e) => setForm({ ...form, hectares: e.target.value })} />
          <textarea placeholder={t('agri_modal_message')} rows={3} className="fc-input resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <p className="text-fc-brown-dark/60 text-xs italic">{t('agri_modal_note')}</p>
          <button type="submit" className="fc-btn-primary w-full">{t('agri_modal_submit')}</button>
        </form>
      </div>
    </div>
  );
};

export default AgriModal;
