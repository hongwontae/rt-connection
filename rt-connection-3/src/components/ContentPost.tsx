import { useRef } from "react";
import type { DataType } from "../App";
import { v4 as uuidv4 } from "uuid";

type Props = {
  setData: React.Dispatch<React.SetStateAction<DataType[] | null>>;
  setPageChange : React.Dispatch<React.SetStateAction<boolean>>;
};

function ContentPost({ setData, setPageChange }: Props) {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descRef = useRef<HTMLTextAreaElement | null>(null);

  function clickHandler() {


    if (titleRef.current && descRef.current) {

        if(titleRef.current.value.length === 0 || descRef.current.value.length === 0){
            console.log('String length two or one 0')
            return
        }
        
      const newItem = {
        id: uuidv4(),
        title: titleRef.current?.value,
        des: descRef.current?.value,
      };

      setData((prev) => {
        if (prev === null) {
          return [newItem];
        }
        return [...prev, newItem];
      });
    }

    setPageChange(false)
  }

  return (
    <>
      <section>
        <div>
          <label>Title</label>
          <input ref={titleRef}></input>
        </div>
        <div>
          <label>Description</label>
          <textarea ref={descRef}></textarea>
        </div>
        <button onClick={clickHandler}>Save</button>
        <button onClick={()=>setPageChange(false)}>Back</button>
      </section>
    </>
  );
}

export default ContentPost;
