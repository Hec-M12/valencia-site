"use client";

import React from "react";
import { Apple, NotebookPen, Globe } from "lucide-react";
import Link from "next/link";

interface Division {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  url: string;
}

const divisions: Division[] = [
  {
    icon: <Apple size={48} className="text-valencia-blue" />,
    title: "Pre-Escolar",
    subtitle: "(2-5 años)",
    description:
      "Programa especializado de estimulación temprana, con currículum único y adaptado.",
    url: "/pre-school"
  },
  {
    icon: <NotebookPen size={48} className="text-valencia-blue" />,
    title: "Primaria",
    subtitle: "(1-6 grado)",
    description:
      "Fundamento académico con aprendizaje activo y laboratorios exclusivos.",
    url: "/elementary"
  },
  {
    icon: <Globe size={48} className="text-valencia-blue" />,
    title: "Secundaria",
    subtitle: "(7-11 grados)",
    description:
      "Preparación global enfocada en proyectos y solución de problemas reales.",
    url: "/high-school"
  },
];

export default function DivisionsComponent() {
  return (
    <section className="relative py-16 bg-stone-50 border-y border-gray-300 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {divisions.map((div, i) => (
              <div
                key={i}
                className="transform transition-opacity duration-300 opacity-100"
              >
                <div className="flex justify-center mb-4">{div.icon}</div>
                <h3 className="text-xl font-bold text-center">{div.title}</h3>
                <p className="text-center text-sm uppercase mb-2">
                  {div.subtitle}
                </p>
                <p className="text-gray-700 text-center mb-6">
                  {div.description}
                </p>
                <div className="flex justify-center">
                  <Link href={div.url} passHref legacyBehavior>
                    <button className="cursor-pointer bg-valencia-blue text-white px-4 py-2 rounded hover:bg-valencia-blue/90 transition-colors scale-100 hover:scale-105">
                      Conoce más
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}