"use client";

import { motion, useReducedMotion } from "framer-motion";
import { 
  ArrowLeft, 
  FileText,
  Clock,
  PhoneCall
} from "lucide-react";

interface HeroSectionProps {
  onPrimaryClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function HeroSection({ onPrimaryClick }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <>
      {/* ==========================================
          1. HERO SECTION - الجزء العلوي الداكن
         ========================================== */}
      <section
        dir="rtl"
        aria-label="الرئيسية - منصة حماية المستهلك"
        className="relative pt-20 pb-28 md:pt-28 md:pb-36 bg-[var(--color-dark-bg)] text-white bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/fdd.jpg')" }}
      >
        {/* طبقة تغميق خفيفة */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-bg)]/60 via-[var(--color-dark-bg)]/80 to-[var(--color-dark-bg)]/60 pointer-events-none" />

        <div className="container-page relative z-10">
          <div className="max-w-2xl">
            
            {/* عنوان فرعي صغير */}
            <motion.span
              {...fadeUp(0)}
              className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[var(--color-brand-red)] mb-3"
            >
            </motion.span>

            {/* H1 العنوان الرئيسي عريض وضخم */}
            <motion.h1
              {...fadeUp(0.08)}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] drop-shadow-md"
            >
              حماية حقوق المستهلك <br />
              <span className="text-[var(--color-brand-red)]">بسرعة واحترافية عالية</span>
            </motion.h1>

            {/* النص الفرعي */}
            <motion.p
              {...fadeUp(0.16)}
              className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed font-medium max-w-xl"
            >
منصة رقمية لتقديم شكاوى المستهلكين وملاحظاتهم بسهولة، مع تنظيم بيانات الشكوى ، وتسهيل متابعة الطلب من مكان واحد.
            </motion.p>

            {/* زر الإجراء الرئيسي CTA - شفاف مع حافة/بوردر أبيض وشكل بيضوي */}
            <motion.div
              {...fadeUp(0.24)}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href="#complaint-form"
                onClick={onPrimaryClick}
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white bg-transparent hover:bg-white/10 px-7 py-3 text-base font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>تقديم شكوى جديدة</span>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-[var(--color-dark-bg)] transition-transform group-hover:-translate-x-1">
                  <ArrowLeft className="h-4 w-4" />
                </div>
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          2. FLOATING OVERLAP CARDS - البطاقات العائمة
         ========================================== */}
      <section dir="rtl" className="relative z-30 container-page hero-overlap-grid">
        <motion.div
          {...fadeUp(0.32)}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-none items-center"
        >
          {/* الحاوية باللون الفضي/الرمادي المحدد [#1F2428] */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-0 bg-[#1F2428] border border-white/10 shadow-lg">
            {/* البطاقة الأولى */}
            <div className="bg-[#1F2428] p-5 md:p-6 flex flex-col justify-center border-b sm:border-b-0 sm:border-l border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="h-6 w-6 text-white shrink-0" />
                <h3 className="text-base md:text-lg font-bold text-white">تأطير الشكوى</h3>
              </div>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                تنظيم البيانات والمرفقات الثبوتية وتجهيز ملف الشكوى للعرض المباشر.
              </p>
            </div>

            {/* البطاقة الثانية */}
            <div className="bg-[#1F2428] p-5 md:p-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="h-6 w-6 text-white shrink-0" />
                <h3 className="text-base md:text-lg font-bold text-white">متابعة لحظية</h3>
              </div>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                استعلام سريع عن حالة الطلب ومعرفة التحديثات فور طرئها عبر الرقم المرجعي.
              </p>
            </div>
          </div>

          {/* البطاقة الحمراء البارزة */}
          <div className="bg-[var(--color-brand-red)] p-6 md:p-8 text-white flex flex-col justify-center shadow-xl z-20 md:-my-6 hover:bg-[var(--color-brand-red-hover)] transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <PhoneCall className="h-6 w-6 text-white shrink-0" />
              <h3 className="text-base md:text-lg font-extrabold text-white">بلاغ عاجل / استفسار</h3>
            </div>
            <p className="text-xs md:text-sm text-white/90 leading-relaxed">
              هل تحتاج لمساعدة فورية؟ تواصل مباشر مع فريق الدعم والمساندة لتقديم الاستشارة.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}