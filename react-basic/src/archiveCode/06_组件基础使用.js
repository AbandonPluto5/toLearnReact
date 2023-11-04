function Button() {
  return <button>按钮组件</button>;
}
function App() {
  return (
    <div className="App">
      <Button></Button>
      <Button />
    </div>
  );
}

export default App;
