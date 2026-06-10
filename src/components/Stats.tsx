import React from "react";

export default function Stats() {
  const statsList = [
    { value: "10+", label: "سنوات خبرة في السوق" },
    { value: "500+", label: "مشروع متكامل تم تنفيذه" },
    { value: "1000+", label: "منتج ومعدة تم توريدها" },
    { value: "24/7", label: "دعم ومتابعة فنية مستمرة" },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent to-orange-950/10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {statsList.map((stat, idx) => (
          <div key={idx} className="glass rounded-3xl p-6 sm:p-10 text-center hover:border-orange-500/20 transition-all select-none">
            <div className="text-4xl sm:text-6xl font-black text-orange-400 mb-4">{stat.value}</div>
            <div className="text-gray-300 text-sm sm:text-lg font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
