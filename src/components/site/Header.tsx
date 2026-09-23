"use client";

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/how-it-works", label: "كيف تعمل المنصة" },
  { to: "/faq", label: "الأسئلة الشائعة" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[var(--color-dark-bg)]/95 backdrop-blur-md transition-all duration-300">
      <div className="container-page flex h-20 items-center justify-between p-0 pl-0 md:pl-0">
        
        {/* 1. أقصى اليمين: اللوغو الشفاف مع العنوان والعنوان الفرعي */}
        <div className="flex items-center gap-3 pr-4 md:pr-0">
          <Link 
            to="/" 
            className="group flex items-center gap-3 transition-transform duration-200 active:scale-95"
          >
            {/* صورة SVG مباشرة */}
            <img 
              src="/united-arab-emirates (1).svg" 
              alt="شعار دولة الإمارات العربية المتحدة" 
              className="h-11 w-auto object-contain"
            />

            {/* النص والعنوان الفرعي الناعم */}
            <div className="flex flex-col justify-center">
              <span className="text-base md:text-lg font-light text-white tracking-wide leading-tight">
                منصة حماية المستهلك
              </span>
              <span className="text-[10px] md:text-xs font-extralight text-gray-400 tracking-wider">
                البوابة الرسمية الموحدة للشؤون والشكاوى
              </span>
            </div>
          </Link>
        </div>

        {/* 2. المنتصف: روابط التنقل */}
        <nav 
          aria-label="التنقل الرئيسي"
          className="hidden md:flex items-center gap-8"
        >
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white"
              activeProps={{ 
                className: "text-white font-bold relative after:absolute after:-bottom-1 after:right-0 after:w-full after:h-[2px] after:bg-[var(--color-brand-red)]" 
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* 3. أقصى اليسار: زر تقديم الشكوى */}
        <div className="flex items-center h-full">
          <div className="hidden md:flex h-full items-center">
            <Link
              to="/"
              hash="complaint-form"
              className="group h-full inline-flex items-center gap-3 bg-[var(--color-brand-red)] hover:bg-[var(--color-brand-red-hover)] px-8 text-sm font-bold text-white transition-all duration-300"
            >
              <span>تقديم شكوى</span>
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1.5" />
            </Link>
          </div>

          {/* زر القائمة للموبايل */}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-white/15 bg-white/5 text-white md:hidden ml-4 transition-colors hover:bg-white/10"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5 shrink-0" /> : <Menu className="h-5 w-5 shrink-0" />}
          </button>
        </div>

      </div>

      {/* القائمة الجانبية للموبايل */}
      <div 
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-white/10 bg-[var(--color-dark-bg)]", 
          open ? "max-h-[420px] opacity-100 py-4 px-4" : "max-h-0 opacity-0 py-0 px-4"
        )}
      >
        <div className="flex flex-col gap-3">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-gray-300 hover:text-white"
              activeProps={{ className: "text-[var(--color-brand-red)] font-bold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}

          <div className="pt-2 mt-2 border-t border-white/10">
            <Link
              to="/"
              hash="complaint-form"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-[var(--color-brand-red)] px-5 py-3 text-sm font-bold text-white shadow-glow"
            >
              <span>تقديم شكوى الآن</span>
              <ArrowLeft className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}