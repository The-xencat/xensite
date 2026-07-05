import Navbar from "../layout/Navbar";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#08111D]">

      <Navbar />

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-[-250px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C8A96A]/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#08111D)]" />

      </div>

      <HeroContent />

    </section>
  );
}