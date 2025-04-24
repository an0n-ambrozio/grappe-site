"use client";

import { motion } from "framer-motion";
import { Briefcase, Home, Hospital, Rocket } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";

const segmentos = [
  {
    icon: <Briefcase className="w-6 h-6 text-white sm:w-8 sm:h-8" />,
    title: "Grandes Redes de Atendimento",
    description: "Automatize vendas, suporte e agendamentos em escala.",
  },
  {
    icon: <Hospital className="w-6 h-6 text-white sm:w-8 sm:h-8" />,
    title: "Clínicas e Saúde",
    description: "Agendamentos inteligentes, lembretes e pré-atendimentos com IA.",
  },
  {
    icon: <Home className="w-6 h-6 text-white sm:w-8 sm:h-8" />,
    title: "Imobiliárias e Construtoras",
    description: "Captação de leads, visitas e pré-vendas automatizadas 24/7.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-white sm:w-8 sm:h-8" />,
    title: "Startups e Empresas Tech",
    description: "Escale com eficiência sem precisar crescer sua equipe de atendimento.",
  }
];

export default function ParaQuemCriamos() {
  return (
    <section
      id="segmentos"
      className="relative w-full py-24 bg-white text-zinc-900"
    >
      <ParticlesBackground />

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 md:px-6 mb-16 text-left"
      >
        <p className="text-sm text-purple-900 font-medium uppercase mb-3">
          Para Quem Criamos
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
          Soluções corporativas para empresas que exigem excelência.
        </h2>
      </motion.div>

      {/* Cards com scroll no mobile e grid no desktop */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 overflow-x-auto md:overflow-visible">
        <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 w-max md:w-full pr-4 md:pr-0">
          {segmentos.map((seg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[200px] max-w-[220px] sm:min-w-0 bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 backdrop-blur-md border border-white/20 shadow-md md:shadow-xl p-4 sm:p-6 rounded-xl flex flex-col justify-between transition-transform hover:scale-[1.04] hover:shadow-2xl"
            >
              <div className="mb-3">{seg.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                {seg.title}
              </h3>
              <p className="text-xs sm:text-sm text-purple-100 leading-snug sm:leading-relaxed">
                {seg.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
