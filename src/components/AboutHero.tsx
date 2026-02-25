"use client";
import { motion } from "framer-motion";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutHero() {
  const t = useTranslations("AboutPage");

  return (
    <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Beautiful home exterior"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl flex flex-col items-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t("hero_title")}
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl font-medium max-w-2xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {t("hero_subtitle")}
        </motion.p>
      </div>
    </section>
  );
}
