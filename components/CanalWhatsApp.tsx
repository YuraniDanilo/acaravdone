// components/CanalWhatsApp.jsx
import React from "react";

export default function CanalWhatsApp() {
  return (
    <section
      id="canal-whatsapp"
      className="py-24 bg-gradient-to-b from-white to-gray-50 border-t"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <div>
          <h3 className="text-4xl font-bold text-amber-600 mb-6">
            Canal no WhatsApp
          </h3>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Entre no nosso canal oficial no WhatsApp e fique por dentro dos
            programas de oração, mensagens e atualizações da Caravana.
          </p>
          <a
            href="https://whatsapp.com/channel/0029Vb6E0hbFXUughoD18X10"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gradient-to-r from-green-600 to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:from-green-700 hover:to-emerald-800 transform hover:-translate-y-1 transition-all duration-300"
          >
            Acessar Canal no WhatsApp
          </a>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-64 mx-auto drop-shadow-lg"
        />
      </div>
    </section>
  );
}
