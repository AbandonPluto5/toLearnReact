const type = 1;
const getArticleTem = () => {
  if (type === 1) {
    return <div>单图</div>;
  } else if ((type = 0)) {
    return <div>无图</div>;
  } else if (type === 3) {
    return <div>三图</div>;
  }
};
function App() {
  return <div className="App">{getArticleTem()}</div>;
}

export default App;
