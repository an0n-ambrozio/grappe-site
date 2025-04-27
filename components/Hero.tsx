"use client";

import { motion } from "framer-motion";
import { PhoneCall, Mail } from "lucide-react";
import Lottie from "lottie-react";
import soundwaveAnimation from "@/public/lotties/soundwave.json";

export default function Hero() {
  return (
    <section className="relative min-h-[65vh] md:min-h-[80vh] flex flex-col justify-center px-4 md:px-6 pt-16 md:pt-28 overflow-hidden bg-white">
      
      {/* Conteúdo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto w-full flex flex-col justify-center sm:justify-start"
      >
        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[10px] md:text-sm text-zinc-300 font-semibold tracking-widest uppercase mb-4 md:mb-6 text-left"
        >
          Tecnologia Exclusiva Grappe.AI
        </motion.p>

        {/* Desktop */}
        <div className="hidden sm:block text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight max-w-[800px] mb-8 text-purple-900"
          >
            Tecnologia de Voz{" "}
            <span className="text-zinc-700">
              que está revolucionando o atendimento e impulsionando negócios.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base text-zinc-600 mb-8 max-w-2xl"
          >
            Teste agora e veja o futuro do atendimento.
          </motion.p>

          {/* Botões Desktop */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <motion.a
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              href="/testar"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-md font-bold text-white bg-purple-900 rounded-md shadow-lg hover:bg-purple-800 transition-all duration-300"
            >
              <PhoneCall className="w-5 h-5" />
              Testar agora
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-md font-semibold text-purple-900 bg-transparent rounded-md hover:bg-purple-100 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Entrar em contato
            </motion.a>
          </div>
        </div>

        {/* Mobile */}
        <div className="block sm:hidden text-left mt-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[20px] font-bold leading-snug text-purple-900 mb-3 max-w-[320px]"
          >
            Tecnologia de Voz{" "}
            <span className="text-zinc-700">
              que revoluciona o atendimento e impulsiona negócios.
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-[12px] text-zinc-600 mb-6 max-w-[280px]"
          >
            Teste agora e veja o futuro do atendimento.
          </motion.p>

          {/* Botão Mobile */}
          <div className="flex flex-col items-start gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              href="/testar"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 text-[13px] font-bold text-white bg-purple-900 rounded-md shadow-md hover:bg-purple-800 transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4" />
              Testar agora
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Lottie Animation */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[120px] md:h-[200px] opacity-70 pointer-events-none">
        <Lottie
          animationData={soundwaveAnimation}
          loop={true}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}
