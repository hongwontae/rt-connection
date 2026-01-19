import { useState } from "react";

// save, edit 버튼으로 span or input으로 변경
// 양방향 바인딩으로 input에 입력된 데이터 저장

function RhookUseState() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>("Player-1");

  const textChangeHandler = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = 
  (e) => { setValue(e.target.value);};


  let player = <div>
    <div>{value}</div>
    <button onClick={textChangeHandler}>Edit</button>
  </div>

  if(isEditing){
    player = <div>
        <input value={value} onChange={handleChange} required></input>
        <button onClick={textChangeHandler}>Save</button>
    </div>
  }


  return <>
    <div>
        {player}
    </div>
  </>;
}

export default RhookUseState;
