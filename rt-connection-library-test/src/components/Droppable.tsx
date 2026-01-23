import { useDroppable } from "@dnd-kit/core";

type DroppableProps = {
  id: string;
  children: React.ReactNode;
};

function Droppable({ id, children }: DroppableProps) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        border: "2px dashed gray",
        backgroundColor: isOver ? "#e0f2ff" : "transparent",
        width: 150,
        height: 180,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <div>포지션 {id}</div>
        {children}
      </div>
    </div>
  );
}

export default Droppable;
