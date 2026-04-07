import { useEffect } from 'react';

const meta: Record<string, { title: string; description: string }> = {
  inicio: {
    title: 'BioComplet | Fertilizante Orgánico Premium',
    description: 'BioComplet de FortCafé: el fertilizante orgánico NPK 6-4-4 certificado CAAE, fabricado en Lleida a partir de posos de café reciclados.'
  },
  tienda: {
    title: 'Tienda BioComplet | Comprar Fertilizante Orgánico',
    description: 'Adquiere BioComplet online. Fertilizante orgánico premium para huertos, jardines y agricultura profesional en diversos formatos.'
  },
  agricultura: {
    title: 'Agricultura Profesional | BioComplet FortCafé',
    description: 'Soluciones de fertilización orgánica a gran escala. Formatos BigBag de 500kg y 1000kg para maximizar el rendimiento agrícola.'
  },
  colabora: {
    title: 'Economía Circular | Colabora con FortCafé',
    description: 'Únete a nuestro modelo de economía circular. Transformamos los residuos de café en vida para el campo.'
  },
  contacto: {
    title: 'Contacto | FortCafé BioComplet',
    description: '¿Deseas mejorar la salud de tu suelo? Contacta con nosotros para asesoramiento sobre fertilización orgánica con BioComplet.'
  },
};

export const usePageMeta = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const data = meta[id];
            if (data) {
              document.title = data.title;
              const metaDesc = document.querySelector('meta[name="description"]');
              if (metaDesc) {
                metaDesc.setAttribute('content', data.description);
              }
              // Update canonical dynamically (optional but good for SEO)
              let canonical = document.querySelector('link[rel="canonical"]');
              if (canonical) {
                const sectionUrl = id === 'inicio' ? 'https://fortcafe.es' : `https://fortcafe.es/#${id}`;
                canonical.setAttribute('href', sectionUrl);
              }
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);
};
