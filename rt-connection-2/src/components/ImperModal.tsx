import { useImperativeHandle, useRef } from "react";
import type { DialogImperType } from "../types/ImperType";

type Props = {
  ref: React.Ref<DialogImperType | null>;
};

function ImperModal({ ref }: Props) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useImperativeHandle(ref, ()=>{
    return {
        close : ()=>dialogRef.current?.close(),
        show : ()=>dialogRef.current?.showModal()
    }
  })

  function closeHandler(){
    if(dialogRef.current){
        dialogRef.current.close();
    }
  }

  return (
    <>
      <dialog ref={dialogRef} onClose={closeHandler}>
        <h1>Result Modal</h1>
        <button onClick={closeHandler}>Close</button>
      </dialog>
    </>
  );
}

export default ImperModal;
