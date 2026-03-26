import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nickolas Bernardo Alvarez Gomes | Portfolio",
  description:
    "Portfolio de Nickolas Bernardo Alvarez Gomes com foco em sistemas embarcados, firmware, IoT, telemetria e integração de dados.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
