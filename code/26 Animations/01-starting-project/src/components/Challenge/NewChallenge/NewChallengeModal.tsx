import { createPortal } from "react-dom";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export default function NewChallengeModal({
  title,
  children,
  onClose,
}: ModalProps) {
  const modalElement = document.getElementById("modal");
  if (!modalElement) return null;
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        open
        className="modal"
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        }}
        animate="visible"
        initial="hidden"
        exit="hidden"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    modalElement,
  );
}
