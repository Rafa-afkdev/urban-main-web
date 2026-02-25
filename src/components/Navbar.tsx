'use client';
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6 px-4 md:px-16 flex justify-between items-center text-white pointer-events-auto">
      {/* Logo Container */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-urban.png"
            alt="Urban Contractors Logo"
            width={200}
            height={60}
            className="w-40 md:w-56 h-auto"
            priority
          />
        </Link>
      </div>

      {/* Links and Language Switcher */}
      <div className="flex items-center gap-4 md:gap-8 text-xs md:text-sm font-medium">
        <Link href="#home" className="hover:text-orange-400 transition-colors hidden md:block">{t("home")}</Link>
        <Link href="#about" className="hover:text-orange-400 transition-colors hidden md:block">{t("about")}</Link>
        <Link href="#services" className="hover:text-orange-400 transition-colors hidden md:block">{t("services")}</Link>
        <Link href="#contact" className="hover:text-orange-400 transition-colors hidden md:block">{t("contact")}</Link>

        {/* Language Switcher */}
        <div className="flex items-center gap-2 md:gap-3 ml-2 md:ml-4 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
          <button 
            onClick={() => changeLocale('es')}
            className={`flex items-center justify-center w-6 h-6 rounded-full overflow-hidden transition-all hover:scale-110 ${locale === 'es' ? 'outline outline-2 outline-offset-1 outline-orange-400 opacity-100' : 'opacity-50 hover:opacity-100 grayscale-[50%]'}`}
            title="Español"
            aria-label="Cambiar a Español"
          >
            <Image
              src="https://flagcdn.com/w40/es.png"
              alt="Spain Flag"
              width={24}
              height={24}
              className="w-full h-full object-cover"
            />
          </button>
          
          <div className="w-[1px] h-4 bg-white/30" />
          
          <button 
            onClick={() => changeLocale('en')}
             className={`flex items-center justify-center w-6 h-6 rounded-full overflow-hidden transition-all hover:scale-110 ${locale === 'en' ? 'outline outline-2 outline-offset-1 outline-orange-400 opacity-100' : 'opacity-50 hover:opacity-100 grayscale-[50%]'}`}
             title="English"
             aria-label="Switch to English"
          >
            <Image
              src="https://flagcdn.com/w40/us.png"
              alt="USA Flag"
              width={24}
              height={24}
               className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
