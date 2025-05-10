import { useState } from "react";
import type { ReactNode } from "react";

/**
 * Carta 3D tamaño fijo 320 × 480 px
 */
interface Card3DProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export default function Card3D({ front, back, className = "" }: Card3DProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative w-80 h-120 perspective cursor-pointer ${className}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-md overflow-hidden shadow-md">
          {front}
        </div>

        {/* Back */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-md overflow-hidden shadow-md">
          {back}
        </div>
      </div>
    </div>
  );
}
