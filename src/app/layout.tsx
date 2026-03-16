import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Grupo IASA – Medio Ambiente, Ingeniería y Construcción",
    template: "%s | Grupo IASA",
  },
  description:
    "Consorcio de empresas de consultoría ambiental e ingeniería. Auditorías ambientales, eficiencia energética, huella de carbono, ingeniería sanitaria e hidráulica.",
  keywords: [
    "ingeniería ambiental",
    "auditoría ambiental",
    "huella de carbono",
    "eficiencia energética",
    "ingeniería sanitaria",
    "medio ambiente Chile",
    "PROIECTA",
    "PROAMBIENTE",
    "PROCEANIC",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Grupo IASA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
