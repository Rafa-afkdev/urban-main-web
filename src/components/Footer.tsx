import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navbar");

  return (
    <footer className="w-full bg-[#111111] text-gray-300 py-12 md:py-16 px-6 md:px-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        
        {/* Column 1: Brand & Info */}
        <div className="flex flex-col items-start">
          <Link href="/" className="mb-6 flex items-center gap-2">
			      <Image
              src="/logo-urban.png"
              alt="Urban Contractors Logo"
              width={180}
              height={55}
              className="w-40 md:w-48 h-auto"
            />
          </Link>
          <p className="text-sm leading-relaxed text-gray-400 mb-6 max-w-sm">
            {t("description")}
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-start md:items-center">
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Enlaces Rápidos</h3>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-[#f29c38] transition-colors">{tNav("home")}</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#f29c38] transition-colors">{tNav("about")}</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#f29c38] transition-colors">{tNav("services")}</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f29c38] transition-colors">{tNav("contact")}</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col items-start md:items-end text-left md:text-right">
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">{t("contact_title")}</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f29c38] shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>{t("location")}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f29c38] shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+19293583319" className="hover:text-[#f29c38] transition-colors">
                  {t("phone")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f29c38] shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:Contractorsurban@gmail.com" className="hover:text-[#f29c38] transition-colors break-all">
                  {t("email")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <p>{t("copyright")}</p>
        <div className="mt-4 md:mt-0 flex gap-4">
           {/* Placeholder for social media icons if you want them later */}
           <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f29c38] transition-colors cursor-pointer" />
           <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f29c38] transition-colors cursor-pointer" />
           <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f29c38] transition-colors cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
