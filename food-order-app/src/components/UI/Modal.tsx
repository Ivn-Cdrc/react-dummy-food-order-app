import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  onBackdropClick: () => void;
}

function Backdrop({onClose}: {onClose: () => void}) {
  return <div className={classes.backdrop} onClick={onClose}/>;
}

function ModalOverlay({ children }: { children: React.ReactNode }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays") as HTMLElement;

function Modal({ children, onBackdropClick }: ModalProps) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onBackdropClick}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
