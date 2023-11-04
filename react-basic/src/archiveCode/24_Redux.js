import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, changeNum } from "./store/modules/counterStore";
import { fetchChannelList } from "./store/modules/channelStore";

const App = () => {
  // 获取state
  const { count } = useSelector((state) => state.counter);
  const { channelList } = useSelector((state) => state.channel);
  // 用来触发redux中方法
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChannelList());
  }, [dispatch]);
  return (
    <div className="app">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>

      <div>
        <button onClick={() => dispatch(changeNum(20))}>to 20</button>
        {count}
        <button onClick={() => dispatch(changeNum(30))}>to 30</button>
      </div>
      <ul>
        {channelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
