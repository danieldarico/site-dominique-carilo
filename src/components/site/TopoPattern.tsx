import { cn } from "@/lib/utils";

export function TopoPattern({
  className,
  stroke = "#971D1D",
  opacity = 0.08,
}: {
  className?: string;
  stroke?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
      viewBox="0 0 400 400"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <circle cx="80" cy="80" r="70" stroke={stroke} strokeOpacity={opacity} strokeWidth="1" />
      <circle cx="320" cy="120" r="110" stroke={stroke} strokeOpacity={opacity} strokeWidth="1" />
      <path
        d="M0,220 a90,90 0 1,0 180,0 a55,55 0 1,1 -110,0"
        stroke={stroke}
        strokeOpacity={opacity}
        strokeWidth="1"
      />
      <path
        d="M240,360 a70,70 0 1,0 140,0 a42,42 0 1,1 -85,0"
        stroke={stroke}
        strokeOpacity={opacity}
        strokeWidth="1"
      />
    </svg>
  );
}
