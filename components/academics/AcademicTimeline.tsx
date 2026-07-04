"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2019 – 2021",
    title: "Science",
    subtitle: "Physics • Chemistry • Mathematics",
    description:
      "My curiosity began with science. Learning how the world works taught me logical thinking and discipline.",
  },
  {
    year: "2021 – 2024",
    title: "Bachelor of Computer Applications",
    subtitle: "CGPA: 8.44",
    description:
      "Discovered programming, databases, web development and software engineering. This became the bridge between curiosity and creation.",
  },
  {
    year: "2025",
    title: "Artificial Intelligence",
    subtitle: "Prompt Engineering • AI Automation",
    description:
      "Shifted my focus toward AI because I believe the future belongs to people who know how to collaborate with intelligent systems.",
  },
];

export default function AcademicTimeline() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.35em] text-[#C8A96A]">
          Academic Journey
        </p>

        <h2 className="mt-5 text-5xl font-[var(--font-cormorant)]">
          Every chapter led me here.
        </h2>

        <div className="mt-16 border-l border-[#C8A96A]/40 pl-10">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-20"
            >
              <div className="absolute -left-[47px] top-2 h-5 w-5 rounded-full bg-[#C8A96A]" />

              <p className="text-sm tracking-widest text-[#C8A96A]">
                {item.year}
              </p>

              <h3 className="mt-3 text-3xl font-[var(--font-cormorant)]">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-400">{item.subtitle}</p>

              <p className="mt-5 max-w-2xl leading-8 text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}