const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://alternine.co/#website",
      url: "https://alternine.co/",
      name: "Alter Nine",
      inLanguage: ["en", "bg"],
      publisher: { "@id": "https://alternine.co/#organization" }
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://alternine.co/#organization",
      name: "Alter Nine",
      legalName: "Booka LTD (Буука ЕООД)",
      url: "https://alternine.co/",
      logo: "https://alternine.co/9-logo.svg",
      image: "https://alternine.co/social-card.svg",
      email: "hello@alternine.co",
      description:
        "Custom-built websites with integrated booking, deposits and appointment management for service businesses.",
      founder: { "@type": "Person", name: "Delyana" },
      taxID: "208363525",
      vatID: "BG208363525",
      address: {
        "@type": "PostalAddress",
        addressCountry: "BG"
      },
      areaServed: ["BG", "EU", "GB", "US"],
      availableLanguage: ["en", "bg"],
      sameAs: [
        "https://www.linkedin.com/in/alternine",
        "https://instagram.com/alternine.co"
      ],
      knowsAbout: [
        "Custom website design",
        "Online booking systems",
        "Web development for service businesses",
        "Deposit collection",
        "Appointment management"
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom website with integrated booking",
              serviceType: "Web design and development"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bilingual website (English / Bulgarian)",
              serviceType: "Web design and development"
            }
          }
        ]
      }
    }
  ]
};

export function SiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
    />
  );
}
