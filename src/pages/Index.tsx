import React, { lazy, Suspense } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CircularEconomy from '@/components/CircularEconomy';
import WaveSeparator from '@/components/WaveSeparator';
import Product from '@/components/Product';
import CartDrawer from '@/components/CartDrawer';
import CheckoutModal from '@/components/CheckoutModal';

const Shop         = lazy(() => import('@/components/Shop'));
const Agriculture  = lazy(() => import('@/components/Agriculture'));
const Crops        = lazy(() => import('@/components/Crops'));
const HowToUse     = lazy(() => import('@/components/HowToUse'));
const TechnicalSheet = lazy(() => import('@/components/TechnicalSheet'));
const Collaborate  = lazy(() => import('@/components/Collaborate'));
const Territory    = lazy(() => import('@/components/Territory'));
const Contact      = lazy(() => import('@/components/Contact'));
const Footer       = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen">
          <Navbar />

          <Hero />
          <WaveSeparator color="#E8D5B0" />

          <CircularEconomy />
          <WaveSeparator color="#2C1A0E" />

          <Product />
          <WaveSeparator color="#E8D5B0" />

          <Suspense fallback={<div />}>
            <Shop />
            <WaveSeparator color="#DDD0B8" />

            <Agriculture />
            <WaveSeparator color="#E8D5B0" />

            <Crops />
            <WaveSeparator color="#3D6B35" />

            <HowToUse />
            <WaveSeparator color="#E8D5B0" />

            <TechnicalSheet />
            <WaveSeparator color="#2C1A0E" />

            <Collaborate />
            <WaveSeparator color="#E8D5B0" />

            <Territory />
            <WaveSeparator color="#3D6B35" />

            <Contact />
            <WaveSeparator color="#2C1A0E" />

            <Footer />
          </Suspense>

          <CartDrawer />
          <CheckoutModal />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
};

export default Index;
