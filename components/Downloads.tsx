"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { Download } from "lucide-react";
import { DataContext } from "../context/DataProvider";

export default function Downloads({ fullPage = false }) {
  const { downloads, loading } = useContext(DataContext);
  const router = useRouter();

  if (loading) {
    return <p className="text-center py-20 text-gray-500">Carregando downloads...</p>;
  }

  const visible = fullPage ? downloads : downloads.slice(0, 6);

  return (
    <section id="downloads" className="py-24 bg-gradient-to-b from-gray-50 to-white border-t">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-amber-600 mb-10 text-center">
          Livros e Materiais
        </h3>

        {visible.length === 0 ? (
          <p className="text-gray-600 text-center">Nenhum download disponível.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((file) => (
              <a
                key={file.id}
                href={file.file}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-4 flex flex-col"
              >
                <img
                  src={file.image}
                  alt={file.title}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h4 className="text-xl font-bold text-gray-800 mb-2">{file.title}</h4>
                <p className="text-gray-600 text-sm flex-grow">{file.description}</p>
                <div className="flex items-center justify-center mt-4">
                  <Download className="text-amber-600 mr-2" />
                  <span className="font-semibold text-amber-600">Baixar</span>
                </div>
              </a>
            ))}
          </div>
        )}

        {!fullPage && downloads.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => router.push("/downloads")}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Ver mais downloads
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
