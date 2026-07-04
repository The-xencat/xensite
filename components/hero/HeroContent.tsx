import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import ProfileCard from "./ProfileCard";

export default function HeroContent() {
  return (
    <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-8 pt-32 md:flex-row">

      {/* LEFT */}

      <div className="flex-1">

        <p className="uppercase tracking-[0.45em] text-[#C8A96A]">
          THE ROYAL HALL
        </p>

        <h1 className="mt-5 font-[var(--font-cormorant)] text-6xl leading-none md:text-8xl">

          Kusum

          <br />

          <span className="text-[#C8A96A]">

            Malviya

          </span>

        </h1>

        <p className="mt-6 text-2xl text-gray-300">

          AI Prompt Engineer

        </p>

        <p className="text-xl text-gray-400">

          Automation Builder

        </p>

        <p className="mt-8 max-w-xl leading-8 text-gray-400">

          Building thoughtful AI experiences,
          automation systems and digital products
          that blend technology with human creativity.

        </p>

        <div className="mt-10 flex gap-5">

          <button className="rounded-full bg-[#C8A96A] px-8 py-4 font-semibold text-black transition hover:scale-105">

            View Projects

          </button>

          <button className="rounded-full border border-[#C8A96A] px-8 py-4 transition hover:bg-[#C8A96A] hover:text-black">

            Download CV

          </button>

        </div>

        <a
          href="mailto:littlemanixc@gmail.com"
          className="mt-10 flex items-center gap-3 text-[#C8A96A]"
        >
          <FaEnvelope />

          littlemanixc@gmail.com
        </a>

        <div className="mt-8 flex gap-6 text-2xl">

          <FaLinkedin className="cursor-pointer hover:text-[#C8A96A]" />

          <FaGithub className="cursor-pointer hover:text-[#C8A96A]" />

        </div>

      </div>

      {/* RIGHT */}

      <div className="flex flex-1 justify-center">

        <ProfileCard />

      </div>

    </section>
  );
}