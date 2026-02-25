"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ServicesGallery() {
  const t = useTranslations("ServicesPage");

  return (
    <section className="w-full bg-white py-24 px-6 md:px-16 flex justify-center border-t border-gray-100">
      <div className="max-w-7xl w-full flex flex-col items-center">
        
        <motion.div 
          className="text-center mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#f29c38] font-bold uppercase tracking-widest text-sm mb-4 block">
            {t("gal_label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6">
            {t("gal_title")}
          </h2>
          <p className="text-gray-600 text-lg">
            {t("gal_subtitle")}
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 w-full max-w-6xl">
          <motion.div 
            className="w-full flex justify-center text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#f29c38] text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest shadow-md">
              {t("gal_overlay")}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* ANTES COLUMN */}
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold bg-gray-100 text-gray-800 py-3 text-center rounded-xl uppercase tracking-widest border border-gray-200">
                {t("gal_before")}
              </h3>
              {[
                "/SaveClip.App_525154880_18069406595114115_5446811872384071524_n.jpg",
                "/SaveClip.App_525846000_18069406619114115_4494580438118424174_n.jpg",
                "/SaveClip.App_525921028_18069406604114115_4102313829335792199_n.jpg"
              ].map((src, idx) => (
                <motion.div 
                  key={`before-${idx}`}
                  className="relative group w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Image 
                    src={src} 
                    alt={`${t("gal_before")} ${idx + 1}`} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </motion.div>
              ))}
            </div>

            {/* DESPUÉS COLUMN */}
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold bg-[#f29c38]/10 text-[#f29c38] py-3 text-center rounded-xl uppercase tracking-widest border border-[#f29c38]/20">
                {t("gal_after")}
              </h3>
              {[
                "/SaveClip.App_526176609_18069406631114115_2174874644746543265_n.jpg",
                "/SaveClip.App_526209070_18069406649114115_8418453943247238327_n.jpg",
                "/SaveClip.App_527458281_18069406640114115_2768678360881597276_n.jpg"
              ].map((src, idx) => (
                <motion.div 
                  key={`after-${idx}`}
                  className="relative group w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                >
                  <Image 
                    src={src} 
                    alt={`${t("gal_after")} ${idx + 1}`} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
