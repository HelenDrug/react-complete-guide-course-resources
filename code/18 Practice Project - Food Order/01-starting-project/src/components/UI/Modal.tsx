import {createPortal} from "react-dom";
import {type ReactElement, type ReactNode, useEffect, useRef} from "react";

interface ModalProps {
    children: ReactNode;
    open: boolean;
    classname?: string;
    onClose: (() => void) | undefined
}
export default function Modal({children, open, classname = '', onClose}: ModalProps): ReactElement {
    const dialogRef = useRef(
        null as HTMLDialogElement | null
    )

    useEffect(() => {
        const modalElement = dialogRef.current;
        if (open) {
            modalElement?.showModal();
        }
        return () => {
            modalElement?.close();
        }
    }, [open]);

    return createPortal(<dialog ref={dialogRef}
                                className={`modal ${classname}`} onClose={onClose}>{children}</dialog>,
        document.getElementById("modal") as HTMLElement);
}