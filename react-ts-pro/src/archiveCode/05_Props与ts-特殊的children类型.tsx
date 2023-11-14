// 内置类型React.ReactNode
type Prps = {
  className: string;
  children: React.ReactNode;
};

function Button(props: Prps) {
  const { className, children } = props;
  return <button className={className}>{children}</button>;
}

function App() {
  return (
    <>
      this is App
      <Button className="aaa">
        <div>123</div>
      </Button>
    </>
  );
}

export default App;
