type Prps = {
  className: string;
};

function Button(props: Prps) {
  const { className } = props;
  return <button className={className}>button</button>;
}

function App() {
  return (
    <>
      this is App
      <Button className="aaa"></Button>
    </>
  );
}

export default App;
