import React, { createContext, useContext, useState, useCallback } from 'react';
import { CONFIG } from '@/config';

interface CartContextType {
  qty: number;
  setQty: (q: number) => void;
  addToCart: (amount: number) => void;
  shippingCost: number;
  subtotal: number;
  total: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [qty, setQty] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = useCallback((amount: number) => {
    setQty(prev => Math.max(0, prev + amount));
    setIsCartOpen(true);
  }, []);

  const shippingCost = qty >= CONFIG.shipping_free_threshold ? 0 : CONFIG.shipping_cost;
  const subtotal = qty * CONFIG.price_1kg;
  const total = subtotal + (qty > 0 ? shippingCost : 0);

  return (
    <CartContext.Provider value={{ qty, setQty, addToCart, shippingCost, subtotal, total, isCartOpen, setIsCartOpen, isCheckoutOpen, setIsCheckoutOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
};
