"use client";

import { motion } from "framer-motion";

const languages = [
  {
    language: "English",
    level: "Professional",
  },
  {
    language: "Hindi",
    level: "Native",
  },
  {
    language: "Kannada",
    level: "Fluent",
  },
  {
    language: "French",
    level: "Learning (B1)",
  },
];

export default function Languages() {
  return (
    <section className="mx-auto max-w-5xl px-8 py-20">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >

        <p className="uppercase tracking-[0.35em] text-[#C8A96A]">
          Languages
        </p>

        <div className="mt-10 space-y-6">

          {languages.map((item) => (

            <div
              key={item.language}
              className="flex items-center justify-between border-b border-white/10 pb-4"
            >
              <h3 className="text-2xl font-[var(--font-cormorant)]">
                {item.language}
              </h3>

              <p className="text-gray-400">
                {item.level}
              </p>
            </div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}