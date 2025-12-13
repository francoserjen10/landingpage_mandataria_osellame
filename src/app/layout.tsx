import "./globals.css";

const SITE_URL =
  "https://landingpage-mandataria-osellame.vercel.app";

export const metadata = {
  /**
   * Title: Es lo que aparece en la pestaña del navegador como título de la página.
   * Description: El texto que aparece debajo del título en Google.
   * Robots: Indica a los motores de búsqueda cómo deben indexar la página.
   * Open Graph: (para WhatsApp, Instagram, Facebook), define cómo se ve el link cuando se comparte.
   * Twitter Card: Define cómo se ve el link cuando se comparte en Twitter.
   * Icons: Define el ícono del sitio web (favicon).
   */

  title: "Gestoría Digital — Automotor, Judicial y Previsional",
  description:
    "Gestoría profesional a nivel nacional. Trámites automotores, judiciales y previsionales con rapidez, legalidad y confianza.",

  robots: {
    index: true,
    follow: true,
  },
  
  openGraph: {
    title: "Gestoría Digital — Automotor, Judicial y Previsional",
    description:
      "Gestoría profesional a nivel nacional. Trámites automotores, judiciales y previsionales.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/images/background-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Gestoría Digital",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/images/logo.png",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
