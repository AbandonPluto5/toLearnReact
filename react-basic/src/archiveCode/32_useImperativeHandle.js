// 在父组件拿到子组件中的方法
// 用useImperativeHandle将方法暴露出去 第一个参数是父组件传递的ref 第二个参数是回调函数返回一个对象 对象中是暴露的方法
import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const focusHandler = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focusHandler,
    };
  });
  return <input type="text" ref={inputRef} />;
});

const App = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    console.log(inputRef);
    inputRef.current.focusHandler();
  };
  return (
    <div className="app">
      <Input ref={inputRef} />
      <button onClick={() => onClick()}>focus</button>
    </div>
  );
};

export default App;
