import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
    </div>
  );
}

export default App;
