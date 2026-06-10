import React from "react";

export default function Clients() {
  const partners = ["3M", "Legrand", "Hikvision", "Finolex", "Commscope", "Premium Line"];

  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-10 px-6" id="clients">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-gray-400 text-sm font-medium mb-6">
          شركاء وموردون معتمدون في أعمالنا
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16">
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-gray-500 hover:text-orange-400 transition-colors text-lg sm:text-xl font-black tracking-widest uppercase cursor-default select-none"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
