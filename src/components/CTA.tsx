import React from "react";
import { Mail, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-6 pb-28 bg-slate-950">
      <div className="max-w-7xl mx-auto rounded-[32px] border border-slate-900 bg-gradient-to-r from-amber-500/5 to-slate-900/40 p-8 sm:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.04),transparent_60%)] pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black mb-6 text-slate-100">هل تحتاج إلى استشارة فنية مخصصة؟</h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto mb-10 leading-relaxed font-semibold">
            فريق المهندسين الفنيين لدينا مستعد لمراجعة مخططات شبكتكم ومناقشة جداول الكميات والمواصفات للوصول إلى الحل الأكثر أماناً واستقراراً وتوفيراً للمال.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-xl text-sm font-bold transition-all shadow-md shadow-amber-500/5 hover:scale-[1.01] text-center flex items-center gap-2"
            >
              <PhoneCall className="w-4.5 h-4.5" />
              <span>اطلب استشارة مجانية</span>
            </a>
            <a
              href="mailto:info@hiltech-eg.com"
              className="border border-slate-800 hover:border-slate-700 bg-slate-900/40 text-slate-300 hover:text-white px-8 py-4 rounded-xl text-sm font-bold transition-all hover:bg-slate-900/80 text-center flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4.5 h-4.5" />
              <span>مراسلة قسم المشاريع</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
