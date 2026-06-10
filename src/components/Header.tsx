"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cartItems, setCartOpen, isCartOpen, removeFromCart, clearCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/25 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center font-black text-white text-lg">
              H
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-wide text-white">HILTECH</h1>
              <p className="text-xs text-orange-300 -mt-1 font-bold">STRONG & CONNECTED</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-7 text-sm text-gray-300">
            <a href="#services" className="hover:text-orange-300 transition-colors">الخدمات</a>
            <a href="#products" className="hover:text-orange-300 transition-colors">المنتجات</a>
            <a href="#product-page" className="hover:text-orange-300 transition-colors">صفحة المنتج</a>
            <a href="#quality" className="hover:text-orange-300 transition-colors">الاختبارات</a>
            <a href="#clients" className="hover:text-orange-300 transition-colors">العملاء</a>
            <a href="#contact" className="hover:text-orange-300 transition-colors">تواصل معنا</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="relative border border-white/10 bg-white/5 hover:border-orange-500/40 hover:bg-white/10 transition-all px-4 py-2 rounded-xl font-medium text-sm text-white flex items-center gap-2"
            >
              <span>سلة العروض</span>
              {cartItems.length > 0 && (
                <span className="bg-orange-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartItems.length}
                </span>
              )}
            </button>
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-400 text-white transition-all px-5 py-2 rounded-xl font-bold shadow-lg shadow-orange-500/20 text-sm hidden sm:block"
            >
              اطلب عرض سعر
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#070B14]/95 backdrop-blur-2xl py-4 px-6 absolute w-full left-0 transition-all duration-300">
            <nav className="flex flex-col gap-4 text-gray-300">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-orange-300 transition-colors py-2 border-b border-white/5"
              >
                الخدمات
              </a>
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-orange-300 transition-colors py-2 border-b border-white/5"
              >
                المنتجات
              </a>
              <a
                href="#product-page"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-orange-300 transition-colors py-2 border-b border-white/5"
              >
                صفحة المنتج
              </a>
              <a
                href="#quality"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-orange-300 transition-colors py-2 border-b border-white/5"
              >
                الاختبارات
              </a>
              <a
                href="#clients"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-orange-300 transition-colors py-2 border-b border-white/5"
              >
                العملاء
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-orange-300 transition-colors py-2"
              >
                تواصل معنا
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-orange-500 text-center text-white py-3 rounded-xl font-bold block mt-2"
              >
                اطلب عرض سعر
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Cart Drawer Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setCartOpen(false)}
          ></div>

          {/* Drawer content */}
          <div className="relative w-full max-w-md bg-[#0D1321] border-l border-white/10 text-white h-full flex flex-col shadow-2xl p-6 z-10 animate-slide-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛒</span>
                <h2 className="text-xl font-bold">سلة عروض الأسعار</h2>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              {cartItems.length === 0 ? (
                <div className="text-center py-20 text-gray-500">
                  <div className="text-5xl mb-4">🗅</div>
                  <p>السلة فارغة حالياً</p>
                  <p className="text-sm mt-1">تصفح المنتجات وأضف ما تحتاجه لطلب عرض سعر</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-sm">{item.name}</h4>
                        <span className="text-xs text-orange-300">{item.category}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1.5 text-gray-400 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-colors"
                    >
                      حذف
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-white/10 pt-6 mt-6 space-y-4">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>إجمالي المنتجات المطلوبة</span>
                  <span className="text-white font-bold">{cartItems.length} منتجات</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="#contact"
                    onClick={() => setCartOpen(false)}
                    className="bg-orange-500 hover:bg-orange-400 transition-all text-center py-3.5 rounded-xl font-bold shadow-lg shadow-orange-500/20 text-sm text-white"
                  >
                    إرسال الطلب للمبيعات
                  </a>
                  <button
                    onClick={clearCart}
                    className="border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-500/20 text-center py-3.5 rounded-xl font-medium text-sm text-gray-300 hover:text-red-400 transition-colors"
                  >
                    تفريغ السلة
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
