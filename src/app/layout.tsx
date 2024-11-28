import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cohours.everton.place"),
  title: "Cohours | Gerenciador de Horas complementares",
  description: "Gerenciador de horas complementares para universidades",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)" },
    { media: "(prefers-color-scheme: dark)" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
