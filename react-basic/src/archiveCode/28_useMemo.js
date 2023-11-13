import { useState, useMemo } from "react";

const fib = (n) => {
  console.log("计算函数执行了");
  if (n < 3) return 1;
  return fib(n - 2) + fib(n - 1);
};
const App = () => {
  const [count1, setCount1] = useState(0);

  // 只依赖count1 但是count2改变时引起了组件更新 也会执行函数
  // const result = fib(count1);

  // 缓存计算后的结果
  const result = useMemo(() => {
    return fib(count1);
  }, [count1]);

  const [count2, setCount2] = useState(0);
  console.log("组件重新渲染了");
  return (
    <div className="app">
      this is App
      <button onClick={() => setCount1(count1 + 1)}>
        change count1:{count1}
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        change count2:{count2}
      </button>
      {result}
    </div>
  );
};

export default App;
