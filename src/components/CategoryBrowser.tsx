"use client";

import React from "react";

interface CategoryBrowserProps {
  onSelectCategory: (category: string) => void;
}

export default function CategoryBrowser({ onSelectCategory }: CategoryBrowserProps) {
  const categories = [
    { name: "فايبر أوبتك", icon: "🧵", id: "fiber" },
    { name: "كابلات نحاسية", icon: "🔌", id: "copper" },
    { name: "كبائن وراك", icon: "🗄️", id: "racks" },
    { name: "سويتشات", icon: "🌐", id: "switches" },
    { name: "كاميرات مراقبة", icon: "📹", id: "cameras" },
    { name: "إكسسوارات", icon: "🧰", id: "accessories" },
  ];

  const handleCategoryClick = (id: string) => {
    onSelectCategory(id);
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative z-20 -mt-14 px-6 pb-10">
      <div className="max-w-7xl mx-auto glass rounded-[32px] p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">
          <div>
            <div className="text-orange-300 text-sm mb-2 font-bold">تصفح سريع للمنتجات</div>
            <h2 className="text-2xl lg:text-3xl font-black text-white">اختار التصنيف وابدأ طلب عرض السعر</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <input
              type="text"
              placeholder="ابحث عن كابل، سويتش، راك، كاميرا..."
              className="bg-black/20 border border-white/10 hover:border-white/20 focus:border-orange-500 focus:outline-none rounded-2xl px-5 py-3 text-white text-sm min-w-[280px] transition-all"
            />
            <button className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-2xl font-bold transition-all hover:scale-[1.02]">
              بحث
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group bg-black/20 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/40 rounded-2xl p-5 text-center transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <div className="font-bold text-sm text-gray-200 group-hover:text-white">{cat.name}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
