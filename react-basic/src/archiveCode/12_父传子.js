import { useRef } from "react";

function Son(props) {
  console.log(props);
  return <div>{props.name}</div>;
}
function App() {
  const name = "hello";
  return (
    <div className="App">
      <Son name={name}></Son>
    </div>
  );
}

export default App;
