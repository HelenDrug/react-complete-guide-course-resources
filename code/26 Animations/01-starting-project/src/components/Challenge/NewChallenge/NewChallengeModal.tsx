import { createPortal } from "react-dom";
import type { ReactNode } from "react";

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
      <dialog open className="modal">
        <h2>{title}</h2>
        {children}
      </dialog>
    </>,
    modalElement,
  );
}
