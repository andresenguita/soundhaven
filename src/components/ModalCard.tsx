import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

interface ModalCardProps {
  open: boolean;
  id: string;
  children: ReactNode;
  onClose: () => void;
}

// Same layout transition for modal expand/contract
const layoutTransition = { type: "spring", stiffness: 500, damping: 30 };

export default function ModalCard({
  open,
  id,
  children,
  onClose,
}: ModalCardProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Semi-transparent backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
          />

          {/* Enlarged card at front */}
          <motion.div
            layoutId={id}
            className="
              fixed top-1/2 left-1/2 z-50
              -translate-x-1/2 -translate-y-1/2
              h-[83vh] aspect-[2/3]
              rounded-md overflow-hidden
            "
            transition={layoutTransition}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
