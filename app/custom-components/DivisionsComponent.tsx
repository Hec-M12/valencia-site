"use client";

import React from "react";
import { Apple, NotebookPen, Globe, FlaskRound } from "lucide-react";

interface Division {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

const divisions: Division[] = [
  {
    icon: <Apple size={48} className="text-valencia-blue" />,
    title: "Pre-school",
    subtitle: "(2-5 años)",
    description:
      "Programa especializado de estimulación temprana, con currículum único y adaptado.",
  },
  {
    icon: <NotebookPen size={48} className="text-valencia-blue" />,
    title: "Elementary",
    subtitle: "(1-5 grados)",
    description:
      "Fundamento académico con aprendizaje activo y laboratorios exclusivos.",
  },
  {
    icon: <Globe size={48} className="text-valencia-blue" />,
    title: "Middle School",
    subtitle: "(6-8 grados)",
    description:
      "Preparación global enfocada en proyectos y solución de problemas reales.",
  },
  {
    icon: <FlaskRound size={48} className="text-valencia-blue" />,
    title: "High School",
    subtitle: "(9-11 grados)",
    description:
      "Programa riguroso con asesoría universitaria y alto índice de aceptación.",
  },
];

export default function DivisionsComponent() {
  return (
    <section className="relative py-16 bg-stone-50 border-y border-gray-300 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-12">
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
                  <button className="cursor-pointer bg-valencia-blue text-white px-4 py-2 rounded hover:bg-valencia-blue/90 transition-colors scale-100 hover:scale-105">
                    Conoce más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
