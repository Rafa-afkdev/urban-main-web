"use client";
import { motion } from "framer-motion";

import { useTranslations } from "next-intl";

export default function AboutValues() {
  const t = useTranslations("AboutPage");

  const values = [
    {
      title: t("val1_title"),
      text: t("val1_text"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f29c38]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
      )
    },
    {
      title: t("val2_title"),
      text: t("val2_text"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f29c38]"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      )
    },
    {
      title: t("val3_title"),
      text: t("val3_text"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f29c38]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#f9f9f9] py-20 px-6 md:px-16 flex flex-col items-center">
      <div className="max-w-7xl flex flex-col items-center">
        <motion.span 
          className="text-[#f29c38] font-bold uppercase tracking-widest text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("values_label")}
        </motion.span>
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-black mb-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("values_title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((v, idx) => (
            <motion.div 
              key={idx} 
              className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.2) }}
            >
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-6">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{v.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {v.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
