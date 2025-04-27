"use client";

import { motion } from "framer-motion";
import { Briefcase, Home, Hospital, Rocket } from "lucide-react";

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
    <section id="segmentos" className="relative w-full py-20 md:py-24 bg-white text-zinc-900 overflow-hidden">

      {/* TÍTULO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 md:px-6 mb-16 text-left"
      >
        <p className="text-xs md:text-sm text-purple-900 font-medium uppercase mb-3">
          Para Quem Criamos
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight md:leading-snug text-zinc-900">
          Soluções corporativas para empresas que exigem excelência.
        </h2>
      </motion.div>

      {/* GRID DE CARDS */}
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {segmentos.map((seg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-4 sm:p-6 flex flex-col justify-between transition-all hover:scale-[1.05] hover:shadow-purple-300/40"
            >
              <div className="mb-3">{seg.icon}</div>
              <h3 className="text-[10px] sm:text-base font-semibold text-white mb-2 leading-snug">
                {seg.title}
              </h3>
              <p className="text-[9px] sm:text-sm text-purple-100 leading-snug sm:leading-relaxed">
                {seg.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
