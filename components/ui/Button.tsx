"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "gold" | "outline";
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "gold",
  onClick,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`rounded-full px-8 py-4 transition-all duration-300 ${
        variant === "gold"
          ? "bg-[#C8A96A] text-black"
          : "border border-[#C8A96A] text-[#C8A96A]"
      }`}
    >
      {children}
    </motion.button>
  );
}