"use client";

import { increaseResumeDownloads } from "@/lib/firestore";

export default function ResumeButton() {
  async function handleDownload() {
    try {
      await increaseResumeDownloads();

      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Kusum_Malviya_Resume.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Resume download failed:", error);
    }
  }

  return (
    <button
      onClick={handleDownload}
      className="rounded-full border border-[#C8A96A] px-8 py-4 text-[#C8A96A] transition-all duration-300 hover:bg-[#C8A96A] hover:text-black"
    >
      Download Resume
    </button>
  );
}