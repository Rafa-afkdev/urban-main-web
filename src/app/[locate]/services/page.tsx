import BottomBanner from "@/components/BottomBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicesExcellence from "@/components/ServicesExcellence";
import ServicesGallery from "@/components/ServicesGallery";
import ServicesGrid from "@/components/ServicesGrid";
import ServicesHero from "@/components/ServicesHero";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locate: string }> }) {
  const { locate } = await params;
  const t = await getTranslations({ locale: locate, namespace: "Metadata" });
  const baseUrl = "https://urbcontractors.com";

  return {
    title: t("services_title"),
    description: t("services_description"),
    keywords: t("services_keywords"),
    alternates: {
      canonical: `${baseUrl}/${locate}/services`,
      languages: {
        en: `${baseUrl}/en/services`,
        es: `${baseUrl}/es/services`,
      },
    },
    openGraph: {
      title: t("services_title"),
      description: t("services_description"),
      url: `${baseUrl}/${locate}/services`,
      siteName: "Urban Contractors",
      locale: locate === "es" ? "es_US" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("services_title"),
      description: t("services_description"),
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": "Pensacola, Florida",
      "geo.position": "30.4213;-87.2169",
      ICBM: "30.4213, -87.2169",
    },
  };
}

export default async function ServicesPage({
  params
}: {
  params: Promise<{ locate: string }>;
}) {
  const { locate } = await params;
  setRequestLocale(locate);

  return (
    <main className="min-h-screen bg-[#f9f9f9]">
      <Navbar />
      
      <ServicesHero />
      <ServicesGrid />
      <ServicesExcellence />
      <ServicesGallery />

      <BottomBanner />
      <Footer />
    </main>
  );
}
