import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

type DraggableProps = {
  id: string;
};

function Draggable({ id }: DraggableProps) {
  
  const {
    attributes,   // 접근성, role
    listeners,    // 마우스/터치 이벤트
    setNodeRef,   // DOM 연결
    transform,    // 이동 좌표
  } = useDraggable({ id });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
    >
      ⚽ 선수s {id}
    </div>
  );
}

export default Draggable