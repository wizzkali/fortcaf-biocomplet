import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CircularEconomy from '@/components/CircularEconomy';
import WaveSeparator from '@/components/WaveSeparator';
import Product from '@/components/Product';
import Shop from '@/components/Shop';
import Agriculture from '@/components/Agriculture';
import Crops from '@/components/Crops';
import HowToUse from '@/components/HowToUse';
import TechnicalSheet from '@/components/TechnicalSheet';
import Collaborate from '@/components/Collaborate';
import Territory from '@/components/Territory';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import CheckoutModal from '@/components/CheckoutModal';

const Index = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen">
          <Navbar />

          {/* === SECCIÓN 1: HERO === */}
          <Hero />
          <WaveSeparator color="#E8D5B0" />

          {/* === SECCIÓN 2: ECONOMÍA CIRCULAR === */}
          <CircularEconomy />
          <WaveSeparator color="#2C1A0E" />

          {/* === SECCIÓN 3: EL PRODUCTO === */}
          <Product />
          <WaveSeparator color="#E8D5B0" />

          {/* === SECCIÓN 4: TIENDA B2C === */}
          <Shop />
          <WaveSeparator color="#DDD0B8" />

          {/* === SECCIÓN 5: AGRICULTURA === */}
          <Agriculture />
          <WaveSeparator color="#E8D5B0" />

          {/* === SECCIÓN 6: CULTIVOS === */}
          <Crops />
          <WaveSeparator color="#3D6B35" />

          {/* === SECCIÓN 7: CÓMO USARLO === */}
          <HowToUse />
          <WaveSeparator color="#E8D5B0" />

          {/* === SECCIÓN 8: FICHA TÉCNICA === */}
          <TechnicalSheet />
          <WaveSeparator color="#2C1A0E" />

          {/* === SECCIÓN 9: COLABORA B2B === */}
          <Collaborate />
          <WaveSeparator color="#E8D5B0" />

          {/* === SECCIÓN 10: PROYECTO Y TERRITORIO === */}
          <Territory />
          <WaveSeparator color="#3D6B35" />

          {/* === SECCIÓN 11: CONTACTO === */}
          <Contact />
          <WaveSeparator color="#2C1A0E" />

          {/* === SECCIÓN 12: FOOTER === */}
          <Footer />

          {/* Overlays */}
          <CartDrawer />
          <CheckoutModal />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
};

export default Index;
