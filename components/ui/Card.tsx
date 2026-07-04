import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card({
  children,
}: Props) {
  return (
    <div
      className="
      rounded-[30px]
      border
      border-[#C8A96A]/20
      bg-white/5
      p-8
      backdrop-blur-lg
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-[#C8A96A]/50
      "
    >
      {children}
    </div>
  );
}