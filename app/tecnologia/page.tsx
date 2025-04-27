"use client";

import { motion } from "framer-motion";
import { PhoneCall, MessageSquareText, Brain, Settings2 } from "lucide-react";

export default function TecnologiaPage() {
  return (
    <main className="w-full bg-white text-zinc-800">

      {/* SEÇÃO 1 — Apresentação */}
      <section className="w-full bg-white py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">

          {/* TÍTULO + TEXTO INTRODUTÓRIO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left space-y-4"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-purple-900 leading-tight">
              Tecnologia projetada para escalar inteligência e performance.
            </h1>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-xl">
              A Grappe.AI combina IA generativa, engenharia de linguagem e integração total com sua operação para automatizar atendimentos e escalar vendas com eficiência real.
            </p>
          </motion.div>

          {/* CARDS FUNCIONALIDADES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: <PhoneCall className="w-8 h-8 text-purple-900" />,
                title: "Voz & WhatsApp Realistas",
                desc: "IA que conversa com naturalidade, tanto por voz quanto texto — 24h por dia.",
              },
              {
                icon: <Brain className="w-8 h-8 text-purple-900" />,
                title: "Adaptação Inteligente",
                desc: "Treinada com os dados da sua empresa, ela aprende, evolui e melhora com o tempo.",
              },
              {
                icon: <Settings2 className="w-8 h-8 text-purple-900" />,
                title: "Integrações Totais",
                desc: "Conecta com CRMs, ERPs, WhatsApp API, VoIP e fluxos digitais de forma nativa.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-md border border-zinc-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — O que a IA Grappe faz */}
      <section className="w-full bg-white py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">

          {/* TÍTULO + INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left space-y-4"
          >
            <p className="text-xs md:text-sm uppercase font-semibold tracking-widest text-purple-900">
              O que a IA Grappe faz na prática
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 leading-snug">
              Automação real, com impacto direto nos resultados.
            </h2>
          </motion.div>

          {/* GRID FUNCIONALIDADES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <PhoneCall className="w-8 h-8 text-purple-900" />,
                title: "Atendimento por Voz com IA",
                desc: "Chamadas automáticas com linguagem natural, scripts dinâmicos e entonação realista.",
              },
              {
                icon: <MessageSquareText className="w-8 h-8 text-purple-900" />,
                title: "WhatsApp Inteligente",
                desc: "Envio de mídia, agendamento de visitas e atendimento automatizado com IA nativa.",
              },
              {
                icon: <Settings2 className="w-8 h-8 text-purple-900" />,
                title: "Integrações Sob Medida",
                desc: "Conectamos com CRMs, ERPs, APIs, Webhooks e sistemas internos.",
              },
              {
                icon: <Brain className="w-8 h-8 text-purple-900" />,
                title: "Aprendizado Contínuo",
                desc: "Nossa IA evolui a partir das interações, se adaptando para maximizar a eficiência.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-md border border-zinc-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — Integrações */}
      <section className="w-full bg-white py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">

          {/* TÍTULO + INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left space-y-4"
          >
            <p className="text-xs md:text-sm uppercase text-purple-900 font-medium tracking-wide">
              Conectada ao seu ecossistema
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4">
              Integração nativa com as ferramentas da sua operação.
            </h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-3xl">
              A Grappe.AI conecta-se nativamente com CRMs, ERPs, plataformas de comunicação e sistemas internos, moldando a IA às suas operações — não o contrário.
            </p>
          </motion.div>

          {/* BULLETS */}
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-zinc-700"
          >
            {[
              "Integração com WhatsApp Business API (360Dialog, Twilio, Gupshup)",
              "Conexão com CRMs como Hubspot, Salesforce e Pipedrive",
              "Integração direta com ERPs e sistemas internos",
              "Compatibilidade com VoIP, Webhooks e APIs REST",
              "Automatização de fluxos no Zapier, Make, etc",
              "Hospedagem escalável na AWS ou sua estrutura"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-purple-900 mt-1">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* SEÇÃO 4 — CTA Final */}
      <section className="w-full bg-purple-900 py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 rounded-xl px-8 py-12 shadow-xl backdrop-blur-sm border border-white/10">

          {/* TEXTO À ESQUERDA */}
          <div className="flex-1 text-left space-y-4">
            <p className="text-xs md:text-sm uppercase font-semibold tracking-widest text-purple-100">
              Tecnologia Exclusiva Grappe.AI
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Vamos construir a nova geração do seu atendimento?
            </h2>
            <p className="text-sm md:text-base text-zinc-100 max-w-lg">
              Fale com um especialista Grappe.AI e descubra como escalar suas operações com Inteligência Artificial de verdade.
            </p>
          </div>

          {/* BOTÃO */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/contato"
            className="block text-sm px-6 py-3 bg-white text-purple-900 font-semibold rounded-md border border-white hover:bg-transparent hover:text-white hover:border-white transition text-center"
          >
            Entrar em contato
          </motion.a>
        </div>
      </section>
    </main>
  );
}
