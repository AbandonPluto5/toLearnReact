const list = [
  { id: 101, name: "aaa" },
  { id: 102, name: "bbb" },
  { id: 103, name: "ccc" },
  { id: 104, name: "ddd" },
];
function App() {
  return (
    <div className="App">
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
