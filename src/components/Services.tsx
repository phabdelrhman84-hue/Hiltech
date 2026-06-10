import React from "react";

export default function Services() {
  const servicesList = [
    {
      icon: "🧵",
      title: "تمديد ولحام الفايبر",
      desc: "تنفيذ تمديدات الفايبر وإنهاء الوصلات واللحام حسب مواصفات المشروع بأعلى كفاءة.",
    },
    {
      icon: "🗄️",
      title: "تركيب وتنظيم الراك",
      desc: "تركيب كبائن الشبكات وتنظيم الكابلات والباتش بانل بشكل احترافي ومنظم لسهولة الصيانة.",
    },
    {
      icon: "🔌",
      title: "تمديد الكابلات النحاسية",
      desc: "تمديد وإنهاء Twisted Copper Cables (Cat6, Cat6A, Cat7) للمكاتب والمباني والمشاريع.",
    },
    {
      icon: "📐",
      title: "تصميم ومعاينة الموقع",
      desc: "معاينة تفصيلية للموقع وتجهيز الرسومات الهندسية ومتطلبات التنفيذ بدقة عالية.",
    },
    {
      icon: "🧪",
      title: "اختبارات الشبكات",
      desc: "قياس واختبار وتوفير تقارير فنية باستخدام Fluke Test و OTDR و Power Meter و Digital Copper Tester.",
    },
    {
      icon: "🏢",
      title: "إدارة مشاريع الشبكات",
      desc: "تخطيط وتوريد وتنفيذ وإدارة مشاريع البنية التحتية لشبكات المعلومات للشركات والمصانع الكبرى.",
    },
  ];

  return (
    <section className="py-28 px-6 bg-[#070B14]" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/10 text-orange-300 rounded-full px-4 py-2 text-sm mb-4 font-bold">
            خدمات وحلول حقيقية
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">خدمات وحلول هيلتك</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
            خدمات حقيقية مبنية على خبرات طويلة في السوق: تصميم، معاينة، تنفيذ، تمديد، لحام، إنهاء، وقياس شبكات المعلومات.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="glass hover:border-orange-500/40 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-3xl mb-6 group-hover:bg-orange-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
                  {service.desc}
                </p>
              </div>
              <a href="#contact" className="text-orange-300 hover:text-orange-400 font-bold text-sm inline-flex items-center gap-2">
                استكشف الخدمة <span className="transition-transform group-hover:translate-x-[-4px]">←</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
