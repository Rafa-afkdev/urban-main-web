"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ServicesGrid() {
  const t = useTranslations("ServicesPage");

  const services = [
    {
      id: "siding",
      title: t("srv_siding_title"),
      desc: t("srv_siding_desc"),
      image: "/what-is-batten-siding.webp",
    },
    {
      id: "trim",
      title: t("srv_trim_title"),
      desc: t("srv_trim_desc"),
      image: "/installing-wall-trim-2048x1152.png",
    },
    {
      id: "flooring",
      title: t("srv_flooring_title"),
      desc: t("srv_flooring_desc"),
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "framing",
      title: t("srv_framing_title"),
      desc: t("srv_framing_desc"),
      image: "/townhome-construction-with-wood-framing_198639-27968.webp",
    },
    {
      id: "remodeling",
      title: t("srv_remodeling_title"),
      desc: t("srv_remodeling_desc"),
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "roofing",
      title: t("srv_roofing_title"),
      desc: t("srv_roofing_desc"),
      image: "/617abfbdcf4b96b9fc779566_roof-replacement.webp",
    },
    {
      id: "painting",
      title: t("srv_painting_title"),
      desc: t("srv_painting_desc"),
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100 }
    }
  };

  return (
    <section className="w-full bg-[#f9f9f9] py-24 px-6 md:px-16 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center">

        <motion.div 
          className="text-center mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#f29c38] font-bold uppercase tracking-widest text-sm mb-4 block">
            {t("grid_label")}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            {t("grid_title")}
          </h2>
        </motion.div>

        {/* 
          Using a responsive grid: 
          1 column on mobile, 2 columns on tablet, 3 columns on desktop. 
        */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              {/* Card Image Wrapper */}
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Decorative simple overlay line */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white drop-shadow-md">
                  {service.title}
                </h3>
              </div>

              {/* Card Content Wrapper */}
              <div className="p-8 flex-grow flex flex-col justify-start">
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
