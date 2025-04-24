"use client";

import { motion } from "framer-motion";
import { Mail, User, Phone, MessageCircle } from "lucide-react";

export default function ContatoPage() {
  return (
    <main className="w-full bg-white text-zinc-800">
      <section className="w-full py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-20">

          {/* TÍTULO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-4">
              Entre em contato com a Grappe.AI
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl">
              Estamos prontos para entender sua operação e mostrar como a IA pode escalar seus resultados.
            </p>
          </motion.div>

          {/* FORMULÁRIO CONECTADO AO EMAIL */}
          <motion.form
            action="https://formsubmit.co/matheus@grappeai.com"
            method="POST"
            target="_blank"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white border border-zinc-200 rounded-xl p-8 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 backdrop-blur-md"
          >
            {/* Nome */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-700 font-medium flex items-center gap-2">
                <User className="w-4 h-4 text-purple-900" />
                Nome completo
              </label>
              <input
                type="text"
                name="Nome"
                placeholder="Seu nome"
                required
                className="px-4 py-3 text-sm border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900 transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-700 font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-900" />
                E-mail profissional
              </label>
              <input
                type="email"
                name="Email"
                placeholder="exemplo@empresa.com"
                required
                className="px-4 py-3 text-sm border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900 transition"
              />
            </div>

            {/* Telefone */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm text-zinc-700 font-medium flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-900" />
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                name="Telefone"
                placeholder="(99) 99999-9999"
                className="px-4 py-3 text-sm border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900 transition"
              />
            </div>

            {/* Mensagem */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm text-zinc-700 font-medium flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-purple-900" />
                Conte sobre sua operação ou projeto
              </label>
              <textarea
                name="Mensagem"
                placeholder="Ex: Tenho uma operação de atendimento com 5 agentes e gostaria de escalar com IA..."
                rows={5}
                className="px-4 py-3 text-sm border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900 transition resize-none"
              ></textarea>
            </div>

            {/* Botão */}
            <div className="md:col-span-2 text-left mt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                type="submit"
                className="w-full sm:w-auto bg-purple-900 text-white px-6 py-3 rounded-md font-semibold text-sm border border-purple-900 hover:bg-white hover:text-purple-900 transition"
              >
                Enviar mensagem
              </motion.button>
            </div>
          </motion.form>

          {/* INFORMAÇÕES EXTRAS */}
          <div className="text-sm text-zinc-600 text-left leading-relaxed">
            <p>
              Ou envie um e-mail para:{" "}
              <a
                href="mailto:matheus@grappeai.com"
                className="text-purple-900 font-medium underline underline-offset-4"
              >
                matheus@grappeai.com
              </a>
            </p>
            <p className="mt-1">
              Endereço: Avenida Brigadeiro Faria Lima 1811, São Paulo - SP, Brasil
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
