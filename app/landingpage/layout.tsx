import Script from 'next/script'

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Google Ads – Basis-Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18019658217"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18019658217');
        `}
      </Script>
      {children}
    </>
  )
}
