"use client";

import React from "react";
import { Cable, Server, Network, Video, Wrench, Cpu, Search } from "lucide-react";

interface CategoryBrowserProps {
  onSelectCategory: (category: string) => void;
}

export default function CategoryBrowser({ onSelectCategory }: CategoryBrowserProps) {
  const categories = [
    { name: "فايبر أوبتك", icon: Cable, id: "fiber" },
    { name: "كابلات نحاسية", icon: Cpu, id: "copper" },
    { name: "كبائن وراك", icon: Server, id: "racks" },
    { name: "سويتشات", icon: Network, id: "switches" },
    { name: "كاميرات مراقبة", icon: Video, id: "cameras" },
    { name: "إكسسوارات", icon: Wrench, id: "accessories" },
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
      <div className="max-w-7xl mx-auto glass rounded-[32px] p-6 sm:p-8 shadow-2xl bg-slate-950/80 border border-slate-900">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">
          <div>
            <div className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-2">تصفح الكتالوج الهندسي</div>
            <h2 className="text-2xl lg:text-3xl font-black text-slate-100">حدد التصنيف لبدء اختيار المواصفات</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative flex-1 min-w-[280px]">
              <Search className="w-4 h-4 text-slate-500 absolute right-4 top-3.5" />
              <input
                type="text"
                placeholder="البحث بالاسم أو رمز المنتج (مثال: Cat6، سويتش)..."
                className="w-full bg-slate-900 border border-slate-800 hover:border-slate-700 focus:border-amber-500 focus:outline-none rounded-xl pr-11 pl-4 py-3 text-slate-100 text-sm transition-all"
              />
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer">
              بحث
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="group bg-slate-900/40 hover:bg-amber-500/5 border border-slate-900 hover:border-amber-500/30 rounded-2xl p-5 text-center transition-all duration-300 hover:scale-[1.02] cursor-pointer flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-950/50 border border-slate-850 flex items-center justify-center text-slate-400 group-hover:text-amber-500 group-hover:border-amber-500/20 transition-all mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-bold text-sm text-slate-300 group-hover:text-slate-100">{cat.name}</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
