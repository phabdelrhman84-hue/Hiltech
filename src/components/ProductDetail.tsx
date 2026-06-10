"use client";

import React, { useState } from "react";
import { useCart, ProductItem } from "@/context/CartContext";

export default function ProductDetail() {
  const { addToCart, cartItems } = useCart();
  const [activeTab, setActiveTab] = useState("description");

  const product: ProductItem = {
    id: "prod-detail-1",
    name: "كابل فايبر أوبتك 12 كور Outdoor Single Mode",
    category: "كابلات الفايبر",
    icon: "🧵",
  };

  const isAdded = cartItems.some((item) => item.id === product.id);

  const tabs = [
    { id: "description", label: "الوصف" },
    { id: "specs", label: "المواصفات الفنية" },
    { id: "uses", label: "الاستخدامات" },
    { id: "downloads", label: "التحميلات" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "specs":
        return (
          <div className="text-gray-300 text-sm sm:text-base space-y-2">
            <div className="grid grid-cols-2 border-b border-white/5 py-2">
              <span className="text-gray-500">النوع الرئيسي</span>
              <span className="font-semibold">Single Mode (G.652.D)</span>
            </div>
            <div className="grid grid-cols-2 border-b border-white/5 py-2">
              <span className="text-gray-500">حماية الكابل</span>
              <span className="font-semibold">غلاف بولي إيثيلين مزدوج (PE) مقاوم للأشعة فوق البنفسجية</span>
            </div>
            <div className="grid grid-cols-2 border-b border-white/5 py-2">
              <span className="text-gray-500">مقاومة الشد</span>
              <span className="font-semibold">1500 N</span>
            </div>
            <div className="grid grid-cols-2 py-2">
              <span className="text-gray-500">درجة حرارة التشغيل</span>
              <span className="font-semibold">-40°C to +70°C</span>
            </div>
          </div>
        );
      case "uses":
        return (
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            يستخدم هذا المنتج في مشاريع الربط بين المباني السكنية والتجارية، وتمديدات الفايبر الخارجية الأرضية والهوائية، وتأسيس البنية التحتية لشبكات الاتصالات للشركات والمصانع الكبرى، بالإضافة إلى ربط كاميرات المراقبة بعيدة المدى.
          </p>
        );
      case "downloads":
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-sm font-semibold">كتيب المواصفات الفنية الكاملة (Data Sheet)</span>
              <button className="text-xs bg-orange-500 hover:bg-orange-400 text-white font-bold px-3 py-1.5 rounded-lg transition-colors">
                تحميل PDF
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-sm font-semibold">شهادة مطابقة المعايير والمواصفات الدولية</span>
              <button className="text-xs bg-orange-500 hover:bg-orange-400 text-white font-bold px-3 py-1.5 rounded-lg transition-colors">
                تحميل PDF
              </button>
            </div>
          </div>
        );
      case "description":
      default:
        return (
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            كابل فايبر خارجي (Outdoor) عالي الجودة يحتوي على 12 كور بنظام Single Mode، مصمم خصيصاً لمقاومة الظروف الجوية القاسية وحماية الألياف البصرية الداخلية. مثالي لمشاريع الربط بين المباني، البنية التحتية للشركات، ومشاريع كاميرات المراقبة بعيدة المدى. يمكن توريده بأطوال ومواصفات مختلفة حسب جداول الكميات (BOQ) ومتطلبات المشاريع.
          </p>
        );
    }
  };

  return (
    <section className="py-28 px-6 bg-[#070B14]" id="product-page">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center border border-orange-500/20 bg-orange-500/10 text-orange-300 rounded-full px-4 py-2 text-sm mb-5 font-bold">
            Product Page Design
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-5 text-white">نموذج صفحة المنتج</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            تصميم صفحة منتج مناسبة للبيع B2B: مواصفات فنية واضحة، ملفات تحميل داتا شيت، تفاصيل الاستخدام، ونموذج طلب عرض سعر بدل الشراء المباشر.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Product Gallery */}
          <div>
            <div className="bg-gradient-to-br from-orange-500/20 to-blue-400/10 border border-white/10 rounded-[36px] h-[350px] sm:h-[520px] flex items-center justify-center text-9xl mb-5 select-none">
              🧵
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="h-20 sm:h-24 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-3xl cursor-pointer hover:border-orange-500/40 transition-colors select-none">🧵</div>
              <div className="h-20 sm:h-24 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-3xl cursor-pointer hover:border-orange-500/40 transition-colors select-none">🔧</div>
              <div className="h-20 sm:h-24 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-3xl cursor-pointer hover:border-orange-500/40 transition-colors select-none">📏</div>
              <div className="h-20 sm:h-24 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-3xl cursor-pointer hover:border-orange-500/40 transition-colors select-none">📄</div>
            </div>
          </div>

          {/* Product Details info */}
          <div className="glass rounded-[36px] p-6 sm:p-9">
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="bg-orange-500/10 border border-orange-500/20 text-orange-300 rounded-full px-4 py-2 text-sm font-bold">
                كابلات الفايبر
              </span>
              <span className="bg-green-500/10 border border-green-500/20 text-green-300 rounded-full px-4 py-2 text-sm font-bold">
                متوفر توريد كميات
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-5 text-white">
              كابل فايبر أوبتك 12 كور Outdoor Single Mode
            </h1>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              كابل فايبر خارجي مناسب لمشاريع البنية التحتية، الربط بين المباني، وشبكات الشركات التي تحتاج إلى استقرار عالي وسرعات نقل موثوقة لمسافات طويلة.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-black/20 border border-white/10 rounded-2xl p-4">
                <div className="text-gray-500 text-xs sm:text-sm mb-1 font-semibold">عدد الكور</div>
                <div className="font-bold text-white">12 Core</div>
              </div>
              <div className="bg-black/20 border border-white/10 rounded-2xl p-4">
                <div className="text-gray-500 text-xs sm:text-sm mb-1 font-semibold">نوع الكابل</div>
                <div className="font-bold text-white">Single Mode</div>
              </div>
              <div className="bg-black/20 border border-white/10 rounded-2xl p-4">
                <div className="text-gray-500 text-xs sm:text-sm mb-1 font-semibold">الاستخدام</div>
                <div className="font-bold text-white">Outdoor</div>
              </div>
              <div className="bg-black/20 border border-white/10 rounded-2xl p-4">
                <div className="text-gray-500 text-xs sm:text-sm mb-1 font-semibold">التطبيق</div>
                <div className="font-bold text-white">FTTX / Backbone</div>
              </div>
              <div className="bg-black/20 border border-white/10 rounded-2xl p-4">
                <div className="text-gray-500 text-xs sm:text-sm mb-1 font-semibold">الطول</div>
                <div className="font-bold text-white">حسب الطلب</div>
              </div>
              <div className="bg-black/20 border border-white/10 rounded-2xl p-4">
                <div className="text-gray-500 text-xs sm:text-sm mb-1 font-semibold">الدعم الفني والتركيب</div>
                <div className="font-bold text-white">متاح عبر فريق هيلتك</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => addToCart(product)}
                disabled={isAdded}
                className={`px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-2xl cursor-pointer ${
                  isAdded
                    ? "bg-green-600/20 border border-green-500/30 text-green-400 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-400 text-white shadow-orange-500/20 hover:scale-[1.02]"
                }`}
              >
                {isAdded ? "✓ مضاف في سلة العروض" : "أضف لطلب عرض السعر"}
              </button>
              <a
                href="https://wa.me/201000087808"
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 bg-[#25D366]/10 hover:border-[#25D366]/40 hover:bg-[#25D366]/20 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all text-center flex items-center justify-center gap-2"
              >
                تواصل عبر واتساب
              </a>
            </div>
            <div className="border-t border-white/10 pt-6 grid grid-cols-3 gap-4 text-xs sm:text-sm text-gray-400 font-semibold">
              <div>توريد مباشر للمشاريع</div>
              <div>إمكانية إرسال المقايسات</div>
              <div>عرض سعر حسب الكمية</div>
            </div>
          </div>
        </div>

        {/* Tabbed Spec Details */}
        <div className="mt-10 glass rounded-[36px] p-6 sm:p-8">
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 border-b border-white/10 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-2xl border transition-all text-sm font-bold cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "bg-white/[0.04] border-white/10 text-gray-300 hover:border-orange-500/40 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="min-h-[100px]">{renderTabContent()}</div>
        </div>
      </div>
    </section>
  );
}
