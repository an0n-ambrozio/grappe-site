"use client";

import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-200 py-12 px-6 md:px-8">
      <div className="max-w-[1152px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
        
        {/* Branding e frase */}
        <div className="text-center md:text-left space-y-1">
          <p className="font-semibold text-zinc-700">
            © {new Date().getFullYear()} Grappe.AI
          </p>
          <p className="text-zinc-500">
            Feito com inteligência no Brasil 🇧🇷
          </p>
        </div>

        {/* Redes sociais */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-purple-900 transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-purple-900 transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
