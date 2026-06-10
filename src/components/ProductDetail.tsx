"use client";

import React, { useState } from "react";
import { useCart, ProductItem } from "@/context/CartContext";
import { Cable, Cpu, Ruler, FileText, Check, Plus, MessageSquare, ShieldCheck, Download } from "lucide-react";

export default function ProductDetail() {
  const { addToCart, cartItems } = useCart();
  const [activeTab, setActiveTab] = useState("description");

  const product: ProductItem = {
    id: "prod-detail-1",
    name: "كابل فايبر أوبتك 12 كور Outdoor Single Mode",
    category: "كابلات الفايبر",
    icon: "⚙️",
  };

  const isAdded = cartItems.some((item) => item.id === product.id);

  const tabs = [
    { id: "description", label: "الوصف العام" },
    { id: "specs", label: "المواصفات الفنية الهندسة" },
    { id: "uses", label: "تطبيقات الاستخدام" },
    { id: "downloads", label: "تحميل الداتا شيت" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "specs":
        return (
          <div className="text-slate-300 text-sm sm:text-base space-y-3 font-medium">
            <div className="grid grid-cols-2 border-b border-slate-900 py-2">
              <span className="text-slate-500">نوع الألياف البصرية (Fiber Type)</span>
              <span className="font-semibold text-slate-200">Single Mode ITU-T G.652.D</span>
            </div>
            <div className="grid grid-cols-2 border-b border-slate-900 py-2">
              <span className="text-slate-500">حماية الكابل (Structure)</span>
              <span className="font-semibold text-slate-200">غلاف بولي إيثيلين مزدوج (Double PE) + شريط فولاذي مموج</span>
            </div>
            <div className="grid grid-cols-2 border-b border-slate-900 py-2">
              <span className="text-slate-500">قوة الشد القصوى (Tensile Strength)</span>
              <span className="font-semibold text-slate-200">1500 N (طويلة المدى) / 3000 N (قصيرة المدى)</span>
            </div>
            <div className="grid grid-cols-2 py-2">
              <span className="text-slate-500">درجة حرارة التشغيل القياسية</span>
              <span className="font-semibold text-slate-200">-40°C to +70°C</span>
            </div>
          </div>
        );
      case "uses":
        return (
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base font-medium">
            يستخدم هذا المنتج بشكل أساسي في مشاريع الربط العمودي (Backbone) بين غرف التحكم بالشبكات، وتمديدات الفايبر الخارجية الأرضية عبر مجاري الكابلات، والتركيب الهوائي بين الأعمدة، بالإضافة إلى ربط كاميرات المراقبة الرقمية (IP CCTV) على مسافات بعيدة في المصانع وحقول البترول والمدن الذكية.
          </p>
        );
      case "downloads":
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3.5 bg-slate-900/40 rounded-xl border border-slate-800/80">
              <span className="text-sm font-semibold text-slate-300">Technical Datasheet (HIL-FO-12C-SM).pdf</span>
              <button className="text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-3 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer">
                <Download className="w-3.5 h-3.5" />
                <span>تحميل PDF</span>
              </button>
            </div>
            <div className="flex items-center justify-between p-3.5 bg-slate-900/40 rounded-xl border border-slate-800/80">
              <span className="text-sm font-semibold text-slate-300">Certificate of Compliance & Standards.pdf</span>
              <button className="text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-3 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer">
                <Download className="w-3.5 h-3.5" />
                <span>تحميل PDF</span>
              </button>
            </div>
          </div>
        );
      case "description":
      default:
        return (
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base font-medium">
            كابل فايبر أوبتك خارجي (Outdoor Single Mode) مصنع طبقاً للمواصفات العالمية، يتميز بغلاف فولاذي مموج للحماية ضد القوارض والضغوط الميكانيكية، ويحتوي على 12 شعيرة بصرية داخلية ملونة لسهولة الفرز واللحام. مثالي لمشاريع ربط الفروع ومزودي الخدمات والشبكات القومية. متوفر للتوريد بكميات ضخمة وبأطوال مخصصة للمشاريع الكبرى.
          </p>
        );
    }
  };

  return (
    <section className="py-28 px-6 bg-slate-950" id="product-page">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center border border-amber-500/20 bg-amber-500/5 text-amber-500 rounded-full px-4.5 py-1.5 text-xs font-bold mb-5 uppercase tracking-wider">
            Product Specifications Page
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-5 text-slate-100">تفاصيل المواصفات الفنية للمنتج</h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            مواصفات فنية دقيقة لمهندسي الشبكات والمشتريات بالمؤسسات لتسهيل اعتماد البنود في جداول المقايسات.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Gallery View */}
          <div>
            <div className="bg-slate-900/20 border border-slate-900 rounded-[32px] h-[350px] sm:h-[500px] flex items-center justify-center relative select-none">
              <div className="w-24 h-24 rounded-3xl bg-slate-950 border border-slate-850 flex items-center justify-center text-amber-500 shadow-xl shadow-amber-500/5">
                <Cable className="w-12 h-12" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-5">
              <div className="h-20 rounded-2xl bg-slate-900/30 border border-slate-900 hover:border-amber-500/30 flex items-center justify-center text-slate-400 cursor-pointer select-none">
                <Cable className="w-6 h-6 text-amber-500" />
              </div>
              <div className="h-20 rounded-2xl bg-slate-900/30 border border-slate-900 hover:border-amber-500/30 flex items-center justify-center text-slate-400 cursor-pointer select-none">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="h-20 rounded-2xl bg-slate-900/30 border border-slate-900 hover:border-amber-500/30 flex items-center justify-center text-slate-400 cursor-pointer select-none">
                <Ruler className="w-6 h-6" />
              </div>
              <div className="h-20 rounded-2xl bg-slate-900/30 border border-slate-900 hover:border-amber-500/30 flex items-center justify-center text-slate-400 cursor-pointer select-none">
                <FileText className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="glass rounded-[32px] p-6 sm:p-9 bg-slate-950 border border-slate-900">
            <div className="flex flex-wrap gap-2.5 mb-5">
              <span className="bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-lg px-3 py-1 text-xs font-bold">
                رمز المنتج: HIL-FO-12C-SM
              </span>
              <span className="bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg px-3 py-1 text-xs font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>مطابق لمعايير ISO / IEC</span>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-5 text-slate-100">
              كابل فايبر أوبتك 12 كور Outdoor Single Mode
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 font-medium">
              كابل ألياف بصرية خارجي مدرع (Armored) مناسب للتركيب المباشر في التربة أو مجاري الكابلات، ومصمم لتوصيل البيانات بسرعات فائقة في أصعب البيئات الصناعية والإنشائية.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-4">
                <div className="text-slate-500 text-xs mb-1 font-bold">عدد الشعيرات (Fibers)</div>
                <div className="font-bold text-slate-200">12 Core</div>
              </div>
              <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-4">
                <div className="text-slate-500 text-xs mb-1 font-bold">نمط الإرسال (Mode)</div>
                <div className="font-bold text-slate-200">Single Mode (أحادي النمط)</div>
              </div>
              <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-4">
                <div className="text-slate-500 text-xs mb-1 font-bold">التدريع (Armoring)</div>
                <div className="font-bold text-slate-200">شريط فولاذي مموج (CST)</div>
              </div>
              <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-4">
                <div className="text-slate-500 text-xs mb-1 font-bold">نوع الغلاف (Sheath)</div>
                <div className="font-bold text-slate-200">HDPE (بولي إيثيلين عالي الكثافة)</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => addToCart(product)}
                disabled={isAdded}
                className={`px-8 py-4 rounded-xl text-sm font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer ${
                  isAdded
                    ? "bg-green-600/10 border border-green-500/20 text-green-400 cursor-not-allowed"
                    : "bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-amber-500/5 hover:scale-[1.01]"
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>تمت الإضافة للسلة</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    <span>أضف لطلب المقايسة</span>
                  </>
                )}
              </button>
              <a
                href="https://wa.me/201000087808"
                target="_blank"
                rel="noreferrer"
                className="border border-slate-800 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 text-emerald-400 px-8 py-4 rounded-xl text-sm font-bold transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4.5 h-4.5" />
                <span>الاستفسار السريع عبر واتساب</span>
              </a>
            </div>
            <div className="border-t border-slate-900 pt-6 grid grid-cols-3 gap-4 text-xs text-slate-500 font-bold">
              <div>مطابق لمواصفات الكود</div>
              <div>سعة تصنيع وتوريد ضخمة</div>
              <div>تسهيلات لشركات المقاولات</div>
            </div>
          </div>
        </div>

        {/* Tabbed Specs Details */}
        <div className="mt-10 glass rounded-[32px] p-6 sm:p-8 bg-slate-950 border border-slate-900">
          <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-900 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-xl border transition-all text-xs font-bold cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-amber-500 border-amber-500 text-slate-950"
                    : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-amber-500/30 hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="min-h-[100px]">{renderTabContent()}</div>
        </div>
      </div>
    </section>
  );
}
