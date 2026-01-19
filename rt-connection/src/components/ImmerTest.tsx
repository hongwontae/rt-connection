import { useState } from "react";

type ObjectType = {
    id : number;
    name : string;
    age : number
}

function ImmerTest(){

    const [obj, setObj] = useState<ObjectType[]>([
        {id : 1, name : "sssss", age : 30},
        {id : 2, name : "kkkkk", age : 30},
        {id : 3, name : "lllll", age : 30},
        {id : 4, name : "ooooo", age : 30},
    ])

    function handleChange(){
        setObj((prev)=>{
            return prev.map((ele, idx, arr)=>{
                return {...ele, name : 'Koala3121', age : 1000}
            })
        })
    }

    return(
        <>
            <div>
                {obj.map(({id, name, age}, idx, arr)=>{
                    return <div key={id}>{name} - {age}</div>
                })}
                <button onClick={handleChange}>Hello-World</button>
            </div>
        </>
    )
}

export default ImmerTest;