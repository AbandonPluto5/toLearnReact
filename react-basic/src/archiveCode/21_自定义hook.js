import { useState } from "react";

// 思路
// 1. 定义一个use开头的函数
// 2. 将可复用逻辑写在这个方法中 并将状态或函数return出去
// 3. 在需要使用的组件中调用这个hook

function useToggle() {
  const [show, setShow] = useState(true);
  const toggle = () => setShow(!show);
  return {
    show,
    toggle,
  };
}

function App() {
  const { show, toggle } = useToggle();
  return (
    <div className="App">
      {show && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

export default App;
