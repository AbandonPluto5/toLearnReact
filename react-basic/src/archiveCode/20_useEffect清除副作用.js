import { useEffect, useState } from "react";

function Son() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Son组件的定时器");
    }, 1000);

    // 清除副作用 组件卸载时就不执行定时器了
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div>this is Son</div>;
}
function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show && <Son />}
      <button onClick={() => setShow(false)}>卸载Son组件</button>
    </div>
  );
}

export default App;
