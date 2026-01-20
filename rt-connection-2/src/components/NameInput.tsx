import { useState } from "react";

function NameInput(){

    const [nickname, setNickname ] = useState<string>(" ");
    const [submitted, setSubmitted] = useState<boolean>(false);

    const changeHandler : React.ChangeEventHandler<HTMLInputElement> = (e)=>{
        const value = e.target.value;
        setNickname(value)
        setSubmitted(false);
    }

    const clickHandler : React.MouseEventHandler<HTMLButtonElement> = ()=> {
        setSubmitted(true);
    }

    return(
        <>
            <div className="flex flex-col gap-2">
                <label>{nickname}</label>
                <input className="border"
                 value={nickname} onChange={changeHandler}></input>
                 <button onClick={clickHandler}>{submitted ? 'Edit' : 'Save'}</button>
            </div>
        </>
    )
}

export default NameInput;