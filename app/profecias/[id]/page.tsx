// app/profecias/[id]/page.jsx
"use client";
import BlogPost from "../../../components/BlogPost";
import { useParams } from "next/navigation";

export default function ProfeciaDetalhe() {
  const params = useParams();
  const { id } = params || {};
  return <BlogPost type="prophecy" id={id} />;
}
