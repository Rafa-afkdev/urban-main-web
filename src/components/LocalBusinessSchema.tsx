export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Urban Contractors",
    url: "https://urbcontractors.com",
    logo: "https://urbcontractors.com/logo.png",
    image: "https://urbcontractors.com/INICIO-Excelencia-servicios-remodelacion-scaled.jpg",
    description:
      "Urban Contractors offers expert remodeling and construction services in Pensacola, Florida. Specializing in siding, framing, trim, roofing, flooring, and full home renovation.",
    telephone: "+19293583319",
    email: "Contractorsurban@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pensacola",
      addressRegion: "FL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.4213,
      longitude: -87.2169,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    areaServed: {
      "@type": "State",
      name: "Florida",
    },
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction & Remodeling Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Siding Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Framing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trim & Finish" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Remodeling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Painting" } },
      ],
    },
    sameAs: [
      "https://urbcontractors.com",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: needed for JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
