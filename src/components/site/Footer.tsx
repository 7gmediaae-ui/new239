"use client";

import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer dir="rtl" className="mt-20 border-t border-white/10 bg-[var(--color-dark-bg)] text-white">
      {/* الجزء العلوي للفوتر */}
      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        
        {/* اللوغو والوصف */}
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex items-center gap-2.5 font-bold text-white">
            <img 
              src="/united-arab-emirates (1).svg" 
              alt="شعار منصة حماية المستهلك" 
              width={40} 
              height={40} 
              className="h-10 w-auto shrink-0 object-contain" 
              loading="lazy"
            />
            <span className="text-xl font-black text-white tracking-tight">منصة حماية المستهلك</span>
          </Link>
          <p className="mt-4 max-w-md text-xs leading-6 text-white/85 font-medium">
            منصة مستقلة تساعد المستهلكين في الإمارات على توثيق شكاواهم تجاه الشركات
            الخاصة ومتابعتها. المنصة غير تابعة لأي جهة حكومية ولا تمثلها بأي شكل.
          </p>
        </div>

        {/* روابط سريعة */}
        <nav aria-label="روابط سريعة">
          <h3 className="text-sm font-extrabold text-white border-b border-white/20 pb-2 inline-block">روابط سريعة</h3>
          <ul className="mt-4 space-y-2.5 text-xs text-white/90 font-medium">
            <li><Link to="/about" className="transition-colors hover:text-white hover:underline">من نحن</Link></li>
            <li><Link to="/how-it-works" className="transition-colors hover:text-white hover:underline">كيف تعمل المنصة</Link></li>
            <li><Link to="/faq" className="transition-colors hover:text-white hover:underline">الأسئلة الشائعة</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-white hover:underline">تواصل معنا</Link></li>
          </ul>
        </nav>

        {/* روابط قانونية والتواصل */}
        <nav aria-label="روابط قانونية">
          <h3 className="text-sm font-extrabold text-white border-b border-white/20 pb-2 inline-block">قانوني</h3>
          <ul className="mt-4 space-y-2.5 text-xs text-white/90 font-medium">
            <li><Link to="/privacy" className="transition-colors hover:text-white hover:underline">سياسة الخصوصية</Link></li>
            <li><Link to="/terms" className="transition-colors hover:text-white hover:underline">الشروط والأحكام</Link></li>
            <li>
              <a 
                href="mailto:moetshakawi-uae@gmail.com" 
                className="inline-flex items-center gap-2 text-white transition-opacity hover:opacity-80" 
                dir="ltr"
              >
                <Mail className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                <span className="font-bold text-white">moetshakawi-uae@gmail.com</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* الشريط السفلي للحقوق والتنويه */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-4 text-xs font-semibold text-white/90 md:flex-row">
          <p>© {currentYear} منصة حماية المستهلك. جميع الحقوق محفوظة.</p>
          <p className="text-center md:text-right text-white/80">منصة حماية المستهلك — ليست جهة حكومية ولا تمثل أي جهة رسمية في الإمارات.</p>
        </div>
      </div>
    </footer>
  );
}