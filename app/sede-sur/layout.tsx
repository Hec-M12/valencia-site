import type { Metadata } from "next";
import { SITE_URL } from "@/app/schema";

// La metadata vive en este layout porque page.tsx tiene la directiva "use client"
// (Next.js 15 no permite `export const metadata` en client components).
export const metadata: Metadata = {
  title: "Sede Sur — Los Hidalgos, Comayagüela",
  description:
    "La Sede Sur de Valencia School en Los Hidalgos ofrece educación bilingüe con calendario anglosajón. Inaugurada en 2025, campus moderno en Comayagüela.",
  keywords: [
    "Sede Sur Valencia School",
    "colegio Los Hidalgos",
    "colegio bilingüe Comayagüela",
    "calendario anglosajón Honduras",
    "campus Valencia Sur",
  ],
  alternates: {
    canonical: "/sede-sur",
  },
  openGraph: {
    type: "website",
    locale: "es_HN",
    siteName: "Valencia School",
    title: "Sede Sur — Los Hidalgos, Comayagüela | Valencia School",
    description:
      "Sede Sur de Valencia School en Los Hidalgos, Comayagüela: educación bilingüe con calendario anglosajón, inaugurada en 2025.",
    url: `${SITE_URL}/sede-sur`,
  },
};

export default function SedeSurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
