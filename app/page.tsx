// app/page.jsx
"use client";

import Hero from "../components/Hero";
import Estudos from "../components/Estudos";
import Profecias from "../components/Profecias";
import Downloads from "../components/Downloads";
import CanalWhatsApp from "../components/CanalWhatsApp"; // ✅ importado

const heroImage =
  "https://images.pexels.com/photos/681391/pexels-photo-681391.jpeg";

export default function Home() {
  return (
    <>
      <Hero heroImage={heroImage} />
      <Estudos />
      <Profecias />
      <Downloads />
      <CanalWhatsApp /> 
    </>
  );
}
