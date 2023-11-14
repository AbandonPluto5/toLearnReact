import { useEffect } from "react";
import { create } from "zustand";

// 创建store
// 1. create参数是函数 返回一个对象 对象中是状态和方法
// 2. set是用来修改数据的方法 传递一个函数作为参数时 基于原数据修改状态 函数的参数就是状态 传递一个参数为对象时是不依赖愿数据进行修改

const URL = "http://geek.itheima.net/v1_0/channels";
const useStore = create((set) => {
  return {
    count: 0,
    inc: () => {
      set((state) => ({ count: state.count + 1 }));
    },
    channelList: [],
    fetchGetList: async () => {
      const res = await fetch(URL);
      const jsonRes = await res.json();
      set({ channelList: jsonRes.data.channels });
    },
  };
});

const App = () => {
  // 绑定store到组件
  const { count, inc, channelList, fetchGetList } = useStore();
  useEffect(() => {
    fetchGetList();
  }, [fetchGetList]);
  return (
    <div className="app">
      <button onClick={inc}>{count}</button>
      <ul>
        {channelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
