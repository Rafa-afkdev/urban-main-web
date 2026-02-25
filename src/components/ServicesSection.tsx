import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ServicesSection() {
  const t = useTranslations("ServicesSection");

  const services = [
    {
      title: t("service1_title"),
      text: t("service1_text"),
      image: "/INICIO-Revestimiento-scaled.jpg",
    },
    {
      title: t("service2_title"),
      text: t("service2_text"),
      image: "/INICIO-Moldura-y-Acabado-scaled.jpg",
    },
    {
      title: t("service3_title"),
      text: t("service3_text"),
      image: "/INICIO-Reparacion-scaled.jpg",
    },
  ];

  return (
    <div className="w-full bg-black py-16 px-6 md:px-16 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-7xl">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-start text-white">
            <div className="w-full aspect-[4/3] relative mb-6 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            
            <h3 className="text-lg md:text-xl font-bold mb-3">
              {service.title}
            </h3>
            
            <p className="text-gray-300 text-xs md:text-sm mb-6 leading-relaxed flex-grow">
              {service.text}
            </p>
            
            <button className="bg-[#f29c38] hover:bg-[#e08a26] text-white font-bold py-2 px-6 rounded transition-colors text-xs md:text-sm mt-auto">
              {t("button")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
