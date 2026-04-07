import React, { lazy, Suspense } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import { usePageMeta } from '@/hooks/usePageMeta';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import SchemaOrg from '@/components/SchemaOrg';

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
  usePageMeta();

  return (
    <LanguageProvider>
      <SchemaOrg />
      <ErrorBoundary>
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
            {/* Bento-style grid section */}
            <section className="fc-section-cream py-16 md:py-24">
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                  {/* Shop - takes full width on first row */}
                  <div className="md:col-span-2 rounded-3xl overflow-hidden">
                    <Shop />
                  </div>

                  {/* Agriculture - full width */}
                  <div className="md:col-span-2 rounded-3xl overflow-hidden">
                    <Agriculture />
                  </div>

                  {/* Crops + HowToUse side by side on desktop */}
                  <div className="rounded-3xl overflow-hidden">
                    <Crops />
                  </div>
                  <div className="rounded-3xl overflow-hidden">
                    <HowToUse />
                  </div>

                  {/* Technical sheet - single column */}
                  <div className="rounded-3xl overflow-hidden">
                    <TechnicalSheet />
                  </div>

                  {/* Territory - single column */}
                  <div className="rounded-3xl overflow-hidden">
                    <Territory />
                  </div>
                </div>
              </div>
            </section>

            <WaveSeparator color="#2C1A0E" />

            <Collaborate />
            <WaveSeparator color="#E8D5B0" />

            <Contact />
            <WaveSeparator color="#2C1A0E" />

            <Footer />
          </Suspense>

          <CartDrawer />
          <CheckoutModal />
        </div>
      </CartProvider>
      </ErrorBoundary>
    </LanguageProvider>
  );
};

export default Index;
