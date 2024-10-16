export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Jadi Jago JavaScript!",
    description:
      "Ebook panduan lengkap untuk belajar JavaScript dari pemula hingga mahir.",
    image: "https://www.jagojs.my.id/promo.png",
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: "63000",
      availability: "https://schema.org/InStock",
    },
    author: {
      "@type": "Person",
      name: "Ahmad Sarian",
    },
    publisher: {
      "@type": "Organization",
      name: "Jagojs",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "125",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
