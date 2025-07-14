import React from "react";

interface CurriculumCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export default function CurriculumCard({ icon, title, children }: CurriculumCardProps) {
  return (
    <article className="flex flex-col items-center text-center bg-white rounded-[1.5rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 w-full max-w-[20rem] cursor-default transition-transform duration-200 hover:scale-105">
      <div className="mb-2 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-semibold text-[1.125rem] text-valencia-blue mt-2">
        {title}
      </h3>
      <p className="text-[0.875rem] text-gray-600 leading-[1.6] px-2 mt-3">
        {children}
      </p>
    </article>
  );
}
