// props只读

function Son(props) {
  console.log(props);
  return <div>{props.name}</div>;
}
function App() {
  const name = "hello";
  return (
    <div className="App">
      <Son
        name={name}
        age={12}
        isTrue={false}
        list={[1, 2, 3]}
        obj={{ a: 123, b: 456 }}
        cb={() => console.log(123)}
        child={<div>child</div>}
      >
        <span>abcdefg</span>
      </Son>
    </div>
  );
}

export default App;
