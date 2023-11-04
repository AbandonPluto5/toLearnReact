import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  const handleClick = () => {
    // 直接修改不会引起视图更新
    count++;
    console.log(count);
  };

  const [form, setForm] = useState({ name: "abc" });
  const changeForm = () => {
    setForm({
      ...form,
      name: "def",
    });
  };
  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>修改form{form.name}</button>
    </div>
  );
}

export default App;
