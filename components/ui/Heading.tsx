interface Props {
    title: string;
    subtitle: string;
  }
  
  export default function Heading({
    title,
    subtitle,
  }: Props) {
    return (
      <div>
  
        <p className="uppercase tracking-[0.45em] text-[#C8A96A]">
  
          {subtitle}
  
        </p>
  
        <h2 className="mt-5 text-6xl font-[var(--font-cormorant)]">
  
          {title}
  
        </h2>
  
      </div>
    );
  }