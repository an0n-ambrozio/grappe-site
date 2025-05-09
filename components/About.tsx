"use client";

import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section id="sobre" className="w-full bg-white py-20 md:py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full bg-white/70 backdrop-blur-lg border border-zinc-200 rounded-2xl shadow-lg p-6 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16">

        {/* COLUNA ESQUERDA - Linha e Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/3 relative pl-6 border-l-2 border-purple-900 flex flex-col"
        >
          {/* Ícone pulsante */}
          <div className="absolute -left-[9px] top-0">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-900" />
            </span>
          </div>

          <p className="text-xs md:text-sm text-purple-900 font-medium uppercase mb-3">
            Sobre a GRAPPE.AI
          </p>

          <h2 className="text-2xl md:text-4xl font-extrabold text-zinc-900 leading-tight">
            Tecnologia <br />para escalar empresas.
          </h2>
        </motion.div>

        {/* COLUNA DIREITA - Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-2/3 space-y-5 text-zinc-600 text-sm md:text-base leading-relaxed"
        >
          <p>
            A Grappe.AI é uma empresa de tecnologia especializada no desenvolvimento
            de agentes autônomos de Inteligência Artificial, capazes de operar tarefas
            complexas de forma natural, eficiente e em tempo real.
          </p>

          <p>
            Desenvolvemos soluções B2B para empresas que desejam ir além da automação
            tradicional — com interações realistas por voz e texto, modeladas com IA
            generativa, NLP, Machine Learning e Engenharia Conversacional.
          </p>

          <p>
            Nosso diferencial está na entrega de experiências personalizadas,
            humanizadas e escaláveis, com foco total em performance, eficiência
            operacional e aumento de conversão.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
