import { useState } from "react";

function App() {
  const [value, toggle] = useState(false);
  const [list, setList] = useState([1, 2, 3]);
  const changeValue = () => {
    toggle(true);
    setList([0]);
  };
  return (
    <>
      this is App
      {value}
      {list}
    </>
  );
}

export default App;
