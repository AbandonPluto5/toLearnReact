// React.memo props比较机制
// 1. props是简单类型时 比较新值和旧值 正常机制：props变化时组件重新渲染
// 2. props是引用类型时 比较的是引用地址 当父组件更新时形成新的引用 所以引起子组件更新
// 3. 保证引用稳定 使用useMemo 在组件渲染中缓存一个值

import { memo, useMemo, useState } from "react";

const MemoSon = memo((props) => {
  console.log("子组件渲染了");
  return <div>this is Son</div>;
});

const App = () => {
  const [count, setCount] = useState(0);
  // const num = 100;
  // const list = [1, 2, 3];
  // 此时传递引用类型的props也不会触发子组件重新渲染了
  const list = useMemo(() => [1, 2, 3], []);
  return (
    <div className="app">
      this is App
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      {/* props更新时会渲染子组件 */}
      {/* <MemoSon count={count} /> */}
      {/* props不变时不会重新渲染子组件 */}
      {/* <MemoSon count={num} /> */}
      {/* 引用类型时 会重新渲染 */}
      <MemoSon list={list} />
    </div>
  );
};

export default App;
