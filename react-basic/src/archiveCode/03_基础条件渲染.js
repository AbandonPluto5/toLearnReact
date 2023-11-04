const isLogin = true;
function App() {
  return (
    <div className="App">
      {isLogin && <span>this is span</span>}
      {isLogin ? <span>hello</span> : <span>loading...</span>}
    </div>
  );
}

export default App;
