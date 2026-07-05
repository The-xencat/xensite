"use client";

import { motion } from "framer-motion";

const links = [
  { name: "About", id: "about" },
  { name: "Journey", id: "journey" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 z-50 w-full px-6 pt-6"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#C8A96A]/20 bg-[#08111D]/70 px-8 py-4 backdrop-blur-xl">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A96A] text-[#C8A96A] font-bold">
            X
          </div>

          <div>
            <h2 className="font-[var(--font-cormorant)] text-2xl">
              Kusum Malviya
            </h2>

            <p className="text-xs uppercase tracking-[0.35em] text-[#C8A96A]">
              The Royal Hall
            </p>
          </div>

        </div>

        <nav className="hidden gap-10 md:flex">

          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="transition duration-300 hover:text-[#C8A96A]"
            >
              {link.name}
            </a>
          ))}

        </nav>

      </div>
    </motion.header>
  );
}