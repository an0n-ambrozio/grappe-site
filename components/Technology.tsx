"use client";

import { motion } from "framer-motion";
import { Cpu, Mic, Zap, MessageCircle } from "lucide-react";

const techCards = [
  {
    Icon: Mic,
    title: "Voz Natural",
    description: "IA que soa como humano, com entonação e precisão — em tempo real.",
  },
  {
    Icon: MessageCircle,
    title: "Multicanal 24/7",
    description: "Atendimento via WhatsApp, telefone, webchat e muito mais.",
  },
  {
    Icon: Zap,
    title: "Interações Inteligentes",
    description: "IA que entende o tom e o contexto de cada cliente.",
  },
  {
    Icon: Cpu,
    title: "IA Generativa + NLP",
    description: "Modelos avançados com engenharia conversacional própria.",
  },
];

export default function Tecnologia() {
  return (
    <section id="tecnologia" className="w-full bg-white py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-left">

        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs md:text-sm text-purple-900 font-medium uppercase mb-2">
            Nossa Tecnologia
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900">
            Tecnologia inteligente que transforma operações em escala.
          </h2>
        </motion.div>

        {/* DESKTOP — GRID 2x2 */}
        <div className="hidden sm:grid grid-cols-2 gap-6">
          {techCards.map(({ Icon, title, description }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-purple-900/90 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all text-white"
            >
              <Icon className="w-7 h-7 text-purple-200 mb-3" />
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-sm text-purple-100/90">{description}</p>
            </motion.div>
          ))}
        </div>

        {/* MOBILE — GRID 2x2 */}
        <div className="grid grid-cols-2 gap-4 sm:hidden mt-6">
          {techCards.map(({ Icon, title, description }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-purple-900/90 backdrop-blur-md rounded-xl p-4 shadow-md text-white flex flex-col items-start"
            >
              <Icon className="w-6 h-6 text-purple-200 mb-2" />
              <h3 className="text-sm font-semibold mb-1">{title}</h3>
              <p className="text-xs text-purple-100/80 leading-tight">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
