"use client";

import { useEffect, useState } from "react";
import {
  increaseVisitorCount,
  getVisitorCount,
} from "@/lib/firestore";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const visited = sessionStorage.getItem("visited");

    if (!visited) {
      await increaseVisitorCount();
      sessionStorage.setItem("visited", "true");
    }

    const visitors = await getVisitorCount();

    setCount(visitors);
  }

  return (
    <section className="mx-auto max-w-5xl px-8 py-24">

      <div className="rounded-[40px] border border-[#C8A96A]/20 bg-white/5 p-14 text-center backdrop-blur-xl">

        <p className="uppercase tracking-[0.35em] text-[#C8A96A]">
          Visitors
        </p>

        <h2 className="mt-6 text-8xl font-[var(--font-cormorant)]">
          {count}
        </h2>

        <p className="mt-5 text-gray-400">
          People have visited The Royal Hall.
        </p>

      </div>

    </section>
  );
}