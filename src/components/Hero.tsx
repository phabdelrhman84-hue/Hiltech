import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28 px-6 bg-[#070B14]">
      {/* Background radial gradients for that premium feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_30%),radial-gradient(circle_at_right,rgba(59,130,246,0.20),transparent_35%)] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "54px 54px" }}></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/10 text-orange-300 rounded-full px-4 py-2 text-sm mb-6 font-bold tracking-wide">
            STRONG & CONNECTED
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6 text-white">
            تنفيذ <span className="text-orange-400">مشاريع الشبكات والفايبر</span> باحترافية للمؤسسات والشركات
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
            هيلتك متخصصة في تصميم وتنفيذ وإدارة مشاريع البنية التحتية لشبكات المعلومات، وتمديد ولحام الفايبر أوبتك، تركيب الراك والكبائن، تمديد الكابلات النحاسية، واختبارات الشبكات باستخدام أجهزة قياس احترافية.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-2xl shadow-orange-500/20 hover:scale-[1.02] text-center"
            >
              اطلب عرض سعر الآن
            </a>
            <a
              href="#products"
              className="border border-white/10 hover:border-orange-500/40 bg-white/5 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all hover:bg-white/10 text-center"
            >
              تصفح المنتجات
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm text-gray-300 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center text-center font-medium">فرق فنية متخصصة</div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center text-center font-medium">معايير تنفيذ دولية</div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center text-center font-medium">اختبارات Fluke و OTDR</div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center text-center font-medium">دعم للمشاريع</div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl px-5 py-4 flex-1 min-w-[150px]">
              <div className="text-orange-300 text-xs sm:text-sm mb-1 font-semibold">Fiber Installation</div>
              <div className="font-bold text-white text-sm sm:text-base">تمديد ولحام الفايبر</div>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl px-5 py-4 flex-1 min-w-[150px]">
              <div className="text-orange-300 text-xs sm:text-sm mb-1 font-semibold">Rack Installation</div>
              <div className="font-bold text-white text-sm sm:text-base">تركيب وتنظيم الراك</div>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl px-5 py-4 flex-1 min-w-[150px]">
              <div className="text-orange-300 text-xs sm:text-sm mb-1 font-semibold">Network Testing</div>
              <div className="font-bold text-white text-sm sm:text-base">OTDR • Fluke Test</div>
            </div>
          </div>
        </div>

        <div className="relative lg:block">
          <div className="absolute -inset-10 bg-orange-500/20 blur-3xl rounded-full opacity-60"></div>
          <div className="relative bg-gradient-to-br from-[#111827] to-[#0B1220] border border-white/10 rounded-[32px] p-6 sm:p-8 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-[#0E1728] rounded-2xl p-6 border border-white/10 h-44 flex flex-col justify-between">
                <div className="text-orange-300 text-sm font-semibold">بنية فايبر</div>
                <div className="text-3xl sm:text-4xl font-black text-white">99.9%</div>
                <div className="text-gray-500 text-xs sm:text-sm">استقرار الإشارة</div>
              </div>
              <div className="bg-[#0E1728] rounded-2xl p-6 border border-white/10 h-44 flex flex-col justify-between">
                <div className="text-orange-300 text-sm font-semibold">دعم المشاريع</div>
                <div className="text-3xl sm:text-4xl font-black text-white">24/7</div>
                <div className="text-gray-500 text-xs sm:text-sm">متابعة فنية</div>
              </div>
              <div className="col-span-2 bg-[#0E1728] rounded-2xl border border-white/10 p-8 h-72 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.22),transparent_50%)]"></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl sm:text-7xl mb-4 animate-bounce duration-1000">🖧</div>
                  <div className="text-xl sm:text-2xl font-bold text-white">أنظمة شبكات للمؤسسات</div>
                  <div className="text-gray-400 mt-2 text-sm sm:text-base">تصميم • تنفيذ • اختبار • إدارة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
