"use client";
import { useParams } from "next/navigation";
import BlogPost from "@/components/BlogPost";

export default function EstudoPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id ?? "";

  return <BlogPost type="study" id={id} />;
}
