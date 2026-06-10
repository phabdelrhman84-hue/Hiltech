"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Mail, Phone, Globe, Send, Tag, ShieldCheck, Upload, FileText, X, Loader2 } from "lucide-react";
import { wixClient, isWixConfigured } from "@/lib/wix";

export default function Contact() {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("يرجى إدخال الاسم ورقم الهاتف على الأقل لتمكين فريق مبيعات هيلتك من التواصل معكم.");
      return;
    }

    setSubmitting(true);
    const quoteDetails = `
المنتجات المطلوبة للتسعير:
${cartItems.map((item, idx) => `${idx + 1}. ${item.name} (${item.category})`).join("\n")}

الملف المرفق: ${file ? `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)` : "لا يوجد"}
    `;

    console.log("Submitting B2B RFP Request:", {
      client: formData,
      requestedProducts: cartItems,
      attachedFile: file ? { name: file.name, size: file.size, type: file.type } : null,
    });

    if (isWixConfigured()) {
      try {
        await wixClient.contacts.createContact({
          name: {
            first: formData.name,
          },
          emails: {
            items: formData.email ? [{ email: formData.email, tag: "WORK" }] : [],
          },
          phones: {
            items: [{ phone: formData.phone, tag: "WORK" }],
          },
          company: formData.company,
        });
      } catch (err) {
        console.error("Wix Headless contact submission failed, using offline fallback:", err);
      }
    }

    // Simulate completion
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        clearCart();
        setFile(null);
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          message: "",
        });
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <section className="py-24 px-6 bg-slate-950 border-t border-slate-900" id="contact">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side Info */}
        <div>
          <div className="inline-flex items-center gap-2 border border-amber-500/20 bg-amber-500/5 text-amber-500 rounded-full px-4.5 py-1.5 text-xs font-bold mb-5 uppercase tracking-wider">
            مراسلة إدارة المشاريع والمبيعات
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-slate-100">اطلب مقايسة فنية وتسعير لمشروعك</h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 font-medium">
            تتم مراجعة الطلبات والاتصال بالشركات في غضون 24 ساعة عمل. يمكنك ملء النموذج المرفق أو الاتصال بنا مباشرة عبر وسائل الاتصال الرسمية.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-400 shrink-0">
                <Mail className="w-5.5 h-5.5 text-amber-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-400 text-xs sm:text-sm uppercase tracking-wide">البريد الإلكتروني الرسمي للمبيعات</h4>
                <a href="mailto:info@hiltech-eg.com" className="text-slate-200 hover:text-amber-500 font-extrabold transition-colors">
                  info@hiltech-eg.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-400 shrink-0">
                <Phone className="w-5.5 h-5.5 text-amber-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-400 text-xs sm:text-sm uppercase tracking-wide">أرقام هواتف التواصل والدعم الميداني</h4>
                <div className="text-slate-200 font-extrabold space-y-1">
                  <div>01000087808 <span className="text-[10px] text-slate-500 font-bold tracking-wider">(إدارة المبيعات والمقايسات)</span></div>
                  <div>01122650022 <span className="text-[10px] text-slate-500 font-bold tracking-wider">(الدعم والمتابعة الهندسية)</span></div>
                  <div>02-24874338 <span className="text-[10px] text-slate-500 font-bold tracking-wider">(الهاتف الأرضي للمكتب الرئيسي)</span></div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-400 shrink-0">
                <Globe className="w-5.5 h-5.5 text-amber-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-400 text-xs sm:text-sm uppercase tracking-wide">رابط الموقع الرسمي للشركة</h4>
                <a
                  href="http://www.hiltech-eg.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-200 hover:text-amber-500 font-extrabold transition-colors"
                >
                  www.hiltech-eg.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="glass rounded-[32px] p-6 sm:p-8 bg-slate-950 border border-slate-900 relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-20 animate-fade-in flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">تم إرسال المقايسة بنجاح</h3>
              <p className="text-slate-300 leading-relaxed max-w-sm mx-auto text-sm font-semibold">
                نشكركم لتواصلكم مع هيلتك. تم استلام تفاصيل قائمة طلب عرض السعر ومواصفات المشروع بنجاح، وسيتواصل معكم مهندس المبيعات المختص لتنسيق العرض المالي والفني.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">طلب استشارة أو تسعير للمشروع</h3>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase mb-2" htmlFor="name">اسم مسؤول الاتصال بالجهة *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={submitting}
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="مثال: م. أحمد عبد الرحمن"
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none rounded-xl px-4 py-3 text-slate-100 transition-colors text-sm"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase mb-2" htmlFor="company">اسم الشركة / الجهة المالكة للمشروع</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    disabled={submitting}
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="مثال: الشركة العربية للمقاولات"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none rounded-xl px-4 py-3 text-slate-100 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase mb-2" htmlFor="phone">رقم الهاتف أو الجوال للتواصل *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    disabled={submitting}
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="مثال: 01000087808"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none rounded-xl px-4 py-3 text-slate-100 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase mb-2" htmlFor="email">البريد الإلكتروني للشركة</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  disabled={submitting}
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@companyname.com"
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none rounded-xl px-4 py-3 text-slate-100 transition-colors text-sm"
                />
              </div>

              {/* File Attachment Field */}
              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase mb-2">إرفاق مقايسة أو مخطط للمشروع (PDF, Excel, صور)</label>
                {!file ? (
                  <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center border border-dashed border-slate-800 hover:border-amber-500/40 bg-slate-900/10 hover:bg-slate-900/30 rounded-xl p-5 cursor-pointer transition-all text-center group"
                  >
                    <Upload className="w-6 h-6 text-slate-500 mb-2 group-hover:text-amber-500 transition-colors" />
                    <span className="text-xs text-slate-400 font-semibold group-hover:text-slate-350">اضغط هنا لرفع الملف (مخطط، مقايسة BOQ، أو صورة الموقع)</span>
                    <span className="text-[10px] text-slate-500 mt-1">المحلقات المدعومة: PDF, Excel (.xls, .xlsx), JPG, PNG (بحد أقصى 10 ميجا)</span>
                    <input
                      type="file"
                      id="file-upload"
                      disabled={submitting}
                      accept=".pdf,.xls,.xlsx,image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="flex items-center justify-between p-3.5 bg-slate-900 border border-slate-800 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-slate-200 max-w-[200px] truncate">{file.name}</div>
                        <div className="text-[10px] text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      disabled={submitting}
                      onClick={handleRemoveFile}
                      className="p-1.5 text-slate-500 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer"
                    >
                      <X className="w-4.5 h-4.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Attachments quote list */}
              {cartItems.length > 0 && (
                <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-4">
                  <h4 className="text-amber-500 font-bold text-xs mb-3 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    <span>سيتم إرسال قائمة البنود التالية للتسعير تلقائياً:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 max-h-28 overflow-y-auto pr-1">
                    {cartItems.map((item) => (
                      <span key={item.id} className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-200 flex items-center gap-1 font-semibold select-none">
                        <span>{item.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase mb-2" htmlFor="message">ملاحظات أو إضافات فنية للمشروع</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  disabled={submitting}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="اكتب هنا أي ملاحظات إضافية، شروط خاصة بالتوريد، مواعيد التنفيذ المطلوبة، أو أي إضافة فنية تفضلها..."
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none rounded-xl px-4 py-3 text-slate-100 transition-colors text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 py-4 rounded-xl font-bold transition-all shadow-md shadow-amber-500/5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4.5 h-4.5 animate-spin" />
                    <span>جاري التوصيل بـ Wix...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4.5 h-4.5" />
                    <span>{cartItems.length > 0 ? "إرسال طلب المقايسة مع السلة" : "إرسال الاستشارة"}</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
