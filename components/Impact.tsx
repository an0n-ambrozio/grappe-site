"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const metrics = [
  {
    label: "Redução de Custos",
    value: 90,
    suffix: "%",
    description: "Redução de até 90% nos custos operacionais com atendimento.",
  },
  {
    label: "Conversão em Vendas",
    value: 3.2,
    suffix: "x",
    description: "Maior taxa de conversão em vendas e agendamentos.",
  },
  {
    label: "Disponibilidade",
    value: 24,
    suffix: "h",
    description: "Atendimento 24 horas por dia, 7 dias por semana.",
  },
  {
    label: "Eficiência Escalável",
    value: 100,
    suffix: "%",
    description: "Operações em larga escala com IA 100% adaptável.",
  },
];

export default function Impacto() {
  return (
    <section id="impacto" className="relative w-full py-24 bg-white overflow-hidden">
      {/* Fundo com grade técnica */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 120 120" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="12" height="12" patternUnits="userSpaceOnUse">
              <path d="M 12 0 L 0 0 0 12" fill="none" stroke="#a78bfa" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 md:px-6 mb-16 text-left"
      >
        <p className="text-sm text-purple-900 font-medium uppercase mb-3">
          Impacto Real nas Operações
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 leading-snug">
          Menos custo. Mais eficiência.
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="overflow-x-auto">
        <div className="flex flex-row md:grid md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4 md:px-6 min-w-[600px]">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[260px] md:min-w-0 flex flex-col justify-between rounded-xl border border-zinc-200 bg-white/70 backdrop-blur-lg p-6 h-[250px] hover:scale-[1.02] transition-transform"
            >
              {/* Bloco de conteúdo fixo para alinhamento */}
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="text-base font-semibold text-zinc-900 mb-2 min-h-[48px]">
                  {metric.label}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed min-h-[60px]">
                  {metric.description}
                </p>
              </div>

              {/* Valor */}
              <div className="text-4xl font-extrabold text-purple-900 mt-4">
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
      </div>
    </section>
  );
}
