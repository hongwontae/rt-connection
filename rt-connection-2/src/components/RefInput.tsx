import { useRef, useState } from "react";

function RefInput(){

    const timer = useRef<number|null>(null);


    const [timerStarted, setTimerStarted] = useState<boolean>(false);
    const [timerExpired, setTimerExpired] = useState<boolean>(false);

    function timerStart(){
        timer.current = setTimeout(()=>{
            setTimerExpired(true);
        }, 10000);
        setTimerStarted(true);
    }

    function timerEnd(){
        if(timer.current){
            clearTimeout(timer.current);
        }
    }

    function timerClear(){
        setTimerExpired(false);
        setTimerStarted(false);
    }
    

    return(
        <>
            <div>
                {timer.current}
                <button onClick={timerStart}>Timer Go</button>
                <button onClick={timerEnd}>Timer Stop</button>
                <button onClick={timerClear}>Timer Reset</button>
                <div>
                    {timerStarted ? 'Time go' : 'Time no go'}
                </div>
                <div>
                    {timerExpired ? 'Expire' : 'Not Expire'}
                </div>
            </div>
        </>
    )
}

export default RefInput;