"use client";
import { motion } from "framer-motion";

interface SedeCardProps {
  name: string;
  address: string;
  href: string;
}

export default function SedeCard({ name, address, href }: SedeCardProps) {
  return (
    <motion.div
      initial={{ scaleX: 0, scaleY: 0 }}
      whileInView={{ scaleX: 1, scaleY: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-stone-100 rounded-lg shadow-lg overflow-hidden border border-gray-250 hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="p-8">
        <h4 className="text-xl font-semibold text-center text-valencia-blue mb-2">
          {name}
        </h4>
        <p className="text-gray-600 text-center mb-4 w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
          {address}
        </p>
        <div className="flex justify-center">
          <a
            href={href}
            className="w-[40%] bg-valencia-blue font-semibold text-white py-2 rounded hover:bg-valencia-blue/70 transition-colors duration-300 text-center block"
          >
            Conocer más
          </a>
        </div>
      </div>
    </motion.div>
  );
}
