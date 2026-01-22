type Action = {type : "increment"} | {type : "decrement"};

type State = {
    count : number
}

export function countReducer(state : State, action : Action) : State{
    if(action.type === "increment"){
        return {count : state.count+1}
    }
    if(action.type === "decrement"){
        return {count : state.count-1}
    }
    return state;
}