"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { DataContext } from "../context/DataProvider";

export default function Profecias({ fullPage = false }) {
  const { prophecies, setSelectedStudy, loading } = useContext(DataContext);
  const router = useRouter();
  const allProphecies = Object.entries(prophecies);

  if (loading) {
    return <p className="text-center py-20 text-gray-500">Carregando profecias...</p>;
  }

  return (
    <section id="profecias" className="py-24 bg-gradient-to-b from-white to-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-amber-600 mb-10 text-center">Profecias</h3>

        {allProphecies.length === 0 ? (
          <p className="text-gray-600 text-center">Nenhuma profecia disponível.</p>
        ) : (
          allProphecies.map(([year, list]) => (
            <div key={year} className="mb-12">
              <h4 className="text-2xl font-semibold text-gray-800 mb-6">{year}</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {list
                  .slice(0, fullPage ? list.length : 3)
                  .map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        setSelectedStudy(p);
                        router.push(`/profecias/${p.id}`);
                      }}
                      className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition-all p-4"
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        className="rounded-lg w-full h-48 object-cover mb-4"
                      />
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{p.title}</h4>
                      <p className="text-gray-600 text-sm">{p.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))
        )}

        {!fullPage &&
          allProphecies.some(([_, list]) => list.length > 3) && (
            <div className="text-center mt-10">
              <button
                onClick={() => router.push("/profecias")}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Ver mais profecias
              </button>
            </div>
          )}
      </div>
    </section>
  );
}
