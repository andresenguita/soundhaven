import { useState } from "react";
import type { ReactNode } from "react";

interface Props {
  front: ReactNode;
  back: ReactNode;
}

export default function Card3D({ front, back }: Props) {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className="relative w-80 h-120 perspective cursor-pointer"
      onClick={() => setFlip(!flip)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 ${
          flip ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden rounded-md overflow-hidden shadow-lg">
          {front}
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-md overflow-hidden shadow-lg">
          {back}
        </div>
      </div>
    </div>
  );
}
