import { useEffect } from "react";
import { create } from "zustand";

const URL = "http://geek.itheima.net/v1_0/channels";

const counterStore = (set) => {
  return {
    count: 0,
    inc: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  };
};

const channelsStore = (set) => {
  return {
    channelList: [],
    fetchGetList: async () => {
      const res = await fetch(URL);
      const jsonRes = await res.json();
      set({ channelList: jsonRes.data.channels });
    },
  };
};

const useStore = create((...a) => {
  return {
    ...counterStore(...a),
    ...channelsStore(...a),
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
