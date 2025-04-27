"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot, BrainCircuit } from "lucide-react";

export default function SobrePage() {
  return (
    <main className="relative w-full bg-white text-zinc-800 overflow-hidden">
      
      <section className="relative w-full py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-20 md:gap-24">

          {/* BLOCO INICIAL */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Texto Principal */}
            <div className="space-y-6 text-left">
              <p className="text-xs md:text-sm uppercase font-semibold text-purple-900 tracking-widest">
                Quem somos
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold text-purple-900 leading-tight md:leading-snug">
                A IA de voz que escala <br className="hidden md:block" /> o futuro das empresas.
              </h1>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Fundada no Brasil, a Grappe.AI desenvolve agentes de Inteligência Artificial
                projetados para atuar como especialistas em voz, texto, vendas e atendimento.
              </p>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Nossa missão é entregar automações que performam de verdade: com naturalidade,
                alta eficiência e resultado prático para escalar operações críticas.
              </p>
            </div>

            {/* Bloco Visual */}
            <div className="w-full max-w-md mx-auto bg-white/40 backdrop-blur-xl border border-zinc-200 rounded-2xl shadow-2xl p-8 text-left transition hover:shadow-purple-200">
              <Sparkles className="w-8 h-8 text-purple-900 mb-4" />
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                Tecnologia com Propósito
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                A Grappe.AI une o poder da IA generativa, NLP e engenharia de voz para construir
                experiências que vendem como os melhores humanos.
              </p>
            </div>
          </motion.section>

          {/* VALORES E VISÃO */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Bot className="w-6 h-6 text-purple-900" />,
                title: "IA com Propósito",
                desc: "Criamos especialistas digitais para escalar resultados de verdade.",
              },
              {
                icon: <BrainCircuit className="w-6 h-6 text-purple-900" />,
                title: "Tecnologia de Ponta",
                desc: "Integramos OpenAI, ElevenLabs, Claude e nossa engenharia proprietária.",
              },
              {
                icon: <Sparkles className="w-6 h-6 text-purple-900" />,
                title: "Eficiência Real",
                desc: "Soluções que transformam canais digitais em motores de crescimento.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-zinc-200 bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left"
              >
                <div className="mb-3">{item.icon}</div>
                <h4 className="text-base md:text-lg font-semibold text-zinc-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.section>

          {/* CTA FINAL */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-purple-900 text-white rounded-2xl px-8 py-12 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          >
            <div className="text-left space-y-2">
              <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-white/80">
                Inteligência como Serviço
              </p>
              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                Vamos construir o futuro da sua empresa com IA?
              </h3>
              <p className="text-xs md:text-sm max-w-md text-white/90">
                Fale agora com a Grappe.AI e descubra como escalar atendimento, vendas e prospecção.
              </p>
            </div>

            <a
              href="/contato"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-md border border-white hover:bg-purple-100 transition"
            >
              Fale com um especialista
            </a>
          </motion.section>

        </div>
      </section>
    </main>
  );
}
