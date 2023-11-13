import { memo, useCallback, useState } from "react";

const Input = memo(({ onChange }) => {
  console.log("子组件渲染了");
  return <input type="text" onChange={(e) => onChange(e.target.value)}></input>;
});

const App = () => {
  const [count, setCount] = useState(0);

  // props是引用类型的函数 可以使用useCallback进行缓存 父组件更新时就不会引起子组件的重新渲染了
  const changeHandler = useCallback((value) => console.log(value), []);
  return (
    <div className="app">
      <Input onChange={changeHandler} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default App;
