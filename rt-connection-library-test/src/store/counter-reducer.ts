type ActionType = {
  type: "INCREMENT" | "DECREMENT";
};

type InitialType = {
  count: number;
};

const initialState = {
  count: 0,
};

export function counterReducer(
  state: InitialType = initialState,
  action: ActionType,
): InitialType {
    
  if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  } else if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }
  return state;
}

