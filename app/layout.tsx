import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nickolas Bernardo Alvarez Gomes | Portfolio tecnico",
  description:
    "Portfolio de Nickolas Bernardo Alvarez Gomes com foco em embedded systems, firmware, IoT, telemetria, aquisicao de dados e integracao hardware-software.",
  keywords: [
    "Nickolas",
    "portfolio tecnico",
    "embedded systems",
    "firmware",
    "IoT",
    "telemetria",
    "aquisicao de dados",
    "integracao hardware software"
  ],
  openGraph: {
    title: "Nickolas Bernardo Alvarez Gomes | Portfolio tecnico",
    description:
      "Portfolio tecnico orientado a firmware, sistemas embarcados, telemetria, dados e integracao de sistemas.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-night text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-night focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Pular para o conteudo principal
        </a>
        {children}
      </body>
    </html>
  );
}
