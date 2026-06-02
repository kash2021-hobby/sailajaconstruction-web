export function HeroCurve({ fillColor = "#ffffff" }: { fillColor?: string }) {
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className="absolute bottom-[-1px] left-0 w-full h-[50px] md:h-[80px] z-10"
      style={{ pointerEvents: "none" }}
    >
      <path d="M0,0 Q720,120 1440,0 L1440,100 L0,100 Z" fill={fillColor} />
    </svg>
  );
}
