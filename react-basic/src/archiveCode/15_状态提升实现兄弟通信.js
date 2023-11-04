import { useState } from "react";

function A({ onGetA }) {
  const name = "jack";
  return (
    <div>
      this is A<button onClick={() => onGetA(name)}>点击发送a</button>
    </div>
  );
}

function B(props) {
  return <div>this is B{props.name}</div>;
}

function App() {
  const [bName, setBname] = useState("");
  const getAName = (a) => {
    console.log(a);
    setBname(a);
  };
  return (
    <div className="App">
      <A onGetA={getAName} />
      <B name={bName} />
    </div>
  );
}

export default App;
