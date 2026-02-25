"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ServicesExcellence() {
  const t = useTranslations("ServicesPage");

  const features = [
    t("exc_feat_1"),
    t("exc_feat_2"),
    t("exc_feat_3"),
    t("exc_feat_4"),
  ];

  return (
    <section className="w-full bg-[#f29c38] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative min-h-[500px]">
        
        {/* Left Side: Overlapping Image */}
        <motion.div 
          className="w-full md:w-1/2 h-[400px] md:h-[600px] relative md:-my-12 z-10 p-6 md:p-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl md:translate-y-6">
            <Image 
              src="/framing@2x-100.webp" 
              alt="Roof Maintenance"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side: Text & Features */}
        <motion.div 
          className="w-full md:w-1/2 p-10 md:p-16 text-white z-20 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4 block">
            {t("exc_label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-10 leading-tight">
            {t("exc_title")}
          </h2>

          <div className="flex flex-wrap gap-4">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                className="bg-white rounded-full px-6 py-3 flex items-center gap-3 shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
              >
                <CheckCircle2 className="w-5 h-5 text-[#f29c38]" strokeWidth={3} />
                <span className="text-black font-semibold text-sm md:text-base">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
