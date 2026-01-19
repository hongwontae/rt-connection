import { useState } from "react";
import ContentArea from "./ContentArea";

const contents = [
  { id: "kk", content: "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" },
  { id: "2w", content: "2222wwwwwwwwwwwwwwwwwwwwwwwwwwwwww" },
  { id: "ss", content: "ssssssssssssssssssssssssssssssssssssss" },
  { id: "ll", content: "lllllllllllllllllllllllllllllllllll" },
];

function ButtonArea() {
  const [selectedId, setSelectedId] = useState("2w");

  const selectedContent = contents.find(
    item => item.id === selectedId
  )!;

  return (
    <>
      <div>
        {contents.map(item => (
          <button
            key={item.id}
            onClick={() => setSelectedId(item.id)}
          >
            {item.id}
          </button>
        ))}
      </div>

      <ContentArea content={selectedContent.content} />
    </>
  );
}

export default ButtonArea