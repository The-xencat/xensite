"use client";

import { useState } from "react";
import { addAdvice } from "@/lib/firestore";

export default function LettersToXen() {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !message) return;

    try {
      setLoading(true);

      await addAdvice(name, profession, message);

      setName("");
      setProfession("");
      setMessage("");

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <section
      id="letters"
      className="mx-auto max-w-5xl px-8 py-32"
    >
      <p className="uppercase tracking-[0.4em] text-[#C8A96A]">
        Letters to Xen
      </p>

      <h2 className="mt-5 text-6xl font-[var(--font-cormorant)]">
        Leave a little wisdom behind.
      </h2>

      <p className="mt-6 max-w-2xl leading-8 text-gray-400">
        Advice, encouragement, ideas, career suggestions...
        I'll read every letter.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-16 space-y-6"
      >

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-2xl border border-[#C8A96A]/20 bg-transparent p-5 outline-none"
        />

        <input
          type="text"
          placeholder="Profession (Optional)"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className="w-full rounded-2xl border border-[#C8A96A]/20 bg-transparent p-5 outline-none"
        />

        <textarea
          rows={7}
          placeholder="Write something for Xen..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-2xl border border-[#C8A96A]/20 bg-transparent p-5 outline-none"
        />

        <button
          disabled={loading}
          className="rounded-full bg-[#C8A96A] px-8 py-4 font-semibold text-black transition hover:scale-105 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Letter"}
        </button>

        {success && (
          <p className="text-green-400">
            🌿 Your letter has reached Xen.
          </p>
        )}

      </form>
    </section>
  );
}