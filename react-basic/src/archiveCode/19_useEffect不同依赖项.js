import { useEffect, useState } from "react";

function App() {
  // 1. 没有依赖项 初始渲染 + 组件更新时执行
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("没有依赖项");
  //   console.log(count);
  // });
  // setTimeout(() => {
  //   setCount(count + 1);
  // }, 500);

  // 2. 空数组 只会在初始渲染时执行一次
  // useEffect(() => {
  //   console.log("空数组");
  // }, []);

  // 3. 初始 + 依赖项变化时就执行
  const [color, setColor] = useState("green");
  useEffect(() => {
    console.log("依赖color");
  }, [color]);
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>count++</button>
      <button onClick={() => setColor("yellow")}>color</button>
    </div>
  );
}

export default App;
