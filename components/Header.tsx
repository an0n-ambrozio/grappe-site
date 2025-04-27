"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-zinc-200">
      <div className="max-w-5xl mx-auto w-full px-4 md:px-6 py-3 flex items-center justify-between gap-4">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logograppe.svg"
            alt="Logo Grappe"
            width={130}
            height={32}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-2 text-sm text-zinc-700 font-medium">
          {["sobre", "tecnologia", "solucoes", "contato"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="px-3 py-2 rounded-md transition hover:bg-purple-100 hover:text-purple-900"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        {/* BOTÃO LOGIN DESKTOP */}
        <motion.a
          whileHover={{ scale: 1.03 }}
          href="/login"
          className="hidden md:block text-sm px-4 py-2 text-purple-900 border border-purple-900 rounded-md font-semibold transition hover:bg-purple-900 hover:text-white"
        >
          Log in
        </motion.a>

        {/* MENU MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-700 hover:text-purple-900 transition"
        >
          {menuOpen ? (
            <X className="w-6 h-6" strokeWidth={2.5} />
          ) : (
            <Menu className="w-6 h-6" strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* DROPDOWN MOBILE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 pb-6"
          >
            <nav className="flex flex-col gap-2 text-sm text-zinc-700 font-medium">
              {["sobre", "tecnologia", "solucoes", "contato"].map((item) => (
                <Link
                  key={item}
                  href={`/${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-purple-100 hover:text-purple-900 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}

              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="text-sm px-4 py-2 border border-purple-900 text-purple-900 rounded-md font-semibold hover:bg-purple-900 hover:text-white transition mt-2 text-center"
              >
                Log in
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
