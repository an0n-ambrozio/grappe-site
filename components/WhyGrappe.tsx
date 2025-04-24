"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const motivos = [
  "Tecnologia proprietária de IA",
  "Soluções personalizadas para cada operação",
  "Voz e texto com alto nível de realismo",
  "Equipe técnica especializada",
  "Resultados mensuráveis e escaláveis"
];

export default function PorqueAGrappe() {
  return (
    <section id="porque" className="w-full bg-white py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-start justify-center">

        {/* COLUNA ESQUERDA - Título e texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <p className="text-sm text-purple-900 font-medium uppercase mb-3">
            Por que a Grappe.AI?
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 leading-snug mb-6">
            Porque o futuro não espera.
          </h2>
          <p className="text-base text-zinc-600 leading-relaxed">
            A Grappe.AI não é uma ferramenta genérica. É uma engenharia
            personalizada de inteligência, construída para se adaptar ao seu
            negócio e escalar com ele. Criamos automações de alto desempenho,
            com realismo, performance e confiabilidade.
          </p>
        </motion.div>

        {/* COLUNA DIREITA - Lista animada */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {motivos.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-6 h-6 text-purple-900 mt-1 shrink-0" />
              <p className="text-base text-zinc-700">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
