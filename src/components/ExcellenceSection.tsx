import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ExcellenceSection() {
  const t = useTranslations("ExcellenceSection");

  return (
    <div className="w-full bg-[#111111] grid grid-cols-1 md:grid-cols-2">
      {/* Image Side */}
      <div className="relative h-[300px] md:h-auto min-h-[400px]">
        <Image
          src="/INICIO-Excelencia-servicios-remodelacion-scaled.jpg"
          alt={t("title")}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Text Side */}
      <div className="flex flex-col justify-center px-6 py-12 md:px-16 md:py-24 text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
          {t("title")}
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {t("text")}
        </p>
      </div>
    </div>
  );
}
