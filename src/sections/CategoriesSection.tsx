"use client";

import {
  Smartphone,
  ShoppingCart,
  Building2,
  Plane,
  CreditCard,
  Wrench,
  Truck,
  Users,
  LucideIcon,
} from "lucide-react";

export interface CategoryItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const categories: CategoryItem[] = [
  { icon: Smartphone, title: "شكاوى الاتصالات والإنترنت", desc: "عقود الهواتف، مشاكل التغطية، ورسوم الخدمات المضافة بدون إذن." },
  { icon: ShoppingCart, title: "التسوق الإلكتروني والمتاجر", desc: "المتاجر الإلكترونية، التأخر في التوصيل، وسياسات الإرجاع المضللة." },
  { icon: Building2, title: "العقارات والوساطة التجارية", desc: "خلافات شركات إدارة العقارات، الرسوم الإدارية، وعقود الوساطة." },
  { icon: Plane, title: "السفر والحجوزات السياحية", desc: "إلغاء وتأخير الرحلات، مشكلات حجوزات الفنادق، والشركات السياحية." },
  { icon: CreditCard, title: "البنوك والخدمات المالية", desc: "الرسوم المجحفة، المعاملات غير المصرح بها، والخدمات المصرفية." },
  { icon: Wrench, title: "الصيانة والخدمات المنزلية", desc: "عقود الصيانة، الأجهزة الكهربائية، والخدمات الفنية غير المطابقة." },
  { icon: Truck, title: "تطبيقات التوصيل للنقل", desc: "تطبيقات التوصيل الذكية، طلبات الطعام، وخدمات النقل الخاص." },
  { icon: Users, title: "خدمات القطاع الخاص الأخرى", desc: "الشكاوى العامة ضد الشركات والمراكز التجارية الخاصة بالدولة." },
];

export function CategoriesSection() {
  return (
    <section dir="rtl" className="py-20 md:py-28 bg-[#1F2428] border-y border-white/5 relative">
      <div className="container-page">
        
        {/* العنوان الرئيسي للسكشن */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-black uppercase tracking-widest text-[var(--color-brand-red)]">
            القطاعات المشمولة
          </span>
          <h2 className="mt-2 text-3xl font-black text-white md:text-4xl tracking-tight">
            مجالات الشكاوى التجارية
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-400 font-medium leading-relaxed">
            نغطي مختلف القطاعات التجارية الخاصة لضمان وصول صوتك وحماية حقوقك الشاملة.
          </p>
        </div>

        {/* شبكة البطاقات */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, idx) => (
            <article
              key={idx}
              className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-2xl"
            >
              {/* أيقونة المجال */}
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-white/5 text-[var(--color-brand-red)] transition-all duration-300 group-hover:bg-[var(--color-brand-red)] group-hover:text-white group-hover:scale-110">
                <c.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
              </div>

              {/* عنوان وتفاصيل المجال */}
              <h3 className="mt-5 text-base font-bold text-gray-100 transition-colors duration-200 group-hover:text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-400 font-medium">
                {c.desc}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}