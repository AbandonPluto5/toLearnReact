import { useState } from "react";

type User = {
  name: string;
  age: number;
};
function App() {
  const [user, setUser] = useState<User | null>(null);
  const changeUser = () => {
    // 2. 限制参数类型
    setUser({ name: "hello", age: 18 });
    // 没有默认值时才可以传undefined
    setUser(null);
  };
  return (
    <>
      this is App
      {user?.age}-{user?.name}
    </>
  );
}

export default App;
