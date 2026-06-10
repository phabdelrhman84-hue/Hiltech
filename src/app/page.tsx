"use client";

import React, { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryBrowser from "@/components/CategoryBrowser";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Products from "@/components/Products";
import ProductDetail from "@/components/ProductDetail";
import Quality from "@/components/Quality";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <CartProvider>
      <div className="relative min-h-screen bg-[#070B14] overflow-hidden text-white selection:bg-orange-500 selection:text-white">
        <Header />
        <main>
          <Hero />
          <CategoryBrowser onSelectCategory={setSelectedCategory} />
          <Clients />
          <Services />
          <Products selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
          <ProductDetail />
          <Quality />
          <Stats />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
