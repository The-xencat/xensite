export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">
        go on, Scroll
      </p>

      <div className="mt-2 text-center text-2xl text-[#D4AF37]">
        ↓
      </div>
    </div>
  );
}