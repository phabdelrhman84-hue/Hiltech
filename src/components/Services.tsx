import React from "react";
import { Cable, Server, Cpu, Ruler, Activity, Briefcase, ArrowRight } from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      icon: Cable,
      title: "تمديد ولحام الفايبر",
      desc: "تنفيذ عمليات تمديد الألياف البصرية الأرضية والهوائية، واللحام الكهربائي (Fusion Splicing) بمعدلات فقد متناهية الصغر.",
    },
    {
      icon: Server,
      title: "تركيب وتنظيم الراك",
      desc: "تأسيس وتنظيم كبائن الخوادم (Network Racks)، وترتيب مسارات كابلات الباتش بانل بشكل هندسي مرقم يسهل صيانته.",
    },
    {
      icon: Cpu,
      title: "تمديد الكابلات النحاسية",
      desc: "تمديد وإنهاء شبكات الكابلات النحاسية المهيكلة بمختلف الفئات Cat6, Cat6A, Cat7 لربط المكاتب وصالات الإنتاج.",
    },
    {
      icon: Ruler,
      title: "تصميم ومعاينة الموقع",
      desc: "إجراء المسح الفني والمعاينات الهندسية للموقع وتصميم شبكات الربط وتقديم الرسومات الهندسية (Shop Drawings).",
    },
    {
      icon: Activity,
      title: "اختبارات الشبكات",
      desc: "قياس كفاءة وسرعة الكابلات والفايبر باستخدام أجهزة المعايرة الرقمية وتقديم تقارير معتمدة (Fluke Test / OTDR).",
    },
    {
      icon: Briefcase,
      title: "إدارة مشاريع الشبكات",
      desc: "الإشراف الهندسي الكامل على توريد وتركيب وتدشين البنية التحتية للمعلومات للمشاريع الصناعية والتجارية الكبرى.",
    },
  ];

  return (
    <section className="py-28 px-6 bg-slate-950" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 border border-amber-500/20 bg-amber-500/5 text-amber-500 rounded-full px-4.5 py-1.5 text-xs font-bold mb-4 uppercase tracking-wider">
            حلول هندسية متكاملة
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-slate-100">خدمات وحلول هيلتك للشبكات</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-base sm:text-lg">
            نقدم خدمات وحلول مهيكلة ومطابقة للمواصفات الدولية لمشاريع البنية التحتية لشبكات المعلومات والاتصالات.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/20 border border-slate-900 hover:border-amber-500/35 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-850 flex items-center justify-center text-slate-400 group-hover:text-amber-500 group-hover:border-amber-500/20 transition-all mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-200 group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6 text-sm sm:text-base font-medium">
                    {service.desc}
                  </p>
                </div>
                <a href="#contact" className="text-amber-500 hover:text-amber-400 font-bold text-sm inline-flex items-center gap-2">
                  <span>طلب تفاصيل الخدمة</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-[-4px]" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
