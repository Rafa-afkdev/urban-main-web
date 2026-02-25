import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <div className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background Container */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* We use a wrapper to scale the iframe slightly up to hide edges and letterboxing */}
        <div className="absolute top-1/2 left-1/2 w-[300vw] md:w-[150vw] h-[300vh] md:h-[150vh] -translate-x-1/2 -translate-y-1/2">
           <iframe
            src="https://www.youtube.com/embed/VA3_vd9kH3M?autoplay=1&mute=1&loop=1&playlist=VA3_vd9kH3M&controls=0&showinfo=0&rel=0&playsinline=1"
            className="absolute top-0 left-0 w-full h-full border-none pointer-events-none"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Background Video"
          />
        </div>
        
        {/* Dark Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 mt-16 md:mt-0">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider mb-2 md:mb-4 drop-shadow-md">
          {t("title")}
        </h1>
        <p className="text-white text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-8 drop-shadow-md">
          {t("subtitle")}
        </p>
      </div>
    </div>
  );
}
