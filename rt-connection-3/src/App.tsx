import { useReducer } from "react";
import "./App.css";
import {countReducer} from './reducer/count-reducer';


function App() {

  const [state, dispatch] = useReducer(countReducer, {count : 0});


  return (
    <>
      <div>
        {state.count}
        <button onClick={()=>dispatch({type : "increment"})}>Plus</button>
        <button onClick={()=>dispatch({type : "decrement"})}>Minus</button>
      </div>
    </>
  );
}

export default App;
