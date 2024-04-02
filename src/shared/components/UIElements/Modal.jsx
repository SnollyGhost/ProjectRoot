import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";

const ModalOverlay = (props) => {
  const content = (
    <div
      className={`z-50 fixed top-22vh left-10 w-80 bg-white shadow-md rounded-lg ${props.className}`}
      style={props.style}
    >
      <header className="w-full py-4 px-2 bg-indigo-900 text-white">
        <h2 className="m-2">{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className="p-4">{props.children}</div>
        <footer className="p-4">{props.footer}</footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <>
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
    </>
  );
};

export default Modal;
