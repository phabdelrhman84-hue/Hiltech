import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-16 px-6 bg-[#070B14]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-black mb-2 text-white">HILTECH</h2>
          <p className="text-orange-300 text-sm mb-5 font-bold">STRONG & CONNECTED</p>
          <p className="text-gray-400 leading-relaxed max-w-md text-sm">
            شركة متخصصة في تصميم وتنفيذ وإدارة مشاريع البنية التحتية لشبكات المعلومات والاتصالات، تمديد الفايبر، تركيب الكبائن والراك، واختبارات الشبكات في جمهورية مصر العربية.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-5 text-sm sm:text-base">الخدمات</h3>
          <div className="space-y-3 text-gray-400 text-sm">
            <div><a href="#services" className="hover:text-orange-300 transition-colors">تمديد ولحام فايبر</a></div>
            <div><a href="#services" className="hover:text-orange-300 transition-colors">تركيب وتنظيم راك</a></div>
            <div><a href="#services" className="hover:text-orange-300 transition-colors">تمديد كابلات نحاسية</a></div>
            <div><a href="#services" className="hover:text-orange-300 transition-colors">اختبارات وقياسات شبكات</a></div>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white mb-5 text-sm sm:text-base">الشركة</h3>
          <div className="space-y-3 text-gray-400 text-sm">
            <div><a href="#hero" className="hover:text-orange-300 transition-colors">من نحن</a></div>
            <div><a href="#clients" className="hover:text-orange-300 transition-colors">الشركاء والموردون</a></div>
            <div><a href="#products" className="hover:text-orange-300 transition-colors">كتالوج المنتجات</a></div>
            <div><a href="#contact" className="hover:text-orange-300 transition-colors">تواصل معنا</a></div>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white mb-5 text-sm sm:text-base">التواصل المباشر</h3>
          <div className="space-y-3 text-gray-400 text-sm">
            <div><a href="mailto:info@hiltech-eg.com" className="hover:text-white transition-colors">info@hiltech-eg.com</a></div>
            <div className="dir-ltr text-right">01000087808</div>
            <div className="dir-ltr text-right">01122650022</div>
            <div className="dir-ltr text-right">02-24874338</div>
            <div><a href="http://www.hiltech-eg.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">www.hiltech-eg.com</a></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-semibold">
        <div>جميع الحقوق محفوظة © {currentYear} لشركة HILTECH.</div>
        <div>تصميم وتنفيذ Next.js • جاهز للنشر على Vercel.</div>
      </div>
    </footer>
  );
}
