import type { Metadata } from 'next'
import './globals.css'

// Schema Markup - wird als JSON-LD im <head> gerendert
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.mypraxis.at/#organization",
      "name": "mypraxis.at – Digitale Positionierung für Ärzte",
      "alternateName": "mypraxis.at by Kevin Hofbauer e.U.",
      "description": "Spezialisiert auf digitale Positionierung, KI-Sichtbarkeit und strukturierte Daten für niedergelassene Ärztinnen und Ärzte in Österreich. Tiefenrecherche, maßgeschneiderte Texte und KI-Readiness für Einzelordinationen und Ärztezentren. Bis zu 30 % KMU.DIGITAL Förderung.",
      "url": "https://www.mypraxis.at",
      "logo": "https://www.mypraxis.at/logo.png",
      "image": "https://www.mypraxis.at/og-image.png",
      "telephone": "+43 664 19 15 447",
      "email": "office@mypraxis.at",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hauptplatz 12",
        "addressLocality": "Vitis",
        "postalCode": "3902",
        "addressRegion": "Niederösterreich",
        "addressCountry": "AT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.7558,
        "longitude": 15.3172
      },
      "founder": {
        "@type": "Person",
        "@id": "https://www.mypraxis.at/#kevin-hofbauer",
        "name": "Kevin Hofbauer",
        "jobTitle": "Inhaber & Digitalisierungsberater für Ärzte",
        "worksFor": { "@id": "https://www.mypraxis.at/#organization" }
      },
      "areaServed": [
        { "@type": "Country", "name": "Österreich", "sameAs": "https://www.wikidata.org/wiki/Q40" },
        { "@type": "AdministrativeArea", "name": "Niederösterreich" },
        { "@type": "AdministrativeArea", "name": "Wien" },
        { "@type": "AdministrativeArea", "name": "Oberösterreich" },
        { "@type": "AdministrativeArea", "name": "Salzburg" },
        { "@type": "AdministrativeArea", "name": "Steiermark" },
        { "@type": "AdministrativeArea", "name": "Kärnten" },
        { "@type": "AdministrativeArea", "name": "Burgenland" },
        { "@type": "AdministrativeArea", "name": "Tirol" },
        { "@type": "AdministrativeArea", "name": "Vorarlberg" }
      ],
      "knowsAbout": [
        "Digitale Positionierung für Ärzte",
        "KI-Sichtbarkeit für Arztpraxen",
        "KI-Readiness Optimierung",
        "Schema Markup für medizinische Einrichtungen",
        "Strukturierte Daten Physician MedicalOrganization",
        "DSGVO-konforme Praxis-Websites",
        "ÖÄK-konformes Webdesign",
        "Local SEO für Ärzte",
        "KI-Telefonassistenten für Arztpraxen",
        "llms.txt Implementierung",
        "Digitale Infrastruktur für Ärztezentren",
        "KMU.DIGITAL Förderprojekte"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Leistungen für Ärzte und Ärztezentren",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Praxis-Website",
              "description": "Professionelle, rechtssichere Website für niedergelassene Ärztinnen und Ärzte in Österreich. Individuelles Design, Local SEO, Basis Schema Markup, DSGVO- und ÖÄK-konforme Umsetzung, 12 Monate technische Betreuung."
            },
            "priceSpecification": { "@type": "PriceSpecification", "price": "3900", "priceCurrency": "EUR", "valueAddedTaxIncluded": false }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digitale Positionierung",
              "description": "Umfassende digitale Positionierung für Wahlärzte. Tiefenrecherche, Zielgruppenanalyse, maßgeschneiderte Texte, KI-Readiness mit Schema Markup und llms.txt, KI-Telefonassistent, 12 Monate Betreuung."
            },
            "priceSpecification": { "@type": "PriceSpecification", "price": "7500", "priceCurrency": "EUR", "valueAddedTaxIncluded": false }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digitale Infrastruktur für Ärztezentren & PVEs",
              "description": "Ganzheitliche digitale Positionierung für Gruppenpraxen und Ärztezentren. Interdisziplinäre Schema-Architektur, KI-Readiness für alle Fachrichtungen, individuelle Arzt-Profilseiten."
            }
          }
        ]
      },
      "sameAs": [
        "https://www.hofbauer.marketing",
        "https://www.linkedin.com/in/kevin-hofbauer"
      ],
      "priceRange": "€€€",
      "slogan": "Ihre Ordination. Digital positioniert. Von KI empfohlen."
    },
    {
      "@type": "WebSite",
      "@id": "https://www.mypraxis.at/#website",
      "url": "https://www.mypraxis.at",
      "name": "mypraxis.at",
      "description": "Digitale Positionierung, KI-Sichtbarkeit und rechtssichere Praxis-Websites für niedergelassene Ärztinnen und Ärzte in Österreich.",
      "publisher": { "@id": "https://www.mypraxis.at/#organization" },
      "inLanguage": "de-AT"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.mypraxis.at/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Was kostet eine Website für Ärzte in Österreich?",
          "acceptedAnswer": { "@type": "Answer", "text": "Unsere Praxis-Website liegt bei € 3.900 netto, die Digitale Positionierung mit Tiefenrecherche und KI-Readiness bei € 7.500 netto. Für Ärztezentren und PVEs erstellen wir individuelle Konzepte. Über KMU.DIGITAL sind bis zu 30 % förderbar." }
        },
        {
          "@type": "Question",
          "name": "Was ist KI-Readiness und warum braucht meine Ordination das?",
          "acceptedAnswer": { "@type": "Answer", "text": "KI-Readiness beschreibt, wie gut Ihre Online-Präsenz für KI-Suchsysteme wie ChatGPT, Perplexity und Google AI Overviews aufbereitet ist. Ohne strukturierte Daten und semantische Inhalte wird Ihre Ordination in KI-Antworten nicht genannt." }
        },
        {
          "@type": "Question",
          "name": "Wie funktioniert die KMU.DIGITAL Förderung für Ärzte?",
          "acceptedAnswer": { "@type": "Answer", "text": "Niedergelassene Ärztinnen und Ärzte mit eigener Ordination sind als KMU förderbar. Die Umsetzungsförderung beträgt 30 % der Investitionskosten (max. € 6.000). Voraussetzung ist eine Strategieberatung durch einen zertifizierten Digital Consultant (CDC) – Kosten ca. € 500, davon € 250 gefördert." }
        },
        {
          "@type": "Question",
          "name": "Können Ärztezentren die Förderung mehrfach nutzen?",
          "acceptedAnswer": { "@type": "Answer", "text": "Ja – jeder niedergelassene Arzt in einem Ärztezentrum ist ein eigenständiges Unternehmen und kann die KMU.DIGITAL Förderung individuell beantragen. Bei 16 Ärzten können bis zu 16 separate Förderanträge gestellt werden." }
        },
        {
          "@type": "Question",
          "name": "Was bedeutet llms.txt?",
          "acceptedAnswer": { "@type": "Answer", "text": "Eine strukturierte Datei auf Ihrer Website, die KI-Crawler gezielt auslesen – ähnlich wie robots.txt für Suchmaschinen, aber speziell für KI-Systeme wie ChatGPT, Perplexity und Claude." }
        },
        {
          "@type": "Question",
          "name": "Wie lange dauert die Umsetzung?",
          "acceptedAnswer": { "@type": "Answer", "text": "Praxis-Website: 2–3 Wochen. Digitale Positionierung: 4–6 Wochen. Ärztezentren: 8–12 Wochen. Dazu kommt vorab die Förderabwicklung (ca. 2–4 Wochen)." }
        }
      ]
    }
  ]
}

export const metadata: Metadata = {
  title: 'Arzt Website & KI-Sichtbarkeit | mypraxis.at',
  description: 'Digitale Positionierung für Ärztinnen und Ärzte in Österreich. Praxis-Websites ab € 3.900, KI-Readiness und strukturierte Daten. Bis zu 30 % KMU.DIGITAL Förderung.',
  keywords: 'Arzt Website, Praxis Website, KI-Sichtbarkeit, Schema Markup Ärzte, DSGVO Arztpraxis, ÖÄK konform, KMU.DIGITAL Förderung, Digitale Positionierung Ärzte, Österreich',
  authors: [{ name: 'Kevin Hofbauer', url: 'https://www.hofbauer.marketing' }],
  creator: 'mypraxis.at',
  publisher: 'Kevin Hofbauer e.U.',
  metadataBase: new URL('https://www.mypraxis.at'),
  alternates: {
    canonical: '/',
    languages: { 'de-AT': '/' },
  },
  openGraph: {
    title: 'mypraxis.at – Digitale Positionierung für Ärzte',
    description: 'KI-Sichtbarkeit, strukturierte Daten und rechtssichere Praxis-Websites für niedergelassene Ärzte in Österreich.',
    url: 'https://www.mypraxis.at',
    siteName: 'mypraxis.at',
    locale: 'de_AT',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

import Navigation from '@/components/Navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-AT">
      <head>
        {/* Schema Markup - SOFORT sichtbar für jeden Crawler */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <link rel="canonical" href="https://www.mypraxis.at/" />
        <link rel="alternate" hrefLang="de-AT" href="https://www.mypraxis.at/" />
      </head>
      <body className="bg-white text-dark antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
