import "./globals.css";
import DataProvider from "../context/DataProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "A Caravana — Estudos Bíblicos e Profecias",
  description: "Estudos Bíblicos, Profecias e Discipulado",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <DataProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}
