// app/layout.jsx
import "./globals.css";
import DataProvider from "../context/DataProvider"; // ✅ Nome correto
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "A Caravana — Estudos Bíblicos e Profecias",
  description: "Estudos Bíblicos, Profecias e Discipulado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        {/* ✅ O contexto que puxa dados do Google Sheets */}
        <DataProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}
