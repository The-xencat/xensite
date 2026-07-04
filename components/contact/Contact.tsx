"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-8 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[32px] border border-[#C8A96A]/20 bg-white/5 p-10"
      >
        <p className="uppercase tracking-[0.4em] text-[#C8A96A]">
          Let's Connect
        </p>

        <h2 className="mt-5 text-5xl font-[var(--font-cormorant)]">
          I'd love to hear from you.
        </h2>

        <p className="mt-6 max-w-2xl text-gray-300 leading-8">
          Whether it's collaboration, opportunities, feedback, or simply a
          thoughtful conversation, you're always welcome.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">

          <a
            href="mailto:littlemanixc@gmail.com"
            className="rounded-2xl border border-[#C8A96A]/20 p-6 hover:bg-white/5 transition"
          >
            <FaEnvelope className="text-2xl text-[#C8A96A]" />
            <h3 className="mt-4 text-xl">Email</h3>
            <p className="mt-2 text-gray-400">
              littlemanixc@gmail.com
            </p>
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="rounded-2xl border border-[#C8A96A]/20 p-6 hover:bg-white/5 transition"
          >
            <FaLinkedin className="text-2xl text-[#C8A96A]" />
            <h3 className="mt-4 text-xl">LinkedIn</h3>
          </a>

          <a
            href="https://github.com/The-xencat"
            target="_blank"
            className="rounded-2xl border border-[#C8A96A]/20 p-6 hover:bg-white/5 transition"
          >
            <FaGithub className="text-2xl text-[#C8A96A]" />
            <h3 className="mt-4 text-xl">GitHub</h3>
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            className="rounded-2xl border border-[#C8A96A]/20 p-6 hover:bg-white/5 transition"
          >
            <FaInstagram className="text-2xl text-[#C8A96A]" />
            <h3 className="mt-4 text-xl">Instagram</h3>
          </a>

        </div>

        <button
          className="mt-12 flex items-center gap-3 rounded-full bg-[#C8A96A] px-8 py-4 text-black font-semibold hover:scale-105 transition"
        >
          <FaFileDownload />
          Download Resume
        </button>
      </motion.div>
    </section>
  );
}