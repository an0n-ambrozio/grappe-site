"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import ImpactBackground from "./ImpactBackground"; // Novo componente!

const metrics = [
  {
    label: "Disponibilidade 24/7",
    value: 24,
    suffix: "h",
    description: "Atendimento disponível 24h por dia, 7 dias por semana.",
  },
  {
    label: "Operações Escaláveis",
    value: 100,
    suffix: "%",
    description: "IA que cresce junto com a sua demanda, sem limites.",
  },
  {
    label: "Tempo Médio de Resposta",
    value: 1,
    suffix: "s",
    description: "Respostas automáticas em menos de 1 segundo.",
  },
  {
    label: "Personalização Adaptativa",
    value: 100,
    suffix: "%",
    description: "Conversas personalizadas de acordo com o cliente.",
  },
];

export default function Impacto() {
  return (
    <section id="impacto" className="relative w-full py-20 md:py-24 bg-white overflow-hidden">
      
      {/* Fundo animado */}
      <ImpactBackground />

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 md:px-6 mb-16 text-left"
      >
        <p className="text-xs md:text-sm text-purple-900 font-medium uppercase mb-3">
          Impacto Real nas Operações
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 leading-snug">
          Potencializando resultados com tecnologia de voz.
        </h2>
      </motion.div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto px-4 md:px-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white/80 backdrop-blur-md p-4 md:p-6 h-[180px] md:h-[240px] hover:shadow-lg transition-all"
          >
            {/* Conteúdo */}
            <div className="flex-1 flex flex-col justify-start">
              <h3 className="text-[10px] md:text-base font-semibold text-zinc-900 mb-2 min-h-[32px] md:min-h-[48px]">
                {metric.label}
              </h3>
              <p className="text-[10px] md:text-sm text-zinc-600 leading-snug min-h-[32px] md:min-h-[60px]">
                {metric.description}
              </p>
            </div>

            {/* Valor */}
            <div className="text-xl md:text-4xl font-extrabold text-purple-900 mt-4">
              <CountUp
                end={metric.value}
                duration={2}
                decimals={metric.value % 1 !== 0 ? 1 : 0}
                suffix={metric.suffix}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
