// components/Header.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const path = usePathname();
  const router = useRouter();

  const nav = [
    { label: "Início", href: "/" },
    { label: "Estudos", href: "/estudos" },
    { label: "Profecias", href: "/profecias" },
    { label: "Downloads", href: "/downloads" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="A Caravana"
            width={48}
            height={48}
            className="rounded-full object-cover shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800 leading-tight">
              A Caravana
            </h1>
            <p className="text-base text-gray-500">
              Estudos Bíblicos, Profecias e Discipulado
            </p>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-base font-semibold text-gray-700">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={`hover:text-amber-600 transition ${path === n.href ? "text-amber-600" : ""}`}>
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700 hover:text-amber-600 transition text-3xl focus:outline-none"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner animate-slide-down">
          <nav className="flex flex-col items-center py-4 space-y-4 text-lg font-semibold text-gray-700">
            {nav.map((n) => (
              <a
                key={n.href}
                onClick={() => {
                  setMobileOpen(false);
                  router.push(n.href);
                }}
                className="hover:text-amber-600 transition cursor-pointer"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
