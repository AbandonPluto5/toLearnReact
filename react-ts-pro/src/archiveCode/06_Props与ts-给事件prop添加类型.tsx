type Prps = {
  getMsg?: (msg: string) => void;
};

function Button(props: Prps) {
  const { getMsg } = props;
  return <button onClick={() => getMsg?.("abc")}>按钮</button>;
}

function App() {
  const onGetMsg = (msg: string) => {
    console.log(msg);
  };
  return (
    <>
      this is App
      <Button getMsg={onGetMsg}></Button>
    </>
  );
}

export default App;
