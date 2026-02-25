import BottomBanner from "@/components/BottomBanner";
import DetailedServices from "@/components/DetailedServices";
import ExcellenceSection from "@/components/ExcellenceSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locate: string }> }) {
  const { locate } = await params;
  const t = await getTranslations({ locale: locate, namespace: "Metadata" });
  const baseUrl = "https://urbcontractors.com";

  return {
    title: t("home_title"),
    description: t("home_description"),
    keywords: t("home_keywords"),
    alternates: {
      canonical: `${baseUrl}/${locate}`,
      languages: {
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
      },
    },
    openGraph: {
      title: t("home_title"),
      description: t("home_description"),
      url: `${baseUrl}/${locate}`,
      siteName: "Urban Contractors",
      locale: locate === "es" ? "es_US" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("home_title"),
      description: t("home_description"),
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": "Pensacola, Florida",
      "geo.position": "30.4213;-87.2169",
      ICBM: "30.4213, -87.2169",
    },
  };
}

export default async function Home({ params }: { params: Promise<{ locate: string }> }) {
  const { locate } = await params;
  setRequestLocale(locate);

  return (
    <main className="min-h-screen bg-black flex flex-col relative font-sans">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <BottomBanner />

      <section id="services">
        <ServicesSection />
        <DetailedServices />
      </section>

      <section id="about">
        <ExcellenceSection />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
