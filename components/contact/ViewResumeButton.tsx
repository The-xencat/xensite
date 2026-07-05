"use client";

export default function ViewResumeButton() {
  function handleView() {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  }

  return (
    <button
      onClick={handleView}
      className="rounded-full bg-[#C8A96A] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
    >
      View Resume
    </button>
  );
}