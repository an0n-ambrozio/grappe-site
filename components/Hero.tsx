"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[120vh] flex flex-col justify-start px-4 md:px-6 pt-28 pb-[300px] overflow-hidden bg-white">

      {/* GRADE SVG AO FUNDO */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e5e7eb" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* IMAGEM COM ROTAÇÃO E GRADIENTE */}
      <div className="absolute bottom-20 md:bottom-20 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none w-full flex justify-center px-4">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="w-full max-w-[1400px] overflow-visible relative"
        >
          <Image
            src="/background.png"
            alt="Dashboard Grappe"
            width={2000}
            height={1400}
            priority
            className="w-full h-auto object-contain -rotate-6 scale-[1.05] md:scale-[1.05] sm:scale-[0.95]"
          />
          <div
            className="absolute bottom-0 left-0 w-full h-40"
            style={{
              transform: 'rotate(-6deg) translateY(20px)',
              transformOrigin: 'bottom center',
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)'
            }}
          />
        </motion.div>
      </div>

      {/* CONTEÚDO COM ALINHAMENTO À ESQUERDA EM TODOS OS DISPOSITIVOS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-left"
      >
        <p className="text-xs md:text-sm text-purple-200 font-semibold tracking-widest uppercase mb-3">
          Tecnologia Exclusiva Grappe.AI
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold leading-snug mb-4 text-purple-900">
          Inteligência Artificial que<br className="hidden md:block" />
          Atende, Fala e Converte.
        </h1>

        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-xl">
          Inteligência Artificial sob medida para escalar resultados — 24h por dia,
          com voz natural e resultados reais.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-6 py-2 text-sm text-purple-900 font-semibold rounded-md border border-purple-900 bg-white transition duration-300 ease-in-out hover:bg-purple-900 hover:text-white"
        >
          <PhoneCall className="w-4 h-4" />
          TESTE AGORA!
        </motion.button>
      </motion.div>
    </section>
  );
}
