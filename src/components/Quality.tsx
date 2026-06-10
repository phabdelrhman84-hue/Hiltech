import React from "react";

export default function Quality() {
  const diagnosticTools = [
    { icon: "🧪", title: "Fluke Test", desc: "قياس وتحليل الكابلات النحاسية والفايبر بدقة دولية للتأكد من مطابقة السرعات والمعايير." },
    { icon: "📡", title: "OTDR", desc: "تحديد مسار الكابلات البصرية واكتشاف نقاط قطع الإشارة أو الفقد بدقة متناهية بالامتار." },
    { icon: "⚡", title: "Power Meter", desc: "قياس شدة وجودة تدفق الضوء والنبضات البصرية داخل شبكة الفايبر أوبتك لضمان الاستقرار." },
    { icon: "🔌", title: "Digital Copper Tester", desc: "اختبار توصيلات الباتش بانل والفيش الجدارية لضمان سلامة ترتيب الأطراف والأسلاك." },
  ];

  return (
    <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5" id="quality">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center border border-orange-500/20 bg-orange-500/10 text-orange-300 rounded-full px-4 py-2 text-sm mb-5 font-bold">
              Quality Assurance & Testing
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">أجهزة قياس واختبار احترافية</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              هيلتك تعتمد على أحدث أجهزة الاختبار والقياس المتخصصة لضمان جودة وسرعة تنفيذ شبكات المعلومات للمؤسسات والمشاريع القومية، ومنها أجهزة Fluke Test للفايبر والنحاس، وجهاز OTDR، و Power Meter، و Digital Copper Tester.
            </p>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6">
              <h4 className="text-orange-300 font-bold mb-2 text-lg">لماذا نقوم بالاختبار؟</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                جميع أعمال التمديد واللحام يتم اختبارها وتسليمها بتقرير مطبوع ومصدق من الأجهزة لضمان عمل شبكتك بأقصى سرعة ممكنة وبأقل نسبة فقد للبيانات.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {diagnosticTools.map((tool, idx) => (
              <div
                key={idx}
                className="glass rounded-3xl p-7 text-center hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{tool.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
