import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Firmware, telemetria e sistemas embarcados | Nickolas Bernardo Alvarez Gomes",
  description:
    "Portfolio tecnico de Nickolas Bernardo Alvarez Gomes com foco em firmware, telemetria, sistemas embarcados, aquisicao de dados e integracao entre hardware e software.",
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
    title: "Firmware, telemetria e sistemas embarcados | Nickolas Bernardo Alvarez Gomes",
    description:
      "Portfolio tecnico orientado a firmware, telemetria, sistemas embarcados e integracao de sistemas em aplicacoes reais.",
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
