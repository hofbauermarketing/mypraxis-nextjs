// Google Ads gtag wird im Root-Layout (app/layout.tsx) geladen – kein Duplikat nötig
export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
