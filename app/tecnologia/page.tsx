"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  MessageSquareText,
  Brain,
  Settings2,
} from "lucide-react";

export default function TecnologiaPage() {
  return (
    <main className="w-full bg-white text-zinc-800">

      {/* SEÇÃO 1 — Apresentação com alinhamento padrão Grappe */}
      <section className="w-full bg-white py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          
          {/* TÍTULO + TEXTO INTRODUTÓRIO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 leading-tight">
              Tecnologia projetada para escalar inteligência e performance.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed max-w-xl">
              A Grappe.AI combina IA generativa, engenharia de linguagem e integração total com sua operação para automatizar atendimentos, escalar vendas e reduzir drasticamente custos.
            </p>
          </motion.div>

          {/* CARDS DESTACANDO FUNCIONALIDADES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                desc: "Conecta com CRMs, ERPs, WhatsApp API, VoIP, e se adapta ao seu ecossistema.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-md border border-zinc-200 rounded-xl p-6 shadow-md hover:shadow-lg transition text-left"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* SEÇÃO 2 — O que a IA Grappe faz */}
      <section className="w-full bg-white py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">

          {/* TÍTULO + INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left space-y-3"
          >
            <p className="text-sm uppercase text-purple-900 font-medium tracking-wide">
              O que a IA Grappe faz na prática
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 leading-snug">
              Automação real com impacto direto nos resultados.
            </h2>
          </motion.div>

          {/* GRID DE FUNCIONALIDADES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <PhoneCall className="w-8 h-8 text-purple-900" />,
                title: "Atendimento por Voz com IA",
                desc: "Chamadas automáticas com linguagem natural, scripts dinâmicos e entonação realista.",
              },
              {
                icon: <MessageSquareText className="w-8 h-8 text-purple-900" />,
                title: "WhatsApp Inteligente",
                desc: "Envio de mídia, agendamento de visitas e atendimento automático via IA.",
              },
              {
                icon: <Settings2 className="w-8 h-8 text-purple-900" />,
                title: "Integrações Sob Medida",
                desc: "Conectamos com CRM, ERP, formulários, telefonia e muito mais.",
              },
              {
                icon: <Brain className="w-8 h-8 text-purple-900" />,
                title: "Aprendizado Contínuo",
                desc: "A IA melhora com cada interação, adaptando-se ao seu público.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-md border border-zinc-200 rounded-xl p-6 shadow-md hover:shadow-lg transition text-left"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — Comparativo IA vs Humano */}
      <section className="w-full bg-white py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-14">

          {/* TÍTULO + INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left space-y-4"
          >
            <p className="text-sm uppercase text-purple-900 font-medium tracking-wide">
              Comparativo Estratégico
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 leading-snug">
              A IA que substitui equipes inteiras — com mais eficiência.
            </h2>
            <p className="text-base text-zinc-600 max-w-2xl">
              A Grappe.AI substitui quantos operadores forem necessários com mais performance e menor custo. 
              No comparativo abaixo, veja o cenário de 3 operadores humanos versus a nossa IA — e entenda por que escalar com inteligência é o caminho certo.
            </p>
          </motion.div>

          {/* TABELA COMPARATIVA */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-zinc-200 rounded-xl overflow-hidden shadow-md text-sm">
              <thead className="bg-zinc-100 text-zinc-700 text-left">
                <tr>
                  <th className="py-4 px-6 font-semibold">Comparativo</th>
                  <th className="py-4 px-6 font-semibold">3 Operadores Humanos</th>
                  <th className="py-4 px-6 font-semibold text-purple-900">IA Grappe</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  { label: "Chamadas mensais", human: "3.960", ai: "3.960+" },
                  { label: "Custo total mensal", human: "R$ 12.000", ai: "R$ 10.692" },
                  { label: "Custo por chamada", human: "R$ 3,03", ai: "R$ 2,70" },
                  { label: "Atendimento simultâneo", human: "1 por vez", ai: "10+ simultâneos" },
                  { label: "Disponibilidade", human: "8h/dia úteis", ai: "24h/dia — 7 dias" },
                  { label: "Fadiga / pausas", human: "Sim", ai: "Zero" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-zinc-200">
                    <td className="py-4 px-6">{row.label}</td>
                    <td className="py-4 px-6">{row.human}</td>
                    <td className="py-4 px-6 text-purple-900 font-medium">{row.ai}</td>
                  </tr>
                ))}
                <tr className="border-t border-zinc-200 bg-purple-50">
                  <td className="py-4 px-6 font-semibold">💸 Economia estimada mensal</td>
                  <td className="py-4 px-6">—</td>
                  <td className="py-4 px-6 text-purple-900 font-semibold">R$ 1.308/mês</td>
                </tr>
                <tr className="border-t border-purple-100 bg-purple-100">
                  <td className="py-4 px-6 font-bold text-zinc-800">🎯 Economia estimada anual</td>
                  <td className="py-4 px-6 font-bold">—</td>
                  <td className="py-4 px-6 font-bold text-purple-900">R$ 15.696/ano</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CONCLUSÃO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-purple-50 border border-purple-200 rounded-xl p-8 md:p-10 text-left shadow-md"
          >
            {/* Ícone ou destaque no topo (opcional) */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-2 h-2 bg-purple-900 rounded-full" />
              <span className="text-sm text-purple-900 font-semibold tracking-wide uppercase">
                Conclusão Estratégica
              </span>
            </div>

            {/* Texto principal */}
            <h3 className="text-xl md:text-2xl font-bold text-purple-900 mb-4 leading-snug">
              Resultados exponenciais com menos custo, mais agilidade e escala ilimitada.
            </h3>

            <p className="text-base text-zinc-700 leading-relaxed max-w-3xl">
              Você não depende mais de pausas, treinamentos ou limitações humanas.
              A Grappe.AI entrega performance contínua e adaptável — 24h por dia, 7 dias por semana,
              com atendimento simultâneo e total foco em resultados.
            </p>

            <p className="mt-4 text-base font-medium text-purple-900">
              Comece com 1 operador ou substitua 10 — a IA se ajusta ao seu time e cresce com a sua operação.
            </p>
          </motion.div>
        </div>
      </section>

        {/* SEÇÃO 4 — Integrações */}
        
        <section className="w-full bg-white py-32 px-6 md:px-8">
          <div className="max-w-5xl mx-auto flex flex-col gap-12">

            {/* TÍTULO E EXPLICAÇÃO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <p className="text-sm uppercase text-purple-900 font-medium mb-2 tracking-wide">
                Conectada ao seu ecossistema
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4">
                Integração nativa com as ferramentas da sua operação.
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed max-w-3xl">
                A Grappe.AI foi criada para se adaptar 100% à sua realidade.
                Ela conecta com CRMs, ERPs, sistemas de atendimento, APIs e qualquer fluxo digital que sua empresa utilize.
                A inteligência se molda ao seu ecossistema — não o contrário.
              </p>
            </motion.div>

            {/* BULLETS DESTACADOS */}
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-zinc-700"
            >
              {[
                "Integra com WhatsApp Business API (360Dialog, Gupshup, Twilio)",
                "Conexão com CRMs como Hubspot, Pipedrive e Salesforce",
                "Integração com sistemas de atendimento e ERPs",
                "Compatível com VoIP, Webhooks e APIs REST",
                "Fluxos automatizados com Make, Zapier e ferramentas no-code",
                "Hospedagem escalável na AWS (ou estrutura do cliente)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-purple-900 mt-1">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* SEÇÃO 5 — CTA FINAL */}
        <section className="w-full bg-purple-900 py-28 px-6 md:px-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-white/5 rounded-xl px-8 py-10 md:py-14 shadow-xl backdrop-blur-sm border border-white/10">

            {/* TEXTO À ESQUERDA */}
            <div className="flex-1 text-left">
              <p className="text-sm text-purple-100 uppercase font-semibold tracking-widest mb-2">
                Tecnologia Exclusiva Grappe.AI
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-snug">
                Quer escalar resultados com IA de verdade?
              </h2>
              <p className="text-sm text-zinc-100 max-w-lg">
                Nossa equipe está pronta para entender sua operação e mostrar na prática como a Grappe.AI pode transformar seus resultados — com inteligência real, escalável e de alta performance.
              </p>
            </div>

            {/* BOTÃO À DIREITA */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/contato"
                className="block text-sm px-6 py-3 text-purple-900 bg-white font-semibold rounded-md border border-white transition hover:bg-transparent hover:text-white hover:border-white text-center"
              >
                Entrar em contato
              </motion.a>
            </div>
          </div>
        </section>
    </main>
  );
}
