import type { Metadata } from "next";
import { SITE_URL } from "@/app/schema";

// La metadata vive en este layout porque page.tsx tiene la directiva "use client"
// (Next.js 15 no permite `export const metadata` en client components).
export const metadata: Metadata = {
  title: "Preescolar — Estimulación Temprana Bilingüe",
  description:
    "Preescolar bilingüe en Valencia School: aprendizaje temprano, desarrollo integral, programa en inglés y español para la primera infancia.",
  keywords: [
    "preescolar Valencia School",
    "preescolar bilingüe Tegucigalpa",
    "estimulación temprana Honduras",
    "nursery Tegucigalpa",
    "kinder bilingüe",
  ],
  alternates: {
    canonical: "/pre-school",
  },
  openGraph: {
    type: "website",
    locale: "es_HN",
    siteName: "Valencia School",
    title: "Preescolar — Estimulación Temprana Bilingüe | Valencia School",
    description:
      "Preescolar bilingüe en Valencia School: aprendizaje temprano, desarrollo integral y programa en inglés y español.",
    url: `${SITE_URL}/pre-school`,
  },
};

export default function PreSchoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
