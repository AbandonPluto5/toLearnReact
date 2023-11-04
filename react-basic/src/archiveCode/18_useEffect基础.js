import { useEffect, useState } from "react";

const URL = "http://geek.itheima.net/v1_0/channels";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getList = async () => {
      const res = await fetch(URL);
      const {
        data: { channels },
      } = await res.json();
      console.log(channels);
      setList(channels);
    };
    getList();
  }, []);
  return (
    <div className="App">
      {list.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}

export default App;
