import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Tipos de fonte
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO básico
export const metadata: Metadata = {
  title: "Grappe.AI",
  description: "Tecnologia de IA para empresas que lideram o amanhã.",
};

// Layout raiz da aplicação
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable}
          antialiased text-zinc-900 bg-white
          relative min-h-screen flex flex-col
        `}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
