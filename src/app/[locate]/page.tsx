import BottomBanner from "@/components/BottomBanner";
import DetailedServices from "@/components/DetailedServices";
import ExcellenceSection from "@/components/ExcellenceSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import { setRequestLocale } from "next-intl/server";

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
