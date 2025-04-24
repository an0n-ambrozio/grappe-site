"use client";

import { motion } from "framer-motion";

export default function TecnologiaComparativo() {
  return (
    <section className="w-full bg-white py-24 sm:py-32 px-4 md:px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <p className="text-sm uppercase text-purple-900 font-medium mb-2 tracking-wide">
            Comparativo Estratégico
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4 leading-snug">
            Economia real. Eficiência máxima.
          </h2>
          <p className="text-base text-zinc-600 max-w-2xl leading-relaxed">
            A Grappe.AI substitui até <strong>3 operadores humanos</strong> com atendimento automatizado, natural e disponível <strong>24/7</strong>. Com um custo por chamada até <strong>10% menor</strong> — e escalabilidade que nenhuma equipe oferece.
          </p>
        </motion.div>

        {/* TABELA RESPONSIVA */}
        <div className="overflow-x-auto rounded-xl border border-zinc-200">
          <table className="min-w-[640px] w-full text-sm bg-white">
            <thead className="bg-zinc-100 text-zinc-700 text-left">
              <tr>
                <th className="py-4 px-6 font-semibold whitespace-nowrap">Comparativo</th>
                <th className="py-4 px-6 font-semibold whitespace-nowrap">3 Operadores Humanos</th>
                <th className="py-4 px-6 font-semibold text-purple-900 whitespace-nowrap">IA Grappe</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Chamadas mensais", "3.960", "3.960+"],
                ["Custo total", "R$ 12.000", "R$ 10.692"],
                ["Custo por chamada", "R$ 3,03", "R$ 2,70"],
                ["Atendimento simultâneo", "1 por vez", "10+ simultâneos"],
                ["Disponibilidade", "8h/dia úteis", "24h/dia — 7 dias"],
                ["Fadiga / pausas", "Sim", "Zero"],
              ].map(([item, human, ia], i) => (
                <tr key={i} className="border-t border-zinc-200">
                  <td className="py-4 px-6">{item}</td>
                  <td className="py-4 px-6">{human}</td>
                  <td className="py-4 px-6 text-purple-900 font-medium">{ia}</td>
                </tr>
              ))}
              <tr className="border-t border-zinc-200 bg-purple-50">
                <td className="py-4 px-6 font-semibold">💸 Economia estimada</td>
                <td className="py-4 px-6">—</td>
                <td className="py-4 px-6 text-purple-900 font-semibold">R$ 1.308/mês</td>
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
          className="text-left"
        >
          <p className="text-base text-zinc-600 max-w-2xl leading-relaxed">
            A IA Grappe entrega o mesmo volume de atendimento de 3 operadores humanos com:
            <br />
            <strong>– Menor custo</strong>, <strong>– Mais escala</strong>, e <strong>– Disponibilidade total</strong>.
          </p>
          <p className="mt-4 text-purple-900 font-semibold">
            O futuro do atendimento já começou — e ele fala com você.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
