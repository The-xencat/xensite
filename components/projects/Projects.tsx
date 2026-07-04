"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Analytics Dashboard",
    description:
      "An AI-powered analytics dashboard designed to transform raw business data into meaningful insights through intelligent visualizations.",
    tech: "Next.js • React • Tailwind • OpenAI",
  },
  {
    title: "RazorCart API Documentation",
    description:
      "Comprehensive developer documentation with authentication guides, endpoints, examples and SDK references.",
    tech: "Notion • REST API • JWT",
  },
  {
    title: "Emotion Aware Chatbot",
    description:
      "A privacy-focused AI chatbot capable of understanding emotions and adapting responses naturally.",
    tech: "Python • DistilBERT • NLP",
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.4em] text-[#C8A96A]">
          Featured Projects
        </p>

        <h2 className="mt-5 text-6xl font-[var(--font-cormorant)]">
          Things I've Built
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-[30px] border border-[#C8A96A]/20 bg-white/5 p-8 backdrop-blur-md"
            >
              <h3 className="text-3xl font-[var(--font-cormorant)]">
                {project.title}
              </h3>

              <p className="mt-6 leading-8 text-gray-300">
                {project.description}
              </p>

              <p className="mt-8 text-sm tracking-widest text-[#C8A96A]">
                {project.tech}
              </p>

              <button className="mt-10 rounded-full border border-[#C8A96A] px-6 py-3 transition hover:bg-[#C8A96A] hover:text-black">
                Explore →
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}