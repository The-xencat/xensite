"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Artificial Intelligence",
    skills: ["Prompt Engineering", "ChatGPT", "Claude", "Gemini", "OpenAI API"],
  },
  {
    title: "Development",
    skills: ["Next.js", "React", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Automation",
    skills: ["Make", "Zapier", "n8n", "REST APIs"],
  },
  {
    title: "Creative",
    skills: ["Figma", "Canva", "Notion", "Git & GitHub"],
  },
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.35em] text-[#C8A96A]">
          My Toolbox
        </p>

        <h2 className="mt-5 text-6xl font-[var(--font-cormorant)]">
          Technologies I enjoy working with.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[24px] border border-[#C8A96A]/20 bg-white/5 p-8"
            >
              <h3 className="text-3xl font-[var(--font-cormorant)]">
                {group.title}
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#C8A96A]/30 px-4 py-2 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}