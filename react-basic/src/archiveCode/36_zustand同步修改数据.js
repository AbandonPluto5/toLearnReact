import { create } from "zustand";

// 创建store
// 1. create参数是函数 返回一个对象 对象中是状态和方法
// 2. set是用来修改数据的方法 传递一个函数作为参数时 基于原数据修改状态 函数的参数就是状态 传递一个参数为对象时是不依赖愿数据进行修改
const useStore = create((set) => {
  return {
    count: 0,
    inc: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  };
});

const App = () => {
  const { count, inc } = useStore();
  return (
    <div className="app">
      <button onClick={inc}>{count}</button>
    </div>
  );
};

export default App;
