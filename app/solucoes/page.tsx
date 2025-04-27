"use client";

import { motion } from "framer-motion";
import { PhoneCall, MessageSquareText, Rocket, ServerCog, Users } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: <PhoneCall className="w-8 h-8 text-purple-900" />,
    title: "Agente de Voz com IA",
    description: "Automatize ligações receptivas e ativas com uma IA que fala como humano, com naturalidade e eficiência.",
  },
  {
    icon: <MessageSquareText className="w-8 h-8 text-purple-900" />,
    title: "WhatsApp Inteligente",
    description: "Atenda e converta clientes com IA que interage, responde, envia mídias e agenda automaticamente.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-900" />,
    title: "Prospecção Automatizada",
    description: "Nossa IA entra em contato com leads, faz perguntas qualificadoras e entrega oportunidades para vendas.",
  },
  {
    icon: <ServerCog className="w-8 h-8 text-purple-900" />,
    title: "Integrações Personalizadas",
    description: "Integre sua operação em CRMs, ERPs, APIs e fluxos, com orquestração de ponta a ponta.",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-900" />,
    title: "IA e Humanos Juntos",
    description: "A IA cuida da escala. Humanos atuam nas exceções. Equilíbrio para atendimento inteligente e escalável.",
  },
];

export default function SolucoesPage() {
  return (
    <main className="w-full bg-white text-zinc-800">
      <section className="w-full py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col gap-20">

          {/* TÍTULO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left space-y-4"
          >
            <p className="text-xs md:text-sm uppercase font-semibold tracking-widest text-purple-900">
              Soluções Grappe.AI
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-purple-900 leading-tight">
              Inteligência de Voz que transforma atendimento, vendas e escala.
            </h1>
            <p className="text-sm md:text-base text-zinc-600 max-w-2xl leading-relaxed">
              Nossos agentes de voz e texto automatizam conversas com qualidade humana, acelerando resultados e otimizando operações.
            </p>
          </motion.div>

          {/* GRID DE SOLUÇÕES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/60 backdrop-blur-md border border-zinc-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-base md:text-lg font-semibold text-zinc-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* MINI BENEFÍCIOS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[
              "🚀 Aceleração de atendimento e vendas",
              "🎯 Conversão até 3x maior com IA de voz",
              "⏰ Resposta automática em menos de 3 segundos",
              "📈 Escalabilidade sem aumentar equipe",
              "🔌 Integração nativa com CRMs e ERPs",
              "🧠 Aprendizado contínuo para máxima eficiência",
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-md border border-zinc-200 rounded-lg p-4 text-sm text-purple-900 font-medium shadow-sm hover:shadow-md transition"
              >
                {benefit}
              </div>
            ))}
          </motion.div>

          {/* CTA FINAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white border border-purple-900 rounded-xl p-8 shadow-md"
          >
            <div className="text-left space-y-2">
              <p className="text-xs md:text-sm uppercase font-semibold tracking-widest text-purple-900">
                Transformação Inteligente
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900">
                Vamos construir o seu próximo nível com IA de voz?
              </h3>
              <p className="text-sm md:text-base text-zinc-600 max-w-xl">
                Converse com um especialista Grappe.AI e descubra como podemos revolucionar sua operação com inteligência conversacional.
              </p>
            </div>

            <Link
              href="/contato"
              className="block text-sm px-6 py-3 text-white bg-purple-900 font-semibold rounded-md border border-purple-900 hover:bg-white hover:text-purple-900 transition text-center"
            >
              Fale com um Especialista
            </Link>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
