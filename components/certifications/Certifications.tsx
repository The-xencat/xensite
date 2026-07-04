"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Prompt Engineering",
    issuer: "Future Interns",
    year: "2025",
  },
  {
    title: "Python Programming",
    issuer: "Programming Course",
    year: "2024",
  },
  {
    title: "Web Scraping Internship",
    issuer: "Rubixe",
    year: "2024",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.4em] text-[#C8A96A]">
          Certifications
        </p>

        <h2 className="mt-5 text-6xl font-[var(--font-cormorant)]">
          Continuous Learning
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="rounded-[24px] border border-[#C8A96A]/20 bg-white/5 p-8 backdrop-blur-md"
            >
              <h3 className="text-2xl font-[var(--font-cormorant)]">
                {cert.title}
              </h3>

              <p className="mt-4 text-gray-300">
                {cert.issuer}
              </p>

              <p className="mt-6 text-[#C8A96A]">
                {cert.year}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}