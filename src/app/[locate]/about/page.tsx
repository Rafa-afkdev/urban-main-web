import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutValues from "@/components/AboutValues";
import AboutVisionMission from "@/components/AboutVisionMission";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locate: string }> }) {
  const { locate } = await params;
  const t = await getTranslations({ locale: locate, namespace: "Metadata" });
  const baseUrl = "https://urbcontractors.com";

  return {
    title: t("about_title"),
    description: t("about_description"),
    keywords: t("about_keywords"),
    alternates: {
      canonical: `${baseUrl}/${locate}/about`,
      languages: {
        en: `${baseUrl}/en/about`,
        es: `${baseUrl}/es/about`,
      },
    },
    openGraph: {
      title: t("about_title"),
      description: t("about_description"),
      url: `${baseUrl}/${locate}/about`,
      siteName: "Urban Contractors",
      locale: locate === "es" ? "es_US" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("about_title"),
      description: t("about_description"),
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": "Pensacola, Florida",
      "geo.position": "30.4213;-87.2169",
      ICBM: "30.4213, -87.2169",
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locate: string }> }) {
  const { locate } = await params;
  setRequestLocale(locate);

  return (
    <main className="min-h-screen bg-black flex flex-col relative font-sans">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutVisionMission />
      <Footer />
    </main>
  );
}
