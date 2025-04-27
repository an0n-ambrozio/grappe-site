"use client";

import { motion } from "framer-motion";
import { PhoneCall, MessageSquareText, Rocket, ServerCog } from "lucide-react";

const solutions = [
  {
    icon: <PhoneCall className="w-8 h-8 text-purple-900" />,
    title: "Agente de Voz com IA",
    description: "Receba e realize ligações com linguagem natural e scripts adaptativos, 24h por dia.",
  },
  {
    icon: <MessageSquareText className="w-8 h-8 text-purple-900" />,
    title: "WhatsApp Inteligente",
    description: "Conversas realistas, envio de mídia, captura de leads e agendamentos automáticos via IA.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-900" />,
    title: "Prospecção Automatizada",
    description: "Geração e nutrição de leads com mensagens personalizadas para cada perfil.",
  },
  {
    icon: <ServerCog className="w-8 h-8 text-purple-900" />,
    title: "Integrações sob medida",
    description: "Conectamos com CRMs, ERPs, telefonia e servidores escaláveis — com máxima performance.",
  },
];

export default function Solucoes() {
  return (
    <section id="solucoes" className="relative w-full bg-white py-20 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-left"
        >
          <p className="text-xs md:text-sm text-purple-900 font-medium uppercase mb-3">
            Soluções para Empresas
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 leading-snug">
            Automação inteligente, sem fricção.
          </h2>
        </motion.div>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-zinc-200 rounded-2xl p-5 flex flex-col shadow-sm hover:shadow-purple-300/30 transition-all min-h-[200px]"
            >
              <div className="mb-4 flex items-center">
                {solution.icon}
              </div>
              <h3 className="text-base md:text-lg font-semibold text-zinc-900 mb-2 group-hover:text-purple-900 transition">
                {solution.title}
              </h3>
              <p className="text-sm text-zinc-600">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
