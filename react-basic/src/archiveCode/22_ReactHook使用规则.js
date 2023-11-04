import { useState } from "react";

// 1. 只能在组件内部或其它hook函数中调用
// useState();

// 2. 不能写在if for 中使用
function App() {
  // if (true) {
  //   useState();
  // }
  // for (let i = 0; i < 10; i++) {
  //   useState();
  // }

  return <div className="App"></div>;
}

export default App;
