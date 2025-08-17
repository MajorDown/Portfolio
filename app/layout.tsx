import type { Metadata } from "next";
import { Geist, Geist_Mono, Overpass_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";

const montserrat = Montserrat({
  variable: "--font-normal",
  subsets: ["latin"],
});

const overpassMono = Overpass_Mono({
  variable: "--font-title",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Romain Fouillaron ~ Développeur Web",
  description: "Romain Fouillaron propose de développer de a à z vos projets d'application ou de sites web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} ${overpassMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
