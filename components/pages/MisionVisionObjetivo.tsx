"use client";
import React from "react";
import { FaBullseye, FaEye, FaBullhorn } from "react-icons/fa";

export default function MisionVisionObjetivo() {
  return (
    <section id="mision-vision-objetivo" className="py-16 bg-gradient-to-b from-valencia-light-blue/5 to-valencia-light-blue/60 border-t-4 border-valencia-blue ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Misión */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300">
            <FaBullseye className="absolute top-4 right-4 text-valencia-blue opacity-10 text-8xl" />
            <h3 className="text-2xl font-bold text-valencia-blue mb-2">
              Misión
            </h3>
            <p className="text-gray-700">
              Ser una institución educativa dedicada a la formación integral del individuo, incentivando los valores humanos y la preparación académica como instrumento de superación personal que redunde en la transformación positiva de la sociedad y prever un mejor futuro.
            </p>
          </div>
          {/* Visión */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300">
            <FaEye className="absolute top-4 right-4 text-valencia-blue opacity-10 text-8xl" />
            <h3 className="text-2xl font-bold text-valencia-blue mb-2">
              Visión
            </h3>
            <p className="text-gray-700">
              Mantener el prestigio de la institución, como un centro de excelente formación educativa a nivel nacional; preparando jóvenes competitivos, con principios morales y contribuir a la formación positiva de la sociedad.
            </p>
          </div>
          {/* Objetivo */}
          <div className="relative bg-white rounded-lg shadow-lg p-6 overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300">
            <FaBullhorn className="absolute top-4 right-4 text-valencia-blue opacity-10 text-8xl" />
            <h3 className="text-2xl font-bold text-valencia-blue mb-2">
              Objetivo
            </h3>
            <p className="text-gray-700">
              Propiciar un ambiente de participación y convivencia entre los miembros de la comunidad educativa, donde resalte la formación de valores, para brindar profesionales de éxito y ciudadanos útiles a la sociedad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
