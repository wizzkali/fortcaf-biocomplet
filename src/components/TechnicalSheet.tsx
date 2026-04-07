import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import FadeInSection from './FadeInSection';

const data = [
  { label: 'Nitrógeno (N) total', value: '6 %' },
  { label: 'Nitrógeno (N) orgánico', value: '5 %' },
  { label: 'Pentóxido de fósforo (P₂O₅)', value: '4 %' },
  { label: 'Óxido de potasio (K₂O)', value: '4 %' },
  { label: 'Materia orgánica', value: '58 %' },
  { label: 'Carbono orgánico', value: '33,6 %' },
  { label: 'Humedad máx.', value: '14 %' },
  { label: 'Relación C/N', value: '6,7' },
  { label: 'pH', value: '5 – 7' },
  { label: 'Metales pesados', value: 'A' },
];

const TechnicalSheet: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="fc-section-cream py-20 md:py-28">
      <FadeInSection className="max-w-xl mx-auto px-4 md:px-8">
        <h2 className="fc-h2 text-fc-brown-dark text-center mb-12">{t('tech_title')}</h2>

        <div className="rounded-2xl overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-fc-brown-dark text-fc-warm-white">
                <th className="text-left px-6 py-3 fc-label">Parámetro</th>
                <th className="text-right px-6 py-3 fc-label">Valor</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-fc-warm-white' : 'bg-fc-beige/50'}>
                  <td className="px-6 py-3 text-fc-brown-dark">{row.label}</td>
                  <td className="px-6 py-3 text-right font-bold text-fc-green-dark">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Registry block */}
        <div className="bg-fc-warm-white rounded-xl p-6 border-l-4 border-fc-green-dark">
          <p className="font-bold text-fc-brown-dark text-sm mb-1">{t('tech_biocomplet_title')}</p>
          <p className="text-fc-brown-dark/70 text-sm">{t('tech_biocomplet_reg')}</p>
          <p className="text-fc-brown-dark/70 text-sm">{t('tech_biocomplet_raw')}</p>
        </div>
      </FadeInSection>
    </section>
  );
};

export default TechnicalSheet;
