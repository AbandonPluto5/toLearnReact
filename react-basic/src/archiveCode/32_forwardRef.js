// 在父组件拿到子组件中的元素
// 1. 子组件用forwardRef包裹
// 2. 父组件进行ref传参
// 3. 子组件中的元素绑定ref
import { forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

const App = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    console.log(inputRef);
    inputRef.current.focus();
  };
  return (
    <div className="app">
      <Input ref={inputRef} />
      <button onClick={() => onClick()}>focus</button>
    </div>
  );
};

export default App;
