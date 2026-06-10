import React from "react";
import { Activity, Network, Zap, Cable, ShieldCheck } from "lucide-react";

export default function Quality() {
  const diagnosticTools = [
    {
      icon: Activity,
      title: "Fluke Test",
      desc: "قياس وتحليل الكابلات النحاسية والفايبر لتصديق توافقها مع فئات السرعات وسعة الحزم المحددة هندسياً.",
    },
    {
      icon: Network,
      title: "OTDR Test",
      desc: "فحص مسارات الألياف البصرية بالكامل ورصد نسب الفقد البصري (Attenuation) وأماكن الانحناءات أو القطع بالأمتار.",
    },
    {
      icon: Zap,
      title: "Optical Power Meter",
      desc: "معايرة وقياس شدة نبضات الليزر الصادرة من الموزعات لضمان استقرار وجودة توصيل الإشارة الضوئية.",
    },
    {
      icon: Cable,
      title: "Digital Copper Tester",
      desc: "فحص سلامة أطراف التوصيل الثنائية في كابلات النحاس والتحقق من سلامة ترتيب الألوان والربط.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-950/40 border-y border-slate-900" id="quality">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-amber-500/20 bg-amber-500/5 text-amber-500 rounded-full px-4.5 py-1.5 text-xs font-bold mb-5 uppercase tracking-wider">
              Quality Assurance & Verification
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-slate-100">فحوصات وتجارب تسليم معتمدة</h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 font-medium">
              تلتزم شركة هيلتك بمعايير ضبط جودة صارمة عند تسليم المشاريع. نقوم بفحص واختبار كامل نقاط التمديدات ووصلات اللحام بأجهزة قياس متخصصة تضمن الكفاءة التشغيلية المطلوبة وتصدر شهادات معتمدة لكل نقطة (Certification Reports).
            </p>
            <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-6 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-amber-500 font-bold mb-2 text-base">تسليم موثق ومطابق للمعايير</h4>
                <p className="text-slate-300 text-sm leading-relaxed font-semibold">
                  يتم تسليم العميل كشوفات وتقارير فحص رقمية كاملة من جهاز الفلوك وجهاز OTDR توضح أداء كل نقطة بالشبكة كجزء أساسي من مستندات تسليم المشروع (As-Built Documentation).
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {diagnosticTools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-950 border border-slate-900 hover:border-amber-500/25 rounded-3xl p-7 text-center hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-amber-500 group-hover:border-amber-500/20 transition-all mx-auto mb-4">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-200 mb-2">{tool.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-semibold">{tool.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
