export default function Background() {
  return (
    <>
      {/* Background */}

      <div className="absolute inset-0 bg-[#08111d]" />

      {/* Golden Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

      {/* Left Glow */}

      <div className="absolute left-0 top-1/2 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[140px]" />

      {/* Right Glow */}

      <div className="absolute right-0 top-1/2 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[150px]" />

      {/* Vertical Line */}

      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />
    </>
  );
}