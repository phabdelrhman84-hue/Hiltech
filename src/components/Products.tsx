"use client";

import React from "react";
import { useCart, ProductItem } from "@/context/CartContext";

interface ProductsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Products({ selectedCategory, onSelectCategory }: ProductsProps) {
  const { addToCart, cartItems } = useCart();

  const productsList = [
    {
      id: "prod-1",
      name: "كابل فايبر 12 كور Outdoor",
      category: "fiber",
      categoryName: "فايبر أوبتك",
      icon: "🧵",
      available: true,
      desc: "كابل Single Mode للمسافات الطويلة ومشاريع البنية التحتية والربط بين المباني.",
    },
    {
      id: "prod-2",
      name: "كابينة شبكة حائط 9U",
      category: "racks",
      categoryName: "كبائن الشبكات",
      icon: "🗄️",
      available: true,
      desc: "كابينة مدمجة لتنظيم أجهزة الشبكات داخل الشركات والمكاتب ومراكز البيانات الصغيرة.",
    },
    {
      id: "prod-3",
      name: "سويتش جيجابت PoE",
      category: "switches",
      categoryName: "سويتشات وراوترات",
      icon: "🌐",
      available: true,
      desc: "مناسب لكاميرات IP وأنظمة الشبكات التجارية والربط الذكي للأجهزة.",
    },
    {
      id: "prod-4",
      name: "كابل نحاسي Cat6 UTP",
      category: "copper",
      categoryName: "كابلات نحاسية",
      icon: "🔌",
      available: true,
      desc: "كابل نحاسي عالي الجودة للسرعات العالية ونقل البيانات للمكاتب والمباني.",
    },
    {
      id: "prod-5",
      name: "كاميرا IP خارجية 5 ميجا",
      category: "cameras",
      categoryName: "كاميرات مراقبة",
      icon: "📹",
      available: true,
      desc: "كاميرا مراقبة ذكية مقاومة للظروف الجوية مع دعم الرؤية الليلية وتغذية PoE.",
    },
    {
      id: "prod-6",
      name: "إكسسوارات باتش بانل 24 منفذ",
      category: "accessories",
      categoryName: "إكسسوارات",
      icon: "🧰",
      available: true,
      desc: "منظم خطوط الشبكة داخل الراك لسهولة التوزيع وإعادة التوجيه.",
    },
  ];

  const categories = [
    { name: "كل المنتجات", id: "all" },
    { name: "فايبر أوبتك", id: "fiber" },
    { name: "كابلات نحاسية", id: "copper" },
    { name: "كبائن الشبكات", id: "racks" },
    { name: "سويتشات وراوترات", id: "switches" },
    { name: "كاميرات مراقبة", id: "cameras" },
    { name: "إكسسوارات", id: "accessories" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? productsList
      : productsList.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: typeof productsList[0]) => {
    const item: ProductItem = {
      id: product.id,
      name: product.name,
      category: product.categoryName,
      icon: product.icon,
    };
    addToCart(item);
  };

  const handleViewDetails = () => {
    const element = document.getElementById("product-page");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-28 px-6 bg-white/[0.02] border-y border-white/5" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <div className="inline-flex items-center border border-orange-500/20 bg-orange-500/10 text-orange-300 rounded-full px-4 py-2 text-sm mb-5 font-bold">
              كتالوج منتجات B2B
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-5 text-white">منتجات البنية التحتية والشبكات</h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
              أضف المنتجات إلى سلة عروض الأسعار، ثم أرسل طلبك للحصول على سعر مخصص حسب الكمية وحجم المشروع.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-2xl font-bold transition-all hover:scale-[1.02] text-center"
            >
              طلب عرض سعر مخصص
            </a>
            <button className="border border-white/10 bg-white/5 hover:border-orange-500/40 text-gray-300 hover:text-white px-6 py-3 rounded-2xl font-bold transition-all">
              تحميل كتالوج PDF
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`rounded-2xl border px-4 py-3 text-center transition-all text-sm font-semibold cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "bg-white/[0.04] border-white/10 text-gray-300 hover:border-orange-500/40 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isAdded = cartItems.some((item) => item.id === product.id);
            return (
              <article
                key={product.id}
                className="glass hover:border-orange-500/40 rounded-[32px] overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div className="h-64 bg-gradient-to-br from-orange-500/10 to-blue-400/5 flex items-center justify-center relative select-none">
                  <div className="absolute top-5 right-5 bg-black/35 border border-white/10 rounded-full px-3 py-1 text-xs text-orange-300 font-semibold">
                    {product.categoryName}
                  </div>
                  <div className="absolute top-5 left-5 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 text-xs text-green-300 font-semibold">
                    {product.available ? "متوفر" : "طلب مسبق"}
                  </div>
                  <div className="text-7xl">{product.icon}</div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{product.name}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                      {product.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={isAdded}
                      className={`px-4 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                        isAdded
                          ? "bg-green-600/20 border border-green-500/30 text-green-400 cursor-not-allowed"
                          : "bg-orange-500 hover:bg-orange-400 text-white hover:scale-[1.02]"
                      }`}
                    >
                      {isAdded ? "✓ في السلة" : "أضف لطلب السعر"}
                    </button>
                    <button
                      onClick={handleViewDetails}
                      className="border border-white/10 bg-white/5 hover:border-orange-500/40 text-gray-300 hover:text-white px-4 py-3 rounded-xl font-bold text-sm transition-all"
                    >
                      التفاصيل
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
