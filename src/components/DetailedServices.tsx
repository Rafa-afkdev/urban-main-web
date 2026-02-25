import { useTranslations } from "next-intl";
import Image from "next/image";

export default function DetailedServices() {
  const t = useTranslations("DetailedServices");

  return (
    <div className="w-full bg-white py-16 px-6 md:px-16 flex flex-col items-center gap-16 md:gap-24">
      {/* First Row: Trim (Text Left, Image Right) */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-10 md:gap-16">
        <div className="w-full md:w-1/2 flex flex-col">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
            {t("label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            {t("trim_title")}
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            {t("trim_p1")}
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {t("trim_p2")}
          </p>
        </div>
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/lifestyle-scene-from-community-showing-care-support-from-people-scaled.jpg"
            alt={t("trim_title")}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Second Row: Siding (Image Left, Text Right) */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-10 md:gap-16">
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/vinyl-siding-vs-polymer-siding.jpg"
            alt={t("siding_title")}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
            {t("label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            {t("siding_title")}
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            {t("siding_p1")}
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {t("siding_p2")}
          </p>
        </div>
      </div>
    </div>
  );
}
