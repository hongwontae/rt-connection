import { createPortal } from "react-dom";

type ModalProps = {
  ref?: React.Ref<HTMLDialogElement>;
  closeModal: () => void;
};

function Modal({ ref, closeModal }: ModalProps) {
  return createPortal(
    <>
      <dialog className="m-auto" ref={ref} onClose={closeModal}>
        <h1>Hello-World</h1>
        <button onClick={closeModal}>Close</button>
      </dialog>
    </>, document.getElementById('root-portal')!
  );
}

export default Modal;
