"use client";
import { motion } from "framer-motion";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutVisionMission() {
  const t = useTranslations("AboutPage");

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 flex flex-col items-center">
      <div className="max-w-7xl w-full flex flex-col gap-24">
        
        {/* Vision Block */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Left */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#f29c38] font-bold uppercase tracking-widest text-sm mb-4">
              {t("vision_label")}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              {t("vision_title")}
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
              {t("vision_text")}
            </p>
          </motion.div>
          {/* Image Right */}
          <motion.div 
            className="w-full lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
               <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
                alt="Home construction teamwork and architecture"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Mission Block */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
           {/* Image Left */}
           <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
               <Image
                src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
                alt="Aerial view of residential neighborhood construction"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
          {/* Text Right */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <span className="text-[#f29c38] font-bold uppercase tracking-widest text-sm mb-4">
              {t("mission_label")}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              {t("mission_title")}
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
              {t("mission_text")}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
