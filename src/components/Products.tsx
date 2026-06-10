"use client";

import React, { useState, useEffect } from "react";
import { useCart, ProductItem } from "@/context/CartContext";
import { Cable, Server, Network, Cpu, Video, Wrench, FileDown, Check, Plus, Loader2 } from "lucide-react";
import { wixClient, isWixConfigured } from "@/lib/wix";

interface ProductsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

interface LocalProductType {
  id: string;
  name: string;
  sku: string;
  category: string;
  categoryName: string;
  icon: React.ComponentType<any>;
  available: boolean;
  desc: string;
  specs: string[];
}

export default function Products({ selectedCategory, onSelectCategory }: ProductsProps) {
  const { addToCart, cartItems } = useCart();
  const [products, setProducts] = useState<LocalProductType[]>([]);
  const [loading, setLoading] = useState(false);

  const localProductsList: LocalProductType[] = [
    {
      id: "prod-1",
      name: "كابل فايبر 12 كور Outdoor",
      sku: "HIL-FO-12C-SM",
      category: "fiber",
      categoryName: "فايبر أوبتك",
      icon: Cable,
      available: true,
      desc: "كابل Single Mode للألياف البصرية مصمم للتمديد الخارجي ومشاريع البنية التحتية والربط طويل المدى.",
      specs: ["نوع الشعيرة: G.652.D", "غلاف خارجي: PE مقاوم للرطوبة", "الوزن: 85 كجم/كم"],
    },
    {
      id: "prod-2",
      name: "كابينة شبكة حائط 9U",
      sku: "HIL-RCK-9U-WL",
      category: "racks",
      categoryName: "كبائن الشبكات",
      icon: Server,
      available: true,
      desc: "كابينة مدمجة مخصصة للتركيب على الجدران لتنظيم الخوادم والباتش بانل وأجهزة الراوتر للمكاتب.",
      specs: ["العرض: 600 مم", "العمق: 450 مم", "باب أمامي: زجاج مقسى متين"],
    },
    {
      id: "prod-3",
      name: "سويتش جيجابت PoE",
      sku: "HIL-SW-24P-POE",
      category: "switches",
      categoryName: "سويتشات وراوترات",
      icon: Network,
      available: true,
      desc: "موزع شبكة Gigabit ذكي يدعم تغذية الطاقة عبر الكابل (PoE) مثالي لكاميرات المراقبة وأجهزة IP.",
      specs: ["المنافذ: 24 جيجابت + 2 SFP", "إجمالي الطاقة: 370 واط", "الإدارة: Layer 2 Managed"],
    },
    {
      id: "prod-4",
      name: "كابل نحاسي Cat6 UTP",
      sku: "HIL-CU-C6-UTP",
      category: "copper",
      categoryName: "كابلات نحاسية",
      icon: Cpu,
      available: true,
      desc: "كابل نحاسي معزول من الفئة السادسة CAT6 لنقل البيانات بسرعة تصل إلى 1 جيجابت/ثانية للشبكات الداخلية.",
      specs: ["الموصل: نحاس نقي 23AWG", "التردد: 250 ميجاهرتز", "التعبئة: بكرة 305 متر"],
    },
    {
      id: "prod-5",
      name: "كاميرا IP خارجية 5 ميجا",
      sku: "HIL-CAM-5M-OD",
      category: "cameras",
      categoryName: "كاميرات مراقبة",
      icon: Video,
      available: true,
      desc: "كاميرا مراقبة خارجية ذكية بدقة 5 ميجابكسل تدعم مقاومة العوامل الجوية والرؤية الليلية الذكية.",
      specs: ["الدقة: 2592 × 1944", "الرؤية الليلية: حتى 30 متر", "الحماية: معيار IP67 مقاوم للماء"],
    },
    {
      id: "prod-6",
      name: "باتش بانل 24 منفذ",
      sku: "HIL-PP-24C6",
      category: "accessories",
      categoryName: "إكسسوارات",
      icon: Wrench,
      available: true,
      desc: "لوحة توزيع خطوط كابلات الشبكة داخل الكابينة (Patch Panel) لتنظيم خطوط اليوزر للمكاتب.",
      specs: ["الفئة: Cat6 RJ45 Keystone", "الارتفاع: 1U في الراك", "الخامة: فولاذ كربوني مقوى"],
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

  useEffect(() => {
    const fetchWixProducts = async () => {
      if (!isWixConfigured()) {
        // Fallback to local products
        setProducts(localProductsList);
        return;
      }

      setLoading(true);
      try {
        const response = await wixClient.products.queryProducts().find();
        if (response.items && response.items.length > 0) {
          const wixMappedProducts = response.items.map((item, idx) => {
            // Map Wix products to our categories based on name
            let catId = "fiber";
            let catName = "فايبر أوبتك";
            
            const wixNameLower = (item.name || "").toLowerCase();
            if (wixNameLower.includes("كابل") && wixNameLower.includes("نحاس")) {
              catId = "copper";
              catName = "كابلات نحاسية";
            } else if (wixNameLower.includes("كابينة") || wixNameLower.includes("راك") || wixNameLower.includes("rack")) {
              catId = "racks";
              catName = "كبائن الشبكات";
            } else if (wixNameLower.includes("سويتش") || wixNameLower.includes("switch")) {
              catId = "switches";
              catName = "سويتشات وراوترات";
            } else if (wixNameLower.includes("كامير") || wixNameLower.includes("camera")) {
              catId = "cameras";
              catName = "كاميرات مراقبة";
            } else if (wixNameLower.includes("إكسسوار") || wixNameLower.includes("باتش") || wixNameLower.includes("panel")) {
              catId = "accessories";
              catName = "إكسسوارات";
            }

            // Determine Icon based on names
            let Icon = Cable;
            if (wixNameLower.includes("كابينة") || wixNameLower.includes("راك") || wixNameLower.includes("rack")) Icon = Server;
            else if (wixNameLower.includes("سويتش") || wixNameLower.includes("switch") || wixNameLower.includes("موصل")) Icon = Network;
            else if (wixNameLower.includes("كامير") || wixNameLower.includes("camera")) Icon = Video;
            else if (wixNameLower.includes("نحاس") || wixNameLower.includes("cat")) Icon = Cpu;
            else if (wixNameLower.includes("باتش") || wixNameLower.includes("panel") || wixNameLower.includes("منظم")) Icon = Wrench;

            // Extract additional info sections as specs
            const specs = item.additionalInfoSections?.map(s => s.title + ": " + s.description) || ["مواصفات قياسية معتمدة"];

            return {
              id: item._id || `wix-${idx}`,
              name: item.name || "",
              sku: item.sku || `HIL-WIX-${idx}`,
              category: catId,
              categoryName: catName,
              icon: Icon,
              available: item.stock?.inStock ?? true,
              desc: item.description || "منتج بنية تحتية عالي الجودة معتمد ومطابق للمواصفات.",
              specs: specs.length > 0 ? specs.slice(0, 3) : ["نحاس نقي 100%", "مطابق للمعايير القياسية"],
            };
          });
          setProducts(wixMappedProducts);
        } else {
          setProducts(localProductsList);
        }
      } catch (err) {
        console.error("Wix Headless products query failed, using fallback static data:", err);
        setProducts(localProductsList);
      } finally {
        setLoading(false);
      }
    };

    fetchWixProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: LocalProductType) => {
    const item: ProductItem = {
      id: product.id,
      name: product.name,
      category: product.categoryName,
      icon: "⚙️",
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
    <section className="py-28 px-6 bg-slate-900/10 border-y border-slate-900" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <div className="inline-flex items-center border border-amber-500/20 bg-amber-500/5 text-amber-500 rounded-full px-4.5 py-1.5 text-xs font-bold mb-5 uppercase tracking-wider">
              {isWixConfigured() ? "متجر ويكس هيدليس نشط" : "كتالوج المنتجات والمعدات B2B"}
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-5 text-slate-100 font-sans">منتجات البنية التحتية المعتمدة</h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl font-medium">
              أضف البنود والمعدات المطلوبة لمشروعك إلى قائمة الأسعار، ثم أرسل طلبك للحصول على تسعير رسمي للمقايسة.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] text-center"
            >
              طلب تسعير مقايسة كاملة
            </a>
            <button className="border border-slate-800 hover:border-slate-700 bg-slate-900/40 text-slate-300 hover:text-white px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer">
              <FileDown className="w-4 h-4" />
              <span>تحميل الكتالوج الفني PDF</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10 border-b border-slate-900 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`rounded-xl border px-5 py-2.5 text-center transition-all text-xs font-bold cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-amber-500 border-amber-500 text-slate-950"
                  : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-amber-500/30 hover:text-slate-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-450 gap-3">
            <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
            <span className="text-sm font-semibold">جاري تحميل المنتجات من متجر ويكس...</span>
          </div>
        ) : (
          /* Products Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const isAdded = cartItems.some((item) => item.id === product.id);
              const Icon = product.icon;
              return (
                <article
                  key={product.id}
                  className="bg-slate-950 border border-slate-900 hover:border-amber-500/20 rounded-[28px] overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  {/* Tech Blueprint header */}
                  <div className="h-48 bg-slate-900/30 border-b border-slate-900 flex items-center justify-center relative select-none">
                    <div className="absolute top-4 right-4 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1 text-[10px] text-amber-500 font-bold uppercase tracking-wider">
                      {product.sku}
                    </div>
                    <div className="absolute top-4 left-4 bg-green-500/10 border border-green-500/20 rounded-lg px-2.5 py-1 text-[10px] text-green-400 font-bold">
                      {product.available ? "جاهز للتوريد" : "طلب مسبق"}
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-850 flex items-center justify-center text-slate-400">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <div className="p-6.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1.5 text-slate-100">{product.name}</h3>
                      <div className="text-[11px] text-slate-500 font-bold mb-4 uppercase tracking-wider">التصنيف: {product.categoryName}</div>
                      
                      <p className="text-slate-400 leading-relaxed mb-6 text-sm font-medium line-clamp-3">
                        {product.desc}
                      </p>

                      {/* Specs Bulletpoints */}
                      <div className="bg-slate-900/20 border border-slate-900/50 rounded-xl p-3.5 mb-6 space-y-1.5">
                        {product.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="text-slate-400 text-xs flex items-center gap-2 font-semibold">
                            <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0"></span>
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={isAdded}
                        className={`px-4 py-3 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          isAdded
                            ? "bg-green-600/10 border border-green-500/20 text-green-400 cursor-not-allowed"
                            : "bg-amber-500 hover:bg-amber-600 text-slate-950 hover:scale-[1.01]"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-4.5 h-4.5" />
                            <span>مضاف للسلة</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4.5 h-4.5" />
                            <span>أضف لطلب السعر</span>
                          </>
                        )}
                      </button>
                      <button
                        onClick={handleViewDetails}
                        className="border border-slate-800 bg-slate-900/30 hover:border-slate-700 text-slate-300 hover:text-white px-4 py-3 rounded-xl font-bold text-xs transition-all cursor-pointer"
                      >
                        عرض التفاصيل
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
