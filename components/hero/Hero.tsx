import Navbar from "../layout/Navbar";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#08111D]">
      <Navbar />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b2b47,transparent_65%)]" />

      <HeroContent />
    </section>
  );
}