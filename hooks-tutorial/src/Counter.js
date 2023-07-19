import { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

const Counter = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // state의 초기값 => count : 0

  return (
    <div>
      {/* <h1>{count}</h1> */}
      <h1>{state.count}</h1>
      {/* <button type="button" onClick={() => setCount(count - 1)}>
        -1
      </button> */}
      {/* <button type="button" onClick={() => setCount(count + 1)}>
        +1
      </button> */}
      <button type="button" onClick={() => dispatch({ type: "INCREMENT" })}>
        -1
      </button>
      <button type="button" onClick={() => dispatch({ type: "DECREMENT" })}>
        +1
      </button>
    </div>
  );
};

export default Counter;
