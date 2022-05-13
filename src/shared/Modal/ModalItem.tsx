import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

const ModalItem = (props: any) => {
  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.code === "Escape") {
      props.onClose();
      console.log("event.code ", event.code);
    }
  };

  const handleBackdropClick = (event: React.SyntheticEvent) => {
    if (event.currentTarget === event.target) {
      props.onClose();
      console.log("event.code handleBackdropClick", event.target);
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
      tabIndex={0}
      onClick={handleBackdropClick}
      onKeyPress={() => handleKeyDown}
    >
      {props.children}
    </div>,
    modalRoot,
  );
};
export default ModalItem;
