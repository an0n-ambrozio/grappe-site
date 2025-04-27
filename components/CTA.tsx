"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import CardParticles from "@/components/CardParticles";

export default function CTA() {
  return (
    <section className="w-full bg-white py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-purple-600/30 shadow-xl glow px-6 md:px-12 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 group"
        >
          {/* Partículas no Card */}
          <CardParticles />

          {/* COLUNA ESQUERDA */}
          <div className="w-full md:w-1/2 relative z-10 text-left space-y-4">
            <span className="inline-block bg-purple-900 text-white text-[10px] md:text-xs font-semibold px-3 py-1 rounded-md shadow-md">
              Tecnologia Exclusiva GRAPPE.AI
            </span>

            <h2 className="text-xl md:text-3xl font-extrabold text-zinc-900 leading-snug">
              Vamos construir o futuro da sua empresa com IA.
            </h2>
          </div>

          {/* COLUNA DIREITA */}
          <div className="w-full md:w-1/2 relative z-10 text-left space-y-6 md:pl-8 max-w-md">
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
              Fale agora com um especialista da Grappe.AI e descubra como aplicar
              tecnologia de ponta com inteligência, automação e performance real.
            </p>

            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 md:px-6 md:py-3 text-xs md:text-sm rounded-md font-semibold text-purple-900 bg-white border border-purple-900 hover:bg-purple-900 hover:text-white transition duration-300 shadow-md group-hover:shadow-purple-900"
            >
              <PhoneCall className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
              ENTRAR EM CONTATO
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
