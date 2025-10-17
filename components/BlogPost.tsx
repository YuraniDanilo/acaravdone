"use client";


import React, { useMemo, useEffect, useContext } from "react";
import Head from 'next/head';
import { useRouter } from "next/navigation";
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaTelegramPlane,
  FaShareAlt,
} from "react-icons/fa";
import { DataContext } from "../context/DataProvider";
import Image from "next/image";
import logo from "@/public/logo.png";

interface BlogPostProps {
  id: string;
  type: string;
}

export default function BlogPost({ id, type }: BlogPostProps) {
  const router = useRouter();
  const data = useContext(DataContext);

  if (!data)
    throw new Error("DataContext não encontrado. Verifique o DataProvider.");

  const { studies, prophecies, setSelectedStudy } = data;

  const allPosts = [...studies, ...Object.values(prophecies).flat()];
  const study = allPosts.find((p) => String(p.id) === String(id));

  const suggestedPosts = useMemo(() => {
    if (!study || !allPosts.length) return [];

    const filtered = allPosts.filter(
      (p) =>
        String(p.id) !== String(study?.id) &&
        p.title.trim() !== study?.title.trim()
    );

    const unique = [];
    const seen = new Set();
    for (const post of filtered) {
      const key = `${post.title.trim().toLowerCase()}-${post.description
        .trim()
        .toLowerCase()}`;
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(post);
      }
    }

    return unique.sort(() => Math.random() - 0.5).slice(0, 4);
  }, [allPosts, study]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [study?.id]);

  const share = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${study?.title} - ${study?.description}`);

    switch (platform) {
      case "whatsapp":
        window.open(`https://wa.me/?text=${text}%20${url}`, "_blank");
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
          "_blank"
        );
        break;
      case "telegram":
        window.open(`https://t.me/share/url?url=${url}&text=${text}`, "_blank");
        break;
      case "native":
        if (navigator.share) {
          navigator.share({
            title: study?.title,
            text: study?.description,
            url: window.location.href,
          });
        } else {
          alert("Compartilhamento não suportado neste dispositivo.");
        }
        break;
      default:
        break;
    }
  };

  if (!study) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white to-amber-50 text-gray-900 font-sans flex items-center justify-center">
        <div className="text-center px-6">
          <Image src={logo} alt="A Caravana" className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-amber-600 mb-2">
            Conteúdo não encontrado
          </h1>
          <button
            onClick={() => router.push("/")}
            className="text-amber-600 font-semibold hover:text-amber-700 transition"
          >
            ← Voltar
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{`${study.title} | A Caravana`}</title>
        <meta name="description" content={study.description} />
        <meta property="og:image" content={study.image} />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white to-amber-50 text-gray-900 font-sans">
        <section className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-20 py-12">
          <img
            src={study.image}
            alt={study.title}
            className="rounded-2xl shadow-lg w-full h-80 object-cover mb-8"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {study.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {study.description}
          </p>
          <article className="prose prose-lg max-w-none text-gray-800 whitespace-pre-line mb-10">
            {study.content}
          </article>

          <div className="flex flex-wrap gap-6 mb-16 items-center">
            <button
              onClick={() => share("native")}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-md shadow hover:from-amber-600 hover:to-yellow-700 transition flex items-center gap-2"
            >
              <FaShareAlt /> Compartilhar
            </button>
            <div className="flex gap-4 items-center text-2xl">
              <button
                onClick={() => share("whatsapp")}
                className="text-green-600 hover:text-green-700"
              >
                <FaWhatsapp />
              </button>
              <button
                onClick={() => share("facebook")}
                className="text-blue-600 hover:text-blue-700"
              >
                <FaFacebook />
              </button>
              <button
                onClick={() => share("twitter")}
                className="text-sky-500 hover:text-sky-600"
              >
                <FaTwitter />
              </button>
              <button
                onClick={() => share("telegram")}
                className="text-blue-500 hover:text-blue-600"
              >
                <FaTelegramPlane />
              </button>
            </div>
          </div>

          {suggestedPosts.length > 0 && (
            <div className="border-t pt-10">
              <h2 className="text-2xl font-bold text-amber-600 mb-6">
                Outros que você pode gostar
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {suggestedPosts.map((s) => (
                  <div
                    key={`${s.id}-${s.title}`}
                    onClick={() => {
                      setSelectedStudy(s);
                      router.push(
                        `/${s.type === "study" ? "estudos" : "profecias"}/${s.id}`
                      );
                    }}
                    className="group cursor-pointer rounded-2xl overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-1 bg-white border border-gray-100"
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-amber-600 transition">
                        {s.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {s.description}
                      </p>
                      <span className="text-amber-600 font-semibold text-sm hover:underline">
                        Ler mais →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
