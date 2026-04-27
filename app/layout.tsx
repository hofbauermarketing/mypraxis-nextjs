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
      "vatID": "ATU78915818",
      "description": "Spezialisiert auf digitale Positionierung, KI-Sichtbarkeit und strukturierte Daten für niedergelassene Ärztinnen und Ärzte in Österreich und Deutschland. Tiefenrecherche, maßgeschneiderte Texte und KI-Readiness für Einzelordinationen und Ärztezentren.",
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
      "founder": { "@id": "https://www.mypraxis.at/#kevin-hofbauer" },
      "areaServed": [
        { "@type": "Country", "name": "Österreich", "sameAs": "https://www.wikidata.org/wiki/Q40" },
        { "@type": "Country", "name": "Deutschland", "sameAs": "https://www.wikidata.org/wiki/Q183" },
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
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "valueAddedTaxIncluded": false }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digitale Positionierung",
              "description": "Umfassende digitale Positionierung für Wahlärzte. Tiefenrecherche, Zielgruppenanalyse, maßgeschneiderte Texte, KI-Readiness mit Schema Markup und llms.txt, KI-Telefonassistent, 12 Monate Betreuung."
            },
            "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "valueAddedTaxIncluded": false }
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
        "https://www.linkedin.com/in/kevin-hofbauer-b2660b274/",
        "https://www.facebook.com/profile.php?id=100035353760113"
      ],
      "priceRange": "€€€",
      "slogan": "Ihre Ordination. Digital positioniert. Von KI empfohlen."
    },
    {
      "@type": "Person",
      "@id": "https://www.mypraxis.at/#kevin-hofbauer",
      "name": "Kevin Hofbauer",
      "jobTitle": "Inhaber & Digitalisierungsberater für Ärzte",
      "worksFor": { "@id": "https://www.mypraxis.at/#organization" },
      "url": "https://www.mypraxis.at",
      "sameAs": [
        "https://www.linkedin.com/in/kevin-hofbauer-b2660b274/",
        "https://www.facebook.com/profile.php?id=100035353760113",
        "https://www.hofbauer.marketing"
      ]
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
          "acceptedAnswer": { "@type": "Answer", "text": "Die Preise richten sich nach dem individuellen Leistungsumfang und werden auf Anfrage bekannt gegeben. Wir bieten Pakete für Einzelordinationen sowie maßgeschneiderte Lösungen für Ärztezentren und PVEs." }
        },
        {
          "@type": "Question",
          "name": "Was ist KI-Readiness und warum braucht meine Ordination das?",
          "acceptedAnswer": { "@type": "Answer", "text": "KI-Readiness beschreibt, wie gut Ihre Online-Präsenz für KI-Suchsysteme wie ChatGPT, Perplexity und Google AI Overviews aufbereitet ist. Ohne strukturierte Daten und semantische Inhalte wird Ihre Ordination in KI-Antworten nicht genannt." }
        },
        {
          "@type": "Question",
          "name": "Wie funktioniert die KMU.DIGITAL Förderung für Ärzte?",
          "acceptedAnswer": { "@type": "Answer", "text": "Niedergelassene Ärztinnen und Ärzte mit eigener Ordination sind als KMU grundsätzlich über KMU.DIGITAL förderbar. Voraussetzung ist eine Strategieberatung durch einen zertifizierten Digital Consultant (CDC). Konkrete Förderquoten und maximale Beträge ändern sich regelmäßig — wir arbeiten mit einem externen, zertifizierten Förderpartner zusammen, der Ihre individuelle Situation im kostenlosen Erstgespräch prüft." }
        },
        {
          "@type": "Question",
          "name": "Können Ärztezentren die Förderung mehrfach nutzen?",
          "acceptedAnswer": { "@type": "Answer", "text": "Grundsätzlich ja — jeder niedergelassene Arzt in einem Ärztezentrum ist ein eigenständiges Unternehmen und kann Förderprogramme wie KMU.DIGITAL individuell beantragen. Wie das im konkreten Fall optimal koordiniert wird, prüft unser externer Förderpartner pro Praxis." }
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
  title: 'Praxis-Websites mit Fachgebiet-Tiefe · Österreich | mypraxis.at',
  description: 'Praxis-Websites für niedergelassene Ärzt:innen in Österreich — mit Fachgebiet-Tiefe, genau auf Ihr Budget zugeschnitten. BFSG- und ÖÄK-konform. Kostenloses Erstgespräch.',
  keywords: 'Arzt Website Österreich, Praxis Website erstellen, Wahlarzt Website, Kassenarzt Website, Ärztezentrum Website, Fachgebiet spezifisch, BFSG konform, ÖÄK konform, Digitale Positionierung Ärzte, Webdesign Ärzte Wien',
  authors: [{ name: 'Kevin Hofbauer', url: 'https://www.hofbauer.marketing' }],
  creator: 'mypraxis.at',
  publisher: 'Kevin Hofbauer e.U.',
  metadataBase: new URL('https://www.mypraxis.at'),
  openGraph: {
    title: 'mypraxis.at – Praxis-Websites mit Fachgebiet-Tiefe für Ärzt:innen in Österreich',
    description: 'Mit Fachgebiet-Tiefe, genau auf Ihr Budget zugeschnitten. BFSG- und ÖÄK-konform. Kostenloses Erstgespräch.',
    images: [{ url: 'https://www.mypraxis.at/lp-hero.jpg', width: 1920, height: 1080, alt: 'mypraxis.at – Praxis-Websites mit Fachgebiet-Tiefe für Ärzt:innen in Österreich' }],
    url: 'https://www.mypraxis.at',
    siteName: 'mypraxis.at',
    locale: 'de_AT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mypraxis.at – Praxis-Websites mit Fachgebiet-Tiefe',
    description: 'Für niedergelassene Ärzt:innen in Österreich. Fachgebiet-Tiefe, aufs Budget zugeschnitten, BFSG-konform.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

import Navigation from '@/components/Navigation'
import CookieBanner from '@/components/CookieBanner'
import AccessibilityWidget from '@/components/AccessibilityWidget'
import ScrollToTop from '@/components/ScrollToTop'
import SiteFooter from '@/components/SiteFooter'
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-AT">
      <head>
        {/* Schema Markup - SOFORT sichtbar für jeden Crawler */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup, null, 2) }}
        />
        {/* LLMs.txt Discovery Links */}
        <link rel="alternate" type="text/plain" href="https://www.mypraxis.at/llms.txt" />
        <link rel="alternate" type="text/plain" href="https://www.mypraxis.at/llms-full.txt" />
        {/* Facebook App-ID — muss als property=..., nicht name=... ausgespielt werden */}
        <meta property="fb:app_id" content="3980451328920273" />
      </head>
      <body className="bg-white text-dark antialiased">
        {/* Google Ads – Basis-Tag (sitewide) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18019658217"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-18019658217');`}
        </Script>
        {/* Skip-Link – WCAG 2.4.1 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:bg-white focus:text-blue-700 focus:font-bold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Zum Hauptinhalt springen
        </a>
        <Navigation />
        <CookieBanner />
        <AccessibilityWidget accentColor="#1d4ed8" declarationHref="/barrierefreiheit" />
        <ScrollToTop />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
