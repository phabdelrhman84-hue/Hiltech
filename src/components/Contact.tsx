"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Contact() {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("يرجى ملء الاسم ورقم الهاتف على الأقل لتواصل فريق المبيعات معكم.");
      return;
    }

    // Mock submission handling
    console.log("Submitting Request:", {
      client: formData,
      requestedProducts: cartItems,
    });

    setSubmitted(true);
    setTimeout(() => {
      clearCart();
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
      });
      setSubmitted(false);
    }, 5000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent to-black/30" id="contact">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Contact Information */}
        <div>
          <div className="inline-flex items-center border border-orange-500/20 bg-orange-500/10 text-orange-300 rounded-full px-4 py-2 text-sm mb-5 font-bold">
            تواصل مباشر مع الإدارة والمبيعات
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">ابدأ مشروعك اليوم مع هيلتك</h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
            يسعدنا الإجابة عن جميع استفساراتكم الفنية وتلبية متطلبات مشاريعكم وتوفير أسعار تنافسية. يمكنك إما ملء الاستمارة أو التواصل المباشر معنا عبر معلومات الاتصال أدناه.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl shrink-0">
                ✉
              </div>
              <div>
                <h4 className="font-bold text-gray-300 text-sm">البريد الإلكتروني للمبيعات</h4>
                <a href="mailto:info@hiltech-eg.com" className="text-white hover:text-orange-400 font-bold transition-colors">
                  info@hiltech-eg.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl shrink-0">
                📞
              </div>
              <div>
                <h4 className="font-bold text-gray-300 text-sm">أرقام الهواتف والتواصل</h4>
                <div className="text-white font-bold space-y-1">
                  <div>01000087808 <span className="text-xs text-gray-500 font-normal">(مبيعات)</span></div>
                  <div>01122650022 <span className="text-xs text-gray-500 font-normal">(دعم فني)</span></div>
                  <div>02-24874338 <span className="text-xs text-gray-500 font-normal">(الهاتف الأرضي)</span></div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl shrink-0">
                🌐
              </div>
              <div>
                <h4 className="font-bold text-gray-300 text-sm">الموقع الرسمي للشركة</h4>
                <a
                  href="http://www.hiltech-eg.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-orange-400 font-bold transition-colors"
                >
                  www.hiltech-eg.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="glass rounded-[36px] p-6 sm:p-8 relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-20 animate-fade-in">
              <div className="text-6xl mb-6">🎉</div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">تم إرسال طلبكم بنجاح!</h3>
              <p className="text-gray-300 leading-relaxed max-w-sm mx-auto">
                لقد استلمنا طلب عرض السعر والمعلومات الخاصة بكم. سيقوم مهندس المبيعات بالتواصل معكم في غضون 24 ساعة لمناقشة التفاصيل وتأكيد المقايسة.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-2xl font-bold text-white mb-6">طلب تسعير ومقايسة للمشروع</h3>

              <div>
                <label className="block text-gray-400 text-sm mb-2" htmlFor="name">الاسم بالكامل *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="مثال: المهندس أحمد محمد"
                  className="w-full bg-black/20 border border-white/10 focus:border-orange-500 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors text-sm"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="company">الشركة أو المؤسسة</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="مثال: شركة المقاولات الحديثة"
                    className="w-full bg-black/20 border border-white/10 focus:border-orange-500 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="phone">رقم الهاتف للتواصل *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="مثال: 01000087808"
                    className="w-full bg-black/20 border border-white/10 focus:border-orange-500 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2" htmlFor="email">البريد الإلكتروني</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@company.com"
                  className="w-full bg-black/20 border border-white/10 focus:border-orange-500 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors text-sm"
                />
              </div>

              {/* Display products from the quote cart if any */}
              {cartItems.length > 0 && (
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4">
                  <h4 className="text-orange-300 font-bold text-xs sm:text-sm mb-3">المنتجات المطلوبة في سلة العروض الحالية:</h4>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-1">
                    {cartItems.map((item) => (
                      <span key={item.id} className="bg-black/40 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-white flex items-center gap-1 select-none">
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-gray-400 text-sm mb-2" htmlFor="message">تفاصيل المشروع والكميات المطلوبة</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="اكتب هنا تفاصيل إضافية للمشروع، الأطوال، جداول الكميات (BOQ)، أو أي مواصفات فنية تفضلها..."
                  className="w-full bg-black/20 border border-white/10 focus:border-orange-500 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-400 text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.01] text-sm cursor-pointer"
              >
                {cartItems.length > 0 ? "إرسال الطلب مع سلة المنتجات" : "إرسال طلب الاستشارة"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
