"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot, BrainCircuit } from "lucide-react";

export default function SobrePage() {
  return (
    <main className="w-full bg-white text-zinc-800">
      <section className="w-full py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-24">

          {/* BLOCO INICIAL */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Texto Principal */}
            <div className="space-y-6 text-left">
              <p className="text-sm uppercase font-medium text-purple-900 tracking-widest">
                Quem somos
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold text-purple-900 leading-snug">
                A Grappe.AI nasceu pra escalar<br className="hidden md:block" /> o impossível com inteligência.
              </h1>
              <p className="text-base text-zinc-600">
                Fundada no coração do Brasil, a Grappe.AI é uma empresa de tecnologia especializada
                no desenvolvimento de agentes de Inteligência Artificial de alto desempenho —
                projetados para operar como verdadeiros especialistas em voz, texto, vendas e atendimento.
              </p>
              <p className="text-base text-zinc-600">
                Nossa missão é clara: ajudar empresas a escalar operações críticas com automações
                que realmente funcionam — com naturalidade, performance e foco total em resultados.
              </p>
            </div>

            {/* Bloco Visual */}
            <div className="w-full max-w-md mx-auto bg-white/40 backdrop-blur-xl border border-zinc-200 rounded-xl shadow-xl p-8 text-left">
              <Sparkles className="w-8 h-8 text-purple-900 mb-4" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Tecnologia com Propósito
              </h3>
              <p className="text-sm text-zinc-600">
                A Grappe.AI combina o que há de mais avançado em IA generativa, NLP e engenharia de
                voz para criar experiências automatizadas que soam (e vendem) como os melhores humanos.
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
                title: "IA com propósito",
                desc: "Não criamos assistentes genéricos. Criamos especialistas digitais com foco claro: gerar performance real pro seu negócio.",
              },
              {
                icon: <BrainCircuit className="w-6 h-6 text-purple-900" />,
                title: "Tecnologia de ponta",
                desc: "Nossa stack usa os melhores modelos do mundo (OpenAI, ElevenLabs, Vapi) com engenharia própria em cada agente.",
              },
              {
                icon: <Sparkles className="w-6 h-6 text-purple-900" />,
                title: "Experiência + Eficiência",
                desc: "Fazemos com que o impossível pareça simples — seja no WhatsApp, voz ou qualquer outro canal digital.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-zinc-200 bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-sm hover:shadow-md transition text-left"
              >
                <div className="mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-zinc-900 mb-1">{item.title}</h4>
                <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.section>

          {/* CTA FINAL */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-purple-900 text-white rounded-xl px-8 py-12 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          >
            <div className="text-left">
              <p className="text-sm font-semibold tracking-widest uppercase mb-2 text-white/80">
                Inteligência como serviço
              </p>
              <h3 className="text-2xl font-bold mb-2">
                Vamos construir o futuro da sua empresa com IA?
              </h3>
              <p className="text-sm max-w-md text-white/90">
                Entre em contato com a Grappe.AI e descubra como podemos escalar o seu atendimento,
                prospecção e vendas com tecnologia real.
              </p>
            </div>

            <a
              href="/contato"
              className="text-sm px-6 py-3 bg-white text-purple-900 font-semibold rounded-md border border-white hover:bg-purple-100 transition"
            >
              Fale com um especialista
            </a>
          </motion.section>
        </div>
      </section>
    </main>
  );
}
