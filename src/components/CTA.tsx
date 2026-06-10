import React from "react";

export default function CTA() {
  return (
    <section className="px-6 pb-28">
      <div className="max-w-7xl mx-auto rounded-[40px] border border-orange-500/20 bg-gradient-to-r from-orange-500/20 to-blue-500/10 p-8 sm:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.18),transparent_50%)] pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black mb-6 text-white">تحتاج حل مخصص لمشروعك؟</h2>
          <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            تواصل مع فريق مهندسي وفنيي هيلتك للحصول على استشارة فنية متكاملة للموقع وعرض سعر مناسب وعادل لاحتياج شركتك الفعلي.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-2xl shadow-orange-500/20 hover:scale-[1.02] text-center"
            >
              اطلب استشارة مجانية
            </a>
            <a
              href="mailto:info@hiltech-eg.com"
              className="border border-white/10 bg-white/5 text-white hover:border-orange-500/40 px-8 py-4 rounded-2xl text-lg font-bold transition-all hover:bg-white/10 text-center"
            >
              تواصل مع المبيعات
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
