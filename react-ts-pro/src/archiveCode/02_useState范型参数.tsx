import { useState } from "react";

type User = {
  name: string;
  age: number;
};
function App() {
  // 1. 限制初始值类型
  // const [user, setUser] = useState<User>({
  //   name: "aaa",
  //   age: 18,
  // });
  // const [user, setUser] = useState<User>(() => ({
  //   name: "aaa",
  //   age: 18,
  // }));
  const [user, setUser] = useState<User>();
  const changeUser = () => {
    // 2. 限制参数类型
    setUser({ name: "hello", age: 18 });
    // 没有默认值时才可以传undefined
    setUser(undefined);
  };
  return (
    <>
      this is App
      {user.name}-{user.age}
    </>
  );
}

export default App;
