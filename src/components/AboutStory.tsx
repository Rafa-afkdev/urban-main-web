"use client";
import { motion } from "framer-motion";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutStory() {
  const t = useTranslations("AboutPage");

  const features = [
    t("story_feat1"),
    t("story_feat2"),
    t("story_feat3"),
    t("story_feat4"),
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 flex justify-center overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-16 lg:gap-8">
        
        {/* Left Column: Text Content */}
        <motion.div 
          className="w-full lg:w-[45%] flex flex-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-[#f29c38] font-bold uppercase tracking-widest text-sm mb-4">
            {t("story_label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight max-w-lg">
            {t("story_title")}
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            {t("story_p1")}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx} 
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
              >
                <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#f29c38]" strokeWidth={3} />
                </div>
                <span className="text-black font-medium text-sm">{feat}</span>
              </motion.div>
            ))}
          </div>

          {/* Blockquote */}
          <motion.div 
            className="pl-6 border-l-2 border-[#f29c38]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-gray-600 text-sm italic leading-relaxed max-w-md">
              "{t("story_quote")}"
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column: Overlapping Images Layout */}
        <motion.div 
          className="w-full lg:w-[55%] relative h-[450px] md:h-[600px] mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          
          {/* Main Large Background Image */}
          <div className="absolute right-0 top-0 w-[85%] md:w-[80%] h-[90%] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Suburban homes aerial view"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Smaller Overlapping Image */}
          <motion.div 
            className="absolute left-0 top-[20%] md:top-[25%] w-[45%] md:w-[40%] h-[40%] md:h-[50%] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
             <Image
              src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Home construction in progress"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </motion.div>

          {/* Floating Rating Badge */}
          <motion.div 
            className="absolute bottom-[5%] right-[10%] bg-white rounded-2xl shadow-xl px-6 py-4 flex flex-col items-center z-20 border border-gray-100"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
          >
            <span className="text-[#f29c38] text-4xl font-extrabold mb-1">{t("story_badge_rating")}</span>
            <span className="text-black text-xs font-semibold uppercase tracking-wider">{t("story_badge_text")}</span>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
