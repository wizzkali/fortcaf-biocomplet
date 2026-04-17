// ⚠️ CONFIGURACIÓN CENTRAL — valores en .env (no editar aquí directamente)
export const CONFIG = {
  product_name:            'BioComplet',
  product_description:     'Fertilizante Orgánico NPK 6-4-4 certificado CAAE',
  email:                   import.meta.env.VITE_EMAIL                   ?? 'info@fortcafe.es',
  emailColab:              import.meta.env.VITE_EMAIL                   ?? 'info@fortcafe.es',
  whatsapp:                import.meta.env.VITE_WHATSAPP                ?? '34655248472',
  price_1kg:               Number(import.meta.env.VITE_PRICE_1KG)       || 7.95,
  shipping_cost:           Number(import.meta.env.VITE_SHIPPING_COST)   || 5.90,
  shipping_free_threshold: Number(import.meta.env.VITE_SHIPPING_FREE_THRESHOLD) || 5,
};

