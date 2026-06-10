import React from "react";
import { Cable, Server, Activity, ArrowRight, CheckCircle2, Shield } from "lucide-react";

export default function Hero() {
  const highlights = ["فرق فنية متخصصة", "معايير تنفيذ دولية", "اختبارات Fluke و OTDR", "دعم للمشاريع 24/7"];

  return (
    <section className="relative overflow-hidden pt-44 pb-32 px-6 bg-slate-950">
      {/* Abstract Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.06),transparent_35%),radial-gradient(circle_at_right,rgba(59,130,246,0.05),transparent_40%)] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }}></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 border border-amber-500/20 bg-amber-500/5 text-amber-500 rounded-full px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
            <Shield className="w-3.5 h-3.5" />
            <span>معتمد ومطابق للمواصفات القياسية</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-slate-100">
            تصميم وتأسيس <span className="text-amber-500">شبكات الاتصالات والفايبر</span> للمنشآت والمشاريع
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
            هيلتك هي شريككم الهندسي لتنفيذ مشاريع البنية التحتية المتكاملة للشبكات، ولحام الألياف البصرية (Fiber Splice)، وتركيب كبائن الخوادم (Racks)، وقياس كفاءة التمديدات بأجهزة اختبار Fluke و OTDR ومعايرة الأداء للمؤسسات.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-amber-500/10 flex items-center gap-2"
            >
              <span>طلب عرض سعر هندسي</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#products"
              className="border border-slate-800 hover:border-slate-700 bg-slate-900/40 text-slate-300 hover:text-white px-8 py-4 rounded-xl text-base font-bold transition-all hover:bg-slate-900/80"
            >
              كتالوج المنتجات والمعدات
            </a>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {highlights.map((text, idx) => (
              <div key={idx} className="bg-slate-900/30 border border-slate-900 rounded-xl p-4 flex items-center gap-3">
                <CheckCircle2 className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                <span className="text-sm font-semibold text-slate-300">{text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="bg-slate-900/30 border border-slate-900 rounded-2xl px-5 py-4 flex-1 min-w-[150px] flex items-center gap-3">
              <Cable className="w-6 h-6 text-amber-500 shrink-0" />
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase">Fiber Installation</div>
                <div className="font-bold text-slate-200 text-xs sm:text-sm">تمديد ولحام الفايبر</div>
              </div>
            </div>
            <div className="bg-slate-900/30 border border-slate-900 rounded-2xl px-5 py-4 flex-1 min-w-[150px] flex items-center gap-3">
              <Server className="w-6 h-6 text-amber-500 shrink-0" />
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase">Rack & Datacenter</div>
                <div className="font-bold text-slate-200 text-xs sm:text-sm">تركيب وتنظيم الراك</div>
              </div>
            </div>
            <div className="bg-slate-900/30 border border-slate-900 rounded-2xl px-5 py-4 flex-1 min-w-[150px] flex items-center gap-3">
              <Activity className="w-6 h-6 text-amber-500 shrink-0" />
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase">Diagnostics & Testing</div>
                <div className="font-bold text-slate-200 text-xs sm:text-sm">OTDR • Fluke Test</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side graphical representation */}
        <div className="relative">
          <div className="absolute -inset-10 bg-amber-500/10 blur-3xl rounded-full opacity-30"></div>
          <div className="relative bg-slate-950 border border-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/40 rounded-2xl p-5 border border-slate-900/60 h-44 flex flex-col justify-between">
                <div className="text-amber-500 text-xs font-bold uppercase tracking-wider">Fiber Stability</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-100">99.99%</div>
                <div className="text-slate-500 text-xs font-medium">استقرار الإرسال والربط البصري</div>
              </div>
              <div className="bg-slate-900/40 rounded-2xl p-5 border border-slate-900/60 h-44 flex flex-col justify-between">
                <div className="text-amber-500 text-xs font-bold uppercase tracking-wider">SLA Standard</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-100">24/7</div>
                <div className="text-slate-500 text-xs font-medium">متابعة هندسية وصيانة طوارئ</div>
              </div>
              <div className="col-span-2 bg-slate-900/40 rounded-2xl border border-slate-900/60 p-8 h-72 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1),transparent_60%)]"></div>
                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-4 animate-pulse">
                    <Server className="w-8 h-8" />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-slate-100">أنظمة البنية التحتية للشركات</div>
                  <div className="text-slate-400 mt-2 text-xs sm:text-sm">معاينة • تصميم هندسي • توريد • تركيب وتشغيل</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
