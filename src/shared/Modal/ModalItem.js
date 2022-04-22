import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal-root");
export default function ModalItem(props) {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      props.onClose();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      props.onClose();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return createPortal(
    <div
      className={styles.backdrop}
      role="button"
      tabIndex="0"
      onClick={handleBackdropClick}
      onKeyPress={handleKeyDown}
    >
      {props.children}
    </div>,
    modalRoot,
  );
}
