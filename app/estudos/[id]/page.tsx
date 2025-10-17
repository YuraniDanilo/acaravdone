// app/estudos/[id]/page.jsx
"use client";
import BlogPost from "../../../components/BlogPost";
import { useParams } from "next/navigation";

export default function EstudoDetalhe() {
  const params = useParams();
  const { id } = params || {};
  return <BlogPost type="study" id={id} />;
}
