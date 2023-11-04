const message = "this";
const getName = () => {
  return "abc";
};
function App() {
  return (
    <div className="App">
      this is App
      {"this is message"}
      <div>{message}</div>
      {getName()}
      {new Date().getDate()}
      <div style={{ color: "red" }}>this is DIV</div>
    </div>
  );
}

export default App;
