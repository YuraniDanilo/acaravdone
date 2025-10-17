// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-6">
        <div>
          <h4 className="font-semibold mb-4 text-xl text-white">A Caravana</h4>
          <p className="text-base text-gray-400">
            Um ministério independente dedicado a espalhar a Palavra de Deus e incentivar o discipulado cristão.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-xl text-white">Links</h4>
          <ul className="text-base space-y-3">
            {["Início", "Estudos", "Profecias", "Downloads", "Discipulado"].map(
              (link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-amber-500 transition">
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-xl text-white">Contato</h4>
          <p className="text-base">Email: contato@acaravana.exemplo</p>
          <p className="text-base mt-2">© {new Date().getFullYear()} A Caravana — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
