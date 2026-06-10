"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  icon: string;
}

interface CartContextType {
  cartItems: ProductItem[];
  addToCart: (item: ProductItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("hiltech_quote_cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart items", e);
      }
    }
  }, []);

  // Save cart to localStorage
  const saveCart = (items: ProductItem[]) => {
    setCartItems(items);
    localStorage.setItem("hiltech_quote_cart", JSON.stringify(items));
  };

  const addToCart = (item: ProductItem) => {
    if (cartItems.some((i) => i.id === item.id)) {
      // Avoid duplicate adding, or we can just notify
      return;
    }
    const newItems = [...cartItems, item];
    saveCart(newItems);
  };

  const removeFromCart = (id: string) => {
    const newItems = cartItems.filter((item) => item.id !== id);
    saveCart(newItems);
  };

  const clearCart = () => {
    saveCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        isCartOpen,
        setCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
