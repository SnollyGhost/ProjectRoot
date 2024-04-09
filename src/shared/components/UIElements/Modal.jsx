import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";
// import "./Modal.css";

const ModalOverlay = (props) => {
  const content = (
    <div className={`fixed left-1/2 transform -translate-x-1/2 top-1/4 w-4/5 bg-white shadow-md rounded-lg ${props.className}`} style={{zIndex: 100, ...props.style}}>
      <header className={`w-full p-2 bg-indigo-900 text-white ${props.headerClass}`}>
        <h2 className="m-2">{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`p-2 ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`p-2 ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
