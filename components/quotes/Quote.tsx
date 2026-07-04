"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const quotes = [
  {
    quote: "Be patient toward all that is unsolved in your heart.",
    author: "Rainer Maria Rilke",
  },
  {
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Stay hungry. Stay foolish.",
    author: "Steve Jobs",
  },
  {
    quote: "The quieter you become, the more you are able to hear.",
    author: "Ram Dass",
  },
  {
    quote: "Wonder is the beginning of wisdom.",
    author: "Socrates",
  },
];

export default function Quote() {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  }, []);

  return (
    <section className="mx-auto max-w-5xl px-8 py-32 text-center">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >

        <p className="uppercase tracking-[0.35em] text-[#C8A96A]">
          Quote of the Visit
        </p>

        <blockquote className="mt-12 text-4xl italic leading-relaxed font-[var(--font-cormorant)]">

          "{quote.quote}"

        </blockquote>

        <p className="mt-8 text-[#C8A96A]">

          — {quote.author}

        </p>

      </motion.div>

    </section>
  );
}