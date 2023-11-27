import { useState, useDeferredValue } from "react";
import SlowList from "./components/SlowList.js";

export default function App() {
  const [text, setText] = useState("");

  // 可以延迟更新部分UI 此处延迟更新了长列表 使输入框的键入更加流畅不卡顿
  const deferredText = useDeferredValue(text);
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  );
}
