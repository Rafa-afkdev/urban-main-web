import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locate: string }> }) {
  const { locate } = await params;
  const t = await getTranslations({ locale: locate, namespace: "Metadata" });
  const baseUrl = "https://urbcontractors.com";

  return {
    title: t("contact_title"),
    description: t("contact_description"),
    keywords: t("contact_keywords"),
    alternates: {
      canonical: `${baseUrl}/${locate}/contact`,
      languages: {
        en: `${baseUrl}/en/contact`,
        es: `${baseUrl}/es/contact`,
      },
    },
    openGraph: {
      title: t("contact_title"),
      description: t("contact_description"),
      url: `${baseUrl}/${locate}/contact`,
      siteName: "Urban Contractors",
      locale: locate === "es" ? "es_US" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("contact_title"),
      description: t("contact_description"),
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": "Pensacola, Florida",
      "geo.position": "30.4213;-87.2169",
      ICBM: "30.4213, -87.2169",
    },
  };
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locate: string }>;
}) {
  const { locate } = await params;
  setRequestLocale(locate);

  return (
    <main className="min-h-screen bg-[#f9f9f9]">
      <Navbar />
      
      <ContactHero />

      <section className="w-full py-20 px-6 md:px-16 flex justify-center">
        <div className="max-w-3xl w-full flex justify-center">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
