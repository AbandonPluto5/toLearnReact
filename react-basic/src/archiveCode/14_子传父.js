import { useRef, useState } from "react";

function Son({ onGetSonMsg }) {
  const sonMsg = "son";
  return (
    <div>
      <button onClick={() => onGetSonMsg(sonMsg)}>sendMsg</button>
    </div>
  );
}
function App() {
  const [msg, setMsg] = useState("");
  const getMsg = (msg) => {
    console.log(msg);
    setMsg(msg);
  };
  return (
    <div className="App">
      {msg}
      <Son onGetSonMsg={getMsg}></Son>
    </div>
  );
}

export default App;
