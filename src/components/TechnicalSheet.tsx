import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';

const TechnicalSheet: React.FC = () => {
  const { t } = useLanguage();

  const data = [
    { labelKey: 'tech_param_n_total',  value: '6 %' },
    { labelKey: 'tech_param_n_organic', value: '5 %' },
    { labelKey: 'tech_param_p',         value: '4 %' },
    { labelKey: 'tech_param_k',         value: '4 %' },
    { labelKey: 'tech_param_mo',        value: '58 %' },
    { labelKey: 'tech_param_co',        value: '33,6 %' },
    { labelKey: 'tech_param_hum',       value: '14 %' },
    { labelKey: 'tech_param_cn',        value: '6,7' },
    { labelKey: 'tech_param_ph',        value: '5 – 7' },
    { labelKey: 'tech_param_metals',    value: 'A' },
  ] as const;

  return (
    <section className="fc-section-cream py-20 md:py-28">
      <FadeInSection className="max-w-xl mx-auto px-4 md:px-8">
        <h2 className="fc-h2 text-fc-brown-dark text-center mb-12">{t('tech_title')}</h2>

        <div className="rounded-2xl overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-fc-brown-dark text-fc-warm-white">
                <th className="text-left px-6 py-3 fc-label">{t('tech_title')}</th>
                <th className="text-right px-6 py-3 fc-label">Valor</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={row.labelKey} className={i % 2 === 0 ? 'bg-fc-warm-white' : 'bg-fc-beige/50'}>
                  <td className="px-6 py-3 text-fc-brown-dark">{t(row.labelKey)}</td>
                  <td className="px-6 py-3 text-right font-bold text-fc-green-dark">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-fc-warm-white rounded-xl p-6 border-l-4 border-fc-green-dark" style={{ borderRadius: '0' }}>
          <p className="font-bold text-fc-brown-dark text-sm mb-1">{t('tech_biocomplet_title')}</p>
          <p className="text-fc-brown-dark/70 text-sm">{t('tech_biocomplet_reg')}</p>
          <p className="text-fc-brown-dark/70 text-sm">{t('tech_biocomplet_raw')}</p>
        </div>
      </FadeInSection>
    </section>
  );
};

export default TechnicalSheet;
