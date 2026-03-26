import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nickolas Bernardo Alvarez Gomes | Portfolio",
  description:
    "Portfólio de Nickolas Bernardo Alvarez Gomes, Automation Engineer com foco em Embedded Systems, Firmware, IoT, Telemetry e Data Acquisition.",
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
