import { useRef } from "react";
import ImperModal from "./ImperModal";
import type { DialogImperType } from "../types/ImperType";

function BeforeImperModal() {
  const dialogRef = useRef<DialogImperType | null>(null);

  return (
    <>
      <ImperModal ref={dialogRef}></ImperModal>
      <button
        onClick={() => {
          if (dialogRef.current) {
            dialogRef.current.show();
          }
        }}
      >
        OPEN MODAL
      </button>
    </>
  );
}

export default BeforeImperModal;
