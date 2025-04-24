"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  MessageSquareText,
  Rocket,
  ServerCog,
  Users,
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: <PhoneCall className="w-8 h-8 text-purple-900" />,
    title: "Agente de Voz com IA",
    description:
      "Ligações receptivas ou outbound com linguagem natural, entonação humana e scripts inteligentes.",
  },
  {
    icon: <MessageSquareText className="w-8 h-8 text-purple-900" />,
    title: "WhatsApp Inteligente",
    description:
      "Atendimento automatizado com IA. Envio de mídia, coleta de leads e agendamentos em tempo real.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-900" />,
    title: "Prospecção Automatizada",
    description:
      "A IA entra em contato com leads, faz perguntas inteligentes e pré-qualifica para o time de vendas.",
  },
  {
    icon: <ServerCog className="w-8 h-8 text-purple-900" />,
    title: "Integrações sob medida",
    description:
      "Integração com CRMs, ERPs, telefonia e landing pages. Fluxos automatizados do início ao fim.",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-900" />,
    title: "IA + Humanos",
    description:
      "A IA cuida do repetitivo. Humanos entram quando necessário. O equilíbrio ideal para escalar resultados.",
  },
];

export default function SolucoesPage() {
  return (
    <main className="w-full bg-white text-zinc-800">
      <section className="w-full py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8 flex flex-col gap-24">

          {/* TÍTULO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-4">
              Nossas Soluções
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl">
              IA que atende, fala, prospecta, agenda, vende. A Grappe.AI transforma seus processos com inteligência real.
            </p>
          </motion.div>

          {/* GRID DE SOLUÇÕES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/60 backdrop-blur-lg border border-zinc-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>

          {/* MINI-CARDS DE BENEFÍCIOS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[
              "💸 Economia de até 40% em custo operacional",
              "🕒 IA disponível 24/7, sem pausas",
              "⚡ Tempo de resposta entre 1 a 3 segundos",
              "📞 Escala de chamadas sem equipe extra",
              "🚀 Implementação rápida e personalizada",
            ].map((benefit, index) => (
              <div
                key={index}
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
            <div className="text-left">
              <p className="text-sm text-purple-900 uppercase font-semibold tracking-widest mb-2">
                Transformação com IA
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900 mb-2">
                Pronto para escalar sua operação com inteligência?
              </h3>
              <p className="text-sm text-zinc-600 max-w-xl">
                Fale com nossos especialistas e descubra como a Grappe.AI pode transformar a sua empresa.
              </p>
            </div>

            <Link
              href="/contato"
              className="text-sm px-6 py-3 text-white bg-purple-900 font-semibold rounded-md border border-purple-900 hover:bg-white hover:text-purple-900 transition"
            >
              Fale com um Especialista
            </Link>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
