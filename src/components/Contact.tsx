import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONFIG } from '@/config';
import FadeInSection from './FadeInSection';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const FORMSPREE = 'https://formspree.io/f/TU_FORM_ID';
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, message: form.message }),
      });
      if (res.ok) {
        console.log('FortCafé: formulario enviado OK');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        console.error('FortCafé: Formspree error', res.status);
      }
    } catch (err) {
      console.error('FortCafé: error de red', err);
    }
  };

  return (
    <section id="contacto" className="fc-section-green py-20 md:py-28">
      <FadeInSection className="max-w-xl mx-auto px-4 md:px-8">
        <h2 className="fc-h2 text-fc-warm-white text-center mb-2">{t('contact_title')}</h2>
        <p className="text-center text-fc-warm-white/80 mb-10">{t('contact_subtitle')}</p>

        <form onSubmit={handleSubmit} className="bg-fc-warm-white rounded-2xl p-8 space-y-4">
          <input
            type="text"
            placeholder={t('contact_name')}
            required
            className="fc-input"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder={t('contact_email')}
            required
            className="fc-input"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="tel"
            placeholder={t('contact_phone')}
            className="fc-input"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <textarea
            placeholder={t('contact_message')}
            required
            rows={4}
            className="fc-input resize-none"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button type="submit" className="fc-btn-dark w-full">
            {t('contact_cta')}
          </button>
        </form>

        <div className="text-center mt-8">
          <a
            href={`https://wa.me/${CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-fc-warm-white hover:text-fc-warm-white/80 transition-colors"
          >
            <MessageCircle size={20} />
            <span>{t('contact_whatsapp')}</span>
          </a>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Contact;
