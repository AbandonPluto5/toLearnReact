import { createContext, useContext, useState } from "react";

const msgContext = createContext();

function A() {
  return (
    <div>
      this is a
      <B />
    </div>
  );
}

function B() {
  const msg = useContext(msgContext);
  return <div>this is B{msg}</div>;
}

function App() {
  const msg = "hello";
  return (
    <div className="App">
      <msgContext.Provider value={msg}>
        <A />
      </msgContext.Provider>
    </div>
  );
}

export default App;
