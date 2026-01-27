import "./App.css";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import Draggable from "./components/Draggable";
import Droppable from "./components/Droppable";

type Player = {
  id: string;
  position: string;
};

const positions = ["ST", "CM", "LW"];

function App() {
  const [players, setPlayers] = useState<Player[]>([
    { id: "player-1", position: "ST" },
    {id : "player-2", position : "CM"}
  ]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    setPlayers((prev) =>
      prev.map((player) =>
        player.id === active.id
          ? { ...player, position: over.id as string }
          : player
      )
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div
        style={{
          display: "flex",
          gap: "24px",
          padding: "40px",
        }}
      >
        {positions.map((pos) => (
          <Droppable key={pos} id={pos}>
            {players
              .filter((player) => player.position === pos)
              .map((player) => (
                <Draggable key={player.id} id={player.id} />
              ))}
          </Droppable>
        ))}
      </div>
    </DndContext>
  );
}

export default App;