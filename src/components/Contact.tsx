"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Mail, Phone, Globe, Send, Tag, ShieldCheck } from "lucide-react";

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
      alert("يرجى إدخال الاسم ورقم الهاتف على الأقل لتمكين فريق مبيعات هيلتك من التواصل معكم.");
      return;
    }

    console.log("Submitting B2B RFP Request:", {
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
    <section className="py-24 px-6 bg-slate-950 border-t border-slate-900" id="contact">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side Info */}
        <div>
          <div className="inline-flex items-center gap-2 border border-amber-500/20 bg-amber-500/5 text-amber-500 rounded-full px-4.5 py-1.5 text-xs font-bold mb-5 uppercase tracking-wider">
            مراسلة إدارة المشاريع والمبيعات
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-slate-100">اطلب مقايسة فنية وتسعير لمشروعك</h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 font-medium">
            تتم مراجعة الطلبات والاتصال بالشركات في غضون 24 ساعة عمل. يمكنك ملء النموذج المرفق أو الاتصال بنا مباشرة عبر وسائل الاتصال الرسمية.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-400 shrink-0">
                <Mail className="w-5.5 h-5.5 text-amber-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-400 text-xs sm:text-sm uppercase tracking-wide">البريد الإلكتروني الرسمي للمبيعات</h4>
                <a href="mailto:info@hiltech-eg.com" className="text-slate-200 hover:text-amber-500 font-extrabold transition-colors">
                  info@hiltech-eg.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-400 shrink-0">
                <Phone className="w-5.5 h-5.5 text-amber-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-400 text-xs sm:text-sm uppercase tracking-wide">أرقام هواتف التواصل والدعم الميداني</h4>
                <div className="text-slate-200 font-extrabold space-y-1">
                  <div>01000087808 <span className="text-[10px] text-slate-500 font-bold tracking-wider">(إدارة المبيعات والمقايسات)</span></div>
                  <div>01122650022 <span className="text-[10px] text-slate-500 font-bold tracking-wider">(الدعم والمتابعة الهندسية)</span></div>
                  <div>02-24874338 <span className="text-[10px] text-slate-500 font-bold tracking-wider">(الهاتف الأرضي للمكتب الرئيسي)</span></div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-400 shrink-0">
                <Globe className="w-5.5 h-5.5 text-amber-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-400 text-xs sm:text-sm uppercase tracking-wide">رابط الموقع الرسمي للشركة</h4>
                <a
                  href="http://www.hiltech-eg.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-200 hover:text-amber-500 font-extrabold transition-colors"
                >
                  www.hiltech-eg.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="glass rounded-[32px] p-6 sm:p-8 bg-slate-950 border border-slate-900 relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-20 animate-fade-in flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">تم إرسال المقايسة بنجاح</h3>
              <p className="text-slate-300 leading-relaxed max-w-sm mx-auto text-sm font-semibold">
                نشكركم لتواصلكم مع هيلتك. تم استلام تفاصيل قائمة طلب عرض السعر ومواصفات المشروع بنجاح، وسيتواصل معكم مهندس المبيعات المختص لتنسيق العرض المالي والفني.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">طلب استشارة أو تسعير للمشروع</h3>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase mb-2" htmlFor="name">اسم مسؤول الاتصال بالجهة *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="مثال: م. أحمد عبد الرحمن"
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none rounded-xl px-4 py-3 text-slate-100 transition-colors text-sm"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase mb-2" htmlFor="company">اسم الشركة / الجهة المالكة للمشروع</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="مثال: الشركة العربية للمقاولات"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none rounded-xl px-4 py-3 text-slate-100 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase mb-2" htmlFor="phone">رقم الهاتف أو الجوال للتواصل *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="مثال: 01000087808"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none rounded-xl px-4 py-3 text-slate-100 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase mb-2" htmlFor="email">البريد الإلكتروني للشركة</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@companyname.com"
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none rounded-xl px-4 py-3 text-slate-100 transition-colors text-sm"
                />
              </div>

              {/* Attachments quote list */}
              {cartItems.length > 0 && (
                <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-4">
                  <h4 className="text-amber-500 font-bold text-xs mb-3 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    <span>سيتم إرسال قائمة البنود التالية للتسعير تلقائياً:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 max-h-28 overflow-y-auto pr-1">
                    {cartItems.map((item) => (
                      <span key={item.id} className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-200 flex items-center gap-1 font-semibold select-none">
                        <span>{item.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase mb-2" htmlFor="message">تفاصيل البنود والكميات / نطاق الأعمال المطلوب</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="اكتب هنا تفاصيل إضافية عن كميات الكابلات، الارتفاعات المطلوبة للراك، نوع الفايبر، أو قم بلصق جداول المقايسة للتقييم الفني المباشر..."
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none rounded-xl px-4 py-3 text-slate-100 transition-colors text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 py-4 rounded-xl font-bold transition-all shadow-md shadow-amber-500/5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4.5 h-4.5" />
                <span>{cartItems.length > 0 ? "إرسال طلب المقايسة مع السلة" : "إرسال الاستشارة"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
