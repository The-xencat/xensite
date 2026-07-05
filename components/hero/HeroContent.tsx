import ProfileCard from "./ProfileCard";
import Button from "../ui/Button";
import { FaEnvelope } from "react-icons/fa";

export default function HeroContent() {
  return (
    <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-8 text-center">

      <p className="uppercase tracking-[0.45em] text-[#C8A96A]">
        Welcome to The Royal Hall
      </p>

      <h1 className="mt-6 text-7xl font-[var(--font-cormorant)] leading-none md:text-8xl">
        Kusum
        <br />
        <span className="text-[#C8A96A]">
          Malviya
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-xl leading-9 text-gray-300">
        AI Prompt Engineer · Automation Builder · Creative Technologist
      </p>

      <div className="mt-14">
        <ProfileCard />
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-5">

        <Button>
          Download Resume
        </Button>

        <Button variant="outline">
          View Projects
        </Button>

      </div>

      <a
        href="mailto:littlemanixc@gmail.com"
        className="mt-10 flex items-center gap-3 text-[#C8A96A] hover:underline"
      >
        <FaEnvelope />

        littlemanixc@gmail.com

      </a>

    </section>
  );
}