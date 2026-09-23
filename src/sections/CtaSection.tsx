"use client";

import { ArrowLeft, ShieldCheck } from "lucide-react";

interface CtaSectionProps {
  onPrimaryClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function CtaSection({ onPrimaryClick }: CtaSectionProps) {
  return (
    <section dir="rtl" className="py-20 md:py-28 bg-[var(--color-dark-bg)] text-white overflow-hidden">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1F2428] via-[#15191C] to-[var(--color-dark-bg)] p-8 md:p-16 shadow-2xl">
          
          {/* تأثيرات إضاءة خلفية دائرية للزينة */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--color-brand-red)]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          {/* محتوى الكارت */}
          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* أيكونة شارة التوثيق */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/15 text-[var(--color-brand-red)] shadow-inner">
              <ShieldCheck className="h-7 w-7" />
            </div>

            {/* العنوان الرئيسي */}
            <h2 className="mx-auto max-w-3xl text-2xl sm:text-4xl md:text-5xl font-black leading-tight text-white tracking-tight">
              لا تتنازل عن حقك.. <br className="hidden sm:inline" />
              <span className="text-[var(--color-brand-red)]">وثّق شكواك الآن</span> بأسلوب رسمي ومعتمد
            </h2>

            {/* النص الفرعي */}
            <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base md:text-lg text-gray-300 font-medium leading-relaxed">
              خطوات بسيطة وسريعة لتقديم كافة التفاصيل والمستندات للحفاظ على حقوقك التجارية وتوثيق موقفك القانوني.
            </p>

            {/* زر الإجراء الرئيسي CTA */}
            <div className="mt-8 flex items-center justify-center">
              <a
                href="#complaint-form"
                onClick={onPrimaryClick}
                className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-brand-red)] hover:bg-[var(--color-brand-red-hover)] px-9 py-4 text-base font-extrabold text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>ابدأ تقديم الشكوى الآن</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[var(--color-brand-red)] transition-transform duration-300 group-hover:-translate-x-1.5">
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}