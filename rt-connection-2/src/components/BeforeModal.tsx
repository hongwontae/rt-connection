import { useRef } from "react";
import Modal from "./Modal";

function BeforeModal() {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  function showModal(){
    if(modalRef.current){
        modalRef.current.showModal();
    }
  }

  function closeModal(){
    if(modalRef.current){
        modalRef.current.close();
    }
  }

  return (
    <>
      <Modal ref={modalRef} closeModal={closeModal}></Modal>
      <button onClick={showModal}>Modal Open</button>
    </>
  );
}

export default BeforeModal;
