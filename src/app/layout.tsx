import "./globals.css";

export const metadata = {
  title: "Gestoría Digital — Automotor, Judicial y Previsional",
  description:
    "Gestoría profesional a nivel nacional. Trámites automotores, judiciales y previsionales con rapidez, legalidad y confianza.",
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
