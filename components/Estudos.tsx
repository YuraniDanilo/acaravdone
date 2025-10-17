"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { DataContext } from "../context/DataProvider";

export default function Estudos({ fullPage = false }) {
  const { studies, setSelectedStudy, loading } = useContext(DataContext);
  const router = useRouter();

  if (loading) {
    return <p className="text-center py-20 text-gray-500">Carregando estudos...</p>;
  }

  const visible = fullPage ? studies : studies.slice(0, 4);

  return (
    <section id="estudos" className="py-24 bg-gradient-to-b from-gray-50 to-white border-t">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-amber-600 mb-10 text-center">
          Estudos Bíblicos
        </h3>

        {visible.length === 0 ? (
          <p className="text-gray-600 text-center">Nenhum estudo disponível.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((study) => (
              <div
                key={study.id}
                onClick={() => {
                  setSelectedStudy(study);
                  router.push(`/estudos/${study.id}`);
                }}
                className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition-all p-4"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h4 className="text-xl font-bold text-gray-800 mb-2">{study.title}</h4>
                <p className="text-gray-600 text-sm">{study.description}</p>
              </div>
            ))}
          </div>
        )}

        {!fullPage && studies.length > 4 && (
          <div className="text-center mt-10">
            <button
              onClick={() => router.push("/estudos")}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Ver mais estudos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
