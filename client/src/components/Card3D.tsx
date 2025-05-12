import React from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Card3DProps {
  id: string;
  front: ReactNode;
  back: ReactNode;
  isFlipped: boolean;
  onSelect: () => void;
} //TEST

const layoutTransition = { type: "spring", stiffness: 500, damping: 30 };

export default function Card3D({
  id,
  front,
  back,
  isFlipped,
  onSelect,
}: Card3DProps) {
  return (
    <motion.div
      layoutId={id}
      className={`relative w-80 h-120 perspective cursor-pointer ${
        isFlipped ? "invisible" : ""
      }`}
      onClick={onSelect}
      transition={layoutTransition}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front side */}
        <div className="absolute inset-0 backface-hidden rounded-md overflow-hidden shadow-lg">
          {front}
        </div>
        {/* Back side */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-md overflow-hidden shadow-lg">
          {back}
        </div>
      </motion.div>
    </motion.div>
  );
}
