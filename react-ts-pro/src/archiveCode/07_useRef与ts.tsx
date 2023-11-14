import { useEffect, useRef } from "react";

function App() {
  // 获取dom
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // 稳定引用的定时器
  const timerRef = useRef<number | undefined>(undefined);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      console.log("这是一个定时器");
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);
  return (
    <>
      this is App
      {/* <input ref={inputRef}></input> */}
    </>
  );
}

export default App;
