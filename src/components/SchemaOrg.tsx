import React from 'react';

const SchemaOrg: React.FC = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "BioComplet",
    "description": "Fertilizante orgánico NPK 6-4-4 certificado CAAE, fabricado en Lleida a partir de posos de café reciclados. Máximo rendimiento sostenible.",
    "image": "https://fortcafe.es/og-image.jpg",
    "brand": {
      "@type": "Brand",
      "name": "FortCafé"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://fortcafe.es",
      "priceCurrency": "EUR",
      "price": "9.90",
      "availability": "https://schema.org/InStock"
    },
    "mpn": "BC-1KG",
    "sku": "BC-1KG",
    "material": "Posos de café reciclados"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FortCafé",
    "url": "https://fortcafe.es",
    "logo": "https://fortcafe.es/favicon.png",
    "description": "Empresa de economía circular dedicada a la transformación de residuos de café en fertilizantes orgánicos certificados.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lleida",
      "addressRegion": "Cataluña",
      "addressCountry": "ES"
    }
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </>
  );
};

export default SchemaOrg;
