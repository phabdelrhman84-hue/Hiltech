"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Network, ClipboardList, Menu, X, Trash2, ArrowLeft, PhoneCall } from "lucide-react";

export default function Header() {
  const { cartItems, setCartOpen, isCartOpen, removeFromCart, clearCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3 select-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/10">
              <Network className="w-5.5 h-5.5" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-wider text-slate-100 uppercase">HILTECH</h1>
              <p className="text-[10px] text-amber-500 font-bold uppercase tracking-widest -mt-0.5">Strong & Connected</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 text-sm font-semibold text-slate-400">
            <a href="#services" className="hover:text-amber-500 transition-colors">الخدمات والحلول</a>
            <a href="#products" className="hover:text-amber-500 transition-colors">المنتجات</a>
            <a href="#product-page" className="hover:text-amber-500 transition-colors">المواصفات الفنية</a>
            <a href="#quality" className="hover:text-amber-500 transition-colors">أجهزة الاختبار</a>
            <a href="#clients" className="hover:text-amber-500 transition-colors">الشركاء</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">تواصل معنا</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="relative border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-700 transition-all px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <ClipboardList className="w-4 h-4 text-amber-500" />
              <span>طلب التسعير</span>
              {cartItems.length > 0 && (
                <span className="bg-amber-500 text-slate-950 text-[10px] font-black w-5 h-5 rounded-lg flex items-center justify-center transition-all">
                  {cartItems.length}
                </span>
              )}
            </button>
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 transition-all px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 text-center hidden md:flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>اطلب مقايسة</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-slate-200 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-900 bg-slate-950/95 backdrop-blur-2xl py-4 px-6 absolute w-full left-0 transition-all duration-300">
            <nav className="flex flex-col gap-3 text-slate-400 font-semibold">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-500 transition-colors py-2.5 border-b border-slate-900"
              >
                الخدمات والحلول
              </a>
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-500 transition-colors py-2.5 border-b border-slate-900"
              >
                المنتجات
              </a>
              <a
                href="#product-page"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-500 transition-colors py-2.5 border-b border-slate-900"
              >
                المواصفات الفنية
              </a>
              <a
                href="#quality"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-500 transition-colors py-2.5 border-b border-slate-900"
              >
                أجهزة الاختبار
              </a>
              <a
                href="#clients"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-500 transition-colors py-2.5 border-b border-slate-900"
              >
                الشركاء
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-500 transition-colors py-2.5"
              >
                تواصل معنا
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-amber-500 text-center text-slate-950 py-3 rounded-xl font-bold block mt-2 shadow-md shadow-amber-500/10"
              >
                اطلب مقايسة للموقع
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setCartOpen(false)}
          ></div>

          <div className="relative w-full max-w-md bg-slate-950 border-l border-slate-800/80 text-slate-100 h-full flex flex-col shadow-2xl p-6 z-10">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2.5 text-amber-500">
                <ClipboardList className="w-5 h-5" />
                <h2 className="text-lg font-bold text-slate-100">قائمة عروض الأسعار</h2>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-slate-900 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              {cartItems.length === 0 ? (
                <div className="text-center py-24 text-slate-500 flex flex-col items-center">
                  <ClipboardList className="w-12 h-12 text-slate-600 mb-4" strokeWidth={1.5} />
                  <p className="font-bold text-slate-400">قائمة الطلبات فارغة</p>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs">
                    تصفح المنتجات في الكتالوج وأضف العناصر التي تحتاج لتسعيرها للمبيعات.
                  </p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-slate-900/40 border border-slate-800/60 rounded-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500">
                        <Network className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-200">{item.name}</h4>
                        <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold mt-1 inline-block">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-slate-500 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-all cursor-pointer"
                      title="حذف من السلة"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-slate-900 pt-6 mt-6 space-y-4">
                <div className="flex justify-between text-sm text-slate-400 font-semibold">
                  <span>إجمالي البنود المطلوبة</span>
                  <span className="text-amber-500 font-bold">{cartItems.length} بنود</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="#contact"
                    onClick={() => setCartOpen(false)}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-center py-3.5 rounded-xl font-bold text-sm shadow-md shadow-amber-500/10 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>طلب عرض سعر</span>
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                  <button
                    onClick={clearCart}
                    className="border border-slate-800 bg-slate-900/40 hover:bg-slate-900 hover:border-red-500/20 text-slate-400 hover:text-red-400 text-center py-3.5 rounded-xl font-bold text-sm transition-all cursor-pointer"
                  >
                    تفريغ القائمة
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
