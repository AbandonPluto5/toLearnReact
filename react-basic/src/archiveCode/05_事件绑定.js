const handleClick = (e) => {
  console.log("点击了", e);
};
const handleClick1 = (name, e) => {
  console.log("点击了", name, e);
};
function App() {
  return (
    <div className="App">
      <button onClick={handleClick}>click</button>
      <button onClick={(e) => handleClick1("abc", e)}>点击</button>
    </div>
  );
}

export default App;
