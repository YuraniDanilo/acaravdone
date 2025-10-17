// components/Hero.jsx
"use client";
import React from "react";
import Link from "next/link";

export default function Hero({ heroImage }) {
  return (
    <section
      id="inicio"
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})`,
      }}
    >
      <div className="px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          A Caravana do Espírito
        </h2>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
          Um mover de rendição, fé e poder
        </p>
        <Link
          href="#estudos"
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Ver Estudos
        </Link>
      </div>
    </section>
  );
}
