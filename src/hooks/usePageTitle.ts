import { useEffect } from 'react';

const titles: Record<string, string> = {
  inicio:      'FortCafé BioComplet | Fertilizante Orgánico',
  tienda:      'Tienda | FortCafé BioComplet',
  agricultura: 'Para Agricultores | FortCafé',
  colabora:    'Colabora | FortCafé',
  contacto:    'Contacto | FortCafé',
};

export const usePageTitle = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (titles[id]) document.title = titles[id];
          }
        });
      },
      { threshold: 0.3 }
    );
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => { sections.forEach((s) => observer.unobserve(s)); observer.disconnect(); };
  }, []);
};
