import { useReducer } from "react";

// 定义一个reducer方法 根据不同参数返回对state进行不同处理
const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "SET":
      return action.payload;
    default:
      return state;
  }
};

const App = () => {
  // 使用useReducer
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div className="app">
      this is App
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      {state}
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "SET", payload: 100 })}>
        update
      </button>
    </div>
  );
};

export default App;
