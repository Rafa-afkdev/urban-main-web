import { useTranslations } from "next-intl";

export default function BottomBanner() {
  const t = useTranslations("BottomBanner");

  return (
    <div className="w-full bg-[#f29c38] py-8 md:py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between z-20 relative">
      <h2 className="text-white text-xl md:text-3xl font-bold mb-6 md:mb-0 max-w-3xl text-center md:text-left drop-shadow-sm">
        {t("text")}
      </h2>
      <a 
        href="https://app.urbcontractors.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="border-2 border-white text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-[#f29c38] transition-colors uppercase tracking-wider font-semibold cursor-pointer"
      >
        {t("button")}
      </a>
    </div>
  );
}
