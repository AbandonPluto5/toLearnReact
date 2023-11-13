import { useState, memo } from "react";

// 默认情况下 父组件状态变化时子组件会跟着变
// memo函数可以对组件进行缓存 props变化时才会重新渲染 性能优化
const MemoSon = memo((props) => {
  console.log("子组件渲染了");
  return <div>this is Son</div>;
});

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      this is App
      <button onClick={() => setCount(count + 1)}>+{count}</button>
      <MemoSon />
    </div>
  );
};

export default App;
