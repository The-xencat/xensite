"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-8 py-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.4em] text-[#C8A96A]">
          About
        </p>

        <h2 className="mt-5 text-6xl font-[var(--font-cormorant)]">
          Every project begins
          <br />
          with curiosity.
        </h2>

        <div className="mt-10 max-w-3xl space-y-8 text-lg leading-9 text-gray-300">

          <p>

            I'm Kusum Malviya, although most people
            know me as Xen.

          </p>

          <p>

            My journey began in science,
            wandered into computer applications,
            and slowly evolved into artificial intelligence,
            prompt engineering and automation.

          </p>

          <p>

            I'm fascinated by creating things that feel
            both intelligent and deeply human.
            Whether it's AI systems, digital products,
            or beautiful experiences,
            I believe technology should always
            make people feel something.

          </p>

        </div>

      </motion.div>
    </section>
  );
}