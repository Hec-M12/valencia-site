// src/components/Timeline.jsx
"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { 
  FaSeedling, 
  FaSchool, 
  FaGlobe, 
  FaUsers, 
  FaBuilding, 
  FaHandHoldingHeart, 
  FaMapMarkerAlt 
} from "react-icons/fa";


const historyEvents = [
    {
      year: 1984,
      title: "Fundación – Jardín de Niños “Dulce Infancia”",
      detail:
        "Inicia en Colonia Hato de Enmedio de la mano de la profa. Edith Espinal Larios, con 120 niños en 3 secciones.",
      icon: <FaSeedling />
    },
    {
      year: 1985,
      title: "Primer Grado y Traslado",
      detail:
        "Se abre el primer grado y el colegio se traslada a la Residencial Valencia, donde permanece hasta hoy.",
      icon: <FaSchool />
    },
    {
      year: 2004,
      title: "Nacimiento de Valencia School (Bilingüe)",
      detail:
        "Se lanza el área bilingüe como Valencia School, iniciando con pre‐básica y 1º grado; hoy llega hasta undécimo.",
      icon: <FaGlobe />
    },
    {
      year: 2011,
      title: "Anexo Colonia Modelo (Plan Americano)",
      detail:
        "Se inaugura un anexo con calendario anglosajón (ago–jun), ofreciendo educación trilingüe en inglés, francés y español.",
      icon: <FaUsers />
    },
    {
      year: 2014,
      title: "Mudanza a Lomas del Guijarro",
      detail:
        "Valencia School se traslada en octubre a Colonia Lomas del Guijarro bajo calendario nacional (feb–nov) para ampliar cobertura.",
      icon: <FaBuilding />
    },
    {
      year: 2016,
      title: "Departamento de Inclusión",
      detail:
        "Se crea el Departamento de Inclusión para atender estudiantes con necesidades especiales con atención individualizada.",
      icon: <FaHandHoldingHeart />
    },
    {
      year: 2025,
      title: "Inauguración Campus Los Hidalgos",
      detail:
        "Se inaugura el campus de Los Hidalgos, unificando la antigua sede anexo Sur y la de Lomas del Guijarro.",
      icon: <FaMapMarkerAlt />
    },
  ];

export default function Timeline() {
  return (
    <>
      <div className="mb-12 text-center px-4 pt-8 mt-4 bg-gradient-to-b from-white to-valencia-blue/50">
        <h2 className="text-3xl md:text-4xl font-bold text-valencia-blue">
          Nuestra Trayectoria
        </h2>
        <p className="mt-2 text-gray-600 pb-4">
          Más de 35 años de hitos y crecimiento formando líderes críticos y creativos
        </p>
      </div>
      <VerticalTimeline
        lineColor="#216B8D">
        {historyEvents.map(evt => (
          <VerticalTimelineElement
            key={evt.year}
            date={String(evt.year)}
            dateClassName="text-white md:text-black lg:text-black"
            contentStyle={{ background: "#216B8D", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #216B8D" }}
            iconStyle={{ background: "#216B8D", color: "#fff" }}
            icon={evt.icon}
            animate={true}
          >
            <h3 className="vertical-timeline-element-title">{evt.title}</h3>
            <p>{evt.detail}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
}